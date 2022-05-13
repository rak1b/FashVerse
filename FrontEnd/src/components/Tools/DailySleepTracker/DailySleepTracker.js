import React, { useState } from "react";
import { SideNav } from "../../Home/SIdeNav";
import { LinkInfo_HomePage } from "../../NavBar/LInkInfo";
import { useCookies } from "react-cookie";
import Breadcrumb from "./../ToolComponents/Breadcrumb";
import { useEffect } from "react";
import TimePicker from "react-time-picker";
import ApiClient from "../../../API/ApiClient";

// import datetime as dt
// import ApiClient from './../../../API/ApiClient';
// start="22:35:00"
// end="12:50:00"
// start_dt = dt.datetime.strptime(start, '%H:%M:%S')
// end_dt = dt.datetime.strptime(end, '%H:%M:%S')
// diff = (end_dt - start_dt)
// print(diff)
// print(str(diff).split(" "))
// hour,min,sec = str(diff).split(" ")[2].split(":")
// print(hour,min,sec)
// diff.seconds/60
// print(diff)

const DailySleepTracker = () => {
  const [CurrentUser, SetCurrentUser] = useCookies("");
  const [items, setitem] = useState();
  const [Date, setDate] = useState();
  const [sleep, setSleep] = useState("23:00");
  const [WakeUp, setWakeUp] = useState("7:00");
  const [Loaded, setLoaded] = useState(0);
  const [Refresh, setRefresh] = useState(0);

  const grab_date = (e) => {
    setDate(e.target.value);

    console.log(e.target.value);
  };

  useEffect(() => {
    ApiClient()
      .get("/api/SleepTime/" + CurrentUser["username"] + "/")
      .then((response) => {
        console.log("responese.......");
        console.log(response.data);
        setitem(response.data);
        setLoaded(1)
        // console.log(response.data);
        // setcontent(response.data[14].content)
        // setfoodResult(response.data.foods[0].foodNutrients);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Refresh]);

  const data = {
    username: CurrentUser["username"],
    date: Date,
    sleep_time: sleep,
    wake_time: WakeUp,
    total_sleep: "",
  };

  const UploadSleepTime = () => {
    // setitem((useState_array) => {
    //   return [
    //     ...useState_array,data
        
    //   ];
    // });
    // setitem[...items,data]
    ApiClient()
      .post("/api/SleepTime/", data)
      .then((response) => {
        console.log(response.data);
    setRefresh(!Refresh)

        // setitem("");
      })
      .catch(function (error) {
        console.log(error);
        // toast.error(`Error occured,please try again!`);
      });
  };

  return (
    <>
      <div className=" w-full">
        <Breadcrumb />

        <div className="">
          <h4 className="text-center p-5  uppercase space-x-5 shadow-lg text-xl font-semibold bg-white text-blue-400 ">
            Daily Sleep Tracker
          </h4>
          <div className="flex bg-white items-center   shadow-lg">
            <div className=" ml-5 flex bg-white  p-5 items-center      ">
              <h2 className="text-gray-400 mr-8 ">Enter Date:</h2>

              <input
                value={Date}
                onInput={grab_date}
                className="gray-400 border text-gray-500 p-1 lg:px-24 focus:shadow-outline"
                type="date"
              />
            </div>
          </div>

          <div className="bg-white  p-5 flex flex-wrap justify-between items-center  shadow-lg rounded-b-xl">
            <div className="flex bg-white  p-5 items-center      ">
              <h2 className="text-gray-400 mr-8 ">Enter Sleep time:</h2>

              <TimePicker onChange={setSleep} value={sleep} />
            </div>
            <div className="flex bg-white  p-5 items-center      ">
              <h2 className="text-gray-400 mr-8 ">Enter Wake Up time:</h2>

              <TimePicker onChange={setWakeUp} value={WakeUp} />
            </div>

            <p
              onClick={UploadSleepTime}
              className=" rounded-full w-12 h-12 flex justify-center items-center hover:bg-green-600 bg-green-400 text-gray-100 "
            >
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
        </div>

        <div className="overflow-x-auto  my-10 font-semibold bg-white">
          <h2 className="text-blue-600 font-mono uppercase">Sleep Records:</h2>
          <table
            className={
              !Loaded ? "hidden min-w-full  font-mono border-2 " : "min-w-full font-mono border-2"
            }
          >
{/* 
'user':user.id,
            'date':request.data['date'],
            'sleep_time':sleep_time,
            'wake_time':wake_time,
            'total_sleep_hour':hour,
            'total_sleep_min':min, */}
            <thead className="border-2 border-pyblue-600">
              <tr>
                <th
                  scope="col"
                  class="text-sm font-medium border-2 border-pyblue-600 text-gray-900 px-6 py-4 text-left"
                >
                  Date
                </th>

                <th
                  scope="col"
                  class="text-sm font-medium border-2 border-pyblue-600 text-gray-900 px-6 py-4 text-left"
                >
                  Sleep Time
                </th>

                <th
                  scope="col"
                  class="text-sm font-medium border-2 border-pyblue-600 text-gray-900 px-6 py-4 text-left"
                >
                  Wake Time
                </th>

                <th
                  scope="col"
                  class="text-sm font-medium border-2 border-pyblue-600 text-gray-900 px-6 py-4 text-left"
                >
                  Total Sleep
                </th>
              </tr>
            </thead>
            <tbody>
              {Loaded &&
                items.map((current) => {
                  return (
                    <>
                      <tr className="border-2 border-pyblue-600 ">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {current.date}
                        </td>
                        <td className="px-6 py-4 border-2 border-pyblue-600 whitespace-nowrap text-sm font-medium text-gray-900">
                          {current.sleep_time}
                        </td>

                        <td className="px-6 py-4 border-2 border-pyblue-600 whitespace-nowrap text-sm font-medium text-gray-900">
                          {current.wake_time}
                        </td>

                        <td className="px-6 py-4 border-2 border-pyblue-600 whitespace-nowrap text-sm font-medium text-gray-900">
                          <span className={current.total_sleep_hour>5?"text-green-600":"text-red-600"}>{current.total_sleep_hour} Hour {current.total_sleep_min} Minute</span>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>

          {Loaded && items === undefined ? (
            <h2>No result found ,please try again</h2>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default DailySleepTracker;
