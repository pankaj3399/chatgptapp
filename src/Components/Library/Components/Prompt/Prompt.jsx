import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import img from '../../../../assets/color plates/Rectangle 1.png'
import {
    Dialog,
    Button

} from "@material-tailwind/react";

import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { AiOutlineUpload } from "@react-icons/all-files/ai/AiOutlineUpload";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { RiSendPlane2Fill } from "@react-icons/all-files/ri/RiSendPlane2Fill";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";



// eslint-disable-next-line react/prop-types
export function Prompt({ prompt }) {

    const [size, setSize] = useState(null);
    const handleOpen = (value) => setSize(value);

    // eslint-disable-next-line react/prop-types
    const { promptName, description, image } = prompt;



    return (
        <>
            <Card className=" cursor-pointer max-w-[24rem] overflow-hidden my-[5px] rounded-sm relative" onClick={() => handleOpen("lg")}>
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        className="w-full"
                        src={image}
                        alt="ui/ux review check"
                    />
                    {
                        // eslint-disable-next-line react/prop-types
                        prompt.edit ? <button className="bg-white text-black py-1 ps-5 w-[60px] rounded-md flex items-center text-xs ms-auto right-3 absolute top-3 ">Edit<FiEdit3 ></FiEdit3></button> : <></>
                    }
                </CardHeader>
                <CardBody className="p-[10px]">
                    <Typography variant="h4" color="blue-gray" className="text-[17px] ">
                        {promptName}
                    </Typography>
                    <Typography variant="lead" color="gray" className="mt-3 font-normal text-[14px]" >
                        {description}
                    </Typography>
                </CardBody>

            </Card>
            <>
                <Dialog
                    open={
                        size === "lg"
                    }
                    size={size || "lg"}
                    handler={handleOpen}
                    className="bg-[#303030] text-white rounded-none w-[1200px] modal 2xl:max-w-[1200px] lg:max-w-[1200px] md:max-w-[1200px] max-w-[1200px] md:w-5/6 lg:w-3/4 2xl:w-3/5 min-w-[90%] md:min-w-[83.333333%] lg:min-w-[1200px] 2xl:min-w-[1200px] "
                >
                    <div className="flex max-w-[1200px] mx-auto">
                        <div className="w-1/2 p-[25px]">
                            <div className=" flex ">
                                <div className="me-[22px] mb-[30px] h-32">
                                    <img src={img} alt="" className="h-full" />
                                </div>
                                <div>
                                    <h3 className="text-[18px]  ">Prompt Name</h3>
                                    <p className="text-15px pb-[10px]">Creator’s name</p>
                                    <div className="flex text-[12px]">
                                        <div className="me-3">
                                            <p>Kategorie</p>
                                            <p className="bg-white px-[33px] py-[10px] mt-[2px] text-black rounded-md">Marketing</p>
                                        </div>
                                        <div>
                                            <p>Use Case</p>
                                            <p className="bg-white px-[33px] py-[10px] mt-[2px] text-black rounded-md">Content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=" " />
                            <div className="flex gap-5 my-3">
                                <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                                    <AiOutlineHeart className="text-2xl"></AiOutlineHeart>
                                    63</button>
                                <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                                    <AiOutlineStar className="text-2xl"></AiOutlineStar>52</button>
                                <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                                    <AiOutlinePlus className="text-2xl"></AiOutlinePlus>List</button>
                                <button className="flex items-center gap-2 border-[1px] py-1 px-4 rounded-md bg-[#545454] hover:bg-[#605f5f]">
                                    <AiOutlineUpload className="text-2xl"></AiOutlineUpload>Teilen</button>
                            </div>
                            <hr className="text-red " />
                            <div>
                                <p className="py-1 px-10 bg-white w-32 text-black rounded-md mt-3">Prompt</p>
                                <h2 className="my-[22px] text-[18px]">Beschreibung</h2>
                                <p className="text-[12px]">Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt. Here is the full description of the Prompt.</p>
                            </div>
                        </div>

                        <div className="bg-[#424242] h-100% w-1/2 p-[25px]">
                            <div className="flex justify-between items-center">
                                <p className="py-1 px-10 bg-white h-full w-32 text-black rounded-md">Prompt</p>
                                <Button
                                    variant="text"

                                    onClick={() => handleOpen(null)}
                                    className="mr-1"
                                >
                                    <span className="flex bg-white text-red-900 py-2 gap-2 text-md rounded-sm items-center px-4">Abbrechen <ImCross></ImCross></span>
                                </Button>
                            </div>
                            <p className="bg-[#303030] mt-2 text-[12px] p-3 h-5/7">Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. Here is the prompt displayed. </p>
                            <Link to={'/chat'}>
                                <button className="flex bg-white text-black  items-center py-[10px] pe-[65px] ps-[55px] rounded-md gap-3 w-2/7 mx-auto mt-5"><RiSendPlane2Fill ></RiSendPlane2Fill>Chat starten</button>
                            </Link>
                        </div>
                    </div>

                </Dialog>
            </>

        </>
    );
}