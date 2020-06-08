import React from 'react'

const Review = props => {
    return (
        <div id='revDiv'>
            <i className='far fa-user-circle' style={{fontSize: "50px"}}></i>
            <div id='revBody'>
                <a href="#" style={{color: "orange", textDecoration: "none"}}><span id="userName" style={{fontSize: "12px"}}>@{props.user}</span></a><p>{props.review}</p>
            </div>
            
        </div>
    );
}

export default Review