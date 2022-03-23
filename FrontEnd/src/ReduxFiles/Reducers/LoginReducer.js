const initialVal=0;

const LoginStatusReducer = (state = initialVal, action) => {
    switch (action.type) {
        case "LOGIN":
            return 1;
        case "LOGOUT":
            return 0;
        default:
            return state;
    }

}

export {LoginStatusReducer}
