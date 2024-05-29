import "./formInput.css"
import { useState, useEffect } from "react"
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, ...inputProps } = props; // Destructure submitted from props
  const [passwordValid, setPasswordValid] = useState(true); // New state for password validity
  const [passwordValue, setPasswordValue] = useState("");
  const handleFocus = () => {
    setFocused(true);
  };

  useEffect(() => {
    setPasswordValue((prevPasswordValue) => {
      // If the new value is different from the previous value, update the state
      if (inputProps.value !== prevPasswordValue) {
        return inputProps.value;
      }
  
      // Otherwise, return the previous state to avoid unnecessary re-renders
      return prevPasswordValue;
    });
  }, [inputProps.value]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    console.log("Input Name:", name); // Check the name of the input being changed
  
    if (name === 'password') {
      setPasswordValue(value);
    }
  
    if (onChange) {
      onChange(event);
    }
  };

  const showError = () => {
    const { pattern, value, name, required } = inputProps;
    if (name === 'username') {
      const username = value.trim();
      if (/[^A-Za-z0-9]/.test(username)) {
        return "Username should not have special characters";
      }
      if (username.length < 4) {
        return "Username must be at least 4 characters long";
      }
      if (username.length > 12) {
        return "Username cannot be more than 12 characters long";
      }
      const numberOfNumbers = (username.match(/\d/g) || []).length;
      if (numberOfNumbers > 3) {
        return "Username should have no more than 3 numbers";
      }
    }

    if (name === 'email') {
      const email = value.trim();
      if (!email) {
        return "Email is empty";
      }
  
      // Adjusted the condition for a maximum of 20 characters
      if (email.length > 100) {
        return "Email cannot be more than 20 characters long";
      }
  
      // Allow special characters in the email
      // You can customize the regex based on your specific requirements
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(email)) {
        return "Please enter a valid email address";
      }
    }

    if (name === 'password' && focused) {
      const password = passwordValue.trim();
      if (password.length === 0) {
        return "Password is empty";
      }

      if (password.length < 6) {
        return "Password must be at least 6 characters long";
      }

      let hasSpecialChar = false;
      let hasNumber = false;
      let hasUppercase = false;
      let hasLowercase = false;

      for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if ('@$!%*?&'.includes(char)) {
          hasSpecialChar = true;
        } else if (/\d/.test(char)) {
          hasNumber = true;
        } else if (/[A-Z]/.test(char)) {
          hasUppercase = true;
        } else if (/[a-z]/.test(char)) {
          hasLowercase = true;
        }
      }

      if (!hasSpecialChar) {
        return "Password must contain at least one special character";
      }

      if (!hasNumber) {
        return "Password must contain at least one number";
      }

      if (!hasUppercase) {
        return "Password must contain at least one uppercase letter";
      }

      if (!hasLowercase) {
        return "Password must contain at least one lowercase letter";
      }
     return "";
    }
   
  
    if (name === 'firstName') {
      const firstName = value.trim();
      if (!firstName) {
        return "First Name is empty";
      }
  
      if (firstName.length < 4) {
        return "First Name must be at least 4 characters long";
      }
  
      // First Name must not contain special characters (except dot) and no numbers
      const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
      const numberRegex = /\d/;
  
      if (specialCharRegex.test(firstName) && firstName !== '.') {
        return "First Name must not contain special characters (except dot)";
      }
  
      if (numberRegex.test(firstName)) {
        return "First Name must not contain numbers";
      }
    }
  }
  


  const errorMessage = showError();
  return (
    <div className="formInput">
    <label className="label22">{label}</label>
    <input
     className={`test77`} // Conditionally apply error style
        {...inputProps}
        onChange={handleInputChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        required
      />
    {errorMessage && <span className="oops">{errorMessage}</span>}

  </div>
);
};

export default FormInput;