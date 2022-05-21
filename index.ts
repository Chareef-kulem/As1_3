import axios from "axios";
var prompt = require("prompt");
const url = 'https://api1.binance.com/api/v3/depth?symbol=BTCUSDT';


async function func() {
  let response = await axios.get(url);

  let updat = await response.data.lastUpdateId; //เวลาที่อัพเดท
  let Bids = await response.data.bids;
  let Asks =await response.data.asks;
  const ob = {};
  let innum : Number = 29200;

  //console.log(Bids.length)
 
  Bids.map((item : any) => {
    //console.log(+item[0])
    //console.log(innum)
    if(+item[0]<=innum){
      console.log(item[0])
    }
  });
  //console.log(ob);


  let newbid:Array<number>;



























  // let b = prompt("Enter second number: ");
  // console.log(b)
  
  


  function calculateOutputAmount() { //function คำนวณ USDT => BTC

  }
  calculateOutputAmount()
}
func()

