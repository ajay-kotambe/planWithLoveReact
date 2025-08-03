import "./Tours.css";
import Card from "./Card";

const Tours = ({ toursData, removeTour }) => {
//   console.log("toursData:", toursData);
//   console.log("Type:", typeof toursData);

  return (
    <div className="container">
      <div className="main-heading">
        <h2>Plan with Love</h2>
      </div>
      <div className="cards">
        {toursData.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
