import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import ChatHistory from "../ChatHistory/ChatHistory";
import Messages from "../Messages/Messages";

const Chat = () => {
    return (
        <div className="chatbox flex flex-col grow">
            <div>
                <h1 className="flex gap-3 text-[25px] font-extrabold items-center mt-[30px] mb-[25px] ms-[10px]"> <BsChatDots className="font-extrabold "></BsChatDots> Chat </h1>
            </div>
            <div className="grow">
                <div className="flex chatarea rest-screen">
                    <ChatHistory></ChatHistory>
                    <Messages></Messages>
                </div>
            </div>
        </div>
    );
};

export default Chat;