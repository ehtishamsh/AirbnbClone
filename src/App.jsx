import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import DataOb from "./components/Data.js";

function App() {
  const data = DataOb.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // numOfReviews={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // status={item.openSpots}
      />
    );
  });
  return (
    <>
      <Header />
      <div className="main_con">
        <Hero />
      </div>
      <div className="card_div">{data}</div>
    </>
  );
}

export default App;
