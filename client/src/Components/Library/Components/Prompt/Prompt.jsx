/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Dialog, Button } from "@material-tailwind/react";

import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiOutlineUpload } from "@react-icons/all-files/ai/AiOutlineUpload";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { RiSendPlane2Fill } from "@react-icons/all-files/ri/RiSendPlane2Fill";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import { useEffect, useState } from "react";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import LoadingIcon from "../../../Shared/LoadingIcon/LoadingIcon";
import { useCreateChatMutation } from "../../../../redux-rtk/features/chat/chatApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDeletePromptMutation } from "../../../../redux-rtk/features/prompt/promptApi.js";
import DeleteIcon from "../../../../assets/icons/deleteIcon.svg";

export function Prompt({ prompt, deletePrompts }) {
  const navigate = useNavigate();
  // rtk
  const [deletePrompt] = useDeletePromptMutation();
  const [createChat, { isLoading, isSuccess }] = useCreateChatMutation();

  const [size, setSize] = useState(null);
  const [sizeDel, setSizeDel] = useState(null);
  const handleOpen = (e,value) => {
    if(e.target.innerText==="Delete")return
    setSize(value);
  }
  const handleClickOutside = (value)=>{
    setSize(value);
  }
  const handleOpenDel = (value) => setSizeDel(value);

  const { name, description, image, type, category, subCategory, user } =
    prompt;

  const deletePromptApiCall = (promptId) => {
    // Use the mutation function to delete the prompt
    // dispatch(useDeletePromptMutation(promptId));
    deletePrompt(promptId).then((result) => {
      if (!result.error) {
        toast.success(result.data.message);
        // Handle any other logic you need here after a successful delete
        deletePrompts(promptId);
      } else {
        toast.error(result.error.data.message);
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/chat");
    }
  }, [isSuccess, navigate]);

  const handleChatStart = () => {
    if (!prompt.prompt) {
      return toast.error("Prompt message not there!!");
    }

    createChat({
      role: "user",
      message: prompt.prompt,
      chatId: undefined,
    });
  };

  return (
    <>
      <Card
        className=" cursor-pointer max-w-[24rem] overflow-hidden my-[5px] rounded-sm relative"
        onClick={(e) => {
          location.pathname === "/library" && handleOpen(e,"lg");
          location.pathname === "/myPrompts" && handleOpen(e,"lg");
        }}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img className="w-full" src={image?.url} alt="ui/ux review check" />
          {location.pathname === "/myPrompts" && (
            <>
              <button
                onClick={() => {
                  location.pathname === "/myPrompts" &&
                    navigate("/createPrompts", { state: prompt });
                }}
                className="bg-white text-black py-1 ps-5 w-[60px] rounded-md flex items-center text-xs ms-auto right-3 absolute top-3 "
              >
                Edit<FiEdit3></FiEdit3>
              </button>
              <button
                 onClick={() => {
                  handleOpenDel("lg");
                }}
                style={{right: '5rem'}}
                className="bg-white text-black py-1 ps-1 w-[60px] rounded-md flex items-center text-xs ms-auto absolute top-3 "
              >
                Delete<FiEdit3></FiEdit3>
              </button>
            </>
          )}
        </CardHeader>
        <CardBody className="p-[10px]">
          <Typography variant="h4" color="blue-gray" className="text-[17px] ">
            {name}
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="font-normal text-[14px] flex justify-between flex-col "
          >
            <div>
              {description?.length > 135
                ? description?.slice(0, 135) + "..."
                : description}
            </div>
          </Typography>
        </CardBody>
      </Card>
      <>
        {/* {location.pathname === "/library" && ( */}
          <Dialog
            open={size === "lg"}
            size={size || "lg"}
            handler={handleClickOutside}
            className="bg-[#303030] text-white rounded-none w-[1200px] modal 2xl:max-w-[1200px] lg:max-w-[1200px] md:max-w-[1200px] max-w-[1200px] md:w-5/6 lg:w-3/4 2xl:w-3/5 min-w-[90%] md:min-w-[83.333333%] lg:min-w-[1200px] 2xl:min-w-[1200px] "
          >
            {/* <CreatePrompts /> */}
            <div className="flex max-w-[1200px] mx-auto">
              <div className="w-1/2 p-[25px]">
                <div className=" flex ">
                  <div className="me-[22px] mb-[30px] h-32">
                    <img src={image?.url} alt="" className="h-full" />
                  </div>
                  <div>
                    <h3 className="text-[18px] ">{name}</h3>
                    <p className="text-15px pb-[10px]">{user?.id?.name}</p>
                    <div className="flex text-[12px]">
                      <div className="me-3">
                        <p>Kategorie</p>
                        <p className="bg-white px-[33px] py-[10px] mt-[2px] text-black rounded-md">
                          {category?.name}
                        </p>
                      </div>
                      <div>
                        <p>Use Case</p>
                        <p className="bg-white px-[33px] py-[10px] mt-[2px] text-black rounded-md">
                          {subCategory?.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className=" " />
                <div className="flex gap-5 my-3">
                  <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                    <AiOutlineHeart className="text-2xl"></AiOutlineHeart>
                    63
                  </button>
                  <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                    <AiOutlineStar className="text-2xl"></AiOutlineStar>52
                  </button>
                  <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                    <AiOutlinePlus className="text-2xl"></AiOutlinePlus>List
                  </button>
                  <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                    <AiOutlineUpload className="text-2xl"></AiOutlineUpload>
                    Teilen
                  </button>
                </div>
                <hr className="text-red " />
                <div>
                  <p className="py-1 px-10 bg-white w-32 text-black rounded-md mt-3 capitalize">
                    {type}
                  </p>
                  <h2 className="my-[22px] text-[18px]">Beschreibung</h2>
                  <p className="text-[12px]">{description}</p>
                </div>
              </div>

              <div className="bg-[#424242] h-100% w-1/2 p-[25px]">
                <div className="flex justify-between items-center">
                  <p className="py-1 px-10 bg-white h-full w-32 text-black rounded-md">
                    {type}
                  </p>
                  <Button
                    variant="text"
                    onClick={(e) => handleOpen(e,null)}
                    className="mr-1"
                  >
                    <span className="flex bg-white text-red-900 py-2 gap-2 text-md rounded-sm items-center px-4">
                      Abbrechen <ImCross></ImCross>
                    </span>
                  </Button>
                </div>
                <p className="bg-[#303030] mt-2 text-[12px] p-3 h-5/7" style={{ whiteSpace: 'pre-wrap', maxHeight: '800px', overflow: 'scroll'}}>
                  {prompt?.prompt}
                </p>
                <button
                  className="flex bg-white text-black  items-center py-[10px] pe-[65px] ps-[55px] rounded-md gap-3 w-2/7 mx-auto mt-5 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={isLoading}
                  onClick={handleChatStart}
                >
                  {isLoading ? (
                    <LoadingIcon color="black" />
                  ) : (
                    <>
                      <RiSendPlane2Fill></RiSendPlane2Fill>
                      Chat starten
                    </>
                  )}
                </button>
              </div>
            </div>
          </Dialog>
        {/* )} */}

        {location.pathname === "/myPrompts" && (
          <Dialog
            open={sizeDel === "lg"}
            handler={handleOpenDel}
            className="bg-[#303030] p-8 text-white  modal rounded-lg  flex flex-col gap-8"
          >
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img src={DeleteIcon} alt="Delete Icon" className="mt-[-5px] h-10" />
                <h1 className="text-2xl">Prompt aus Datenbank entfernen?</h1>
              </div>
              <span
                className="float-right text-xl cursor-pointer"
                onClick={() => {
                  handleOpenDel(null);
                }}
              >
                X
              </span>
            </div>
            <div className="flex justify-center">
              <Button
                variant="contained"
                color="primary"
                size="small"
                className="m-3 bg-red-500 text-base"
                onClick={() => {
                  deletePromptApiCall(prompt._id);
                }}
              >
                Prompt entfernen
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className="m-3 bg-white text-black text-base"
                onClick={() => {
                  handleOpenDel(null);
                }}
              >
                Nein
              </Button>
            </div>
          </Dialog>
        )}
      </>
    </>
  );
}
