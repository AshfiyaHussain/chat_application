import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './component/ChatFeed';
import LoginForm from './component/LoginForm';
import './App.css';
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="7c687ead-033b-45a7-b744-3944c72c2a0c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App;