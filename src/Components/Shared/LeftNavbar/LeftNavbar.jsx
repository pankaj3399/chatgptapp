import logo from '../../../assets/Logo/logo.png'
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { BsChatDots } from "@react-icons/all-files/bs/BsChatDots";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { NavLink } from 'react-router-dom';


const LeftNavbar = () => {


    return (
        <div className='pt-5 ps-3 w-1/5 bg-[#FAFAFA] h-screen sticky top-0'>
            <div>
                <div className='flex items-center text-base	font-bold'>
                    <img src={logo} alt="" />
                    <p className='ms-2'>go-digi-transformation.</p>
                </div>
                <ul className='mt-14 navitems'>
                    <NavLink className={
                        ({ isActive }) => {
                            return (
                                isActive && 'active'
                            )
                        }
                    } to={'/library'}>
                        <li className='flex font-extrabold gap-[22px] text-[15px]  p-4 rounded-md items-center'>
                            <FiBook className='text-[16px]'></FiBook>
                            <a>Bibliothek</a>
                        </li>
                    </NavLink >
                    <NavLink className={
                        ({ isActive }) => {
                            return (
                                isActive && 'active'
                            )
                        }
                    } to={'/chat'}>
                        <li className='flex font-extrabold gap-[22px] text-[15px]  p-4 rounded-md items-center'>
                            <BsChatDots className='text-[16px]'></BsChatDots>
                            <a>Chat</a>
                        </li>
                    </NavLink >
                    <NavLink className={
                        ({ isActive }) => {
                            return (
                                isActive && 'active'
                            )
                        }
                    } to={'/myPrompts'}>
                        <li className='flex font-extrabold gap-[22px] text-[15px]  p-4 rounded-md '>
                            <AiOutlineStar className='text-[18px]'></AiOutlineStar>
                            <a>Meine Prompts</a>
                        </li>
                    </NavLink >

                </ul>
            </div>

        </div>
    );
};

export default LeftNavbar;