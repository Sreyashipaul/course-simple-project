import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {
        title,
        img,
        instructor,
        rating,
        duration,
        student,
        price,
      } = props.courseDetails;
    return (
        <div>
            <div className="product">
              <div className="course-images">
              <img src={img} alt="" />
              </div>
          
        <div className="product-name">
          <h4 className="text-primary">{title}</h4>
          
          <p>
            <small>Instructor: {instructor}</small>
          </p>
          <p>
            <small>
              Rating:
              <span className="text-warning font-weight-bold">
                {" "}
                {rating}
              </span>{" "}
            </small>
          </p>
          <p>
            <small>Duration: {duration} hours</small>
          </p>
          <p>
            <small>Students: {student}</small>
          </p>
          
          <h6 className="text-success">Price: ${price}</h6>
          <button
            className="main-button"
            onClick={() => props.handleButton(props.courseDetails)}
          >
            Enroll Now
          </button>
        </div>
      </div>
            
        </div>
    );
};

export default Product;