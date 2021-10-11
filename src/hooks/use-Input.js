import React, { useState } from 'react'

function useInput(validateValue) {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }
    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: validateValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }


}

export default useInput
