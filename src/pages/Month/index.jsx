import {NavBar,DatePicker} from "antd-mobile";
import './index.scss'
import { useMemo, useState } from "react";
import classNames from "classnames";
import dayjs from 'dayjs'
import { useSelector } from "react-redux";
import _ from 'lodash'

const Month = () => {
  // 按月分組
  const billList = useSelector(state => state.bill.billList)
  
  const monthGroup = useMemo(() => {
    return _.groupBy(billList,(item)=>dayjs(item.date).format('YYYY-MM'))
  }, [billList]);
  
  console.log('@',monthGroup)
  
  // 控制彈框
  const [dataVisible,setDataVisible] = useState(false)
  // 控制時間
  const [currentDate,setCurrentDate] = useState(()=>dayjs(new Date()).format('YYYY-MM'))
  
  const onConfirm = (date) => {
    setDataVisible(false)
    const formatDate = dayjs(date).format('YYYY-MM')
    setCurrentDate(formatDate)
  }
  
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        本月收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 時間切換域 */}
          <div className="date" onClick={()=>setDataVisible(true)}>
            <span className="text">
              {currentDate + ''}月帳單
            </span>
            <span className={classNames('arrow',dataVisible && 'expand')}></span>
          </div>
          {/* 統計域 */}
          <div className="twoLineOverview">
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">結餘</span>
            </div>
          </div>
          {/* 時間 */}
          <DatePicker
            className="kaDate"
            title="記帳日期"
            precision="month"
            visible={dataVisible}
            max={new Date()}
            onCancel={()=>setDataVisible(false)}
            onConfirm={onConfirm}
            onClose={()=>setDataVisible(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default Month