import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const CardList = ({ searchTerm }) => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get("/api/cards");
      console.log(response.data);
        setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

//   console.log("Cards state:", cards); 

//   const filteredCards = cards.filter((card) => {
//     return card.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
