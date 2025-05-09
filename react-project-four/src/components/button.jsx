import React from 'react'

const button = (props) => {
    return (
        <div>
            {props.children}
            <button onClick={props.increment}>
                {props.text}
            </button>
        </div>


    )
}

export default button
