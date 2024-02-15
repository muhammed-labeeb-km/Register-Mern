import React, { useEffect, useState } from 'react';
import { tableViews } from '../services/allAPI';

function View() {
  const [data,setData]= useState([])


  const getDatas= async()=>{
    try{
      const result = await tableViews()
      if(result.status==200){
        setData(result.data)
        console.log(result.data);
      }  
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
  getDatas()
  },[])


  return (
    <div className='mt-5'>
      <h2>Student Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Mobile</th>
            <th>Last Name</th>
            <th>Password</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Course</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.mobile}</td>
              <td>{student.lastName}</td>
              <td>{student.password}</td>
              <td>{student.address}</td>
              <td>{student.dob}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;
