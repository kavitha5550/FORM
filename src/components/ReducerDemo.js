// import React, { useReducer, useState } from 'react'

// const myreducer=(state,action)=>{
    
//    console.log(action)

//    const v1=parseInt(action.v1)
//    const v2=parseInt(action.v2)

//    console.log(v1,v2)

//    if(action.type==='+'){
//     // console.log('B1 Clicked')
//     const sum=v1+v2
//     // console.log(sum)
//     return {result:'The sum of two numbers: '+sum}
//    }
//    else if(action.type==='-'){
//      const dif=v1-v2   
//      console.log(dif)
//      return{result:'The difference of two numbers: '+dif}
//     }else if(action.type==="*"){
//         const multi=v1*v2
//     return{result:'This is multipcation of two numbers:'+multi}
//     }

// }

// const ReducerDemo = () => {
//     const[state,dispatch]=useReducer(myreducer,{result:''})
//     const[value1,setValue1]=useState()
//     const[value2,setValue2]=useState()
//     const[result,setResult]=useState()
//   return (
//     <div>
//       <center>
//        <input type="text"  className="border" placeholder='Enter a number(value1)' onChange={(e)=>{setValue1(e.target.value)}}  /><br /><br />
//        <input type="text" className="border" placeholder='Enter a number(value2)' onChange={(e)=>{setValue2(e.target.value)}} /> <br /><br />
       
//         <input type="button" className="border ml-3" value="Add" onClick={()=>{dispatch({type:'+',v1:value1,v2:value2})}}/>
//         <input type="button" className="border ml-3" value="Sub" onClick={()=>{dispatch({type:'-',v1:value1,v2:value2})}}/>
//         <input type='button' className='border ml-3' value="multi" onClick={()=>{dispatch({type:"*",v1:value1,v2:value2})}}/>
//         {
//             state &&
//             <h2>{state.result}</h2>

//         }
//       </center>
//     </div>
//   )
// }

// export default ReducerDemo
import React, { useReducer, useState } from 'react'

const myaction=(state,action)=>{
    
    console.log(action)

    const data1=parseInt(action.data1)
    const data2=parseInt(action.data2)

    console.log(data1,data2)

    if(action.type==="+"){

        const sum=data1+data2

        return{result:"Addition of Two Numbers:"+sum}
    }
}



const ReducerDemo = () => {

       const[userdata,setUserData]=useState({
        value1:'',
        value2:'',
      
    })

    const[result,setResult]=useState()

    const[state,dispatch]=useReducer(myaction,{s:0})

  return (
 
    <div>
    
      <center>
     <div><input type="text"  className="border p-2 m-2"  onChange={(e)=>{setUserData({...userdata,value1:(e.target.value)})}} /></div>
     <div><input type="text" className="border p-2 m-2"  onChange={(e)=>{setUserData({...userdata,value2:(e.target.value)})}} /></div>
     <div><input type="button" className="border p-2 m-2"  value="add" onClick={()=>{dispatch({type:'+',data1:userdata.value1,data2:userdata.value2})}}/></div>
     {state &&
     <p>{state.result}</p>}
      </center>
    </div>
  )
}

export default ReducerDemo
