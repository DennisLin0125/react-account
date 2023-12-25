import billReducer from "@/store/modules/billStore";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer:{
    bill:billReducer
  }
})

export default store