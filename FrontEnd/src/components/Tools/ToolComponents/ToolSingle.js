import React from "react";
import { useParams } from "react-router-dom";
import FaceShapeFind from "./../FaceShapeFind";
import BmiCalculator from "./../BmiCalculator";
import PortfolioMaker from "./../PortfolioMaker/PortfolioMaker";
import { EyeGlassSuggestion } from "../EyeGlassSuggestion";
import { SideNav } from "../../Home/SIdeNav";
import { LinkInfo_HomePage } from "../../NavBar/LInkInfo";
import CalorieTracker from "../CalorieTracker/CalorieTracker";
import NutritionDatabase from './../NutritionDatabase/NutritionDatabase';
import DailySleepTracker from "../DailySleepTracker/DailySleepTracker";
const appsList = {
  "Faceshape-detection": <FaceShapeFind />,
  "PortFolio-Maker": <PortfolioMaker />,
  "EyeGlass-Suggestion": <EyeGlassSuggestion />,
  "Calorie-Tracker":<CalorieTracker/>,
  "Bmi-Calculator": <BmiCalculator />,
  "Sleep-tracker":<DailySleepTracker/>,
  "Nutrition-Database":<NutritionDatabase/>
};

const ToolSingle = () => {
  const { id, name } = useParams();

  return (
    <div>
      <div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
        <div className="bg-white shadow-lg border-t-4  hidden border-indigo-500 absolute bottom-0 w-full md:w-0 hidden md:hidden flex flex-row flex-wrap">
          <div className="w-full text-right">
            <button className="p-2 fa fa-bars text-4xl text-gray-600 hidden"></button>
          </div>
        </div>

        <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-gray-50  shadow-lg">
          <SideNav LinkInfo={LinkInfo_HomePage} />
        </div>

        {/* <NavLinks LinkInfo={LinkInfo_Logged_in}/> */}

        <div className="lg:w-3/5 sm:w-full sm:mx-10 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
          {Object.keys(appsList).map((current) => {
            return current === name ? appsList[current] : "";
          })}
        </div>
      </div>
    </div>
  );
};

export default ToolSingle;
