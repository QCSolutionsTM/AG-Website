import { useState } from 'react'
import './Login.css'
import { Typewriter } from 'react-simple-typewriter';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './FormInputs/FormInput';
import { signinSuccess, signinFailure, signinStart } from '../../../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { set } from 'mongoose';
export default function Login() {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [error, setError] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

const handleClick3 = () => {
  window.location.href = '/views/auth/register';
};

const [values, setValues] = useState({
  password:"",
  email: "",

});
const onChange = (e) => {
  setValues({...values, [e.target.name]: e.target.value.trim() });
}
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

const handleSubmit3 = async (e) => {
  e.preventDefault();
  if (!values.email || !values.password) {
      return dispatch(signinFailure('Please fill all the fields'));
    }
    try {
      dispatch(signinStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
      }

      if (res.ok) {
        navigate('/');
        dispatch(signinSuccess(data));
        console.log('Login successful! Redirecting to dashboard...');
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };

const showError = (fieldName) => {
  // Implement your validation logic for each field
  if (fieldName === 'username' && values[fieldName].length < 3) {
    return 'Username must be at least 3 characters long.';
  }

  // Add more validation rules for other fields if needed

  return ''; // Return an empty string if there's no error
};

const inputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "email",
    errorMessage: "email error",
    label: "Email",
    pattern: `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
    required: true,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "password",
    errorMessage: "password error",
    label: "Password",

    required: true,
  },
];



  return (
    <div className='css-login-ct'>
    <div className='css-login-ct-left'>
      <div className='css-login-ct-left-image'>
      </div>
      <div className='css-login-ct-left-text-ct'>
        <h1 className='css-login-ct-left-text-ct-title'>Customer Portal</h1>
        <div className="css-login-ct-left-text-ct-title-underline"></div>
         <div className="css-login-ct-left-text-ct-display-ct">
           <h1 className='css-login-ct-left-ct-display-ct-header'>Welcome</h1>
           <div className='css-login-ct-left-ct-display-ct-header-text'>
           <Typewriter
            loop
            cusor
            cusorStyle="_"
            typeSpeed={87}
            deleteSpeed={70}
            div className='css-login-ct-left-ct-display-ct-header-text-tw'
            words={[' We hope you join us!', 'Need help? Connect with are support staff!', 'Always remember to use a secure and new password!',
            'At our company we belive in empowering you to create a result', 'Are greatest enemy is ourselves', 'Check out ModelOwned! A partner company', 
            'We double encrypt your data in order to keep you safe!', 'Its 2024 lets do this together and destroy our goals!']}
            />
         </div>
         </div>
      </div>
     </div>
     <div className='css-login-ct-right'>
        <form onSubmit={handleSubmit3} className='css-login-ct-right-ct-form'>
          <h1 className='css-login-ct-right-ct-form-title'>Customer Login</h1>
           <div className='testing-container'>
            <div className='testing-container-colum-left '>
            {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
              ))}

       
            </div>
            <button className='css-styling-login-container-form-signin-button' type="submit">Login</button>
        

   </div>
   <button className='css-styling-login-container-form-signin-button' onClick={handleClick3} type="button">Login Account</button>
            <p className='css-styling-login-container-form-bottomtext'>© QCSolutions L.L.C, All Rights Reserved | QCORP </p>
  </form>

      </div>
     </div>
  );
}


/*  e.preventDefault();
  console.log('handleSubmit3 called'); // Debugging line
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
    if (input.name === 'countrya') {
      return { name: input.name, error: '' }; // No error for 'countrya'
    }
  
    const errorMessage = showError(input.name);
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
    console.log('Before API call', values); // Debugging line
   

    const res = await fetch('/api/auth/signin', {
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

const handleSubmit3 = async (e) => {
  e.preventDefault();
  if (!values.email || !values.password) {
      return dispatch(signinFailure('Please fill all the fields'));
    }
    try {
      dispatch(signinStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
      }

      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };


*/