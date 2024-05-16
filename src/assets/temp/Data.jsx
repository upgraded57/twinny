import hotel_img_1 from "../images/bg_1.png";
import hotel_img_2 from "../images/bg_2.png";
import hotel_img_3 from "../images/bg_3.png";

import hotel_1_img_1 from "../images/hotel_1_img_1.png";
import hotel_1_img_2 from "../images/hotel_1_img_2.png";
import hotel_1_img_3 from "../images/hotel_1_img_3.png";
import hotel_1_img_4 from "../images/hotel_1_img_4.png";

import fan_icon from "../images/fan.svg";
import game_icon from "../images/game.svg";
import plug_icon from "../images/plug.svg";
import tv_icon from "../images/tv.svg";
import gate_icon from "../images/gate.svg";
import bed_icon from "../images/bed.svg";
import wifi_icon from "../images/wifi.svg";
import food_icon from "../images/food.svg";
import swim_icon from "../images/swim.svg";
import door_icon from "../images/door.svg";

export const hotelsData = [
  {
    id: 1,
    images: [hotel_1_img_1, hotel_1_img_2, hotel_1_img_3, hotel_1_img_4],
    img: hotel_img_1,
    title: "2-Bedroom Apartment",
    location:
      "Chief Mba close, Off Gbangbala Street, Ikate Elegushi, Lagos, Nigeria.",
    price: "60,000",
    features: [
      {
        text: "Air Conditioner",
        icon: fan_icon,
      },
      {
        text: "PS 5 Console",
        icon: game_icon,
      },
      {
        text: "24hrs Electricity",
        icon: plug_icon,
      },
      {
        text: "DSTV & Netflix",
        icon: tv_icon,
      },
      {
        text: "Gated Estate",
        icon: gate_icon,
      },
      {
        text: "2 bedroom flat",
        icon: bed_icon,
      },
      {
        text: "Unlimited Wifi",
        icon: wifi_icon,
      },
      {
        text: "Kitchen",
        icon: food_icon,
      },
    ],
    layout: "normal",
  },

  {
    id: 2,
    img: hotel_img_2,
    images: [hotel_1_img_1, hotel_1_img_2, hotel_1_img_3, hotel_1_img_4],
    title: "Hotel space option 1",
    location: "3891 Ranchview Dr. Richardson, California 62639.",
    price: "80,000",
    features: [
      {
        text: "Air Conditioner",
        icon: fan_icon,
      },
      {
        text: "Swimming Pool",
        icon: swim_icon,
      },
      {
        text: "Swimming Pool",
        icon: swim_icon,
      },
      {
        text: "Swimming Pool",
        icon: swim_icon,
      },
      {
        text: "Big Parking Space",
        icon: door_icon,
      },
      {
        text: "4 bedroom flat",
        icon: bed_icon,
      },
      {
        text: "4 bedroom flat",
        icon: bed_icon,
      },
      {
        text: "4 bedroom flat",
        icon: bed_icon,
      },
    ],
    layout: "alt",
  },

  {
    id: 3,
    images: [hotel_1_img_1, hotel_1_img_2, hotel_1_img_3, hotel_1_img_4],
    img: hotel_img_3,
    title: "Hotel space option 2",
    location: "3891 Ranchview Dr. Richardson, California 62639.",
    price: "80,000",
    features: [
      {
        text: "Air Conditioner",
        icon: fan_icon,
      },
      {
        text: "Swimming Pool",
        icon: swim_icon,
      },
      {
        text: "Swimming Pool",
        icon: swim_icon,
      },
      {
        text: "Swimming Pool",
        icon: swim_icon,
      },
      {
        text: "Big Parking Space",
        icon: door_icon,
      },
      {
        text: "4 bedroom flat",
        icon: bed_icon,
      },
      {
        text: "4 bedroom flat",
        icon: bed_icon,
      },
      {
        text: "4 bedroom flat",
        icon: bed_icon,
      },
    ],
    layout: "normal",
  },
];
