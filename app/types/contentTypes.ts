export interface HeroInfo {
    headline: string;
    title: string;
    description: string;
}

export interface Badge {
    text: string;
    img: string;
    url: string;
}

export enum Tag {
    Art = "Art",
    Books = "Books",
    Food = "Food",
    Games = "Games",
    Health = "Health",
    Movies = "Movies",
    Music = "Music",
    Opinion = "Opinion",
    Personal = "Personal",
    Politics = "Politics",
    Reviews = "Reviews",
    Tech = "Tech",
    Travel = "Travel",
    Work = "Work",
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    body: string;
    tags?: Tag[];
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
