const cardArr = [
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559",
    title: "Anupama",
    subtitle: "Drama, StarPlus",
    discription: "Despite the many challenges thrown her way, Anupama..",
    icon: " +  Add to WatchList",
  },

  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1777/1000071777/1000071777-v",
    title: "Bajrangi Bhai",
    subtitle: "Movie, Hotstar Specials",
    discription: "New episode every friday , mad a new role...",
    icon: " +  Add to WatchList",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1071/1321071-v-b54285c7301a",
    title: "Imlie ",
    subtitle: "Drama, StarPlus",
    discription: "Amid the difficult times, Malini is hell-bent on cre.",
    icon: " +  Add to WatchList",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7721/847721-v",
    title: "Manasu",
    subtitle: "Drama, StarPlus",
    discription: "Life brings headstrong , an arrogant professor ...",
    icon: " +  Add to WatchList",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4516/1074516-v-2f4f07b1e4ec",
    title: " Yeh Rishta ",
    subtitle: "Drama, StarPlus",
    discription: " Naira and Sirat's daughters are all grown up. Akshara i ...",
    icon: " +  Add to WatchList",
  },
  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7977/1317977-v-2b6393692cd1",
    title: "She-Hulk: Attorney",
    subtitle: "Superhero, Action, Fantasy",
    discription: "Jennifer Walters, an attorney  superhuman-ori ...",
    icon: " +  Add to WatchList",
  },

  {
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8056/1308056-v-b52e223ef46d",
    title: "Na Umra Ki Seema ",
    subtitle: "Romance, Star Bharat",
    discription: "Vidhi, a young woman, falls in love with  they  on a j ...",
    icon: " +  Add to WatchList",
  },
];

//

// Capture a index cardContainer.

const cardContainer = document.getElementById("card_Container");
// cardContainer.id = "card_Container";

for (let i = 0; i < cardArr.length; i++) {
  //

  // Create a Image div.

  const imgDiv = document.createElement("div");
  imgDiv.className = "img_Div";

  const imgTag = document.createElement("img");
  imgTag.className = "imge";
  imgTag.src = cardArr[i].img;

  imgDiv.appendChild(imgTag);
  const detailsDiv = document.createElement("div");
  detailsDiv.className = "divDetails";

  const title = document.createElement("p");
  title.className = "titles";
  title.textContent = cardArr[i].title;

  const subTitle = document.createElement("p");
  subTitle.className = "subtitle";
  subTitle.textContent = cardArr[i].subtitle;

  const discripton = document.createElement("p");
  discripton.className = "discrip";
  discripton.textContent = cardArr[i].discription;

  const iconTitle = document.createElement("p");
  iconTitle.className = "list";
  iconTitle.textContent = cardArr[i].icon;

  detailsDiv.appendChild(title);
  detailsDiv.appendChild(subTitle);
  detailsDiv.appendChild(discripton);
  detailsDiv.appendChild(iconTitle);

  imgDiv.appendChild(detailsDiv);

  cardContainer.appendChild(imgDiv);
}
