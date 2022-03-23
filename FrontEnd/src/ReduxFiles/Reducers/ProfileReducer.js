const initialVal={};

const ProfileReducer = (state = initialVal, action) => {
    switch (action.type) {
        case "SHOwDP":
            return action.payload;
        default:
            return state;
    }

}

export {ProfileReducer}