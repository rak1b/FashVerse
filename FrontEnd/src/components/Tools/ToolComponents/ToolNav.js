import React, { useEffect } from "react";
import './Tools.css'



// const ToolNav = ({ filterItem, categories }) => {
const ToolNav = ({filterItem,categories}) => {
  // const categories = ['Fashion', 'Fitness', 'Portfolio', 'Technology']

  console.log(window.location.href);
  console.log(window.location.pathname);

  return (
    <>
      <nav className="navbar mx-auto">
        <div className="btn-group">
          {['All',...categories].map((curElem) => {
          // {[...categories,'All'].map((curElem) => {
            return (
              <button className="btn-group__item" onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default ToolNav;