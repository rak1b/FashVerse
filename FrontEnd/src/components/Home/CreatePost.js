// import Button from './../Mini/Button';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import { useState, useEffect } from 'react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ReactHtmlParser from "react-html-parser"
// import { Navigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ApiClient from './../../API/ApiClient';
// import { useCookies } from 'react-cookie';
// import { useDispatch, useSelector } from 'react-redux';
// import { CurrentUser } from '../../ReduxFiles/Actions/CurrentUserAction';
// import axios from 'axios';
// const { REACT_APP_API_URL } = process.env;
// const CreatePost = () => {
//     const [Content, setContent] = useState('');
//     const [Post, setPost] = useState([]);
//     const [token, settoken] = useCookies();
//     const dispatch = useDispatch();


//     const handleChange = (e, editor) => {
//         const data = editor.getData();
//         setContent((data));
//     }


//     const GetUser = () => {

//         if (token["token"]) {
//             ApiClient()
//                 .get(`/api/Profile/${token["token"]}/`)
//                 .then((response) => {
//                     console.log(response.data.data.user);
//                     dispatch(CurrentUser(response.data.data.user));


//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
//         }
//     }

//     const current_user = useSelector(state => state.CURRENT_USER);


//     const CreatePost = () => {
//         // const url = `${URL}/api/posts/`;
//         const url = `http://localhost:8000/api/posts/`;
//         const data = {
//             user: current_user,
//             content: Content,
//         };


//         console.log(data);

//         axios
//             .post(url, data)
//             .then((response) => {
//                 console.log(response.data);
//                 toast.success(`Post Created Successfully`)
//                 setContent('')

                
//             })
//             .catch(function (error) {
//                 console.log(error);
//                 toast.error(`Error occured,please try again!`)

//             });


//     }


//     useEffect(() => {
//         GetUser();
//     }, [])

//     const SubmitPost = () => {

//         CreatePost();
//     }

        
    
//      const getPosts = () => {

//             ApiClient()
//                 .get(`/api/posts/`)
//                 .then((response) => {
    
//                     console.log(response.data);
//                     setPost(response.data);

//                 })
//                 .catch(function (error) {
//                     console.log(error);
                
    
//         }, []);
//     }


//     useEffect(() => {
//         getPosts();
      
//     }, [])





    


//     return (
//         <div className=' rounded-lg full mx-auto'>
//             <h2 className='my-2 font-bold text-pyBlue-400'>Share Your Thought..</h2>

//             <div className="shadow-2xl rounded-lg w-full mx-auto mt-5 p-5">
//                 {/* <textarea className=" rounded-lg p-5 w-full" name="" id="" cols="30" rows="2" placeholder="Share Your Problem.."></textarea> */}
//                 {/* <button className='bg-pyBlue-500 w-auto py-2 rounded-lg text-gray-200 font-bold hover:bg-pyBlue-400 float-right'>Submit</button> */}

//                 <CKEditor editor={ClassicEditor} data={Content} onChange={handleChange} />
//                 <button onClick={SubmitPost} className='bg-pyBlue-500 w-auto p-2 rounded-lg text-gray-200 font-bold hover:bg-pyBlue-400 '>Post to community</button>

//                 {ReactHtmlParser(Content)}
//                 {Content}

//             </div>

//             {/* <div className=" rounded-lg w-full mx-auto mt-5">
//                 <h2 className='mt-10 font-bold text-pyBlue-400'>See recent Posts : </h2>
//             </div>

//             {Post.map((posts) => {
//                 return (
//                     <a className='' href={`${REACT_APP_API_URL}/posts/${posts.id}`}>
//                     <div className="w-full mx-auto mt-5  shadow-md rounded-xl p-5 flex ">
                        
//                         <div className='w-3/4'>
//                             <h1 className="font-semibold text-3xl text-pyBlue-400 mb-2">{posts.user}</h1>
//                             <p className="text-gray-500 mb-1">{posts.content}</p>

//                         </div>


//                     </div>
//                     </a>
//                 )
//             })} */}
          
            
//             <ToastContainer
//                 position="top-center"
//                 autoClose={2000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//             />



//         </div>
//     )
// }

// export default CreatePost

