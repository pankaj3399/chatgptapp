import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import person from '../../../assets/massege characters/image5.png'
import React from "react";

import img1 from '../../../assets/color plates/Rectangle 1.png'
import img2 from '../../../assets/color plates/Rectangle 2.png'
import img3 from '../../../assets/color plates/Rectangle 3.png'
import img4 from '../../../assets/color plates/Rectangle 4.png'
import img5 from '../../../assets/color plates/Rectangle 5.png'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Prompt } from "../../Library/Components/Prompt/Prompt";

const MyPrompts = () => {

    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        {
            label: "Meine Prompts",
            value: "html",
        },
        {
            label: "Meine Liste",
            value: "react",

        },
        {
            label: "Favoriten",
            value: "vue",
        },
        {
            label: "Upvoted Prompts",
            value: "angular",

        },
    ];

    const prompts = [
        {
            id: 1,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 2,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 3,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        },
        {
            id: 4,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img4,
        },
        {
            id: 5,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img5,
        },
        {
            id: 6,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img1,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 7,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img2,
        },
        {
            id: 8,
            edit: true,
            promptName: 'Prompt Name',
            description: 'Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description Prompt Description ',
            image: img3,
        }
    ]

    return (
        <div className="grow max-h-screen rest-screen-my-prompts mt-[30px] overflow-hidden">
            <div className="flex h-full">
                <div className="w-1/4 h-full">
                    <div>
                        <h1 className="flex gap-3 text-[24px] font-extrabold items-center mb-[25px] ms-[10px]"> <AiOutlineStar className="font-extrabold "></AiOutlineStar>Meine Prompts </h1>
                    </div>
                    <div className="bg-[#424242] items-center pt-5 rounded-md h-full">
                        <button className="bg-white text-black py-1 ps-5 w-[80px] rounded-md flex items-center text-xs relative ms-auto right-3">Edit<FiEdit3 ></FiEdit3></button>
                        <div className="text-center">
                            <img src={person} className="bg-[#424242] rounded-full w-[120px] h-[120px] mx-auto " alt="" />
                            <h1 className="text-xl font-bold text-white mt-6">Digital Dieter</h1>
                            <p className="text-white text-[15px] mt-2">User</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="max-w-full bg-white left-0 z-50 ms-3 me-auto mt-[60px] ">
                        <Tabs value={activeTab} className=''>
                            <TabsHeader
                                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 "
                                indicatorProps={{
                                    className:
                                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                                }}
                            >
                                {data.map(({ label, value }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        onClick={() => setActiveTab(value)}
                                        className={activeTab === value ? "text-gray-900" : ""}
                                    >
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <TabsBody>
                                {data.map(({ value, desc }) => (
                                    <TabPanel key={value} value={value}>
                                        {desc}
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </div>
                    <div className="overflow-auto rest-screen">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-5 ms-4 gap-[10px]  mb-3 pb-16 me-8">
                            {prompts.map(prompt => <Prompt
                                key={prompt.id}
                                prompt={prompt}
                            ></Prompt>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPrompts;