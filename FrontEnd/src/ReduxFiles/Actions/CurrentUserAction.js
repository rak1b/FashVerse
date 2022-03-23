const CurrentUser = (user) => {
    return  {
      type:'CURRENT_USER',
      payload:user
    }
  }
  
export {CurrentUser}