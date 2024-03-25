import React, { useRef } from 'react'

const NewShoeForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const formData = new FormData(form)
        fetch('http://localhost:3005/shoes', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Schuhmodell' name='model'/>
            <button>Abschicken</button>
        </form>
    )
}

export default NewShoeForm