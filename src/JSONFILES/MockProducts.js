const MockProducts = [
  {
    id: "1",
    createdAt: "2025-04-06T08:00:00Z",
    Title: "Fresh Chicken Breast",
    Image:
      "https://img.freepik.com/free-photo/raw-board-breast-cutting-fresh_1203-5517.jpg?t=st=1744008921~exp=1744012521~hmac=249018c9d0c0829d9d0683ffcd8673cfd50a0beb5aaa9b4a9ce27ee22b7601b9&w=996",
    Price: "6.99",
    Category: "Protein",
    Details: "Lean and tender chicken breast, skinless and boneless.",
  },
  {
    id: "2",
    createdAt: "2025-04-06T08:01:00Z",
    Title: "Eggs (12 Pack)",
    Image:
      "https://img.freepik.com/free-photo/hen-eggs_1339-867.jpg?t=st=1744008976~exp=1744012576~hmac=5e10a13e73f303afe1aab93b1f76f8bbf6591c23b189aa0af6824068d182abbc&w=996",
    Price: "4.50",
    Category: "Protein",
    Details: "Farm-raised eggs packed with nutrients.",
  },
  {
    id: "3",
    createdAt: "2025-04-06T08:02:00Z",
    Title: "Fresh Salmon Fillet",
    Image:
      "https://img.freepik.com/free-photo/seafood-gourmet-closeup-ingredient-trout_1203-5881.jpg?t=st=1744009050~exp=1744012650~hmac=0193d1fd3b5b080f06ffed72683f7947a50bbc0f185064072a207bc79cd53a8b&w=996",
    Price: "12.99",
    Category: "Protein",
    Details: "Wild-caught salmon rich in omega-3 fatty acids.",
  },
  {
    id: "4",
    createdAt: "2025-04-06T08:03:00Z",
    Title: "Ground Beef",
    Image:
      "https://img.freepik.com/free-photo/minced-meat-burgers_1203-1786.jpg?t=st=1744009086~exp=1744012686~hmac=461d1f90c9168eb79b9018558d8e38f4216b009899b4b4e2d19f8a3a12626f5d&w=996",
    Price: "7.50",
    Category: "Protein",
    Details: "Premium ground beef ideal for burgers and meatballs.",
  },
  {
    id: "5",
    createdAt: "2025-04-06T08:04:00Z",
    Title: "Firm Tofu",
    Image:
      "https://img.freepik.com/free-photo/png-chopped-tofu-with-parsley-isolated-white-background_185193-163120.jpg?t=st=1744009050~exp=1744012650~hmac=136289b97a5744bc3325ee243120f84c952bb3760d1b42375417074c331acbd5&w=996",
    Price: "3.25",
    Category: "Protein",
    Details: "High-protein plant-based tofu made from soybeans.",
  },
  {
    id: "6",
    createdAt: "2025-04-06T08:05:00Z",
    Title: "Canned Tuna",
    Image:
      "https://img.freepik.com/free-photo/open-tuna-can-seen-from_1187-2499.jpg?t=st=1744009167~exp=1744012767~hmac=1997a680843298bfed5b329fbe09869d08136f41f3cc60c9757ebecc24e8d09c&w=826",
    Price: "2.99",
    Category: "Protein",
    Details: "Tuna chunks in olive oil, ready to eat.",
  },

  {
    id: "7",
    createdAt: "2025-04-06T08:10:00Z",
    Title: "Rolled Oats",
    Image:
      "https://img.freepik.com/free-photo/oats_1368-5510.jpg?t=st=1744009199~exp=1744012799~hmac=61ac2e81c7836f33b34743ad801c3822d1d3e3ae23481987f1a39bfedd3a6a8a&w=996",
    Price: "3.00",
    Category: "Cereal",
    Details: "Whole grain oats, great for breakfast.",
  },
  {
    id: "8",
    createdAt: "2025-04-06T08:11:00Z",
    Title: "Corn Flakes",
    Image:
      "https://img.freepik.com/free-photo/group-cereals-isolated-white-background_1368-6087.jpg?t=st=1744009232~exp=1744012832~hmac=e0bd0a94550495da9a63f0876156de6bcb18fdd95c2611afdf9747d44471b09f&w=826",
    Price: "2.50",
    Category: "Cereal",
    Details: "Crispy flakes made from toasted corn.",
  },
  {
    id: "9",
    createdAt: "2025-04-06T08:12:00Z",
    Title: "Brown Rice",
    Image:
      "https://img.freepik.com/free-photo/yellow-rice-seeds-wooden-cup-concrete_114579-24768.jpg?t=st=1744009265~exp=1744012865~hmac=201009b34d15d328e407ff1fcbf02fce9dd12a6001fc849ff4b1322634c03143&w=996",
    Price: "2.75",
    Category: "Cereal",
    Details: "Nutritious brown rice rich in fiber.",
  },
  {
    id: "10",
    createdAt: "2025-04-06T08:13:00Z",
    Title: "Whole Wheat Bread",
    Image:
      "https://img.freepik.com/free-photo/close-up-view-sliced-brown-seeded-cob-cutting-board-wooden-background_141793-27282.jpg?t=st=1744009345~exp=1744012945~hmac=4e3cc896d6514df0d97d4e4a3a80782d10582979fe8a040d2273a6151da20388&w=996",
    Price: "1.80",
    Category: "Cereal",
    Details: "Freshly baked whole grain bread.",
  },
  {
    id: "11",
    createdAt: "2025-04-06T08:14:00Z",
    Title: "Quinoa",
    Image:
      "https://img.freepik.com/free-photo/quinoa-real_1368-9186.jpg?t=st=1744009396~exp=1744012996~hmac=43c69b5e5fb90ca0e9afaa6168ecc1220cf2e4b007cc80ad708bcf7cfe6258d7&w=996",
    Price: "4.20",
    Category: "Cereal",
    Details: "High-protein ancient grain, gluten-free.",
  },
  {
    id: "12",
    createdAt: "2025-04-06T08:15:00Z",
    Title: "Millet",
    Image:
      "https://img.freepik.com/free-photo/delicious-couscous-bowl_1127-221.jpg?t=st=1744009630~exp=1744013230~hmac=f0230d3caf6f08a33c151463cf2026f1fcad1c7ad9f43d4f05bbeefd67a9c9f5&w=996",
    Price: "2.10",
    Category: "Cereal",
    Details: "Gluten-free grain for porridge and salads.",
  },

  {
    id: "13",
    createdAt: "2025-04-06T08:20:00Z",
    Title: "Spinach Bunch",
    Image:
      "https://img.freepik.com/free-photo/wet-fresh-green-baby-spinach-leaves-wooden-background_169016-27891.jpg?t=st=1744009758~exp=1744013358~hmac=6fcba538349f58c8e5a6bdcc5687583a580c177f94330e500c42a2a8c66d4bef&w=996",
    Price: "1.50",
    Category: "Vegetables",
    Details: "Fresh green spinach rich in iron.",
  },
  {
    id: "14",
    createdAt: "2025-04-06T08:21:00Z",
    Title: "Carrots (1kg)",
    Image:
      "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?t=st=1744009861~exp=1744013461~hmac=2a8c795bcf9dd87e1d2c71cd2b5b66ab3575c165a6c807e8254d2bc2752c0c50&w=996",
    Price: "1.80",
    Category: "Vegetables",
    Details: "Crunchy and sweet, perfect for snacks and cooking.",
  },
  {
    id: "15",
    createdAt: "2025-04-06T08:22:00Z",
    Title: "Red Onions (1kg)",
    Image:
      "https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?t=st=1744009888~exp=1744013488~hmac=b6659f49c514995acda7370521840894751cc4c767ed7c6b47b6457129dcaff9&w=996",
    Price: "1.60",
    Category: "Vegetables",
    Details: "Zesty and versatile for all recipes.",
  },
  {
    id: "16",
    createdAt: "2025-04-06T08:23:00Z",
    Title: "Tomatoes (1kg)",
    Image:
      "https://img.freepik.com/free-photo/tomatoes_1232-1910.jpg?t=st=1744009844~exp=1744013444~hmac=b9236550025ab7c1e34a7b707f637d31d7ced15c4da5f8cbc3cbdb80d6237ef6&w=996",
    Price: "2.00",
    Category: "Vegetables",
    Details: "Juicy and ripe for salads or sauces.",
  },
  {
    id: "17",
    createdAt: "2025-04-06T08:24:00Z",
    Title: "Bell Peppers Mix",
    Image:
      "https://img.freepik.com/free-photo/high-angle-view-green-yellow-red-bell-peppers-white-background_23-2147927257.jpg?t=st=1744009944~exp=1744013544~hmac=6f81b5901a3c247ed32fae6f662af52135799c5991b8e4d403804e0e2e867053&w=826",
    Price: "2.50",
    Category: "Vegetables",
    Details: "Colorful mix of red, green, and yellow peppers.",
  },
  {
    id: "18",
    createdAt: "2025-04-06T08:25:00Z",
    Title: "Broccoli",
    Image:
      "https://img.freepik.com/free-photo/yellow-broccoli-white-background_1417-126.jpg?t=st=1744009973~exp=1744013573~hmac=da50d2384ddee3c295018817a1f446ce46a4c25dcbc1d7f11905fb3e35e1d4fb&w=996",
    Price: "2.20",
    Category: "Vegetables",
    Details: "Fresh broccoli heads, packed with vitamins.",
  },

  {
    id: "19",
    createdAt: "2025-04-06T08:30:00Z",
    Title: "Bananas (1kg)",
    Image:
      "https://img.freepik.com/free-photo/bananas_1339-1177.jpg?t=st=1744009999~exp=1744013599~hmac=c66b5e96e709fc918558bb59b55fadd40c45b906d8d7dbea1b733cfead23b487&w=996",
    Price: "1.20",
    Category: "Fruits",
    Details: "Sweet ripe bananas for a quick snack.",
  },
  {
    id: "20",
    createdAt: "2025-04-06T08:31:00Z",
    Title: "Oranges (1kg)",
    Image:
      "https://img.freepik.com/free-photo/close-up-photo-oranges-whole-sliced-isolated-white-surface_114579-64460.jpg?t=st=1744010408~exp=1744014008~hmac=c407eb1e27005d7190a1e7dd02d9d2fabb493ad5829873bf2837f22eb467d3dc&w=996",
    Price: "2.00",
    Category: "Fruits",
    Details: "Citrusy and full of vitamin C.",
  },
  {
    id: "21",
    createdAt: "2025-04-06T08:32:00Z",
    Title: "Apples (1kg)",
    Image:
      "https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?t=st=1744010433~exp=1744014033~hmac=a283a78161ba6a40307a07716cad6599f1309dc89c4d7adc42f249f257b9f913&w=996",
    Price: "2.50",
    Category: "Fruits",
    Details: "Crisp red apples, sweet and juicy.",
  },
  {
    id: "22",
    createdAt: "2025-04-06T08:33:00Z",
    Title: "Grapes (500g)",
    Image:
      "https://img.freepik.com/free-photo/grapes-fruit-isolated-white-background_74190-4053.jpg?t=st=1744010455~exp=1744014055~hmac=bbd72fb2d488eb72ff662fef91affe9140dba8ba4368f88d4b44e59fbbabd759&w=996",
    Price: "3.00",
    Category: "Fruits",
    Details: "Fresh seedless grapes.",
  },
  {
    id: "23",
    createdAt: "2025-04-06T08:34:00Z",
    Title: "Avocado (1pc)",
    Image:
      "https://img.freepik.com/free-photo/green-brown-avocado-background-fruit_1203-5419.jpg?t=st=1744010482~exp=1744014082~hmac=af71bd0a4771b8309c15b0cc6e661432ff4f0da1c8a543089c9464be5dbfd331&w=996",
    Price: "1.50",
    Category: "Fruits",
    Details: "Creamy avocado, great for toast or smoothies.",
  },
  {
    id: "24",
    createdAt: "2025-04-06T08:35:00Z",
    Title: "Pineapple",
    Image:
      "https://img.freepik.com/free-photo/pineapple-fruit_74190-7549.jpg?t=st=1744010516~exp=1744014116~hmac=41f28cde01fc7c3638f95f664d15091b7400c117f42a226f27d0cd1d3e849608&w=740",
    Price: "3.20",
    Category: "Fruits",
    Details: "Tropical fruit, sweet and tangy.",
  },

  {
    id: "25",
    createdAt: "2025-04-06T08:40:00Z",
    Title: "Whole Milk (1L)",
    Image:
      "https://img.freepik.com/free-photo/glass-milk-bottle-fresh-milk_1150-17608.jpg?t=st=1744011094~exp=1744014694~hmac=9516e2b11cea690d429b834a00d94090d28ca5d02ea9f8cf199e08bd5e8e893d&w=996",
    Price: "1.30",
    Category: "Dairy",
    Details: "Fresh full cream cow milk.",
  },
  {
    id: "26",
    createdAt: "2025-04-06T08:41:00Z",
    Title: "Butter (Salted)",
    Image:
      "https://img.freepik.com/free-photo/high-angle-shot-piece-butter-isolated-white-background_181624-25433.jpg?t=st=1744010583~exp=1744014183~hmac=50279effc35a0ba6a60f602562ba29b14e64091a0119c37858a570de936a571c&w=996",
    Price: "2.00",
    Category: "Dairy",
    Details: "Creamy salted butter for baking and spreads.",
  },
  {
    id: "27",
    createdAt: "2025-04-06T08:42:00Z",
    Title: "Plain Yogurt (500g)",
    Image:
      "https://img.freepik.com/free-photo/organic-yogurt-bowl-with-oats-table_23-2148529400.jpg?t=st=1744010710~exp=1744014310~hmac=218c78f7eef510745553e69c5a069ef784b41da47fc8e2cb640916479a95c8e3&w=826",
    Price: "2.80",
    Category: "Dairy",
    Details: "Natural yogurt, great with fruits or granola.",
  },
  {
    id: "28",
    createdAt: "2025-04-06T08:43:00Z",
    Title: "Cheddar Cheese (200g)",
    Image:
      "https://img.freepik.com/free-photo/cheddar-cheese-wooden-surface_1150-41929.jpg?t=st=1744010770~exp=1744014370~hmac=2bf3767c41e7f87be090847ec39cdf405205d4aaea0a323d1d52794f97842afe&w=996",
    Price: "3.50",
    Category: "Dairy",
    Details: "Aged cheddar cheese, sharp and tasty.",
  },
  {
    id: "29",
    createdAt: "2025-04-06T08:44:00Z",
    Title: "Cream Cheese",
    Image:
      "https://img.freepik.com/free-photo/close-up-delicious-fresh-cheese_23-2150220446.jpg?t=st=1744010818~exp=1744014418~hmac=8e4eef3098e17f024c027f891bd8eecdd2eb5958ed7be27bdef9528b6761a0ad&w=996",
    Price: "2.70",
    Category: "Dairy",
    Details: "Smooth cream cheese for bagels and baking.",
  },
  {
    id: "30",
    createdAt: "2025-04-06T08:45:00Z",
    Title: "Fresh Mozzarella",
    Image:
      "https://img.freepik.com/free-photo/fresh-salad-with-cherry-tomatoes-basil-mozzarella-black-olives_2829-14251.jpg?t=st=1744011008~exp=1744014608~hmac=f7408b5886e9f2fa487f2af159617254855f2b9fe8681d65c43b3d27998bc5e9&w=740",
    Price: "4.00",
    Category: "Dairy",
    Details: "Soft mozzarella perfect for salads or pizza.",
  },

  {
    id: "31",
    createdAt: "2025-04-06T08:50:00Z",
    Title: "Sunflower Oil (1L)",
    Image:
      "https://img.freepik.com/free-photo/sunflower-oil-plastic-bottle-wooden-table_123827-21123.jpg?t=st=1744011131~exp=1744014731~hmac=2fdfd9ed193a662765990aa79c269487d1f53fafd64402332abfe2a577ebed0c&w=996",
    Price: "3.40",
    Category: "Oils",
    Details: "Light and healthy cooking oil.",
  },
  {
    id: "32",
    createdAt: "2025-04-06T08:51:00Z",
    Title: "Olive Oil (500ml)",
    Image:
      "https://img.freepik.com/free-photo/close-up-cup-olive-oil-green-olives_23-2148285992.jpg?t=st=1744011187~exp=1744014787~hmac=03ffcdc0cc4bc714a6d9f13d7502f6855f3d6f662261e74c908264403ad4f26b&w=996",
    Price: "5.99",
    Category: "Oils",
    Details: "Extra virgin olive oil for dressing and cooking.",
  },
  {
    id: "33",
    createdAt: "2025-04-06T08:52:00Z",
    Title: "Vegetable Oil (1L)",
    Image:
      "https://img.freepik.com/free-photo/set-sliced-lemon-basket-with-fulled-with-lemons-lemon-juice-basket-wooden-surface-high-angle-view_176474-14102.jpg?t=st=1744011234~exp=1744014834~hmac=71111f875e638e9b2c417d6f4fb90696a5a3e47acd00365e5a431fe2c6488db0&w=996",
    Price: "2.70",
    Category: "Oils",
    Details: "All-purpose vegetable oil.",
  },
  {
    id: "34",
    createdAt: "2025-04-06T08:53:00Z",
    Title: "Coconut Oil (Jar)",
    Image:
      "https://img.freepik.com/free-photo/jug-coconut-oil-whit-coconut-put-dark-background_1150-28252.jpg?t=st=1744012311~exp=1744015911~hmac=cbdaac6051ffdf2026848bb5a1b3c0ef53311dc6941bca24d2e8a745e1ebc789&w=996",
    Price: "6.00",
    Category: "Oils",
    Details: "Cold-pressed organic coconut oil.",
  },
  {
    id: "35",
    createdAt: "2025-04-06T08:54:00Z",
    Title: "Sesame Oil (250ml)",
    Image:
      "https://img.freepik.com/free-photo/sesame-oil-sesame-seeds-dark-background_1150-45340.jpg?t=st=1744012434~exp=1744016034~hmac=acdd2400a5d6b349b5a1a8bc2e8733f24d960804214781e3a2dcb9f4c1385bef&w=996",
    Price: "4.50",
    Category: "Oils",
    Details: "Rich aromatic sesame oil, great for stir fry.",
  },
  {
    id: "36",
    createdAt: "2025-04-06T08:55:00Z",
    Title: "Avocado Oil (250ml)",
    Image:
      "https://img.freepik.com/premium-photo/basket-board-avocado-oil-wooden-table-close-up_185193-12489.jpg?w=996",
    Price: "5.20",
    Category: "Oils",
    Details: "Nutritious oil from avocados, ideal for salads.",
  },
];

export default MockProducts;
