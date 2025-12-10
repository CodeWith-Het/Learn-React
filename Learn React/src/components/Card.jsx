import React from "react";
import { Volleyball } from "lucide-react";
import { MoveRight } from "lucide-react";

const Card = (props) => {

  console.log(props.cardId);

  return (
    <div className="card">
      <div className="top">
        <div className="top-heading">
          <h4 className="top-h1">{props.Age}</h4>
          <h4 className="top-h2">{props.Catagory}</h4>
        </div>
        <div className="top-icon">
          <Volleyball size={30} color="#000000"/>
        </div>
      </div>
      <div className="center">
        <h1>{props.Title1}</h1>
        <h1>{props.title2}</h1> {/* capital T ho ya small t, same rakhna */}
        <p>{props.Description}</p>
      </div>
      <div className="bottom">
        <div className="bottom-image">
          <img src={props.Images} alt="" />
        </div>
        <button>
          {props.Button.text}
          <span className="icon-wrapper">
            <MoveRight size={20} color="#000000"/>
          </span>
        </button>
      </div>
    </div>
  );
};


export default Card;
