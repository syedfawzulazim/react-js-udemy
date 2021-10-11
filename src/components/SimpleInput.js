import React from 'react'
import useInput from '../hooks/use-Input';


const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: inputNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: inputEmailHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlurHandler: EmailBlurHandler,
    reset: EmailReset,
  } = useInput(value => value.includes('@'))

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }


    console.log(enteredName)

    nameReset()
    EmailReset()

  }

  const nameClasses = inputNameHasError ? 'form-control invalid' : 'form-control';
  const nameClassesEmail = inputEmailHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {inputNameHasError && <p className="error-text">Name must not be Empty!!!</p>}
      </div>
      <div className={nameClassesEmail}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={EmailChangeHandler} onBlur={EmailBlurHandler} value={enteredEmail} />
        {inputEmailHasError && <p className="error-text">Email must include '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
