import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import Spinner from "./../Mini/Spinner";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import image_list from "./EyeGlassImageList";
import Breadcrumb from "./ToolComponents/Breadcrumb";

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
    showResult(0);
  }

  function handleSelectChange2(event) {
    setGender(event.target.value);
    console.log(event.target.value);
    showResult(0);
  }


  return (
    <>
<Breadcrumb/>
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
