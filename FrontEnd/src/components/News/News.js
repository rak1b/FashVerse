import React from 'react'
import { useEffect } from 'react';
import ApiClient from './../../API/ApiClient';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { NewsActions } from '../../ReduxFiles/Actions/NewsActions';
import { useSelector } from 'react-redux';
import ProfileModal from './../Profile/Profile';

const News = () => {
    const [token, settoken] = useCookies();
    const { REACT_APP_API_URL } = process.env;

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
        <div className="bg-gray-50">
            <h2 className='text-5xl  text-center  font-bold mb-10 text-gray-400'>News You Might Want To Hear From Us</h2>

            {NewsState.map((news) => {
                return (
                    <a className='' href={`${REACT_APP_API_URL}/News/${news.id}`}>
                    <div className="mx-40 mb-20 shadow-md rounded-xl p-5 flex ">
                        <div className='w-1/4'>
                            <img className="h-36 w-40 rounded" src={`${REACT_APP_API_URL}${news.image}`} alt="" />

                        </div>
                        <div className='w-3/4'>
                            <h1 className="font-semibold text-3xl text-pyBlue-400 mb-2">{news.title}</h1>
                            <p className="text-gray-500 mb-1">{news.description.substring(0, 200)}...</p>
                            <p>{news.added}</p>
                            {/* <a className='' href={`${REACT_APP_API_URL}/News/${news.id}`}>View More</a> */}

                        </div>


                    </div>
                    </a>
                )
            })}

        </div>
    )
}

export default News
