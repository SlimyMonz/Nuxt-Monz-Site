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

export const recipes: Recipe[] = [
  {
    title: "Pastel De Papa",
    img: "",
    description: "Yummy potato, beefy, cheesy recipe! Sourced from Conop~",
    ingredients: [
      { quantity: 1, unit: "lb", name: "ground beef" },
      { quantity: 2, name: "onions, chopped" },
      { quantity: 3, name: "carrots, grated" },
      { quantity: 2, name: "hard-boiled eggs" },
      { quantity: 5, name: "peeled potatoes" },
      { quantity: 2, unit: "tbsp", name: "butter" },
      { quantity: 1, unit: "splash", name: "milk" },
      { quantity: 1, name: "cumin, to taste" },
      { quantity: 1, name: "salt and pepper, to taste" },
      { quantity: 1, name: "crushed red pepper flakes, to taste" },
    ],
  
    instructions: [
      "Preheat the oven to 375°F.",
      "Boil the potatoes until soft enough to mash. Drain and let cool.",
      "Chop the onions into long, thin slices and cook the onions together with the ground beef in a heated pan with olive or canola oil.",
      "Once the beef is fully cooked but not too dry, leaving some juice, add the grated carrots, olives, and chopped boiled eggs. Add the spices and mix together well.",
      "Once the potatoes are cool enough to handle, mash them completely with a potato masher, removing as many chunks as possible. Add the butter, milk, and salt to taste.",
      "In an oven-safe dish, place a first half-inch layer of mashed potatoes on the bottom. Apply all of the beef mixture on top of the potato layer, then add the second and final layer of mashed potatoes on top of the beef.",
      "Top with small pieces of butter, parsley, and grated cheese if desired. Bake for 20 minutes, until the potato is browned and heated through.",
    ],
  },
  {
    title: "Sausage & Potato Soup",
    description: "Extremely delicious and fairly easy to make! An all-time classic for me.",
    img: "",
    ingredients: [
      { quantity: 1 / 2, unit: "lb", name: "mild italian sausage" },
      { quantity: 1, unit: "stick", name: "butter" },
      { quantity: 1, name: "onion, chopped" },
      { quantity: 2, unit: "clove", name: "garlic, minced" },
      { quantity: 3, name: "medium Russet potatoes, cubed" },
      { quantity: 1, unit: "tsp", name: "salt" },
      { quantity: 1, unit: "tsp", name: "pepper" },
      { quantity: 2, unit: "tsp", name: "parsley" },
      { quantity: 2, unit: "tsp", name: "flour" },
      { quantity: 4, unit: "cup", name: "whole milk" },
    ],

    instructions: [
      "Melt the butter in a large stockpot over medium-low heat.",
      "Add the onion and cook, stirring frequently, until transparent.",
      "Add the sausage and cook fully.",
      "Add the flour and cook for a few minutes.",
      "Add the garlic and potatoes.",
      "Slowly add the milk while continuing to stir.",
      "Bring to a boil, then reduce to a simmer and cook until the potatoes are tender.",
      "Add and adjust salt, pepper, and parsley seasonings to taste.",
    ],
  },
  {
    title: "Tomato Cucumber Feta Salad",
    description: "Perfect for hot weather when you want something cool and refreshing to eat. Pair with some cold, pre-cooked penne!",
    img: "",
    ingredients: [
      { quantity: 4, unit: "lb", name: "Roma tomatoes, chopped" },
      {
        quantity: 1,
        name: "cucumber, sliced",
      },
      { quantity: 6, unit: "oz", name: "feta cheese" },
      { quantity: 1, name: "small red onion, sliced" },
      { quantity: 1 / 4, unit: "cup", name: "cilantro, chopped" },
      { quantity: 2, unit: "tbsp", name: "extra virgin olive oil" },
      {
        quantity: 2,
        unit: "tbsp",
        name: "fresh lemon juice",
      },
      { quantity: 2, unit: "clove", name: "garlic, pressed" },
      { quantity: 1 / 4, unit: "tsp", name: "sea salt, or to taste" },
      { quantity: 1 / 4, unit: "tsp", name: "black pepper" },
      { quantity: 1 / 4, unit: "tsp", name: "ground cumin" },
    ],

    instructions: [
      "In a small bowl, stir together the olive oil, lemon juice, pressed garlic, salt, pepper, and cumin.",
      "In a large mixing bowl, add the chopped tomatoes, sliced cucumber, feta cheese, sliced red onion, and chopped cilantro.",
      "Just before serving, drizzle with the dressing and toss to combine. Season to taste with additional salt if desired.",
      "Refridgerate overnight for a stronger incorporation of flavors."
    ],
  },
];
