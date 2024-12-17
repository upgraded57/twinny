import fan_icon from "../images/svgs/fan.svg";
import game_icon from "../images/svgs/game.svg";
import plug_icon from "../images/svgs/plug.svg";
import tv_icon from "../images/svgs/tv.svg";
import gate_icon from "../images/svgs/gate.svg";
import bed_icon from "../images/svgs/bed.svg";
import wifi_icon from "../images/svgs/wifi.svg";
import food_icon from "../images/svgs/food.svg";
import { images } from "../images/images";

export const hotelsData = [
  {
    id: 1,
    images: images.filter((img) => img.id === 1)[0].items,
    img: images.filter((img) => img.id === 1)[0].items[0],
    title: "Deluxe 1 Bedroom",
    location: "Ramoni Jimoh St, beside Bokku Mart, Ejigbo, Ikeja 100264, Lagos",
    price: "50,000",
    type: "hotel",
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
        text: "Laundry Facility",
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
    img: images.filter((img) => img.id === 2)[0].items[0],
    images: images.filter((img) => img.id === 2)[0].items,
    title: "Deluxe 2 Bedroom",
    location:
      "Chief Mba close, Off Gbangbala Street, Ikate Elegushi, Lagos, Nigeria",
    price: "150,000",
    type: "shortlet",
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
        text: "Laundry Facility",
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
    layout: "alt",
  },

  {
    id: 3,
    images: images.filter((img) => img.id === 3)[0].items,
    img: images.filter((img) => img.id === 1)[0].items[4],
    title: "Executive Bedroom",
    location: "Ramoni Jimoh St, beside Bokku Mart, Ejigbo, Ikeja 100264, Lagos",
    price: "60,000",
    type: "hotel",
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
        text: "Laundry Facility",
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
    id: 4,
    images: images.filter((img) => img.id === 4)[0].items,
    img: images.filter((img) => img.id === 4)[0].items[0],
    title: "1-Bedroom Apartment",
    location: "Ramoni Jimoh St, beside Bokku Mart, Ejigbo, Ikeja 100264, Lagos",
    price: "100,000",
    type: "hotel",
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
        text: "Laundry Facility",
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
    layout: "alt",
  },

  {
    id: 5,
    images: images.filter((img) => img.id === 5)[0].items,
    img: images.filter((img) => img.id === 5)[0].items[0],
    title: "Premium Bedroom",
    location: "Ramoni Jimoh St, beside Bokku Mart, Ejigbo, Ikeja 100264, Lagos",
    price: "70,000",
    type: "hotel",
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
        text: "Laundry Facility",
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
];
