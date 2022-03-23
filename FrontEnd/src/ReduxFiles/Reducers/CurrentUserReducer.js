const initialVal=0;

const CurrentUserReducer = (state = initialVal, action) => {
    switch (action.type) {
        case "CURRENT_USER":
            return action.payload;
        default:
            return state;
    }

}

export {CurrentUserReducer}