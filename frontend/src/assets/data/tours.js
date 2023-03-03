import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Scuba Diving Grand Island",
    city: "Grand Island",
    distance: 300,
    address: "Grand Island",
    price: 99,
    maxGroupSize: 10,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Ajit Sharma",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: false,
  },
  {
    id: "02",
    title: "Scuba Diving Malvan",
    city: "Malvan",
    distance: 400,
    address: "Grand Island",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "Ajay Devgan",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: false,
  },
  {
    id: "03",
    title: "Banan Ride In Goa",
    city: "Calangute",
    distance: 500,
    address: "Calangute",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "04",
    title: "Bungee Jumping",
    city: "Goa",
    distance: 500,
    address: "Grand Island",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Goa Tour Package",
    city: "Indonesia",
    distance: 500,
    address: "Grand Island",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Bachelor Tour Package",
    city: "Japan",
    distance: 500,
    address: "Grand Island",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Corporate Tour Package",
    city: "France",
    distance: 500,
    address: "Grand Island",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Dudhsagar Waterfall",
    city: "South Goa",
    distance: 500,
    address: "Grand Island",
    price: 99,
    maxGroupSize: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptate. Aspernatur harum ex repellendus esse a ab aut libero illum suscipit? Iste sequi rerum velit quas. Nulla mollitia quas ratione?",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
