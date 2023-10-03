import { Button } from "@material-tailwind/react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { useSelector } from "react-redux";
import { cx } from "../../../hooks/helpers";

const ChatHistory = ({ activeChatId, setIsNewChat, setActiveChatId }) => {

    // redux state
    const chats = useSelector((state) => state.chat);

    return (
        <div className="bg-[#424242] w-1/4 items-center pt-5 rounded-md h-full overflow-y-auto">

            <Button
                className="text-black bg-[#E6E6E6] hover:bg-white  flex items-center gap-3 ps-12 w-4/5 mx-auto my-0"
                onClick={() => {
                    setIsNewChat(true)
                    setActiveChatId('')
                }}
            >
                <AiOutlinePlus></AiOutlinePlus>
                New Chat
            </Button>

            <div className="text-white p-5">
                {chats?.chats.map((item) => <>
                    <p
                        role="button"
                        onClick={() => {
                            setActiveChatId(item._id)
                            setIsNewChat(false)
                        }}
                        className={cx(
                            activeChatId === item._id && '!bg-[#929090]',
                            "cursor-pointer flex items-center gap-3 mb-3 hover:bg-[#929090] p-2 rounded-md text-[16px]"
                        )}
                    >
                        <BsChatDots></BsChatDots> {item.title.length > 20 ? item.title.slice(0, 28) + '...' : item.title}
                    </p>
                </>)}
            </div>
        </div>
    );
};

export default ChatHistory;