import React, { useState } from "react";
import "./formInput.css";

const FormInput3 = (props) => {
  const { label, onChange, ...inputProps } = props;

  const [countryFocused, setCountryFocused] = useState(false);
  const [stateFocused, setStateFocused] = useState(false);
  const [cityFocused, setCityFocused] = useState(false);

  const [countryError, setCountryError] = useState("");
  const [stateError, setStateError] = useState("");
  const [cityError, setCityError] = useState("");

  const handleFocus = (dropdown) => {
    if (dropdown === 'countrya') {
      setCountryFocused(true);
      setCountryError('');
    } else if (dropdown === 'stateSel') {
      setStateFocused(true);
      setStateError('');
    } else if (dropdown === 'district') {
      setCityFocused(true);
      setCityError('');
    }
  };

  const handleCountryChange = (e) => {
    onChange(e, 'countrya');
  };

  const handleStateChange = (e) => {
    onChange(e, 'stateSel');
  };

  const handleCityChange = (e) => {
    onChange(e, 'districtSel');
  };

  const handleBlur = (dropdown) => {
    if (dropdown === 'countrya') {
      setCountryFocused(false);
      setCountryError(showError('countrya'));
    } else if (dropdown === 'stateSel') {
      setStateFocused(false);
      setStateError(showError('stateSel'));
    } else if (dropdown === 'district') {
      setCityFocused(false);
      setCityError(showError('district'));
    }
  };
  const showError = (dropdown) => {
    const { pattern, value, name, required } = inputProps;
    const trimmedValue = (value || '').trim();
  
    if (name === 'countrya' && dropdown === 'countrya') {
      // Check for country-related errors
      // For example, check if it is selected
      if (!value) {
        return "Please select a country";
      }
  
      if (!trimmedValue && countryFocused) {
        return "Please select a Country";
      }
  
      if (trimmedValue.length < 2 && countryFocused) {
        return "Country must be at least 2 characters long";
      }
    }
  
    if (name === 'stateSel' && dropdown === 'stateSel' && countryFocused) {
      if (!trimmedValue && stateFocused) {
        return "Please select a state";
      }
  
      if (trimmedValue.length < 2 && stateFocused) {
        return "State must be at least 2 characters long";
      }
    }
  
    if (name === 'district' && dropdown === 'district' && countryFocused) {
      if (!trimmedValue && cityFocused) {
        return "Please select a city";
      }
  
      if (trimmedValue.length < 2 && cityFocused) {
        return "City must be at least 2 characters long";
      }
    }
  
    // Additional validation logic if needed
    return "";
  };
  return (
    <div className="formInput">
    {/* Country */}
    <div className={`select-something ${countryError ? 'invalid' : ''}`}>
      {label}:
      <select
        value={inputProps.value}
        onChange={handleCountryChange}
        onFocus={() => handleFocus('countrya')}
        onBlur={() => handleBlur('countrya')}
        required={true}
        name='countrya'
        id='countySel'
        size='1'
        className={countryError ? 'invalid' : ''}
      >
        <option value=''>{`Please select ${label}`}</option>
        {/* Add other options as needed */}
      </select>
      {countryError && <span className="oops">{countryError}</span>}
    </div>

    {/* State */}
    <div className={`select-something ${stateError ? 'invalid' : ''}`}>
      State:
      <select
        value={inputProps.stateValue}
        onChange={handleStateChange}
        onFocus={() => handleFocus('stateSel')}
        onBlur={() => handleBlur('stateSel')}
        required={true}
        name='stateSel'
        id='stateSel'
        size='1'
        className={stateError ? 'invalid' : ''}
      >
        <option value=''>Please select State</option>
        {/* Add other options as needed */}
      </select>
      {stateError && <span className="oops">{stateError}</span>}
    </div>

    {/* City */}
    <div className={`select-something ${cityError ? 'invalid' : ''}`}>
      City:
      <select
        value={inputProps.cityValue}
        onChange={handleCityChange}
        onFocus={() => handleFocus('district')}
        onBlur={() => handleBlur('district')}
        required={true}
        name='districtSel'
        id='districtSel'
        size='1'
        className={cityError ? 'invalid' : ''}
      >
        <option value=''>Please select city</option>
        {/* Add other options as needed */}
      </select>
      {cityError && <span className="oops">{cityError}</span>}
    </div>
  </div>
);
};

export default FormInput3;