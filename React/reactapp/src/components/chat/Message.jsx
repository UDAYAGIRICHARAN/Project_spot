import React from 'react';

const Message = () => {
    return (
        <div className='message '>
            <div className="messageInfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-bO3uHEFkNpmTuytSRFBLu5pG3f0MTg-9g&usqp=CAU"
                    alt="" />
                <span>Just now</span>
            </div>

            <div className="messageContent">
                <p>Hello</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-bO3uHEFkNpmTuytSRFBLu5pG3f0MTg-9g&usqp=CAU" alt="" />
            </div>
        </div>
    )
}

export default Message;