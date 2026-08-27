<template>
    <UContainer class="py-12 max-w-3xl">
        <div class="space-y-8">
            <div class="space-y-2">
                <h1 class="text-3xl font-bold">Terms of Use</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    Last updated: August 27th, 2026
                </p>
            </div>

            <USeparator />

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">1. Acceptance of Terms</h2>
                <p>
                    This website is a personal, non-commercial site. By
                    accessing or using this website, you agree to be bound by
                    these Terms of Use. If you do not agree, please do not use
                    this website.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">2. Nature of this website</h2>
                <p>
                    This website is provided for personal, informational, and
                    entertainment purposes only. It is not operated as a
                    commercial venture, and nothing on this website is offered
                    for sale.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">
                    3. Open Source &amp; Original Content
                </h2>
                <p>
                    Except where otherwise noted (including the third-party
                    content described below), the original content, code, and
                    design of this website are free to use and open-source,
                    generally made available under a license such as the GNU
                    Affero General Public License v3.0 (AGPLv3) or a similarly
                    permissive license that allows free, non-commercial use.
                    Refer to the applicable license file or notice accompanying
                    the specific content or source code for the exact terms that
                    apply. Nothing in this section grants rights to the
                    third-party content described in Section 4 below.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">
                    4. Third-Party Content &amp; Trademarks
                </h2>
                <p>
                    This website may display third-party-owned images or media —
                    such as movie posters, music album covers, or book covers —
                    solely for the purpose of illustrating and linking to the
                    external works they represent (e.g., a review,
                    recommendation, or reference). These images remain the
                    property of their respective copyright and trademark owners.
                    They are not used for resale, redistribution, or commercial
                    gain, and their use is intended to fall under fair use
                    principles for commentary, identification, and reference. If
                    you are a rights holder and have concerns about specific
                    content, please reach out using the contact details below.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">5. External Links</h2>
                <p>
                    This website contains links to third-party websites that are
                    not owned or controlled by this website operator. Some
                    linked sites may contain content intended for mature or
                    adult (18+) audiences. Clicking any external link is done
                    entirely at your own discretion and risk. This website does
                    not endorse, and is not responsible for, the content,
                    accuracy, or practices of any linked third-party site.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">
                    6. Content Rating &amp; Audience
                </h2>
                <p>
                    This website's own content is generally intended for a
                    general audience (comparable to a U.S. "PG" rating) but is
                    not directed at, or specifically designed for, children.
                    Viewer discretion is advised, particularly with respect to
                    external links as described above.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">
                    7. Privacy &amp; Data Collection
                </h2>
                <p>
                    This website does not use cookies and does not knowingly
                    collect, store, or process any personal data or analytics
                    from visitors.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">8. Hosting</h2>
                <p>
                    This website is hosted using Cloudflare. Your use of this
                    website may also be subject to Cloudflare's own terms and
                    policies, available at
                    <ULink
                        to="https://www.cloudflare.com/website-terms/"
                        target="_blank"
                        class="text-primary underline"
                    >
                        cloudflare.com/website-terms </ULink
                    >.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">9. No Warranty</h2>
                <p>
                    This website is provided "as is" and "as available," without
                    warranty of any kind, express or implied. The operator makes
                    no guarantee that this website will be uninterrupted,
                    error-free, or free of inaccuracies.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">
                    10. Changes to These Terms
                </h2>
                <p>
                    These Terms of Use may be updated from time to time.
                    Continued use of this website after changes are posted
                    constitutes acceptance of the revised terms.
                </p>
            </section>

            <section class="space-y-3">
                <h2 class="text-xl font-semibold">11. Contact</h2>
                <p>
                    Questions about these terms can be directed to
                    <ULink
                        to="mailto:website@monz.us"
                        class="text-primary underline"
                        >website@monz.us</ULink
                    >
                </p>
            </section>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Terms of Use",
    description: "Terms of Use for this site.",
});
</script>
