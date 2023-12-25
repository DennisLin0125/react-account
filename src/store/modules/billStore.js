import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name:'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    }
  }
})

const { setBillList } = billStore.actions

const getBillList = () => {
  return async (dispatch) => {
    const result = await axios.get(' http://localhost:3004/ka')
    dispatch(setBillList(result.data))
  }
}

export { getBillList }

const billReducer = billStore.reducer

export default billReducer