import { useState } from "react";
import "./Card.css";

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;

  const clickReadMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card ">
      <img src={image} className="card-image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4>&#x20B9; {price}</h4>
          <h2>{name}</h2>
        </div>
        <div className="description">
          {description}
          <span onClick={clickReadMoreHandler} className="read-more-btn">
            {readMore ? `show less` : `read more`}
          </span>
        </div>
      </div>
      <button onClick={() => removeTour(id)} className="btn-not-interested">
        Not interested..
      </button>
    </div>
  );
};

export default Card;
