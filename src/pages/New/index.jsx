import { Button, DatePicker, Input, NavBar } from "antd-mobile";
import Icon from "@/components/Icon";
import './index.scss'
import classNames from "classnames";
import { billListData } from '@/contants'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addBillList } from "@/store/modules/billStore";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const New = () => {
  const navigate = useNavigate()
  // 準備一個控制收入和支出的狀態
  const [billType, setBillType] = useState('pay')
  // 收集金額
  const [money, setMoney] = useState(0)
  const moneyChange = (value) => {
    setMoney(value)
  }
  // 存所選時間
  const [date,setDate] = useState(new Date())
  // 收集帳單類型
  const [useFor, setUseFor] = useState('')
  
  const dispatch = useDispatch()
  const saveBill = () => {
    //   收集表單數據
    const data = {
      type: billType,
      money: billType === 'pay' ? -money : +money,
      date: date,
      useFor: useFor
    }
    dispatch(addBillList(data))
  }
  
  const [dateVisible,setDateVisible] = useState(false) 
  
  const dateConfirm = (value) => {
    setDateVisible(false)
    setDate(value)
  }
  
  return (
    <div className="keepAccounts">
      <NavBar className="nav" onBack={() => navigate(-1)}>
        記一筆
      </NavBar>
      <div className="header">
        <div className="kaType">
          <Button
            shape="rounded"
            className={classNames(billType === 'pay' ? 'selected' : '')}
            onClick={() => setBillType('pay')}
          >
            支出
          </Button>
          <Button
            shape="rounded"
            className={classNames(billType === 'income' ? 'selected' : '')}
            onClick={() => setBillType('income')}
          >
            收入
          </Button>
        </div>
        <div className="kaFormWrapper">
          <div className="kaForm">
            <div className="date">
              <Icon type="calendar" className="icon"/>
              <span 
                className="text" 
                onClick={()=>setDateVisible(true)}
              >
                {dayjs(date).format('YYYY-MM-DD')}
              </span>
              {/*時間選擇器*/}
              <DatePicker
                className="kaDate"
                title="記帳日期"
                max={new Date()}
                visible={dateVisible}
                onConfirm={dateConfirm}
                onCancel={()=>setDateVisible(false)}
              />
            </div>
            <div className="kaInput">
              <Input
                className="input"
                placeholder="0.00"
                type="number"
                value={money}
                onChange={moneyChange}
              />
              <span className="iconYuan">元</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="kaTypeList">
        {/*數據區*/}
        {
          billListData[billType].map(item => {
            return (
              <div className="kaType" key={item.type}>
                <div className="title">{item.name}</div>
                <div className="list">
                  {
                    item.list.map(item => {
                      return (
                        <div
                          className={classNames('item', useFor === item.type ? "selected" : "")}
                          key={item.type}
                          onClick={() => setUseFor(item.type)}
                        >
                          <div className="icon">
                            <Icon type={item.type}/>
                            <div className="text">{item.name}</div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="btns">
        <Button className="btn save" onClick={saveBill}>保存</Button>
      </div>
    </div>
  )
}

export default New