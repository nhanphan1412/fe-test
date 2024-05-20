import cards from "../../mock-data/card.json";
import Card from "./CardItem";

const CardList = () => {
  return (
    <div className="card">
      <div className="container">
        <h1>Photo Cards</h1>
        <div className="card-container">
          {cards.map((card, index: number) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
