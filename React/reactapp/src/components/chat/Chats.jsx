import React from 'react';

const Chats = () => {
    return (
        <div className='chats'>
            <div className='userChat'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-bO3uHEFkNpmTuytSRFBLu5pG3f0MTg-9g&usqp=CAU'
                    alt=''
                />
                <div className="useChatInfo">
                    <span>Jane</span>
                    <p>Helloo</p>
                </div>
            </div>

            <div className='userChat'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRormNx-cWkV0Ggs-j5Jnk6g6x7JSyVqRh7uA&usqp=CAU'
                    alt=''
                />
                <div className="useChatInfo">
                    <span>Admin</span>
                    <p>update status.</p>
                </div>
            </div>

            <div className='userChat'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oBvol_uzGyDbStyW_qtBoTyYu6plupXVG2ek5LxrPiEhn49qt8YwrNa1mTsNZwbkAfg&usqp=CAU'
                    alt=''
                />
                <div className="useChatInfo">
                    <span>Adam</span>
                    <p>Hey Anjani!!</p>
                </div>
            </div>

        </div>
    )
}

export default Chats;