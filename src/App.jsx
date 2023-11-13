import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Image1 from "./assets/Allimages/Card_img_1.png";
import Image2 from "./assets/Allimages/Card_img_2.png";
import Image3 from "./assets/Allimages/Card_img_3.png";

function App() {
  return (
    <>
      <Header />
      <div className="main_con">
        <Hero />
        <div className="card_div">
          <Card
            imgName={Image1}
            Star_rating="5.0"
            numOfReviews="6"
            country="USA"
            title="Life lessons with Katie Zaferes"
            price="136"
            status="SOLD OUT"
          />
          <Card
            imgName={Image1}
            Star_rating="5.0"
            numOfReviews="6"
            country="USA"
            title="Life lessons with Katie Zaferes"
            price="136"
            status="SOLD OUT"
          />
          <Card
            imgName={Image1}
            Star_rating="5.0"
            numOfReviews="6"
            country="USA"
            title="Life lessons with Katie Zaferes"
            price="136"
            status="SOLD OUT"
          />
        </div>
      </div>
    </>
  );
}

export default App;
