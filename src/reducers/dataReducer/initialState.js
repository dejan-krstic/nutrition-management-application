const RECIPES = [
  {
    id: 1,
    category: "Dinner",
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
        unit: "g",
      },
      {
        name: "lemon juice",
        amount: 0.05,
        unit: "l",
      },
      {
        name: "garlic",
        amount: 6,
        unit: "piece",
      },
      {
        name: "potatoes",
        amount: 300,
        unit: "g",
      },
    ],
    instructions:
      "Preheat oven to 425 degrees F (220 degrees C). Lightly oil a large roasting pan. \nPlace chicken pieces in large bowl. Season with salt, oregano, pepper, rosemary, and cayenne pepper. Add fresh lemon juice, olive oil, and garlic. Place potatoes in bowl with the chicken; stir together until chicken and potatoes are evenly coated with marinade.\nTransfer chicken pieces, skin side up, to prepared roasting pan, reserving marinade. Distribute potato pieces among chicken thighs. Drizzle with 2/3 cup chicken broth. Spoon remainder of marinade over chicken and potatoes. \nPlace in preheated oven. Bake in the preheated oven for 20 minutes. Toss chicken and potatoes, keeping chicken skin side up; continue baking until chicken is browned and cooked through, about 25 minutes more. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Transfer chicken to serving platter and keep warm. \n Set oven to broil or highest heat setting. Toss potatoes once again in pan juices. Place pan under broiler and broil until potatoes are caramelized, about 3 minutes. Transfer potatoes to serving platter with chicken. \nPlace roasting pan on stove over medium heat. Add a splash of broth and stir up browned bits from the bottom of the pan. Strain; spoon juices over chicken and potatoes. Top with chopped oregano.",
  },
  {
    id: 2,
    category: "Lunch",
    title: "Rosemary Salmon and Veggies",
    description:
      "I don't have the energy or courage to cater for a living but, if I did, this Greek lemon chicken and potatoes would be one of my go-to entrees, and not just for big, fat weddings. It's a proven crowd-pleaser, simple to make, and easy on the wallet.",
    images: [
      "https://www.tasteofhome.com/wp-content/uploads/2020/04/Rosemary-Salmon-and-Veggies_EXPS_TOHAS20_245937_F04_14_2b_home-696x696.jpg",
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
        unit: "g",
      },
      {
        name: "lemon juice",
        amount: 0.05,
        unit: "l",
      },
      {
        name: "garlic",
        amount: 6,
        unit: "piece",
      },
      {
        name: "potatoes",
        amount: 300,
        unit: "g",
      },
    ],
    instructions:
      "Preheat oven to 425 degrees F (220 degrees C). Lightly oil a large roasting pan. \nPlace chicken pieces in large bowl. Season with salt, oregano, pepper, rosemary, and cayenne pepper. Add fresh lemon juice, olive oil, and garlic. Place potatoes in bowl with the chicken; stir together until chicken and potatoes are evenly coated with marinade.\nTransfer chicken pieces, skin side up, to prepared roasting pan, reserving marinade. Distribute potato pieces among chicken thighs. Drizzle with 2/3 cup chicken broth. Spoon remainder of marinade over chicken and potatoes. \nPlace in preheated oven. Bake in the preheated oven for 20 minutes. Toss chicken and potatoes, keeping chicken skin side up; continue baking until chicken is browned and cooked through, about 25 minutes more. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Transfer chicken to serving platter and keep warm. \n Set oven to broil or highest heat setting. Toss potatoes once again in pan juices. Place pan under broiler and broil until potatoes are caramelized, about 3 minutes. Transfer potatoes to serving platter with chicken. \nPlace roasting pan on stove over medium heat. Add a splash of broth and stir up browned bits from the bottom of the pan. Strain; spoon juices over chicken and potatoes. Top with chopped oregano.",
  },
  {
    id: 3,
    category: "Breakfast",
    title: "Italian Turkey Skillet",
    description:
      "I don't have the energy or courage to cater for a living but, if I did, this Greek lemon chicken and potatoes would be one of my go-to entrees, and not just for big, fat weddings. It's a proven crowd-pleaser, simple to make, and easy on the wallet.",
    images: [
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps27325_SD132779D06_05_1b_WEB-696x696.jpg",
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
        unit: "g",
      },
      {
        name: "lemon juice",
        amount: 0.05,
        unit: "l",
      },
      {
        name: "garlic",
        amount: 6,
        unit: "piece",
      },
      {
        name: "potatoes",
        amount: 300,
        unit: "g",
      },
    ],
    instructions:
      "Preheat oven to 425 degrees F (220 degrees C). Lightly oil a large roasting pan. \nPlace chicken pieces in large bowl. Season with salt, oregano, pepper, rosemary, and cayenne pepper. Add fresh lemon juice, olive oil, and garlic. Place potatoes in bowl with the chicken; stir together until chicken and potatoes are evenly coated with marinade.\nTransfer chicken pieces, skin side up, to prepared roasting pan, reserving marinade. Distribute potato pieces among chicken thighs. Drizzle with 2/3 cup chicken broth. Spoon remainder of marinade over chicken and potatoes. \nPlace in preheated oven. Bake in the preheated oven for 20 minutes. Toss chicken and potatoes, keeping chicken skin side up; continue baking until chicken is browned and cooked through, about 25 minutes more. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Transfer chicken to serving platter and keep warm. \n Set oven to broil or highest heat setting. Toss potatoes once again in pan juices. Place pan under broiler and broil until potatoes are caramelized, about 3 minutes. Transfer potatoes to serving platter with chicken. \nPlace roasting pan on stove over medium heat. Add a splash of broth and stir up browned bits from the bottom of the pan. Strain; spoon juices over chicken and potatoes. Top with chopped oregano.",
  },
  {
    id: 4,
    category: "Dinner",
    title: "Dutch Oven Red Beans and Rice",
    description:
      "I don't have the energy or courage to cater for a living but, if I did, this Greek lemon chicken and potatoes would be one of my go-to entrees, and not just for big, fat weddings. It's a proven crowd-pleaser, simple to make, and easy on the wallet.",
    images: [
      "https://www.tasteofhome.com/wp-content/uploads/2020/04/One-Pot-Red-Beans-and-Rice_EXPS_TOHAS20_245145_F04_10_2b_home-696x696.jpg",
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
        unit: "g",
      },
      {
        name: "lemon juice",
        amount: 0.05,
        unit: "l",
      },
      {
        name: "garlic",
        amount: 6,
        unit: "piece",
      },
      {
        name: "potatoes",
        amount: 300,
        unit: "g",
      },
    ],
    instructions:
      "Preheat oven to 425 degrees F (220 degrees C). Lightly oil a large roasting pan. \nPlace chicken pieces in large bowl. Season with salt, oregano, pepper, rosemary, and cayenne pepper. Add fresh lemon juice, olive oil, and garlic. Place potatoes in bowl with the chicken; stir together until chicken and potatoes are evenly coated with marinade.\nTransfer chicken pieces, skin side up, to prepared roasting pan, reserving marinade. Distribute potato pieces among chicken thighs. Drizzle with 2/3 cup chicken broth. Spoon remainder of marinade over chicken and potatoes. \nPlace in preheated oven. Bake in the preheated oven for 20 minutes. Toss chicken and potatoes, keeping chicken skin side up; continue baking until chicken is browned and cooked through, about 25 minutes more. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Transfer chicken to serving platter and keep warm. \n Set oven to broil or highest heat setting. Toss potatoes once again in pan juices. Place pan under broiler and broil until potatoes are caramelized, about 3 minutes. Transfer potatoes to serving platter with chicken. \nPlace roasting pan on stove over medium heat. Add a splash of broth and stir up browned bits from the bottom of the pan. Strain; spoon juices over chicken and potatoes. Top with chopped oregano.",
  },
  {
    id: 5,
    category: "Breakfast",
    title: "Bacon and Cheddar Potato Skins",
    description:
      "I don't have the energy or courage to cater for a living but, if I did, this Greek lemon chicken and potatoes would be one of my go-to entrees, and not just for big, fat weddings. It's a proven crowd-pleaser, simple to make, and easy on the wallet.",
    images: [
      "https://www.tasteofhome.com/wp-content/uploads/2020/04/Bacon-Cheddar-Potato-Skins_EXPS_THSO17_9266_C04_21_6b_basedon_based-on-696x696.jpg",
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
        unit: "g",
      },
      {
        name: "lemon juice",
        amount: 0.05,
        unit: "l",
      },
      {
        name: "garlic",
        amount: 6,
        unit: "piece",
      },
      {
        name: "potatoes",
        amount: 300,
        unit: "g",
      },
    ],
    instructions:
      "Preheat oven to 425 degrees F (220 degrees C). Lightly oil a large roasting pan. \nPlace chicken pieces in large bowl. Season with salt, oregano, pepper, rosemary, and cayenne pepper. Add fresh lemon juice, olive oil, and garlic. Place potatoes in bowl with the chicken; stir together until chicken and potatoes are evenly coated with marinade.\nTransfer chicken pieces, skin side up, to prepared roasting pan, reserving marinade. Distribute potato pieces among chicken thighs. Drizzle with 2/3 cup chicken broth. Spoon remainder of marinade over chicken and potatoes. \nPlace in preheated oven. Bake in the preheated oven for 20 minutes. Toss chicken and potatoes, keeping chicken skin side up; continue baking until chicken is browned and cooked through, about 25 minutes more. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C). Transfer chicken to serving platter and keep warm. \n Set oven to broil or highest heat setting. Toss potatoes once again in pan juices. Place pan under broiler and broil until potatoes are caramelized, about 3 minutes. Transfer potatoes to serving platter with chicken. \nPlace roasting pan on stove over medium heat. Add a splash of broth and stir up browned bits from the bottom of the pan. Strain; spoon juices over chicken and potatoes. Top with chopped oregano.",
  },
];

const MEALS = [
  {
    id: "20200504-Breakfast",
    date: "20200504",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200506-Breakfast",
    date: "20200506",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200507-Breakfast",
    date: "20200507",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200509-Breakfast",
    date: "20200509",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200504-Dinner",
    date: "20200504",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200505-Dinner",
    date: "20200505",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200506-Dinner",
    date: "20200506",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200508-Dinner",
    date: "20200508",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200509-Dinner",
    date: "20200509",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200505-Lunch",
    date: "20200505",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200506-Lunch",
    date: "20200506",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200508-Lunch",
    date: "20200508",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200509-Lunch",
    date: "20200509",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200514-Breakfast",
    date: "20200514",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200516-Breakfast",
    date: "20200516",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200517-Breakfast",
    date: "20200517",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200519-Breakfast",
    date: "20200519",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200514-Dinner",
    date: "20200514",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200515-Dinner",
    date: "20200515",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200516-Dinner",
    date: "20200516",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200518-Dinner",
    date: "20200518",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200519-Dinner",
    date: "20200519",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200515-Lunch",
    date: "20200515",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200516-Lunch",
    date: "20200516",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200518-Lunch",
    date: "20200518",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200519-Lunch",
    date: "20200519",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200524-Breakfast",
    date: "20200524",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200526-Breakfast",
    date: "20200526",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200527-Breakfast",
    date: "20200527",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200529-Breakfast",
    date: "20200529",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200524-Dinner",
    date: "20200524",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200525-Dinner",
    date: "20200525",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200526-Dinner",
    date: "20200526",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200528-Dinner",
    date: "20200528",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200529-Dinner",
    date: "20200529",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200525-Lunch",
    date: "20200525",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200526-Lunch",
    date: "20200526",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200528-Lunch",
    date: "20200528",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200529-Lunch",
    date: "20200529",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200604-Breakfast",
    date: "20200604",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200606-Breakfast",
    date: "20200606",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200607-Breakfast",
    date: "20200607",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200609-Breakfast",
    date: "20200609",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200604-Dinner",
    date: "20200604",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200605-Dinner",
    date: "20200605",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200606-Dinner",
    date: "20200606",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200608-Dinner",
    date: "20200608",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200609-Dinner",
    date: "20200609",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200605-Lunch",
    date: "20200605",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200606-Lunch",
    date: "20200606",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200608-Lunch",
    date: "20200608",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200609-Lunch",
    date: "20200609",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200614-Breakfast",
    date: "20200614",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200616-Breakfast",
    date: "20200616",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200617-Breakfast",
    date: "20200617",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200619-Breakfast",
    date: "20200619",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200614-Dinner",
    date: "20200614",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200615-Dinner",
    date: "20200615",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200616-Dinner",
    date: "20200616",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200618-Dinner",
    date: "20200618",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200619-Dinner",
    date: "20200619",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200615-Lunch",
    date: "20200615",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200616-Lunch",
    date: "20200616",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200618-Lunch",
    date: "20200618",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200619-Lunch",
    date: "20200619",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200624-Breakfast",
    date: "20200624",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200626-Breakfast",
    date: "20200626",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200627-Breakfast",
    date: "20200627",
    recipe: 3,
    type: "Breakfast",
  },
  {
    id: "20200629-Breakfast",
    date: "20200629",
    recipe: 5,
    type: "Breakfast",
  },
  {
    id: "20200624-Dinner",
    date: "20200624",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200625-Dinner",
    date: "20200625",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200626-Dinner",
    date: "20200626",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200628-Dinner",
    date: "20200628",
    recipe: 1,
    type: "Dinner",
  },
  {
    id: "20200629-Dinner",
    date: "20200629",
    recipe: 4,
    type: "Dinner",
  },
  {
    id: "20200625-Lunch",
    date: "20200625",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200626-Lunch",
    date: "20200626",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200628-Lunch",
    date: "20200628",
    recipe: 4,
    type: "Lunch",
  },
  {
    id: "20200629-Lunch",
    date: "20200629",
    recipe: 4,
    type: "Lunch",
  },
];

const GROCERIES = [
  {
    id: "chicken",
    name: "chicken",
    amount: 2.3,
    unit: "kg",
  },
  {
    id: "lemon juice",
    name: "lemon juice",
    amount: 0.16,
    unit: "l",
  },
  {
    id: "garlic",
    name: "garlic",
    amount: 16,
    unit: "piece",
  },
  {
    id: "potatoes",
    name: "potatoes",
    amount: 1.1,
    unit: "kg",
  },
];

const userData = {
  name: "",
  accessToken: "",
  data_access_expiration_time: null,
  picture: {
    data: {
      url: "",
    },
  },
};

export const initialState = {
  isLoading: 0,
  recipes: {
    data: [],
    isLoading: 0,
    loaded: false,
  },
  meals: {
    data: [],
    isLoading: 0,
    loaded: false,
  },
  groceries: {
    data: [],
    isLoading: 0,
    loaded: false,
  },
  daysToProvide: 7,
  notificationData: {
    type: "",
    message: "",
  },
  userData,
};
