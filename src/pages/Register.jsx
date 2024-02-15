import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { registerAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    mobile: '',
    lastName: '',
    password: '',
    address: '',
    dob: '',
    email: '',
    course: 'MERN',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password,firstName,lastName,mobile,address,dob,course,gender} = formData
    if (!email || !password || !firstName || !lastName || !mobile || !address || !dob || !course ||!gender) {
    alert('Please fill in all fields to continue');
  }else{
    console.log('Form Data:', formData);
    try{
      const result = await registerAPI(formData)
      if(result.status==200){
        alert("succesfully registered")
        setFormData({
          firstName: '',
          mobile: '',
          lastName: '',
          password: '',
          address: '',
          dob: '',
          email: '',
          course: 'MERN',
          gender: '',
        })
      }
      else{
        alert("something went wrong")
      }
    }catch(err){
      alert(err)
    }

  }  
  };

  const handleTable = () =>{
    navigate('/view');
  }

  const handlecancel = ()=>{
    setFormData({
          firstName: '',
          mobile: '',
          lastName: '',
          password: '',
          address: '',
          dob: '',
          email: '',
          course: 'MERN',
          gender: '',
        })
  }

  return (
    <div className='mt-5 w-100 bg-dark'>
      <Row>
        <Col sm={4} md={4} lg={4}>
          <img src="https://i.postimg.cc/gkfqq5Bb/gif5.gif" className='img-fluid' style={{ width: '100%', height: '100%' }} alt="" />
        </Col>
        <Col sm={1} md={1} lg={1}></Col>
        <Col sm={7} md={7} lg={7} className='bg-dark mb-5'>
          <h2 className='text-white text-center'>Apply as a Student </h2>
          <Row className='text-white mt-4'>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                  placeholder='Enter your first name'
                />
              </form>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                  placeholder='Enter your Mobile number'
                />
              </form>
            </Col>
          </Row>
          <Row className='text-white mt-4'>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                  placeholder='Enter your last name'
                />
              </form>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                  placeholder='Enter your Password'
                />
              </form>
            </Col>
          </Row>
          <Row className='text-white mt-4'>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                  placeholder='Enter your Address'
                />
              </form>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                  placeholder='Enter your DOB'
                />
              </form>
            </Col>
          </Row>
          <Row className='text-white mt-4'>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                  placeholder='Enter your Email'
                />
              </form>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <form action="">
                <label htmlFor="course">Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className='form-control bg-light'
                  style={{ border: 'none' }}
                >
                  <option value="MERN">MERN Stack</option>
                  <option value="PYTHON">Python</option>
                  <option value="DATA-SCIENCE">Data Science</option>
                </select>
              </form>
            </Col>
          </Row>
          <Row className='d-flex align-items-center text-white mt-4'>
            <Col sm={6} md={6} lg={6}>
              <label htmlFor="gender">Gender:</label>
              <form className='d-flex align-items-center justify-content-center' action="">
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  aria-label="Male"
                  label="Male"
                  className='mx-2'
                />
                <Form.Check
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  aria-label="Female"
                  label="Female"
                  className='mx-2'
                />
              </form>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <button className='btn btn-outline-warning' onClick={handleSubmit}>
                Submit
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
      
     
      <div className='text-center'>
        <Row  >
          <Col sm={6} md={6} lg={6}>
            
          </Col>
          <Col sm={6} md={6} lg={6} className='d-flex justify-content-center'>
           <button className='btn btn-outline-danger mx-3 mb-3' onClick={handlecancel}>Cancel</button>
            <button className='btn btn-outline-primary mx-3 mb-3' onClick={handleTable} >View Table</button>
          </Col>
        </Row>
      </div>


      </div>
    
  );
}

export default Register;
