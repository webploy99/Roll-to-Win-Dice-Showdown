
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/roll-to-win-dice-showdown/id6503655769";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a4/2f/39/a42f39bb-ed3e-083a-0e0c-d30d931a8f57/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get images URL ========
imageUrl = {
  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/52/66/88/5266885c-f72d-abd5-7503-657396e23f98/17f3e99a-f3b0-420b-b5b0-ea924be47695_1.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/bd/19/2f/bd192f8c-ca24-d113-c531-9babaddf8f4b/dad1d2ca-5024-44dd-8baf-5234aebf9b5c_3.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/30/84/59/30845930-bd2c-8e88-4392-d7550390326b/8f2c0d5a-0820-4f8b-b318-6a92c90c023c_2.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

