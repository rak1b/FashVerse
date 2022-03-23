// const initialVal = 0;

// const HeroReducer = (state = initialVal, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }

// }

const initialVal='Unknown';

const HeroReducer = (state = initialVal, action) => {
    switch (action.type) {
        case "USER_FROM_TOKEN":
            return action.payload;
        default:
            return state;
    }

}

export {HeroReducer}
