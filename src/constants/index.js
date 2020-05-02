const RECIPE_CATEGORY = {
  BREAKFAST: "Breakfast",
  LUNCH: "Lunch",
  DINNER: "Dinner",
};

export const MEASUREMENT_UNIT = {
  KG: "kg",
  G: "g",
  L: "l",
  PIECE: "piece",
};

const RECIPES = [
  {
    id: 1,
    category: RECIPE_CATEGORY.DINNER,
    title: "Greek Lemon Chicken and Potatoes",
    description:
      "I don't have the energy or courage to cater for a living but, if I did, this Greek lemon chicken and potatoes would be one of my go-to entrees, and not just for big, fat weddings. It's a proven crowd-pleaser, simple to make, and easy on the wallet.",
    images: [
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3899292.jpg&w=596&h=399&c=sc&poi=face&q=85",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2306786.jpg&w=596&h=792&c=sc&poi=face&q=85",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5567505.jpg&w=596&h=596&c=sc&poi=face&q=85",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2436902.jpg&w=596&h=596&c=sc&poi=face&q=85",
    ],
    numberOfServings: 2,
    readyInMinutes: 45,
    ingredients: [
      {
        name: "chicken",
        amount: 500,
        unit: MEASUREMENT_UNIT.G,
      },
      {
        name: "lemon juice",
        amount: 0.05,
        unit: MEASUREMENT_UNIT.L,
      },
      {
        name: "garlic",
        amount: 6,
        unit: MEASUREMENT_UNIT.PIECE,
      },
      {
        name: "potatoes",
        amount: 300,
        unit: MEASUREMENT_UNIT.G,
      },
    ],
    instructions: `
      Preheat oven to 425 degrees F (220 degrees C). Lightly oil a large roasting pan.
      Place chicken pieces in large bowl. Season with salt, oregano, pepper, rosemary, and cayenne pepper. Add fresh lemon juice, olive oil, and garlic. Place potatoes in bowl with the chicken; stir together until chicken and potatoes are evenly coated with marinade.
      Transfer chicken pieces, skin side up, to prepared roasting pan, reserving marinade. Distribute potato pieces among chicken thighs. Drizzle with 2/3 cup chicken broth. Spoon remainder of marinade over chicken and potatoes.
      Place in preheated oven. Bake in the preheated oven for 20 minutes. Toss chicken and potatoes, keeping chicken skin side up; continue baking until chicken is browned and cooked through, about 25 minutes more. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Transfer chicken to serving platter and keep warm.
      Set oven to broil or highest heat setting. Toss potatoes once again in pan juices. Place pan under broiler and broil until potatoes are caramelized, about 3 minutes. Transfer potatoes to serving platter with chicken.
      Place roasting pan on stove over medium heat. Add a splash of broth and stir up browned bits from the bottom of the pan. Strain; spoon juices over chicken and potatoes. Top with chopped oregano.`,
  },
];

export const multiplyRecipes = (repetition) => {
  const recipes = [];
  for (let i = 0; i < repetition; i++) {
    RECIPES.forEach((recipe) => {
      recipes.push({ ...recipe, id: i + "." + recipe.id });
    });
  }
  return recipes;
};
