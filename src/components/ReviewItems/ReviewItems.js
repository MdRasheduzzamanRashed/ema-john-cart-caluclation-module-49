import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItems.css";
const ReviewItems = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, img, shipping, id } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-info">
        <h5>Name: {name}</h5>
        <p>Price: {price}</p>
        <p>Total quantity:{quantity}</p>
        <p>Shipping charge:{shipping}</p>
      </div>
      <div>
        <button onClick={() => handleRemoveItem(id)} className="delete-btn">
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrashCan}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewItems;
