import {
    Button,
} from "@material-tailwind/react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import img1 from '../../../assets/ai logos/image1.png'
import img2 from '../../../assets/ai logos/image2.png'
import img3 from '../../../assets/ai logos/image3.png'
import img4 from '../../../assets/ai logos/image4.png'

import colorPlate1 from '../../../assets/color plates/Rectangle 1.png'
import colorPlate2 from '../../../assets/color plates/Rectangle 2.png'
import colorPlate3 from '../../../assets/color plates/Rectangle 3.png'
import colorPlate4 from '../../../assets/color plates/Rectangle 4.png'
import colorPlate5 from '../../../assets/color plates/Rectangle 5.png'


import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import { AiOutlineQuestionCircle } from "@react-icons/all-files/ai/AiOutlineQuestionCircle";
import { Link } from "react-router-dom";


const CreateCharacter = () => {


    return (
        <div className="bg-[#303030] mt-4 p-10 text-white">
            <div className="flex items-center justify-between">
                <p className="flex items-center gap-3 text-2xl font-extrabold mb-7"><AiOutlinePlus></AiOutlinePlus>Prompt hinzufügen</p>
                <Link to={'/library'}>
                    <p className="cursor-pointer flex items-center gap-4 bg-white text-black py-2 px-4 rounded-md"><span className="text-md font-bold">Abbrechen</span><ImCross></ImCross></p>
                </Link>

            </div>
            <div className="mb-10">
                <p className="mb-1">Name</p>
                <div className="w-3/5 text-white bg-white py-2 px-2 border-0 mb-7 rounded-md">
                    <input className="w-full outline-none text-black " type="text" placeholder={`Wie nennt sich der Prompt?`} />
                </div>
            </div>

            <div className="flex w-3/5 justify-between items-center mb-8">
                <p className="">Welches Model soll verwendet werden? </p>
                <Menu>
                    <MenuHandler>
                        <Button className="bg-[#E6E6E6] text-black w-48 text-[15px] flex items-center gap-3 px-9 rounded-none"><img className="w-[23px] h-[23px]" src={img1} alt="" />Model <AiOutlineDown></AiOutlineDown></Button>
                    </MenuHandler>
                    <MenuList className="bg-[#B8B8B8] p-0 rounded-none">
                        <MenuItem className="text-black bg-[#334155] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img1} alt="" /> ChatGpt</MenuItem>
                        <MenuItem className="text-black bg-[#E6E6E6] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img2} alt="" /> UnternehmensGPT</MenuItem>
                        <MenuItem className="text-black bg-[#E6E6E6] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img3} alt="" /> Llama 2</MenuItem>
                        <MenuItem className="text-black bg-[#E6E6E6] p-3 flex items-center gap-3 text-[15px] rounded-none hover:bg-[#64748B]"> <img className="w-[23px] h-[23px]" src={img4} alt="" /> DALL-e 2</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            <div className="mb-10 w-3/5">
                <div className="flex items-center justify-between">
                    <p className="mb-1">Prompt</p>
                    <p className="flex items-center gap-2">Was macht einen guten Prompt aus<AiOutlineQuestionCircle className="text-xl"></AiOutlineQuestionCircle></p>
                </div>
                <div className=" h-[183px] text-white bg-white py-2 px-2 border-0 mb-7 rounded-md">
                    <input className="w-full outline-none text-black " type="text" placeholder={`Prompt hier eingeben.`} />
                </div>
            </div>
            <div className="mb-10">
                <p className="mb-1">Beschreibung</p>
                <div className="w-3/5 h-[183px] text-white bg-white py-2 px-2 border-0 mb-7 rounded-md">
                    <input className="w-full outline-none text-black " type="text" placeholder={`Beschreibung des Prompts. Welche Aufgabe wird erledigt? Welche Ziele werden erreicht?`} />
                </div>
            </div>
            <div className="mb-5">
                <p className="mb-2 ">Kategorie</p>
                <div className="">
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Marketing</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Vertrieb</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Controlling</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Qualität</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Personal</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Produktivität</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Projektmanagement</button>
                </div>
            </div>
            <div>
                <p className="mb-2 ">Use Case</p>
                <div className="">
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">All</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">E-Mail</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Blog</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Produkt</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">SEO</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Social Media</button>
                    <button className="bg-white text-black py-1 px-4 rounded-md text-[14px] me-2 hover:bg-[#E6E6E6]">Pressemeldung</button>
                </div>
            </div>
            <div className="my-6">
                <p className="mb-2 ">Bild auswählen</p>
                <div className="flex gap-3">
                    <img src={colorPlate1} alt="" />
                    <img src={colorPlate2} alt="" />
                    <img src={colorPlate3} alt="" />
                    <img src={colorPlate4} alt="" />
                    <img src={colorPlate5} alt="" />
                </div>
            </div>
            <div className="mt-10">
                <button className="bg-white py-2 px-6 rounded-md text-black flex items-center gap-3 ">
                    <AiOutlinePlus></AiOutlinePlus>Prompt hinzufügen
                </button>
            </div>
        </div>
    );
};

export default CreateCharacter;