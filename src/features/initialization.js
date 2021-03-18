import { createSlice } from '@reduxjs/toolkit'; //Redux工具包
const initialState = {
    loginInfo: 1
}
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        initData(state, { payload }) {
            state.loginInfo = payload;
        }
    }
})
export const dataList = () => async (dispatch, getState) => {
    const { loginInfo } = getState().app;
    console.log(loginInfo, "loginInfo")
    await dispatch(initData(loginInfo + 1));
}


const { initData } = appSlice.actions
export {
    initData
}

export default appSlice.reducer