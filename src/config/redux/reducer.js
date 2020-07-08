import { combineReducers } from "redux";

const initialState = {
    name: 'sastro meong',
};

const initialStateRegister = {
    title: 'Register Page',
    desc: 'Ini adalah halaman Register',
}

const RegisterReducer = (state = initialStateRegister, action) => {
    return state;
}

const initialStateLogin = {
    info: 'Tolong masukkan password anda',
    isLogin: true,
}

const LoginReducer = (state = initialStateLogin, action) => {
    return state;
}

// const reducer = (state = initialState, action) => {
//     return state;
// };

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
})

export default reducer;