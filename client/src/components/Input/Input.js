import React from 'react'
import './Input.css'

export const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className='form'>
            <input
                value={message}
                className='input'
                type='text'
                placeholder='Type a text'
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button
                className='sendButton'
                onClick={event => sendMessage(event)}
            >Send message</button>
        </form>
    )
}
