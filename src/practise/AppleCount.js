import React,{useState} from 'react'

const AppleCount = () => {
    const[apple,setApple]=useState(0)
    const[message,setMessage]=useState('')
    const[cash,setCash]=useState(100)
    const handleBuy=()=>{
     if(cash>=10){
        setApple(apple+1)
     setCash(cash-10)
     }else{
        setMessage("Cash is not available")
     }
    }
    const handleSell=()=>{
     if(apple===0){
          setMessage("apple is not available")
     }else{
        setApple(apple-1)
        setCash(cash+25)
     }
    }
    const handleTopUp=()=>{
       setCash(cash+100)
    }
  return (
    <div>
      <p>Apple:{apple}</p>
      <p>{message}</p>
      <p>Cash Value:{cash}</p>
      <button onClick={handleBuy}>BUY</button>
      <button onClick={handleSell}>Sell</button>
      <button onClick={handleTopUp}>TopUp</button>
    </div>
  )
}

export default AppleCount
