import React, { useEffect } from "react";
import { useState } from "react";
import Breadcrumb from "./../ToolComponents/Breadcrumb";
import ApiClient from './../../../API/ApiClient';
import CalorieFinder from './../CalorieFinder';
import { Link } from 'react-router-dom';

const CalorieTracker = () => {
  const [item, setitem] = useState();
  const [Calorie, setCalorie] = useState();
  const [Date, setDate] = useState();
 

  
  const [item_list, set_item_list] = useState(localStorage.getItem('CT_Data')?JSON.parse(localStorage.getItem('CT_Data')):[]);
  const grab_input = (e) => {
    setitem(e.target.value);
  };
  const grab_Calorie = (e) => {
    setCalorie(e.target.value);
    console.log(e.target.value);
    
  };



  const grab_date = (e) => {
    setDate(e.target.value);
    

    console.log(e.target.value);
  };
  const add_item = () => {

    if(item === ""){

      alert("Enter food....");
    }else if(Calorie === ""){

        alert("Enter calorie for the food....");
      
    }
    else if(Date === ""){

        alert("Enter Date....");
      }
    else  {
      set_item_list((useState_array) => {
        return [
          ...useState_array,
          {
            Date:Date,
            item: item,
            Calorie: Calorie,
          },
        ];
      });
    } 

    setitem("");
    setCalorie("");
  };

  const delete_items = (index) => {
    set_item_list((list) => {
      return list.filter((item, id) => {
        return id !== index;
      });
    });
  };

   
    const ConsumedCalorie = item_list.map((item) => {
        if (item.Date === Date) return (item.Calorie)
        else return 0
    }).reduce((partialSum, a) => partialSum + parseFloat(a), 0)


  useEffect(() => {

      localStorage.setItem("CT_Data",JSON.stringify(item_list))
    
  }, [item_list])
  return (
  <>
    <div className=" w-full">
      <Breadcrumb />

      <div className="">
        <h4 className="text-center p-5  uppercase space-x-5 shadow-lg text-xl font-semibold bg-white text-blue-400 ">
          Calorie Tracker
        </h4>
        <div className="flex bg-white items-center   shadow-lg">

        <div className="flex bg-white  p-5 items-center      ">
        <h2 className="text-gray-400 mr-8 ">Enter Date:</h2>
            
           
        <input  value={Date}  onInput={grab_date}  className="gray-400 border text-gray-500 p-1 px-24 focus:shadow-outline"  type="date" />
        </div>

        <div>
            <h3 className="text-gray-700 font-semibold ">Calorie Consumed : <span className="text-2xl text-red-500">{ConsumedCalorie}</span> Calories</h3>

        </div>
        </div>



        <div className="bg-white  p-5 flex justify-between  shadow-lg rounded-b-xl">
          <input
            type="text"
            onInput={grab_input}
            className=" w-1/3 placeholder-gray-400 border rounded-lg focus:shadow-outline "
            value={item}
            placeholder="Enter Food"
          />

          <input
            type="text"
            onInput={grab_Calorie}
            className=" w-1/3 placeholder-gray-400 border rounded-lg focus:shadow-outline "
            value={Calorie}
            placeholder="Enter Calorie"
          />
          <p onClick={add_item} className="todo__plus bx bx-plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </p>
        </div>
        

{/* <CalorieFinder/> */}
        <div>
          {item_list.map((items, index) => {
              if(items.Date===Date){

                //   const calorieCal = calorieCal + items.Calorie;
            return (
              <>
               

                <div className="" key={index}>
                 

                  <div class="mt-10 relative">
                    {/* <h3 class="text-gray-200 mb-4 text-lg font-bold absolute ">
                      {index + 1}
                    </h3> */}
                    <div class="bg-white p-6 flex  justify-between rounded-lg shadow-lg">
                      <h2 class="text-2xl font-bold mb-2 text-gray-800">
                        {items.item}
                      </h2>
                      <p class="text-gray-700 mr-20">
                        <span className="font-bold">{items.Calorie}</span>{" "}
                        Calories
                      </p>
                    </div>
                    <p
                      className="absolute top-2 right-2"
                      onClick={() => {
                        console.log("clicked", index);
                        return delete_items(index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10"
                        fill="red"
                        viewBox="0 0 24 24"
                        stroke="white"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </>
            );}else{
                return ""
            }
          })}
        </div>
      </div>
    </div>
    <Link to="/tools/Nutrition-Database">Dont know the calorie?</Link>
    </>
  );
};

export default CalorieTracker;
