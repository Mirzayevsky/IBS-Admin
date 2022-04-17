import  {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const deleteReducer = createSlice({
    name:"deleteData",
    initialState:{
        deleteData:[]
    },
    reducers:{
        deleteData:(state,action) => {
            state.deleteData = action.payload
        }
    }

});

export function DeleteData (id) {
    return(dispatch) => {
        axios.delete("https://store-management-backend-app.herokuapp.com/api/v1/product/" + id)
            .then((res) => {
                dispatch({
                    type:deleteData.type,
                    payload:res.data
                })
            })
    }
}

export const {deleteData} = deleteReducer.actions;
export default deleteReducer.reducer;