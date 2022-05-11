import React, { useState } from "react";
import ApiClient from "./../../API/ApiClient";

const CalorieFinder = () => {
  const [foodName, setfoodName] = useState("");
  const [foodResult, setfoodResult] = useState([]);
  const[show,setShow] =  useState(0);
  const CalorieUrl = (foodName) => {
    return `https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodName}&pageSize=2&api_key=MADqX6updoMtlLdjdn3NDTqy2svNgysCmbTGTTmZ`;
  };
const [Loaded, setLoaded] = useState(0)
  const findCal = () => {
    setShow(0)

    ApiClient()
      .get(CalorieUrl(foodName))
      .then((response) => {
        console.log('responese.......');
        console.log(response.data.foods[0]);
        // console.log(response.data);
        // setcontent(response.data[14].content)
        setfoodResult(response.data);
        setLoaded(1)
        setShow(1)
        // setfoodResult(response.data.foods[0].foodNutrients);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setfoodName(e.target.value);
          }}
          value={foodName}
          placeholder="Search Food.."
        />
        <button onClick={findCal}>Search</button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              {

            Loaded?
              <p>Showing result for {foodName}  {foodResult.foods[0].servingSize }{foodResult.foods[0].servingSizeUnit}</p>
                :""
            }

            <div className="overflow-x-auto">
              <table className="min-w-full">
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
                 
                  {Loaded &&show && foodResult.foods[0]!==undefined && Object.values(foodResult.foods[0].foodNutrients).map((current) => {
                    return (
                      <>
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {current.nutrientName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {current.value} {current.unitName}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>

             { Loaded && foodResult.foods[0]===undefined ? <h2>No result found ,please try again</h2>:''}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalorieFinder;
