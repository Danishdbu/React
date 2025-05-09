import React from 'react'
import img1 from '../assets/img1.jpg'
import './UserCard.css'

function UserCard(props) {
    return (
        <div className='user-container' style={props.style}>
            <p id='user-name'>{props.name} </p>
            <img id='user-img' src={img1} alt="" />
            <p id='user-desc'>{props.desc}</p>

        </div>
    )
}

export default UserCard
