/**
 * 加密
 * @param {string}
 */
export const checkEmptyObj = obj => {
  return JSON.stringify(obj)==='{}'||JSON.stringify(obj)==='[]'
}
export const dateFormat =(date, fmt) =>{
  if (!isNaN(date) && date !== null && date !== '' && date !== 0) {
    let dateNumber = Number(date)
    let str = new Date(dateNumber)
    let obj = {
      'M+': str.getMonth() + 1,
      'd+': str.getDate(),
      'h+': str.getHours(),
      'm+': str.getMinutes(),
      's+': str.getSeconds(),
      'q+': Math.floor((str.getMonth() + 3) / 3),
      S: str.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (`${str.getFullYear()}`).substr(4 - RegExp.$1.length)
      )
    }
    for (let k in obj) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? obj[k]
            : (`00${obj[k]}`).substr((`${obj[k]}`).length)
        )
      }
    }
    return fmt
  }
  return ''
}
// 工单状态转文字
export const sheetStateToString=(sheetState)=>{
  let sheetStateName=''
switch (sheetState) {
  case 1:
    sheetStateName='待提交'
  break;
  case 2:
    sheetStateName='待处理'
  break;
  case 3:
    sheetStateName='处理中（未到场）'
  break;
  case 4:
    sheetStateName='处理中（已到场）'
  break;
  case 5:
    sheetStateName='审批中'
  break;
  case 6:
    sheetStateName='复核中'
  break;
  case 7:
    sheetStateName='复核中'
  break;
  case 8:
    sheetStateName='处理完结-待整改'
  break;
  case 9:
    sheetStateName='原因查找中'
  break;
  case 10:
    sheetStateName='待确认整改结果'
  break;
  case 11:
    sheetStateName='核销中'
  break;
  case 12:
    sheetStateName='已退回'
  break;
  case 13:
    sheetStateName='已完结'
  break;
  case 14:
    sheetStateName='已取消'
  break;
  default:
    break;
}
return sheetStateName
}
// 工单大类
export const orderTypeToString=(sheetVariety)=>{
  let str=''
  switch (sheetVariety) {
    case 1:
      str='普通工单'
      break;
      case 2:
        str='重复工单'
      break;
      case 3:
          str='加单'
      break;
    default:
      break;
  }
return str
}