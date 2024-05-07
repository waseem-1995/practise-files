import React from 'react'
import MainCard from './MainCard'

const Sprint1day3 = () => {
    const dataAmazon = {
        date: '28/10/2020',
        logo: 'https://3.bp.blogspot.com/-WiRcMnvbSYA/XFmKhavuiAI/AAAAAAAAHqo/w6iRalrC2XoCzCra3HF8NAWijme0nFjPQCK4BGAYYCw/s1600/Amazon%2BLogo.png',
        btn: 'Case Study',
        heading: 'Amazon Gift',
        heading2: 'Pay',
        subhead: 'Desktop - Mobile'
      }
    
      const dataApple = {
        date: '17 Sep 2020',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48KOs7yz_Evd0AaqorAMK9usmJXjxicQCY_GSqTSNTePBpIC6Zb9uGEdEyv3gg5FXHck&usqp=CAU',
        btn: 'Case Study',
        heading: 'Apple Gift',
        heading2: 'Pay',
        subhead: 'MacOS - Mobile'
      }
  return (
    <div>
        <MainCard color={'#ff9900'} data={dataAmazon}/>
        <MainCard color={'#ff9900'} data={dataAmazon}/>
        <MainCard color={'#FFFFFF'} data={dataApple}/>
    </div>
  )
}

export default Sprint1day3