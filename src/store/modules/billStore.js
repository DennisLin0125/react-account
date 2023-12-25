import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    },
    //   添加帳單方法
    addBill(state, action) {
      state.billList.push(action.payload)
    }
  }
})

const {
  setBillList,
  addBill,
} = billStore.actions

const getBillList = () => {
  return async (dispatch) => {
    const result = await axios.get(' http://localhost:3004/ka')
    dispatch(setBillList(result.data))
  }
}

const addBillList = (data) => {
  return async (dispatch) => {
    const result = await axios.post(' http://localhost:3004/ka',data)
    dispatch(addBill(result.data))
  }
}

export { getBillList,addBillList }

const billReducer = billStore.reducer

export default billReducer