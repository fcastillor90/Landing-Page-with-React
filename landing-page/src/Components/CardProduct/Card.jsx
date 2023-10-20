import React from "react";
import PropTypes from "prop-types";

const CardProduct = ({ id, image, title }) => {
  return (
    <div>
      <div className="card" style="width: 28rem;">
        <img className="card-img-top" src={image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi
              ex, dictum in lacinia nec, luctus bibendum ex. Curabitur finibus
              nunc justo, bibendum facilisis odio ultrices hendrerit. Phasellus
              ultricies leo porta euismod laoreet. Mauris laoreet nisl vitae
              metus consequat accumsan. Proin tincidunt laoreet odio, quis
              sollicitudin ipsum auctor in. Nunc tincidunt sem vel nisi molestie
              pretium. Integer auctor sapien ultricies, eleifend dui non,
              molestie est.
            </p>
            <a href="#" className="btn btn-primary">
              Find Out More!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProduct.defaultProps = {
  image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  title: "Product title",
};

CardProduct.PropTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardProduct;
