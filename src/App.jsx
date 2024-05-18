import { ChatContextProvider } from './context/chatContext';
import SideBar from './pages/SideBar';
import ChatView from './pages/ChatView';
import { useEffect, useState } from 'react';


const App = () => {

  return (
    <ChatContextProvider>
 
      <div style={{marginLeft:100,marginRight:100}} className='flex transition duration-500 ease-in-out'>
        <SideBar />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};

export default App;
