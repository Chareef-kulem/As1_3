import axios from "axios";

const api ='https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';

let inprice : number = 290000;
let amounttoken : number = 0;


axios.get(api).then(response =>{
  const asks = response.data.asks;

  asks.map((usdtAmount :any)=>{
    calculateOutputAmount(usdtAmount);
  });

  console.log(`Amount Token buy : ${amounttoken}`)

});

function calculateOutputAmount(usdtAmount:any){

  let price : number = +usdtAmount[0];
  let btc : number = +usdtAmount[1];

  console.log('Price USDT :',price)
  console.log('Amount Token :',btc)

  if(inprice>(price*btc)){
    amounttoken = btc+amounttoken;
    inprice = inprice - (price*btc);
  }
  else if (inprice<price){
    let token : number = inprice/price;
    if(btc >= token){
      amounttoken = token+amounttoken;
      inprice = 0;
    }
    else{
      let lastprice : number = (inprice*btc)/token;
      amounttoken = btc + amounttoken;
      inprice = lastprice;
    }
  }
  


}

//old ver for fix leter
// import axios from "axios";
// //var prompt = require("prompt");
// const url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';

// let innum : number = 30000;
// let tk : number = 0;


// async function func() {
//   let response = await axios.get(url);
//   let updat = await response.data.lastUpdateId; //เวลาที่อัพเดท
//   let Bids = await response.data.bids; //ข้อมูลราคาผู้ซื้อ
//   let Asks =await response.data.asks; //ข้อมูลราคาผู้ขาย
  
//   //console.log(Bids.length) //แสดงจำนวนของข้อมูล Bids

//   Bids.map((item : any) => {
//     console.log('price',+item[0]) //แสดงราคา
//     console.log('amount',+item[1]) //แสดงจำนวนเหรียญ
//     calculateOutputAmount(item);
//     // console.log(item)

//   });
//   console.log(`Output BTC: ${tk}`);

//   function calculateOutputAmount(item:any){
//     let price : number = parseFloat(item[0]);
//     let token : number = parseFloat(item[1]);
//     //console.log(p,t)
//     if(innum > price){
//       tk = token + tk;
//       price= innum-price;
//       console.log(price)
//       console.log(token)
//   }
//   }
// }
// func()