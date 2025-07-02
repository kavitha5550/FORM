import React, { useState } from 'react'
import { getAllStudents } from './Controller/DataBase'


const StudentData = () => {
//     const[name,setName]=useState([])
//     const[course,setCourse]=useState()
    // const [students,setStudents]=useState()
//     const[newStudent,setNewStudent]=useState()
// const[newcourse,setNewCourse]=useState()
   
//    const handleAdd = () => {
//    if(newStudent&&newStudent){

//    }
//   };
  return (
    <div>
      {/* <input type="text"  onChange={(e)=>{
        students(e.target.value)
      }}/>
      <input type="text" onChange={(e)=>{
        students(e.target.value)
      }} />
      <button onClick={handleAdd}>Add</button> */}

       {/* <p>{getAllStudents.forEach(e)=>{
e.setValue()
       }}</p>  */}
       {/* <input type="text" placeholder='name' /> */}
       {/* <div className="form-group">
  <input type="text" className="form-input" placeholder=" " id="name" />
  <label for="name" className="form-label">Enter your name</label>
</div>
    
    </div>
     */}
     <div className='form-data'>
        <input type="text" />
     </div>
    </div> 

  )
}

export default StudentData
