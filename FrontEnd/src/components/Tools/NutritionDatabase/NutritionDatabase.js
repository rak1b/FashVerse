import React, { useState } from "react";
import ApiClient from "./../../../API/ApiClient";
import Breadcrumb from './../ToolComponents/Breadcrumb';

const NutritionDatabase = () => {
  const [foodName, setfoodName] = useState("");
  const [foodResult, setfoodResult] = useState([]);
  const [show, setShow] = useState(0);
  const CalorieUrl = (foodName) => {
    return `https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodName}&pageSize=2&api_key=MADqX6updoMtlLdjdn3NDTqy2svNgysCmbTGTTmZ`;
  };
  const [Loaded, setLoaded] = useState(0);
  const findCal = () => {

    if(foodName === ''){
      alert("Please ,Enter food name...")
      
    }else{
    setShow(0);

    ApiClient()
      .get(CalorieUrl(foodName))
      .then((response) => {
        console.log("responese.......");
        console.log(response.data.foods[0]);
        // console.log(response.data);
        // setcontent(response.data[14].content)
        setfoodResult(response.data);
        setLoaded(1);
        setShow(1);
        // setfoodResult(response.data.foods[0].foodNutrients);
      })
      .catch(function (error) {
        console.log(error);
      });}
  };
  return (
    <>
     
        <Breadcrumb/>

        <div className="w-4/5  bg-white flex items-center justify-center  mt-4 h-12  mx-auto shadow mb-10">
          <h3 className="text-blue-400 font-semibold space-x-3 uppercase ">Nutrition Database</h3>

          </div>

      <div className="container w-4/5  flex mx-auto">
        <div className="flex border-2 w-full rounded">
          <button  onClick={findCal}  className="flex bg-pyBlue-500 items-center justify-center px-4 border-r">
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
          <input type="text"  onChange={(e) => {
            setfoodName(e.target.value);
          }}
          value={foodName}
          placeholder="Search Food.." className="px-4 w-full py-2 h-24"  />
        </div>
      </div>
      <div className="flex flex-col w-4/5 h-screen shadow bg-white m-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            {Loaded && foodResult.foods[0] !== undefined ? (
              <p className="text-gray-600">
                Showing result for {foodName} {foodResult.foods[0].servingSize}
                {foodResult.foods[0].servingSizeUnit}
              </p>
            ) : (
              ""
            )}

            <div className="overflow-x-auto">
              <table className={!Loaded ? "hidden min-w-full  font-mono " : "min-w-full font-mono"  }>
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      nutrient Name
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Loaded &&
                    show &&
                    foodResult.foods[0] !== undefined &&
                    Object.values(foodResult.foods[0].foodNutrients).map(
                      (current) => {
                        return (
                          <>
                            <tr className="border-b ">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {current.nutrientName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {current.value} {current.unitName}
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )}
                </tbody>
              </table>

              {Loaded && foodResult.foods[0] === undefined ? (
                <h2>No result found ,please try again</h2>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionDatabase;
