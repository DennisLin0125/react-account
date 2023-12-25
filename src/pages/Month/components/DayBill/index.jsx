import { useMemo } from "react";
import classNames from "classnames";
import './index.scss'

const DayBill = ({date,billList}) => {
  const dayResult = useMemo(() => {
    if (billList){
      const pay = billList.filter(item=>item.type==='pay').reduce((a,c)=>a+c.money,0)
      const income = billList.filter(item=>item.type==='income').reduce((a,c)=>a+c.money,0)
      return{
        pay,
        income,
        total: pay + income
      }
    }else {
      return{
        pay:0,
        income:0,
        total: 0
      }
    }
  }, [billList]);
  
  return(
    <div className={classNames('dailyBill')}>
      <div className="header">
        <div className="dateIcon">
          <span className="date">{date}</span>
        </div>
      </div>
      <div className="oneLineOverview">
        <div className="pay">
          <span className="type">支出</span>
          <span className="money">{dayResult.pay.toFixed(2)}</span>
        </div>
        <div className="income">
          <span className="type">收入</span>
          <span className="money">{dayResult.income.toFixed(2)}</span>
        </div>
        <div className="balance">
          <span className="money">{dayResult.total.toFixed(2)}</span>
          <span className="type">結餘</span>
        </div>
      </div>
    </div>
  )
}

export default DayBill