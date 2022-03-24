import React, { useEffect, useState } from "react";
import Percentage from './ToolComponents/Percentage';
import DragNDrop from './ToolComponents/DragNDrop';
import face_cart from "../../images/female.jpg"
import axios from "axios";
import RandomString from "../RandomString/RandomString";
import URL from "../../BaseUrl/Url";
import Spinner from './../Mini/Spinner';

const FaceShapeFind = () => {
    const [file, setFiles] = useState([]);
    const [Spin, setSpin] = useState(0);

    const [errorOrsuccess, SeterrorOrsuccess] = useState('green');
    const [Result, setResult] = useState({ Shape: "Heart", Heart: 46.36, Oval: 0.87, Oblong: 31.99, Round: 10.04, Square: 10.74 });
    console.log(Result);
    const [showUploadPlace, SetshowUploadPlace] = useState(0)
    const UploadImage = () => {
        var formData = new FormData();
        // var file = e.target.files[0];
        // console.log(image.name);
        const newFileName = RandomString(10) + file.name
        formData.append('face', file, newFileName)
        formData.append('name', 'Here is my name')
        // console.log(formData)
        const url = `${URL}/api/face-shape/`;


        axios.post(url, formData).then((response) => {



            console.log(response.data);
            setTimeout(() => {
                setSpin(0)


            }, 1000);

            if (response.data.Shape.length > 10) {
                SeterrorOrsuccess('red')
            } else {
                SeterrorOrsuccess('green')


            }
            setResult({
                Shape: response.data.Shape,
                Heart: response.data.Heart,
                Oval: response.data.Oval,
                Oblong: response.data.Oblong,
                Round: response.data.Round,
                Square: response.data.Square
            })

        }).catch(function (error) {
            console.log(error);


        });
    }


    const toggleUploadPlace = () => {
        SetshowUploadPlace(!showUploadPlace)
    }

    console.log('log from face:', file);


    return (
        <>
            <section className="container w-3/4 h-screen bg-gray-100 mx-auto">
                <h2 className=' mx-auto text-6xl text-center bg-green-500 p-5 rounded-b-2xl text-white ' style={{ fontFamily: `"Cormorant Garamond"` }}>Face Shape App</h2>

                <div style={{ "backgroundcolor": "rgba(0, 0, 0, 0)" }}>
                    <div class="container px-5 py-24 mx-auto" style={{ "cursor": "auto" }}>
                        <div class="lg:w-4/5 mx-auto flex flex-wrap">
                            {showUploadPlace ? <DragNDrop SetFilesForOrginal={setFiles} /> :
                                <img alt="face" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={face_cart} style={{ "cursor": "auto" }} />}
                            {/* <UploadPlace/> */}
                            <div class="relative lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" style={{ "cursor": "auto" }}>
                                <h2 class="text-sm title-font text-gray-500 tracking-widest" style={{ "cursor": "auto" }}>Your Face Shape is</h2>



                                {!Spin && (<><div class={`bg-gray-50 rounded-lg py-5 px-6 mb-3 text-4xl text-${errorOrsuccess}-500 inline-flex items-center w-full`} role="alert">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-circle-right" className="w-10 h-10 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
                                    </svg>
                                    {Result.Shape}
                                </div>


                                    <h2 class="text-sm title-font text-gray-500 tracking-widest mb-4" style={{ "cursor": "auto" }}>
                                        Other Possibilities:
                                    </h2>
                                </>)
                                }


                                {!Spin && (
                                    Object.keys(Result).map((current) => {
                                        console.log(current);
                                        console.log(Object.keys(Result)[0]);
                                        console.log(Result.Shape);
                                        return (

                                            <>


                                                {(current === "Shape" || current === Result.Shape || Result.Shape.length > 10) ? "" :
                                                    <Percentage Shape={current} Percent={`${Result[current]}`} />}
                                            </>
                                        )


                                    }))
                                }

                                {
                                    Spin ? <Spinner /> : ''
                                }



                                {/* <Percentage Shape="Heart" Percent='5' />
                                <Percentage Shape="" Percent='4.5' />
                                <Percentage Shape="Oval" Percent='25' />
                                <Percentage Shape="Heart" Percent='15' /> */}



                                <div class="flex absolute bottom-0 right-0">
                                    {showUploadPlace === 0 ? <button onClick={() => {
                                        console.log('CLicked find button');
                                        //  SetshowUploadPlace(1)
                                        toggleUploadPlace()

                                        console.log(showUploadPlace);
                                    }}

                                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Find Your Face Shape</button>
                                        : <>
                                            <button onClick={() => {
                                                UploadImage()
                                                setSpin(1)

                                            }}

                                                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Upload</button>


                                        </>

                                    }


                                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            {/* <UploadPlace/>
            <div>{thumbs}</div> */}

        </>
    );
};




export default FaceShapeFind;







