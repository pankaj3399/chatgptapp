
import {
    Navbar,
    Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import person from '../../../assets/massege characters/image5.png'
import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../../redux-rtk/features/auth/authSlice";
import { loginUrl } from "../../../configs/constants";


export function TopNavbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [open, setOpen] = React.useState(false);
    const handleCreate = () => setOpen(!open);

    const [size, setSize] = React.useState(null);
    const handleOpen = (value) => setSize(value);

    const handleLogout = () => {
        dispatch(userLoggedOut());
        navigate(loginUrl);
    }


    return (
        <div className="w-full sticky top-0 right-0 z-50 bg-white">
            <Navbar className="px-4 shadow-white z-50 max-w-full">
                <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                    <div className="relative flex w-full gap-2 md:w-max">
                        <div className="flex items-center gap-2 bg-[#FAFAFA]">
                            <p className="ps-4"><BiSearch></BiSearch></p>
                            <input className="bg-[#FAFAFA] py-3 ps-3 pe-16" type="search" name="" id="" placeholder="Prompt suchen" />

                        </div>
                        <Button size="sm" className="font-extrabold rounded bg-[#E6E6E6] text-black">
                            Suchen
                        </Button>

                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center text-4 font-bold bg-[#E6E6E6] py-2 px-8 rounded-md" onClick={handleCreate}>
                            <AiOutlinePlus className="me-1"></AiOutlinePlus>Hinzufügen
                        </button>
                        <img src={person} alt="" />
                        <h2 className="font-bold text-[15px]">{auth.user?.name}</h2>

                        <button onClick={handleLogout}>
                            <p className="font-extraboldbold text-2xl">
                                <FiLogOut></FiLogOut>
                            </p>
                        </button>

                    </div>
                </div>
            </Navbar>
            <div className="">
                <Dialog open={open} handler={handleCreate} className="">
                    <div className="p-[35px] bg-[#303030] min-w-[750px]">
                        <DialogHeader className="font-extrabold text-[25px] text-white gap-5 justify-between">
                            <div className="flex items-center gap-4">
                                <AiOutlinePlus></AiOutlinePlus>
                                <h2>Prompt hinzufügen</h2>
                            </div>
                            <button>
                                <ImCross onClick={handleCreate} className="font-thin text-base"></ImCross>
                            </button>
                        </DialogHeader>
                        <DialogBody className="flex items-center gap-3" onClick={handleCreate}>
                            <Link to={'/createPrompts'}>
                                <div className=" bg-white text-black p-5 rounded-md">
                                    <h1 className="text-[25px] font-extrabold pb-3">Prompt</h1>
                                    <p className="text-[13px] font-thin">Hier wird eine Beschreibung stehen, die dem User
                                        erklärt was ein Prompt ist und warum er sich für diese
                                        Variante entscheiden sollte.
                                        Der Text wird noch geschrieben. Das ist nur ein
                                        Platzhalter hier.</p>
                                </div>
                            </Link>
                            <Link to={'/createCharacter'} onClick={handleCreate}>
                                <div className=" bg-white text-black p-5 rounded-md">
                                    <h1 className="text-[25px] font-extrabold pb-3">Charakter</h1>
                                    <p className="text-[13px] font-thin">Hier wird eine Beschreibung stehen, die dem User
                                        erklärt was ein Prompt ist und warum er sich für diese
                                        Variante entscheiden sollte.
                                        Der Text wird noch geschrieben. Das ist nur ein
                                        Platzhalter hier.</p>
                                </div>
                            </Link>
                        </DialogBody>
                    </div>
                </Dialog>
            </div>
            <div>
                <Dialog
                    open={
                        size === "xl"
                    }
                    size={size || "md"}
                    handler={handleOpen}
                    className="bg-[#303030] text-white rounded-none p-[15px]"
                >

                </Dialog>
            </div>
        </div>
    );
}
export default TopNavbar;