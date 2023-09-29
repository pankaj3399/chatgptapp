import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import ChatHistory from "../ChatHistory/ChatHistory";
import Messages from "../Messages/Messages";
import { useEffect, useState } from "react";
import { useGetChatsByAuthIdQuery } from "../../../redux-rtk/features/chat/chatApi";

const Chat = () => {

    // rtk
    const { data: chats, isLoading: chatLoading, isError } = useGetChatsByAuthIdQuery();

    // states
    const [messages, setMessages] = useState([]);
    const [isNewChat, setIsNewChat] = useState(false);
    const [activeChatId, setActiveChatId] = useState('');

    // set active id
    useEffect(() => {
        if (chats?.data) {
            setActiveChatId(chats?.data[0]?._id)
        } else {
            setActiveChatId('')
        }
    }, [chats?.data])

    // set message data
    useEffect(() => {
        if (isNewChat) {
            setMessages([]);
            setActiveChatId('')
        } else if (chats?.data) {
            if (activeChatId) {
                setMessages(chats.data.find((item) => item?._id === activeChatId)?.messages || [])
                setActiveChatId(chats.data.find((item) => item?._id === activeChatId)?._id)
            }
        } else {
            setMessages([]);
        }
    }, [chats?.data, isNewChat, setIsNewChat, activeChatId])

    return (
        <div className="chatbox flex flex-col grow">

            <div>
                <h1 className="flex gap-3 text-[25px] font-extrabold items-center mt-[30px] mb-[25px] ms-[10px]">
                    <BsChatDots className="font-extrabold "></BsChatDots> Chat
                </h1>
            </div>

            <div className="grow">
                <div className="flex chatarea rest-screen">

                    <ChatHistory
                        setIsNewChat={setIsNewChat}
                        activeChatId={activeChatId}
                        setActiveChatId={setActiveChatId}
                        chats={chats?.data}
                    />

                    <Messages
                        isNewChat={isNewChat}
                        setIsNewChat={setIsNewChat}
                        isError={isError}
                        chatLoading={chatLoading}
                        messages={messages}
                        setMessages={setMessages}
                        setActiveChatId={setActiveChatId}
                        updateChatId={activeChatId ? activeChatId : chats?.data[0]?._id}
                    />
                </div>
            </div>

        </div>
    );
};

export default Chat;