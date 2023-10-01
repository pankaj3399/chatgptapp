import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chats: [],
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        chatLogs: (state, action) => {
            // console.log(action.payload);
            state.chats = action.payload;
        },
    }
})

export const { chatLogs } = chatSlice.actions;
export default chatSlice.reducer;