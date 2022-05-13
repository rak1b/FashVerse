import React from 'react'
import { useEffect } from 'react';
import ApiClient from './../../API/ApiClient';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { NewsActions } from '../../ReduxFiles/Actions/NewsActions';
import { useSelector } from 'react-redux';
import ProfileModal from './../Profile/Profile';
import { SideNav } from '../Home/SIdeNav';
import { LinkInfo_HomePage } from '../NavBar/LInkInfo';

const News = () => {
    const [token, settoken] = useCookies();
    const { REACT_APP_API_URL } = process.env;
    const [CurrentUser, SetCurrentUser] = useCookies("");

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('In news');
        ApiClient()
            .get(`/api/News/`)
            .then((response) => {

                dispatch(NewsActions(response.data));
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    const NewsState = useSelector(state => state.NEWS)
    console.log(NewsState);

    return (
        <div className="w-full h-screen flex flex-row flex-wrap justify-center  ">
  
  
  <div className="bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 hidden flex flex-row flex-wrap">
    <div className="w-full text-right"><button className="p-2 fa fa-bars text-4xl text-gray-600"></button></div>
  </div>
  
   <div className="w-0 md:w-1/4 lg:w-1/6 h-0 md:h-screen overflow-y-hidden bg-gray-50  shadow-lg">

    <SideNav LinkInfo={LinkInfo_HomePage} CurrentUser={CurrentUser["username"]}/>

  </div> 

  {/* <NavLinks LinkInfo={LinkInfo_Logged_in}/> */}
  
  <div className="lg:w-3/5 sm:w-fullp-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased shadow-sm">
    
  <div className="bg-gray-50">
            <h2 className='text-5xl  text-center  font-bold mb-10 text-gray-400'>News From Fashverse</h2>

            {NewsState.map((news) => {
                return (
                    <a className='' href={`${REACT_APP_API_URL}/News/${news.id}`}>
                    <div className="mx-5 mb-20 shadow-md rounded-xl p-5 flex ">
                        <div className='w-1/4'>
                            <img className="h-36 w-40 rounded" src={`${REACT_APP_API_URL}${news.image}`} alt="" />

                        </div>
                        <div className='w-3/4'>
                            <h1 className="font-semibold text-3xl text-pyBlue-400 mb-2">{news.title}</h1>
                            {/* <p className="text-gray-500 mb-1">{news.description.substring(0, 200)}...</p> */}
                            <p className="text-gray-500 mb-1">{news.description}</p>
                            {/* <p>{news.added}</p> */}
                            {/* <a className='' href={`${REACT_APP_API_URL}/News/${news.id}`}>View More</a> */}

                        </div>


                    </div>
                    </a>
                )
            })}

        </div>

  </div>
  </div>
        
    )
}

export default News
