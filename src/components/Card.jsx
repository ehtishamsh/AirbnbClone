import React from "react";
import Star from "../assets/Star.png";
function Card(props) {
  let text;
  if (props.openSpots === 0) {
    text = "SOLD OUT";
  } else if (props.location === "Online") {
    text = "ONLINE";
  }
  return (
    <section className="card_section">
      <img src={`./Allimages/${props.coverImg}`} alt="" className="card_img" />
      <div>
        <img src={Star} alt="" className="star" />
        <p>
          {props.stats.rating}
          <span className="rating_span">
            <span>({props.stats.reviewCount})</span>.
            <span>{props.location}</span>
          </span>
        </p>
      </div>
      <p>{props.title}</p>
      <p className="disc">
        From ${props.price}
        <span>/ Person</span>
      </p>
      {text && <span className="box">{text}</span>}
    </section>
  );
}

export default Card;
