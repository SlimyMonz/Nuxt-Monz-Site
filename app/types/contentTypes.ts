
export interface Badge {
    text: string;
    img: string;
    url: string;
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    body: string;
}

export interface Character {
    name: string;
    img: string;
    species: string;
    description: string;
    url: string;
}

export interface Obituary {
    name: string;
    dates: string;
    cause: string;
    memento: string;
    img: string;
}

export interface Ingredient {
    name: string;
    quantity: number;
    unit?: string;
}

export interface Recipe {
    title: string;
    img: string;
    description: string;
    ingredients: Ingredient[];
    instructions: string[];
}