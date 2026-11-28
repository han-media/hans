// ============================================================
// WILDLIFE PHOTOGRAPHY — story data
//
// HOW TO ADD A NEW PHOTO STORY:
// 1. Add your photo(s) to /images/wildlife/  (e.g. story-05.jpg)
// 2. Copy one of the objects below and paste it into the array
// 3. Update images, alt, meta, title, and text
// 4. Save — the new story appears on the Wildlife page automatically:
//    it alternates sides, gets added to the "Jump to" guide on the
//    left, and fades in as visitors scroll to it.
//
// "images" is a list, not a single photo — give it 1 photo for a
// still image, or 2–3 photos to have them cross-fade into each
// other automatically every few seconds.
//
// "meta" is a short line above the title — location and/or date
// work well (e.g. "Katmai National Park, Alaska — 2023").
// ============================================================

const wildlifeStories = [
  {
    images: [
      "images/wildlife/13 Common Gull.jpg",
      "images/wildlife/13.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Saemangeum and Daejangdo",
    title: "Common Gulls Above",
    text: "Circling above the Chesapeake & Ohio Canal National Historical Park was a kettle of Turkey Vultures. Luckily for me, the vultures swooped down low enough for me to snag these photos.",
  },
  {
    images: [
      "images/wildlife/15 Large Billed Crow.jpg",
      "images/wildlife/15.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Saemangeum and Daejangdo",
    title: "Crows of Saemangeum",
    text: "In 1991, construction began on a large sea wall that would reclaim land off the coast of Gunsan. As I saw a rice field of land that was once a getbol as human intervention met nature. This land was once an important grounds for endangered migratory bird populations, but perhaps almost poetically, all the birds we saw were Large Black Crows scattered through the fields.",
  },
  {
    images: [
      "images/wildlife/12 Vega Gull.jpg",
      "images/wildlife/12.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Saemangeum and Daejangdo",
    title: "Vega Gull Riding the Wind",
    text: "Circling above the Chesapeake & Ohio Canal National Historical Park was a kettle of Turkey Vultures. Luckily for me, the vultures swooped down low enough for me to snag these photos.",
  },
  {
    images: [
      "images/wildlife/11 Japanese Cormorant.jpg",
      "images/wildlife/11.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Saemangeum and Daejangdo",
    title: "Stoic Japanese Cormorant",
    text: "Circling above the Chesapeake & Ohio Canal National Historical Park was a kettle of Turkey Vultures. Luckily for me, the vultures swooped down low enough for me to snag these photos.",
  },
  {
    images: [
      "images/wildlife/17 Dog.jpg",
      "images/wildlife/17.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Yubudo Island",
    title: "Yubudo's Dog",
    text: "Yubudo Island holds a small village .",
  },
  {
    images: [
      "images/wildlife/16 Gull.jpg",
      "images/wildlife/16.1.jpg",
      "images/wildlife/16.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Yubudo Island",
    title: "Gulls Near Grandpa's Island",
    text: "Sitting off the coast next to a Hyundai Factory and S-Oil storage facility, we saw a small boat enter into the horizon. We entered into the boat and as we rode to visit Grandpa's island, we passed by the local gulls, some who even glided near the top of the boat.",
  },
  {
    images: [
      "images/wildlife/14 Oriental Magpie.jpg",
      "images/wildlife/14.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Gunsan, South Korea",
    title: "Oriental Magpie on a Wire",
    text: "Circling above the Chesapeake & Ohio Canal National Historical Park was a kettle of Turkey Vultures. Luckily for me, the vultures swooped down low enough for me to snag these photos.",
  },
  {
    images: [
      "images/wildlife/10 Daurian Redstart.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Gunsan, South Korea",
    title: "Daurian Redstart",
    text: "When arriving in Gunsan, I . Leaving my luggage by a bush, I took a quick photo of a Daurian Redstart before it flew away.",
  },
  {
    images: [
      "images/wildlife/9 Turkey Vulture.jpg",
      "images/wildlife/9.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Chesapeake & Ohio Canal National Historical Park",
    title: "Vultures Circling the Sky",
    text: "Circling above the Chesapeake & Ohio Canal National Historical Park was a kettle of Turkey Vultures. Luckily for me, the vultures swooped down low enough for me to snag these photos.",
  },
  {
    images: [
      "images/wildlife/8 Green Heron.jpg",
      "images/wildlife/8.1.jpg",
      "images/wildlife/8.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Chesapeake & Ohio Canal National Historical Park",
    title: "Green Heron by the Pond",
    text: "While resting by a small pond, I noticed a Green Heron land nearby. The heron’s hair is usually slicked back when it is calm, but as it moves, its feathers puff up into a mohawk-like shape. The heron is also beautiful in flight, but I was not able to adjust my camera’s focus in time to fully capture it in motion.",
  },
  {
    images: [
      "images/wildlife/7 Monarch Butterfly.jpg",
      "images/wildlife/7.5 Tiger Swallowtail.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Chesapeake & Ohio Canal National Historical Park",
    title: "Butterfly Garden",
    text: "One weekend, I visited the Chesapeake & Ohio Canal National Historical Park by the Potomac River in Maryland. I had done the Billy Goat Trail with my friends once before, but I wanted to do it again on my own. As you enter the park, there is a patch of wildflowers housing various butterfly species. I managed to get a couple mid-flight shots of the Monarch and Tiger Swallowtail Butterflies.",
  },
  {
    images: ["images/wildlife/6 Pallas Rosefinch.jpg"],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "My Granduncle's Farm in South Korea",
    title: "Pallas's Rosefinch",
    text: "My late grandparents on my mother’s side were farmers in the northeast part of Korea near Gangneung. My granduncle is the only one in the family who still owns a large farm. Walking down a forested area by the crops, I noticed this female Pallas’s Rosefinch perched up in the trees. The males apparently are striking with bright pink plumage. As we left his farm, my granduncle gave us a box of apples as we told him we would visit again someday.",
  },
  {
    images: [
      "images/wildlife/5.5 Macaria Moth.jpg",
      "images/wildlife/5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Tuscarora State Forest",
    title: "Insects of Tuscarora",
    text: "Driving past Amish horse-drawn carriages in Path Valley, I eventually arrived at Tuscarora State Forest. Even though the bird photos didn’t turn out the way I had hoped, I did manage to capture some cool shots of an ant briefly staring at an orange fungus, as well as a Macaria Moth resting across the tall grass.",
  },
  {
    images: [
      "images/wildlife/4 Song Sparrow.jpg",
      "images/wildlife/4.5.jpg",
    ],
    alt: "Replace with a description of this photograph for screen readers",
    meta: "Shenandoah National Park",
    title: "Song Sparrow in Motion",
    text: "I took these photos of Song Sparrows near the base of Old Rag Mountain. Although my initial movements scared them off, they eventually returned. For about half an hour, I watched the sparrows go about their business, capturing one in mid-flight and two in a brief squabble.",
  },
  {
    images: [
      "images/wildlife/2 American Crow.jpg",
      "images/wildlife/2.5.jpg",
    ],
    alt: "The Crows Off Old Rag",
    meta: "Shenandoah National Park",
    title: "The Crows Off Old Rag",
    text: "At the top of Old Rag, the American Crows dive from the sides of the mountain. Hiking down from the summit at Byrd’s Nest, you can see a roughly drawn illustration of a crow which made me chuckle.",
  },
  {
    images: ["images/wildlife/3 Dark-eyed Junco.jpg"],
    alt: "Contemplative Junco",
    meta: "Shenandoah National Park",
    title: "Contemplative Junco",
    text: "I hiked Old Rag in February, which required some extra preparation. On my way up, after being passed by a pair of brothers, a small Dark-Eyed Junco landed in front of me. I quickly took out my camera and captured this photo of the junco looking at the journey ahead.",
  },
  {
    images: ["images/wildlife/1 White Tail Deer.jpg"],
    alt: "Deer in the Woods",
    meta: "Shenandoah National Park",
    title: "Deer in the Woods",
    text: "As I was driving to Shenandoah, I saw a family of White-Tailed Deers. Sitting in my car, I managed to take this photo of a deer gazing into the distance.",
  },
];
