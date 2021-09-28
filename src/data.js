import { uuid } from "uuidv4";

const songData = () => {
  return [
    {
      id: uuid(),
      name: "Gratitude",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
      artist: "fantompower",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22792",
      color: ["#CD99C9", "#C8DBE1"],
      active: true,
    },
    {
      id: uuid(),
      name: "Blue",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      artist: "Delayde, anybodyy",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23195",
      color: ["#ABDEF6", "#D087CB"],
      active: false,
    },
    {
      id: uuid(),
      name: "Dreamstate",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17947",
      color: ["#A6BAF8", "#394C6F"],
      active: false,
    },
    {
      id: uuid(),
      name: "Zodiac",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15000",
      color: ["#DB8ADB", "#E2B581"],
      active: false,
    },
    {
      id: uuid(),
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      active: false,
    },
    {
      id: uuid(),
      name: "Playful Obsession",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14983",
      color: ["#DB8ADB", "#E2B581"],
      active: false,
    },
    {
      id: uuid(),
      name: "Safe Haven",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      artist: "Oatmello, Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20123",
      color: ["#B598C0", "#2E1F29"],
      active: false,
    },
  ];
};

export default songData;
