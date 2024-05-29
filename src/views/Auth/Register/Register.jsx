import { useState, useRef, useEffect } from 'react'
import './Register.css'
import { Typewriter } from 'react-simple-typewriter';
import { Link, useNavigate } from 'react-router-dom';;
import FormInput from './FormInputs/FormInput';
import FormInput3 from './FormInputs/FormInput3';
import { set } from 'mongoose';
const Register = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
useEffect(() => {
  const script = document.createElement('script');
  script.src = '../../../../Country+State+District-City-Data.js';
  script.async = true;

  const handleScriptLoad = () => {
    console.log('Script loaded');
    setScriptLoaded(true);
  };
  
  const handleScriptError = (error) => {
    console.error('Script error:', error);
    // Handle error accordingly
    setScriptLoaded(false); // Set scriptLoaded to false in case of an error
  };

  script.onerror = (error) => handleScriptError(error);

  try {
    script.onload = handleScriptLoad;
    document.body.appendChild(script);
  } catch (error) {
    handleScriptError(error);
  }

  return () => {
    document.body.removeChild(script);
  };
}, []);








  const handleClick2 = () => {
    window.location.href = '/views/auth/login';
  };

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });

  };
  const handleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    handleSubmit3(e);
  };

  const showError = (fieldName) => {
    // Implement your validation logic for each field
    if (fieldName === 'username' && values[fieldName].length < 3) {
      return 'Username must be at least 3 characters long.';
    }

    // Add more validation rules for other fields if needed

    return ''; // Return an empty string if there's no error
  };

  const handleSubmit3 = async (e) => {
    e.preventDefault();
  
    // Check if any input value is empty
    const emptyFields = Object.entries(values)
      .filter(([key, value]) => value.trim() === '')
      .map(([key]) => key);
  
    if (emptyFields.length > 0) {
      // If any input is empty, set the error message with the list of empty fields
      setError(`Please fill in the following fields: ${emptyFields.join(', ')}`);
      return;
    }
    const errors = inputs.map((input) => {
      const errorMessage = input.name === 'countrya'
        ? showErrorCountrya()  // Use a function specific to the field
        : showError(input.name);
      
      return { name: input.name, error: errorMessage };
    });
  
    // Check if any error exists
    const hasErrors = errors.some((error) => error.error);
  
    if (hasErrors) {
      // If there are errors, set the error state with specific messages
      setError(`Please fix the following errors:\n${errors.filter((error) => error.error).map((error) => `${error.name}: ${error.error}`).join('\n')}`);
      return;
    }
  
    // If no error, reset the error state
    setError('');
    try {
      setLoading(true);
      setErrorMessage(null);
  
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),  // Updated from FormData to values
      });
  
      const data = await res.json();
      
      if (data.success === false) {
        if (data.errors) {
          // Handle server-side validation errors
          const serverErrors = Object.entries(data.errors).map(([field, message]) => ({
            name: field,
            error: message,
          }));
      
          setError(`Server-side validation errors:\n${serverErrors.map((error) => `${error.name}: ${error.error}`).join('\n')}`);
        } else {
          setErrorMessage(data.message);
        }
      } else {
       // Successful registration
      // Add logic for successful login or redirect to login page
      console.log('Registration successful! Redirecting to login...');
      navigate('/views/front-end/clientRender/Dashboard');
      // You can use react-router-dom's useNavigate hook for navigation
      // Example: navigate('/views/auth/login');
      }
  
      setLoading(false);
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      setLoading(false);
    }
  };
  

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value.trim() });
  }
  //const [username, setUsername] = useState("")
  const [values, setValues] = useState({
    username:"",
    password:"",
    email: "",
    firstName: "",
    countrya: "", // Update to "countrya" to match the FormInput3 component
    stateSel: "", // Update to "stateSel" to match the FormInput3 component
    districtSel: "",

  });

  const inputs2 = [
    {
      id: 1,
      name: "Company",
      type: "text",
      placeholder: "com",
      label: "com",
      errorMessage: "Username Error",
      required: true,

    }
  ]

  const inputs3 = [
    {
    id: 1,
    name: "countrya",
    errorMessage: "error",
    required: true
    }
   
  ]

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username Error",
      required: true,
      pattern: "^[A-za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email error",
      label: "Email",
      pattern: `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "password error",
      label: "Password",

      required: true,
    },
    {
      id: 4,
      name: "firstName",
      type: "firstName",
      placeholder: "First Name",
      errorMessage: "firstName error",
      label: "First Name",
      required: true,
    },
  ]
  



  return (
    <div className='css-register-ct'>
      <div className='css-register-ct-left'>
        <div className='css-register-ct-left-image'>
        </div>
        <div className='css-register-ct-left-text-ct'>
          <h1 className='css-register-ct-left-text-ct-title'>Customer Portal</h1>
          <div className='css-register-ct-left-text-ct-title-underline'></div>
          <div className='css-register-ct-left-text-ct-display-ct'>
            <h1 className='css-register-ct-left-ct-display-ct-header'>Welcome</h1>
            <div className='css-register-ct-left-ct-display-ct-header-text'>
              <Typewriter
                loop
                cusor
                cusorStyle='_'
                typeSpeed={87}
                deleteSpeed={70}
                div className='css-register-ct-left-ct-display-ct-header-text-tw'
                words={[
                  ' We hope you join us!',
                  'Need help? Connect with our support staff!',
                  'Always remember to use a secure and new password!',
                  'At our company, we believe in empowering you to create a result',
                  'Our greatest enemy is ourselves',
                  'Check out ModelOwned! A partner company',
                  'We double encrypt your data in order to keep you safe!',
                  "It's 2024; let's do this together and destroy our goals!",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='css-register-ct-right'>
        <form onSubmit={handleSubmit3} className='css-register-ct-right-ct-form' id="register-form">
          <h1 className='css-register-ct-right-ct-form-title'>Register Form</h1>
          <div className='testing-container'>
            <div className='testing-container-colum-left '>
              {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
              ))}
            </div>
            <div className='testing-container-colum-right '>
            {inputs3.map((input) => (
  <FormInput3
    key={input.id}
    {...input}
    value={values[input.name]}
    countryValue={values.country}
    stateValue={values.state}
    cityValue={values.city}
    onChange={onChange}
  />
))}

            
            </div>
          
          
          </div>
          <button className='css-styling-register-container-form-signin-button'
            type='submit' onClick={handleSubmit3} >
            Create Account
            </button>
            <div className='css-styling-register-container-form-error'>
          {/* Display error message */}
          {error && <p>{error}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
          <p className='css-styling-login-container-form-bottomtext'>
            © QCSolutions L.L.C, All Rights Reserved | QCORP
          </p>
        </form>
      </div>
    </div>
  );
};


export default Register;