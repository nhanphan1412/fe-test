import { Cards } from "../../types/Card";

interface CardProps {
  data: Cards;
}

const CardItem = ({ data }: CardProps) => {
  return (
    <div className="card-item">
      <div className="card-image">
        <img className="aspect-ratio-3-2" src={data.image} alt="Card" />
      </div>
      <div className="card-body">
        <p className="card-text text-truncate font-bold">{data.text}</p>
      </div>
    </div>
  );
};

export default CardItem;
