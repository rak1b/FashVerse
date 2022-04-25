import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Spinner from "./../Mini/Spinner";
import { Link } from "react-router-dom";
import square1 from "./EyeGlassImages/Square/1.png";
import square2 from "./EyeGlassImages/Square/2.png";
import squareMale from "./EyeGlassImages/Square/male.png";
import squareFemale from "./EyeGlassImages/Square/female.png";
import round1 from "./EyeGlassImages/Round/1.png";
import round2 from "./EyeGlassImages/Round/2.png";
import roundMale from "./EyeGlassImages/Round/male.png";
import roundFemale from "./EyeGlassImages/Round/female.png";
import oval1 from "./EyeGlassImages/Oval/1.png";
import oval2 from "./EyeGlassImages/Oval/2.png";
import ovalMale from "./EyeGlassImages/Oval/male.png";
import ovalFemale from "./EyeGlassImages/Oval/female.png";
import heart1 from "./EyeGlassImages/Heart/1.png";
import heart2 from "./EyeGlassImages/Heart/2.png";
import heartMale from "./EyeGlassImages/Heart/male.png";
import heartFemale from "./EyeGlassImages/Heart/female.png";
import Oblong1 from "./EyeGlassImages/Oblong/1.png";
import Oblong2 from "./EyeGlassImages/Oblong/2.png";
import OblongFemale from "./EyeGlassImages/Oblong/female.png";
import OblongMale from "./EyeGlassImages/Oblong/male.png";
const image_list = {
  Square: {
    1: square1,
    2: square2,
    male: squareMale,
    female: squareFemale,
    suggestion: `Look for rounded, thinner frames that are wider than your cheekbones, while remaining proportional to the length and width of your face: 

    Round frames: Bring contrast to angular features 
    Oval frames: Soften and balance defined square face lines  
    Coloured frames: Draw attention to the eyes `,
  },
  Round: {
    1: round1,
    2: round2,
    male: roundMale,
    female: roundFemale,
    suggestion: `Round faces are all soft curves and smooth lines, roughly the same width from the jaw up through to the brow. With round faces, the cheeks are usually full and the chin is rounded.  

    When choosing glasses for round face shapes, select frames that add definition. Choose bold, angular glasses with clean lines: 
    
        Rectangular frames: Add contrast to facial structure 
        Angular and geometric frames: Add sharp, distinct lines to create balance 
        Upswept frames such as cat-eye or D-frame: Draw attention to your eyes
    `,
  },

  Oval: {
    1: oval1,
    2: oval2,
    male: ovalMale,
    female: ovalFemale,
    suggestion: `Oval shaped faces have a narrow forehead and slightly narrow chin, which typically creates a long face silhouette.  

    For an oval face, choose glasses that emphasize the natural balance and add angles to your face’s subtle curves. Look for frames that are as wide as the widest part of your face, which is typically the area around the eyes, in a shape that adds subtle contrast to your features:  
    
        Square or rectangular glasses: Add sharper angles for definition 
        Geometric shapes: Get playful with shapes and angular contrast 
        D-frame: Wide frames compliment a narrow silhouette 
    
    `,
  },
  Heart: {
    1: heart1,
    2: heart2,
    male: heartMale,
    female: heartFemale,
    suggestion: `Oval shaped faces have a narrow forehead and slightly narrow chin, which typically creates a long face silhouette.  

    For an oval face, choose glasses that emphasize the natural balance and add angles to your face’s subtle curves. Look for frames that are as wide as the widest part of your face, which is typically the area around the eyes, in a shape that adds subtle contrast to your features:  
    
        Square or rectangular glasses: Add sharper angles for definition 
        Geometric shapes: Get playful with shapes and angular contrast 
        D-frame: Wide frames compliment a narrow silhouette 
    
    `,
  },
  Oblong: {
    1: Oblong1,
    2: Oblong2,
    male: OblongMale,
    female: OblongFemale,
    suggestion: `Oval shaped faces have a narrow forehead and slightly narrow chin, which typically creates a long face silhouette.  

    For an oval face, choose glasses that emphasize the natural balance and add angles to your face’s subtle curves. Look for frames that are as wide as the widest part of your face, which is typically the area around the eyes, in a shape that adds subtle contrast to your features:  
    
        Square or rectangular glasses: Add sharper angles for definition 
        Geometric shapes: Get playful with shapes and angular contrast 
        D-frame: Wide frames compliment a narrow silhouette 
    
    `,
  },
};

const showResult = ({ shape, gender }) => {
  return (
    <div>
      <div className="bg-white mt-5 h-3/5 ">
        <img className="m-auto" src={image_list[shape]["1"]} alt="square 1" />
        <div className="flex">
          <img
            className="m-auto"
            src={image_list[shape][gender]}
            alt="square 2"
          />
          <img className="m-auto" src={image_list[shape]["2"]} alt="square 2" />
        </div>
      </div>
    </div>
  );
};

export const EyeGlassSuggestion = () => {
  const [Spin, setSpin] = useState(0);

  const [shape, setShape] = useState("Square");
  const [gender, setGender] = useState("male");
  const [result, showResult] = useState(0);

  const handleonlcick = () => {
    console.log("clicked btn");
    showResult(0);

    setSpin(1);
    setTimeout(() => {
      setSpin(0);
      showResult(1);
    }, 2000);
  };

  function handleSelectChange(event) {
    setShape(event.target.value);
    console.log(event.target.value);
  }

  function handleSelectChange2(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <nav className="relative w-3/4 mx-auto mb-5 flex flex-wrap items-center justify-between p-5  hover:text-gray-700 focus:text-gray-700  navbar navbar-expand-lg navbar-light">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <nav
              className=" rounded w-full"
              aria-label="breadcrumb"
            >
              <ol className="list-reset flex">
                <li>
                  <Link to="#" className="text-blue-500 font-bold text-xl   hover:text-green-600">
                    Home
                  </Link>
                </li>
                <li>
                  <span class="text-blue-500 font-bold mx-2">/</span>
                </li>
                <li>
                  <Link to="#" className="text-blue-500 font-bold text-xl   hover:text-green-600">
                    Library
                  </Link>
                </li>
                <li>
                  <span class="text-blue-500 font-bold   mx-2">/</span>
                </li>
                <li>
                  <Link to="#" className="text-blue-500 font-bold text-xl  hover:text-green-600">
                    Data
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </nav>
      <section className="container w-3/4 h-screen bg-gray-100 mx-auto">
       
        <h3 className="text-center font-mono text-2xl my-5">
          Find Eye glass according to your Faceshape
        </h3>

        <div className="flex items-center  justify-evenly">
          <div className="flex flex-col  justify-center h-48 w-2/5">
            <div className="mb-3 xl:w-96">
              <select
                value={shape}
                onChange={handleSelectChange}
                className="form-select form-select-lg h-36
                block
                w-full
                px-2
                py-1
                text-2xl
                font-normal
                text-gray-400
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded-lg
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label=".form-select-sm example"
              >
                <option selected className="">
                  Select Your Face Shape
                </option>
                <option value="Round">Round</option>
                <option value="Square">Square</option>
                <option value="Oval">Oval</option>
                <option value="Oblong">Oblong</option>
                <option value="Heart">Heart</option>
              </select>
            </div>
            <Link className="text-blue-600" to="/tools/1/Faceshape-detection">
              {" "}
              Don't know? Find From Here
            </Link>
          </div>
          <div className="flex  flex-col w-2/5">
            <input
              className=" mb-4 p-10 rounded h-3"
              placeholder="Enter Your age"
            ></input>
            <select
              value={gender}
              onChange={handleSelectChange2}
              className="form-select form-select-lg h-12
                block
                w-full
                px-2
                py-1
                text-2xl
                font-normal
                text-gray-400
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded-lg
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option selected className="">
                Select Your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleonlcick}
          className="flex mx-auto w-suto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Suggest Eye Glass
        </button>
        {Spin ? <Spinner /> : ""}
        {result === 1 ? (
          <>
            <div className="bg-white mt-5 h-3/5 ">
              <img
                className="m-auto"
                src={image_list[shape]["1"]}
                alt="square 1"
              />
              <div className="flex flex-wrap">
                <img
                  className="m-auto w-1/4"
                  src={image_list[shape][gender]}
                  alt="square 2"
                />
                <img
                  className="m-auto w-3/4"
                  src={image_list[shape]["2"]}
                  alt="square 2"
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
