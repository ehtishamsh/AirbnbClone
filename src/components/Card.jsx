import React from "react";
import Star from "../assets/Star.png";
function Card({
  imgName,
  Star_rating = "5.0",
  numOfReviews,
  country,
  title,
  price,
  status,
}) {
  return (
    <section className="card_section">
      <img src={`./${imgName}`} alt="" className="card_img" />
      <div>
        <img src={Star} alt="" className="star" />
        <p>
          {Star_rating}
          <span className="rating_span">
            <span>({numOfReviews})</span>.<span>{country}</span>
          </span>
        </p>
      </div>
      <p>{title}</p>
      <p className="disc">
        From ${price}
        <span>/ Person</span>
      </p>
      <span className="box">{status}</span>
    </section>
  );
}

export default Card;
