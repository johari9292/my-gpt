import { createContext } from "react";
import useMessageCollection from "../custom-hooks/useMessageCollection";


const ChatContext = createContext({});


const ChatContextProvider = (props) => {
  const [messages, setMessages, clearMessages] = useMessageCollection([]);

  return (
    <ChatContext.Provider value={[messages, setMessages, clearMessages]}>
      {props.children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
