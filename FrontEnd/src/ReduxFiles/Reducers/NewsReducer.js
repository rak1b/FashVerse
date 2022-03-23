const initialVal=[];

const NewsReducer = (state = initialVal, action) => {
    switch (action.type) {
        case "NEWS":
            return action.payload;
        default:
            return state;
    }

}

export {NewsReducer}
