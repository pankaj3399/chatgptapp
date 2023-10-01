import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import img1 from '../../../assets/ai logos/image1.png'
import img2 from '../../../assets/ai logos/image2.png'
import img3 from '../../../assets/ai logos/image3.png'
import img4 from '../../../assets/ai logos/image4.png'
import img5 from '../../../assets/massege characters/image5.png'

import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { IoMdSend } from "@react-icons/all-files/io/IoMdSend";
import { useEffect, useRef, useState } from "react";
import { cx } from "../../../hooks/helpers";
import toast from "react-hot-toast";
import { useCreateChatMutation } from "../../../redux-rtk/features/chat/chatApi";
import LoadingIcon from "../../Shared/LoadingIcon/LoadingIcon";

const menuItems = [
    { name: "ChatGpt", imgSrc: img1 },
    { name: "UnternehmensGPT", imgSrc: img2 },
    { name: "Llama 2", imgSrc: img3 },
    { name: "DALL-e 2", imgSrc: img4 },
];

export default function MenuDefault({ isNewChat, setIsNewChat, messages, isError, chatLoading, setMessages, updateChatId }) {

    const chatDivRef = useRef(null);

    // rtk
    const [createChat, { isLoading, isSuccess }] = useCreateChatMutation();

    // states
    const [message, setMessage] = useState('')
    const [model, setModel] = useState(menuItems[0].name);

    // clear input field
    useEffect(() => {
        if (isSuccess) {
            setIsNewChat(false);
            setMessage('')
        }
    }, [isSuccess, setIsNewChat])


    useEffect(() => {
        if (chatDivRef.current) {
            chatDivRef.current.style.transition = 'scrollTop 0.5s ease-in-out';
            chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
        }
    }, [messages]);

    // handler
    const handleCreateChat = () => {

        if (!message) {
            return toast.error('Message value required!')
        }

        let sendData = {
            role: "user",
            message,
            model
        };

        setMessages([
            ...messages,
            {
                ...sendData,
                content: sendData.message
            }
        ])


        if (!isNewChat) {
            sendData = {
                ...sendData,
                chatId: updateChatId
            }
        }

        createChat(sendData)
        setMessage('')
    }

    // if error
    if (isError) return <>Error ....</>

    return (
        <div className="px-2 relative flex flex-col w-full max-h-screen overflow-hidden">

            <Menu>
                <MenuHandler>
                    <Button className="bg-[#E6E6E6] text-black w-48 text-[15px] flex items-center gap-3 px-9 rounded-none">
                        <img className="w-[23px] h-[23px]" src={img1} alt="" />
                        {model || "Model"}
                        <AiOutlineDown></AiOutlineDown>
                    </Button>
                </MenuHandler>
                <MenuList className="bg-[#B8B8B8] p-0 rounded-none">
                    {menuItems.map((menuItem) => (
                        <MenuItem
                            key={menuItem.name}
                            className={cx(
                                "text-black p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]",
                                menuItem.name === model ? "!bg-[#64748B]" : "bg-[#E6E6E6]",
                            )}
                            onClick={() => setModel(menuItem.name)}
                        >
                            <img className="w-[23px] h-[23px]" src={menuItem.imgSrc} alt="" />
                            {menuItem.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

            <div className="rest-screen grow overflow-auto mb-5 messages pb-16 px-5" ref={chatDivRef}>

                <div className="overflow-auto">

                    {chatLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <LoadingIcon color='black' />
                        </div>
                    ) : (
                        <>
                            {(!messages.length || isNewChat) ?
                                <div className="flex items-center justify-center h-full">Ask something to get response</div> :
                                messages.length ? messages?.map((message) =>
                                    message.role === 'user' ? (
                                        <div key={message?._id}>
                                            <div className="w-1/2 flex justify-end items-center ms-auto right-0 my-5">
                                                <pre className="text-[14px] bg-[#424242] text-white p-3 flex items-center px-3 rounded-t-xl rounded-bl-xl min-w-[400px] max-w-[800px] font-primary" style={{
                                                    whiteSpace: 'pre-wrap',
                                                    fontFamily: 'inherit'
                                                }}>
                                                    {message.content}
                                                </pre>
                                                <img className="w-[60px] h-[60px]" src={img5} alt="" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 w-2/3" key={message?._id}>
                                            <img className="w-[40px] h-[40px]" src={img1} alt="" />
                                            <pre className="text-[14px] bg-[#424242] text-white p-3 flex items-center px-3 rounded-t-xl rounded-br-xl min-w-[400px] max-w-[800px] overflow-x-auto font-primary" style={{
                                                whiteSpace: 'pre-wrap',
                                                fontFamily: 'inherit'
                                            }}>
                                                {message.content}
                                            </pre>
                                        </div>
                                    )
                                ) : null}

                            {isLoading ?
                                <div>
                                    <div className="flex items-center  gap-2 w-2/3" key={'xyz'}>
                                        <img className="w-[40px] h-[40px]" src={img1} alt="" />
                                        <p className="text-[14px] tracking-widest font-bold  p-3">
                                            ...
                                        </p>
                                    </div>
                                </div> : null}
                        </>
                    )}
                </div>

            </div>

            <div className="w-full p-2 absolute bottom-0 bg-white left-0">
                <div className="w-3/5 mx-auto flex justify-between border border-black rounded-md px-5 py-1 sticky bottom-0">

                    <input
                        type="text"
                        name="message"
                        id="message"
                        value={message}
                        placeholder="Nachricht senden"
                        className="p-3 w-full active:outline-none focus:outline-none"
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleCreateChat();
                                setMessage('')
                            }
                        }}
                    />

                    <button
                        type="button"
                        disabled={!message || isLoading}
                        className="disabled:text-gray-300 disabled:cursor-not-allowed"
                        onClick={handleCreateChat}
                    >
                        {isLoading ? <div className="text-black">...</div> : <IoMdSend className="text-2xl" />}
                    </button>
                </div>
            </div>

        </div>
    );
}