import { Outlet } from "react-router-dom";
import { Button } from "antd-mobile";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getBillList } from "@/store/modules/billStore";

const Layout = () => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch]);
  
  return (
    <div>
      <Outlet/>
      我是layout
      {/* 測試 */}
      <Button color="primary">測試全局</Button>
      <div className='purple'>
        <Button color="primary">測試局部</Button>
      </div>
    </div>
  )
}

export default Layout