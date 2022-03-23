const IncrementFunc = () => {
  return  {
    type:'INCREMENT'
  }
}


const DecrementFunc = () => {
  return  {
    type:'DECREMENT'
  }
}


const heroActions = (username) => {
  return  {
    type:'USER_FROM_TOKEN',
    payload:username
  }
}


export {IncrementFunc,DecrementFunc,heroActions}















// const HeroActions = (Username) => {
//     return {
//       type: "USER_FROM_TOKEN",
//       payload:Username

      
//     };
//   };
  
//   export default HeroActions;
  