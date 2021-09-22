import "./styles.css";
import { useState } from "react";

const restaurantDB = {
  italian: [
    {
      name: "Italian bob",
      review:
        "This restaurant have amazing thin crust pizza in the town check them out",
      rating: "3.9/5",
      address: "Anna Nagar East,Chennai"
    },
    {
      name: "Italian Radicii",
      review: "They bake fresh burger buns and their garlicc bread is lovely",
      rating: "4.5/5",
      address: "Anna Nagar East,Chennai"
    },
    {
      name: "Tuscana Pizzeria",
      review:
        "Their Pizza are wood fired one with thin Crest and veggies and cheese overloaded.  Pasta, starters, soup bowls, risotto had numerous varieties from vegan to non veg.",
      rating: "4.2/5",
      address: "KNK road,Nungambakkam,Chennai"
    }
  ],
  continental: [
    {
      name: "The MayFlower",
      review:
        "They have scrumptious continental food ranging from deep purple chicken dimsum to thin crust pizzas.",
      rating: "4.5/5",
      address: "Teynampet,Chennai"
    },
    {
      name: "Sandy's Chocolate Laboratory",
      review: "The best place to have chicken lasagna and ravioli",
      rating: "4.2/5",
      address: "Nungambakkam,Chennai"
    },
    {
      name: "Joker's Kitchen",
      review:
        "Their garlic bread is a must try in appetizers and the mocktails are also good.Best place to celebrate and have surprise because the lounge and every amenities is worth the price",
      rating: "4.4/5",
      address: "Alwarpet,Chennai"
    }
  ],
  chinese: [
    {
      name: "Nasi and Mee",
      review:
        "You can find the town's best dumplings, satay and mee goreng here",
      rating: "4.5/5",
      address: "Nungabakkam,Chennai"
    },
    {
      name: "The Noodle Theory",
      review:
        "They make the yummiest noodles and mouthwatering side dishes for the noodle",
      rating: "4.6/5",
      address: "Anna Nagar,Chennai"
    },
    {
      name: "Va Pho",
      review:
        "Taiwanese 3 cup Chicken – A tender saucy meat with hints of crunchiness from the nuts and vermicelli. A must try appetizer",
      rating: "4.5/5",
      address: "Gopalapuram,Chennai"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("italian");
  function genreSetter(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 className="heading">Restaurants</h1>
      <div className="btn-div">
        {Object.keys(restaurantDB).map((genre) => (
          <button onClick={() => genreSetter(genre)}>{genre}</button>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul>
          {restaurantDB[selectedGenre].map((rest) => (
            <li className="list-item">
              <div className="list-heading">{rest.name}</div>
              <div className="mb">
                {" "}
                <small>Rating: {rest.rating}</small>{" "}
              </div>
              <div className="mb">Review: {rest.review}</div>
              <div className="mb">Address:{rest.address}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
