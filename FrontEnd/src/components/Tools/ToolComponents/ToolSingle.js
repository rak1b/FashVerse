import React from 'react'
import { useParams } from 'react-router-dom';
import FaceShapeFind from './../FaceShapeFind';
import BmiCalculator from './../BmiCalculator';
import PortfolioMaker from './../PortfolioMaker/PortfolioMaker';
import { EyeGlassSuggestion } from '../EyeGlassSuggestion';
const appsList = {
    'Faceshape-detection':<FaceShapeFind/>,
    'Bmi-Calculator':<BmiCalculator/>,
    'PortFolio-Maker':<PortfolioMaker/>,
    'EyeGlass-Suggestion':<EyeGlassSuggestion/>

}


const ToolSingle = () => {

    const {id,name} = useParams()

    return (
        <div>
            {/* <h2>{id}</h2>
            <h2>{name}</h2> */}
            {
                Object.keys(appsList).map((current) => {
                  return current===name?appsList[current]:''
                })
            }
        </div>
    )
}

export default ToolSingle
