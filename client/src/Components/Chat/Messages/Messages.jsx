import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import img1 from "../../../assets/ai logos/image1.png";
import img2 from "../../../assets/ai logos/image2.png";
import img3 from "../../../assets/ai logos/image3.png";
import img4 from "../../../assets/ai logos/image4.png";
import img5 from "../../../assets/massege characters/image5.png";

import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { useEffect, useRef, useState } from "react";
import { cx, getRandomInt } from "../../../hooks/helpers";
import { useCreateChatMutation } from "../../../redux-rtk/features/chat/chatApi";
import LoadingIcon from "../../Shared/LoadingIcon/LoadingIcon";
import TypingMessage from "./TypingMessage";
import NewMessageInp from "./NewMessageInp";

const menuItems = [
  { name: "GPT-4", imgSrc: img1, disabled: false },
  { name: "UnternehmensGPT", imgSrc: img2, disabled: true },
  { name: "Llama 2", imgSrc: img3, disabled: true },
  { name: "DALL-e 2", imgSrc: img4, disabled: true },
];

export default function MenuDefault({
  isNewChat,
  setIsNewChat,
  messages,
  isError,
  chatLoading,
  setMessages,
  updateChatId,
}) {
  const chatDivRef = useRef(null);

  // rtk
  const [createChat, { data: apiData, isLoading, isSuccess }] = useCreateChatMutation();

  // states
  const [newMessage, setNewMessage] = useState('');
  const [newMessageTimestamp, setNewMessageTimestamp] = useState('');
  const [model, setModel] = useState(menuItems[0].name);

  // clear input field
  useEffect(() => {
    if (isSuccess) {
      setNewMessage(apiData?.newMessage?.content)
      setNewMessageTimestamp(apiData?.newMessage?.createdContentAt)
      setIsNewChat(false);
    }
  }, [isSuccess, setIsNewChat, apiData])

  useEffect(() => {
    if (chatDivRef.current) {
      chatDivRef.current.style.transition = 'scrollTop 0.5s ease-in-out';
      chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
    }
  }, [messages]);

  // if error
  if (isError) return <>Error ....</>;

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
                menuItem.name === model ? "!bg-[#64748B]" : "bg-[#E6E6E6]"
              )}
              disabled={menuItem.disabled}
              onClick={() => setModel(menuItem.name)}
            >
              <img className="w-[23px] h-[23px]" src={menuItem.imgSrc} alt="" />
              {menuItem.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>


      <div className="rest-screen grow overflow-auto mb-5 messages pb-52 px-5" ref={chatDivRef}>

        <div className="overflow-auto">

          {chatLoading ? (
            <div className="flex items-center justify-center h-full">
              <LoadingIcon color='black' />
            </div>
          ) : (
            <>
              {(!messages.length || isNewChat) ?
                <div className="flex items-center justify-center h-full">Ask something to get response</div> :
                messages.length ? messages?.map((message, index) =>
                  message.role === 'user' ? (
                    <div key={`${message._id}${getRandomInt()}`}>
                      <div className="max-w-[50%] w-fit flex justify-end ms-auto right-0 my-5">
                        <pre className="text-[14px] bg-[#424242] text-white p-3 flex items-center px-3 rounded-t-xl rounded-bl-xl w-fit max-w-[800px] font-primary" style={{
                          whiteSpace: 'pre-wrap',
                          fontFamily: 'inherit'
                        }}>
                          {message.content}
                        </pre>
                        <img className="w-[60px] h-[60px]" src={img5} alt="" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2 max-w-[67%] w-fit" key={`${message._id}${getRandomInt()}`}>
                      <img className="w-[40px] h-[40px]" src={img1} alt="" />
                      <pre className="text-[14px] bg-[#424242] text-white p-3 flex items-center px-3 rounded-t-xl rounded-br-xl w-fit max-w-[800px] overflow-x-auto font-primary" style={{
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'inherit'
                      }}>
                        {(messages.length - 1 === index && newMessage && Number(newMessageTimestamp) === Number(message.createdContentAt)) ?
                          <TypingMessage
                            content={message.content}
                            setNewMessage={setNewMessage}
                            setNewMessageTimestamp={setNewMessageTimestamp}
                          /> :
                          message.content
                        }
                      </pre>
                    </div>
                  )
                ) : null}

              {isLoading ?
                <div>
                  <div className="flex gap-2 w-2/3" key={'xyz'}>
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
        <NewMessageInp
          model={model}
          updateChatId={updateChatId}
          messages={messages}
          setMessages={setMessages}
          isNewChat={isNewChat}
          createChat={createChat}
          isLoading={isLoading}
        />
      </div>

    </div>
  );
}
