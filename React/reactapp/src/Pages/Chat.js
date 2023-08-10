import React from 'react';
import Sidebar from "../components/chat/Sidebar";
import Chatbar from "../components/chat/Chatbar";
import '../style.scss';

const Chat = () => {
    return (
        <div className='chat'>
            <div className='container'>
                <Sidebar />
                <Chatbar />
            </div>
        </div>
    )
}

export default Chat;