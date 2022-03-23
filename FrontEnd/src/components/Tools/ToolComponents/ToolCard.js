import React from "react";
import { Link } from "react-router-dom";
import URL from './../../../BaseUrl/Url';
import ToolSingle from './ToolSingle';
const ToolCard = ({ props }) => {
// const ToolCard = ({ id,name, category, image, description }) => {
  //   console.log(menuData);
  const image_url = `${URL}${props.images}`

  const name = props.name.replace(' ','-')

  return (
    <>  <Link to={`${props.id}/${name}`} >
          <div className="card-container cursor-pointer" key={props.id}>
            <div className="card ">
              <div className="card-body">
                {/* <span className="card-number card-circle subtle">{props.id}</span> */}
                <span className="card-author subtle"> {props.category}</span>
                <h2 className="card-title"> {props.name} </h2>
                <span className="card-description subtle">
                  {props.description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={image_url}alt="images" className="card-media h-1/3 w-full" />
              {/* <span className="card-tag  subtle">Order Now</span> */}
            </div>
          </div>
          </Link>
        </>
  );
};

export default ToolCard;