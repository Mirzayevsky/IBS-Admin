import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const postReducer = createSlice({
    name:"postData",
    initialState:{
        data:[]
    },
    reducers:{
        postData:(state,action) => {
            state.data.push(action.payload)
        }
    }
});


export function PostData (data){
    console.log(data)
    return (dispatch) => {

        axios({
            url:'https://store-management-backend-app.herokuapp.com/api/v1/product',
            method:'POST',
            data
        }).then((res) => {
            alert('ketdi')
                dispatch({
                    type: postData,
                    payload:res.data
                })
            }).catch(err=>{
                alert(err)
        })
    }
}
export const {postData} = postReducer.actions;
export default postReducer.reducer;
