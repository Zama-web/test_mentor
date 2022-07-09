import {createSlice} from '@reduxjs/toolkit'


const titleSlice = createSlice({
    name: 'titleSlice',
    initialState: {
        data: '',
        title: ''
    },
    reducers: {
        addData(state, action) {
            state.data = action.payload
        },
        newTitle(state, action) {
            state.title = action.payload
        }
    }
})

export const {addData, newTitle} = titleSlice.actions
export default titleSlice.reducer