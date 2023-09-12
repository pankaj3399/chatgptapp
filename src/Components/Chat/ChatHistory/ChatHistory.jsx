import { Button } from "@material-tailwind/react";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";

const ChatHistory = () => {
    return (
        <div className="bg-[#424242] w-1/4 items-center pt-5 rounded-md">
            <Button className="text-black bg-[#E6E6E6] hover:bg-white  flex items-center gap-3 ps-12 w-4/5 mx-auto my-0"><AiOutlinePlus></AiOutlinePlus>New Chat</Button>
            <div className="text-white p-5">
                <p className="cursor-pointer flex items-center gap-3 mb-3 hover:bg-[#929090]
                p-2 rounded-md"><BsChatDots></BsChatDots> Chat hisory</p>
                <p className="cursor-pointer flex items-center gap-3 mb-3 hover:bg-[#929090]
                p-2 rounded-md"><BsChatDots></BsChatDots> Chat hisory</p>
                <p className="cursor-pointer flex items-center gap-3 mb-3 hover:bg-[#929090]
                p-2 rounded-md"><BsChatDots></BsChatDots> Chat hisory</p>
                <p className="cursor-pointer flex items-center gap-3 mb-3 hover:bg-[#929090]
                p-2 rounded-md"><BsChatDots></BsChatDots> Chat hisory</p>
                <p className="cursor-pointer flex items-center gap-3 mb-3 hover:bg-[#929090]
                p-2 rounded-md"><BsChatDots></BsChatDots> Chat hisory</p>
            </div>
        </div>
    );
};

export default ChatHistory;