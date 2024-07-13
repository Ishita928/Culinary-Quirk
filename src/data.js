import React from 'react';

import bakingStep1 from './assets/food-3048440_960_720.jpg';
import bakingStep2 from './assets/real-life-cake-bake.webp';
import bakingStep3 from './assets/imagess.jfif';

import grilling_step1 from './assets/grilled-vegetables-how-to-grill-vegetables-a-z-9_slide-158a2971401885b14c0407dcc71020229bb893b4.jpeg';
import grilling_step2 from './assets/grill.jfif';
import grilling_step3 from './assets/YS1500-_The_Life_of_The_Party2.webp';

import sauteing_step1 from './assets/Cook_Cell_Wok_Cooking_on_Stovetop.webp';
import sauteing_step2 from './assets/Sautee-Cooking-Technique-Healthy-Sauteing.jpg';
import sauteing_step3 from  './assets/saute-2500-56a2101b5f9b58b7d0c62aba.jpg';

import roasting_step1 from './assets/dc-Cover-tuul05vggiot4dnavk1mrb0kq0-20161019234030.Medi.jpeg';
import roasting_step2 from './assets/heat-fire-peppers-grill.webp';
import roasting_step3 from './assets/roast.jpg';


const cookingTechniques = [
	{
	  title: "Baking",
	  prerequisites: [
		"Preheat oven to the specified temperature.",
		"Gather all necessary ingredients and equipment.",
		"Prepare baking trays or pans as per the recipe."
	  ],
	  procedure: [
		"Mix the dry ingredients in one bowl.",
		"Mix the wet ingredients in another bowl.",
		"Combine the wet and dry ingredients.",
		"Pour the batter into the prepared baking tray.",
		"Place the tray in the preheated oven.",
		"Bake for the specified time, checking doneness with a toothpick."
	  ],
	  precautions: [
		"Ensure the oven is preheated to the correct temperature.",
		"Avoid opening the oven door frequently.",
		"Use oven mitts to handle hot trays."
	  ],
	  extraTips: [
		"Use room temperature ingredients for better mixing.",
		"Measure ingredients accurately.",
		"Rotate the tray halfway through baking for even cooking."
	  ],
	  images: [
		bakingStep1,
      bakingStep2,
      bakingStep3
	  ],
	  video: "https://www.youtube.com/embed/8-5yLt1gqIo"
	},
	{
	  title: "Grilling",
	  prerequisites: [
		"Preheat the grill to medium-high heat.",
		"Clean the grill grates with a brush.",
		"Oil the grill grates to prevent sticking."
	  ],
	  procedure: [
		"Season the food with salt, pepper, and other desired spices.",
		"Place the food on the grill grates.",
		"Cook on one side for a few minutes, then flip.",
		"Continue grilling until the food reaches the desired doneness.",
		"Use a meat thermometer to check internal temperature."
	  ],
	  precautions: [
		"Keep a spray bottle of water nearby to manage flare-ups.",
		"Do not press down on the food with a spatula.",
		"Monitor the grill constantly to prevent burning."
	  ],
	  extraTips: [
		"Marinate the food beforehand for extra flavor.",
		"Allow meat to rest before slicing to retain juices.",
		"Use direct and indirect heat zones for better control."
	  ],
	  images: [
		grilling_step1,
		grilling_step2,
		grilling_step3
	  ],
	  video: "https://www.youtube.com/embed/yPAeRiKa0h8"
	},
	{
	  title: "Sautéing",
	  prerequisites: [
		"Preheat the pan over medium-high heat.",
		"Gather all ingredients and have them prepped.",
		"Use a suitable oil with a high smoke point."
	  ],
	  procedure: [
		"Add oil to the preheated pan.",
		"Once the oil is hot, add the ingredients.",
		"Stir or toss the ingredients frequently for even cooking.",
		"Cook until the ingredients are tender and lightly browned.",
		"Remove from heat and serve immediately."
	  ],
	  precautions: [
		"Do not overcrowd the pan to ensure proper browning.",
		"Be cautious of hot oil splatters.",
		"Use a wooden spoon or spatula to avoid damaging the pan."
	  ],
	  extraTips: [
		"Cut ingredients into uniform pieces for even cooking.",
		"Add denser vegetables first, followed by softer ones.",
		"Deglaze the pan with wine or broth for added flavor."
	  ],
	  images: [
		sauteing_step1,
		sauteing_step2,
		sauteing_step3
	  ],
	   video: "https://www.youtube.com/embed/liPGv6M--9M"
	},
	{
	  title: "Roasting",
	  prerequisites: [
		"Preheat the oven to the specified temperature.",
		"Prepare the roasting pan or tray.",
		"Season the food with salt, pepper, and other desired spices."
	  ],
	  procedure: [
		"Place the food in the roasting pan.",
		"Roast in the preheated oven for the specified time.",
		"Baste the food periodically if required.",
		"Check for doneness using a meat thermometer.",
		"Allow the food to rest before carving or serving."
	  ],
	  precautions: [
		"Ensure the oven is preheated properly.",
		"Avoid opening the oven door frequently.",
		"Use oven mitts to handle hot pans."
	  ],
	  extraTips: [
		"Use a rack in the roasting pan to allow air circulation.",
		"Roast vegetables alongside meat for added flavor.",
		"Let meat rest after roasting to retain juices."
	  ],
	  images: [
		roasting_step1,
		roasting_step2,
		roasting_step3
	  ],
	  video: "https://www.youtube.com/embed/C2SnnnGyXQg"
	}
  ];
  
  export default cookingTechniques;
  