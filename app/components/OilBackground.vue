<script setup>
/**
 * OilShaderBackground.vue
 * From: https://shader.gallery/molten/
 * Fullscreen WebGL background running the liquid-metal raymarch shader,
 * re-tinted to a black tar/oil palette instead of the original bright theme.
 */
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    // shader "personality" knobs — same meaning as the original uniforms
    flow: { type: Number, default: 0.3 }, // slow, viscous drift
    viscosity: { type: Number, default: 0.8 }, // soft, syrupy merges
    spread: { type: Number, default: 0.5 }, // from center
    polish: { type: Number, default: 0.85 }, // glossy, wet-looking highlights
    mouseInfluence: { type: Number, default: 0 }, // subtle parallax on pointer move

    // Tar/oil palette: near-black bodies, with c2 kept brighter since it
    // drives the studio-softbox reflection/specular — an oil slick still
    // needs a bright highlight to read as wet and glossy against the black.
    palette: {
        type: Array,
        default: () => [
            [0.01, 0.01, 0.01], // c0 – base ambient (near-black, faint cool tint)
            [0.25, 0.1, 0.25], // c1 – side rim (faint warm amber tint, like oil sheen)
            [0.1, 0.1, 0.1], // c2 – overhead softbox / specular highlight color
            [0.01, 0.01, 0.01], // c3 – floor / pole (deep black)
        ],
    },
});

const canvasEl = ref(null);

let gl = null;
let program = null;
let rafId = null;
let startTime = 0;
let resizeObserver = null;
let mouseDevicePx = [0, 0];
let uniformLocations = {};

const VERTEX_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// Fragment shader
const FRAGMENT_SRC = `
precision highp float;
uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_mouse;
uniform float u_pixelRatio;
uniform vec3  u_palette[4];

uniform float u_flow;
uniform float u_viscosity;
uniform float u_spread;
uniform float u_polish;
uniform float u_mouseInfluence;

vec3 c0, c1, c2, c3;

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float gTime, gSpread, gVisc;

float map(vec3 p){
  float d = 1e5;
  float k = 0.18 + 0.5 * gVisc;
  for (int i = 0; i < 6; i++){
    float fi = float(i);
    vec3 c = vec3(
      sin(gTime * (0.7 + fi * 0.05) + fi * 1.7),
      cos(gTime * (0.6 + fi * 0.07) + fi * 2.3),
      sin(gTime * (0.8 + fi * 0.04) + fi * 0.9)
    ) * gSpread;
    d = smin(d, length(p - c) - 0.74, k);
  }
  return d;
}

vec3 calcNormal(vec3 p){
  vec2 e = vec2(0.0015, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)));
}

vec3 env(vec3 rd){
  float y = rd.y * 0.5 + 0.5;
  vec3 col = mix(c3 * 0.30, c0 * 1.25, smoothstep(0.0, 0.60, y));
  col = mix(col, c2 * 1.55, smoothstep(0.52, 1.0, y));
  col += c2 * 1.3 * pow(smoothstep(0.62, 1.0, y), 3.0);
  col += c1 * 0.45 * pow(max(rd.x * 0.5 + 0.5, 0.0), 4.0);
  return col;
}

void main(){
  c0 = u_palette[0]; c1 = u_palette[1]; c2 = u_palette[2]; c3 = u_palette[3];

  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;

  gTime = u_time * u_flow;
  gSpread = 0.5 + u_spread;
  gVisc = u_viscosity;

  vec3 ro = vec3(0.0, 0.25, 3.4);
  vec2 mo = (u_mouse / u_resolution - 0.5);
  float mAmt = u_mouseInfluence * step(0.5, dot(u_mouse, u_mouse));
  ro.xy += mo * mAmt * 1.2;
  vec3 ta = vec3(0.0, 0.0, 0.0);
  vec3 ww = normalize(ta - ro);
  vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
  vec3 vv = cross(uu, ww);
  vec3 rd = normalize(uv.x * uu + uv.y * vv + 1.5 * ww);

  float tt = 0.0;
  float hit = 0.0;
  for (int i = 0; i < 78; i++){
    vec3 p = ro + rd * tt;
    float d = map(p);
    if (d < 0.0015){ hit = 1.0; break; }
    if (tt > 9.0) break;
    tt += d * 0.9;
  }

  vec3 col;
  if (hit > 0.5){
    vec3 p = ro + rd * tt;
    vec3 n = calcNormal(p);
    vec3 ref = reflect(rd, n);
    float fres = pow(1.0 - max(dot(-rd, n), 0.0), 5.0);

    vec3 reflCol = env(ref);

    vec3 L1 = normalize(vec3(0.5, 0.85, 0.35));
    vec3 L2 = normalize(vec3(-0.6, 0.3, 0.5));
    float shin = mix(20.0, 240.0, u_polish);
    float spec = pow(max(dot(ref, L1), 0.0), shin)
               + 0.5 * pow(max(dot(ref, L2), 0.0), shin * 0.6);

    vec3 tint = mix(vec3(0.92), c0 * 1.4, 0.30);
    col = reflCol * tint;
    col += reflCol * fres * 0.7;
    col += vec3(1.0) * spec * (0.5 + 0.5 * u_polish);
    col *= 0.62 + 0.38 * (n.y * 0.5 + 0.5);
  } else {
    col = env(rd) * 0.9;
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

function compileShader(glCtx, type, source) {
    const shader = glCtx.createShader(type);
    glCtx.shaderSource(shader, source);
    glCtx.compileShader(shader);
    if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        const info = glCtx.getShaderInfoLog(shader);
        glCtx.deleteShader(shader);
        throw new Error(`Shader compile error: ${info}`);
    }
    return shader;
}

function createProgram(glCtx, vertSrc, fragSrc) {
    const vs = compileShader(glCtx, glCtx.VERTEX_SHADER, vertSrc);
    const fs = compileShader(glCtx, glCtx.FRAGMENT_SHADER, fragSrc);
    const prog = glCtx.createProgram();
    glCtx.attachShader(prog, vs);
    glCtx.attachShader(prog, fs);
    glCtx.linkProgram(prog);
    if (!glCtx.getProgramParameter(prog, glCtx.LINK_STATUS)) {
        const info = glCtx.getProgramInfoLog(prog);
        glCtx.deleteProgram(prog);
        throw new Error(`Program link error: ${info}`);
    }
    glCtx.deleteShader(vs);
    glCtx.deleteShader(fs);
    return prog;
}

function resizeCanvas() {
    if (!gl || !canvasEl.value) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(canvasEl.value.clientWidth * dpr));
    const height = Math.max(1, Math.floor(canvasEl.value.clientHeight * dpr));
    if (canvasEl.value.width !== width || canvasEl.value.height !== height) {
        canvasEl.value.width = width;
        canvasEl.value.height = height;
        gl.viewport(0, 0, width, height);
    }
}

function handlePointerMove(e) {
    if (!canvasEl.value) return;
    const rect = canvasEl.value.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const x = (e.clientX - rect.left) * dpr;
    const yTop = (e.clientY - rect.top) * dpr;
    mouseDevicePx = [x, canvasEl.value.height - yTop];
}

function handlePointerLeave() {
    mouseDevicePx = [0, 0];
}

function render(now) {
    if (!gl || !program) return;
    resizeCanvas();

    const elapsed = (now - startTime) / 1000;

    gl.uniform1f(uniformLocations.u_time, elapsed);
    gl.uniform2f(
        uniformLocations.u_resolution,
        canvasEl.value.width,
        canvasEl.value.height,
    );
    gl.uniform2f(uniformLocations.u_mouse, mouseDevicePx[0], mouseDevicePx[1]);
    gl.uniform1f(
        uniformLocations.u_pixelRatio,
        Math.min(window.devicePixelRatio || 1, 2),
    );
    gl.uniform1f(uniformLocations.u_flow, props.flow);
    gl.uniform1f(uniformLocations.u_viscosity, props.viscosity);
    gl.uniform1f(uniformLocations.u_spread, props.spread);
    gl.uniform1f(uniformLocations.u_polish, props.polish);
    gl.uniform1f(uniformLocations.u_mouseInfluence, props.mouseInfluence);

    const flatPalette = new Float32Array(props.palette.flat());
    gl.uniform3fv(uniformLocations.u_palette, flatPalette);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    rafId = requestAnimationFrame(render);
}

function initGL() {
    const canvas = canvasEl.value;
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
        console.error("WebGL is not supported in this browser.");
        return;
    }

    program = createProgram(gl, VERTEX_SRC, FRAGMENT_SRC);
    gl.useProgram(program);

    // fullscreen quad (two triangles)
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    uniformLocations = {
        u_time: gl.getUniformLocation(program, "u_time"),
        u_resolution: gl.getUniformLocation(program, "u_resolution"),
        u_mouse: gl.getUniformLocation(program, "u_mouse"),
        u_pixelRatio: gl.getUniformLocation(program, "u_pixelRatio"),
        u_flow: gl.getUniformLocation(program, "u_flow"),
        u_viscosity: gl.getUniformLocation(program, "u_viscosity"),
        u_spread: gl.getUniformLocation(program, "u_spread"),
        u_polish: gl.getUniformLocation(program, "u_polish"),
        u_mouseInfluence: gl.getUniformLocation(program, "u_mouseInfluence"),
        u_palette: gl.getUniformLocation(program, "u_palette[0]"),
    };

    resizeCanvas();
    startTime = performance.now();
    rafId = requestAnimationFrame(render);
}

onMounted(() => {
    initGL();
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => resizeCanvas());
        resizeObserver.observe(canvasEl.value);
    } else {
        window.addEventListener("resize", resizeCanvas);
    }
});

onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerleave", handlePointerLeave);
    if (resizeObserver) {
        resizeObserver.disconnect();
    } else {
        window.removeEventListener("resize", resizeCanvas);
    }
    if (gl && program) {
        gl.deleteProgram(program);
    }
});
</script>

<template>
    <canvas ref="canvasEl" class="oil-shader-canvas"></canvas>
</template>

<style scoped>
.oil-shader-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: #000;
}
</style>
