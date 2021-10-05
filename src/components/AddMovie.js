import React, { useRef } from 'react'

function AddMovie(props) {
    const titleRef = useRef('')
    const textRef = useRef('')
    const dateRef = useRef('')

    const submitHandler = (event) => {
        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: textRef.current.value,
            releaseDate: dateRef.current.value
        }

        props.onAddMovie(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <input ref={titleRef} />
            <textarea name="comment" form="usrform" ref={textRef}></textarea>
            <input type='date' ref={dateRef} />
            <button type='submit'>Add Movie</button>
        </form>
    )
}

export default AddMovie
