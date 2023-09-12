import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { Categories } from "./Components/Categories/Categories";
import { UseCase } from "./Components/UseCase/UseCase";
import { Prompt } from "./Components/Prompt/Prompt";
import img1 from '../../../src/assets/color plates/Rectangle 1.png'
import img2 from '../../../src/assets/color plates/Rectangle 2.png'
import img3 from '../../../src/assets/color plates/Rectangle 3.png'
import img4 from '../../../src/assets/color plates/Rectangle 4.png'
import img5 from '../../../src/assets/color plates/Rectangle 5.png'


const Library = () => {
    const prompts = [
        {
            id: 1,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 2,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 3,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        },
        {
            id: 4,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img4,
        },
        {
            id: 5,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img5,
        },
        {
            id: 6,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 7,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 8,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        },
        {
            id: 9,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img4,
        },
        {
            id: 10,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img5,
        },
        {
            id: 11,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 12,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 13,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        },
        {
            id: 14,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img4,
        },
        {
            id: 15,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img5,
        },
        {
            id: 16,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 17,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 18,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        },
        {
            id: 19,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img4,
        },
        {
            id: 20,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img5,
        },
    ]
    return (
        <div className="mx-4 relative h-full max-h-screen overflow-hidden">
            <div className="mt-[30px] z-50 bg-white">
                <h1 className="flex gap-[15px] items-center text-[25px]"> <FiBook></FiBook> <span className="text-[25px] font-extrabold	">Bibliothek - Start-Click-Prompt </span>
                </h1>
                <Categories></Categories>
                <UseCase></UseCase>
            </div>
            <div className="home-prompts pb-5 mt-5 overflow-y-auto pr-5">
                <div className="grid grid-cols-5 gap-[10px]">
                    {prompts.map(prompt => <Prompt
                        key={prompt.id}
                        prompt={prompt}
                    ></Prompt>)}
                </div>
            </div>



        </div>
    );
};

export default Library;