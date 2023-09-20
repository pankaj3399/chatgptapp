import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { Categories } from "./Components/Categories/Categories";
import { UseCase } from "./Components/UseCase/UseCase";
import { useGetCategoriesQuery } from "../../redux-rtk/features/category/categoryApi";
import { useEffect, useState } from "react";
import { useGetPromptsQuery } from "../../redux-rtk/features/prompt/promptApi";
import PromptDashboard from "./Components/Prompt/PromptDashboard";

const Library = () => {

    // get from rtk
    const { data: categories, isLoading, isError, isSuccess } = useGetCategoriesQuery();
    const { data: prompts, isLoading: promptLoading, isError: promptError, isSuccess: promptSuccesss } = useGetPromptsQuery();

    // states
    const [activeCategory, setActiveCategory] = useState('');
    const [activeSubCategory, setActiveSubCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);

    // set the sub category
    useEffect(() => {
        if (activeCategory && categories?.data?.length) {
            setSubCategories(categories?.data.find((item) => item.name === activeCategory).subCategories);
        }
    }, [categories?.data, activeCategory])

    // loading
    if (isLoading) return <>Loading...</>

    if (isError && !isSuccess && promptError && !promptSuccesss) {
        return <>Error</>
    } else {
        return (
            <div className="mx-4 relative h-full max-h-screen overflow-hidden">
                <div className="mt-[30px] z-50 bg-white">
                    <h1 className="flex gap-[15px] items-center text-[25px]"> <FiBook></FiBook>
                        <span className="text-[25px] font-extrabold	">
                            Bibliothek - Start-Click-Prompt
                        </span>
                    </h1>

                    <Categories
                        categoryDatas={categories?.data}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        setActiveSubCategory={setActiveSubCategory}
                    />

                    <UseCase
                        subCategories={[{ _id: 'xyz', name: 'All' }, ...subCategories]}
                        activeSubCategory={activeSubCategory}
                        setActiveSubCategory={setActiveSubCategory}
                    />
                </div>

                <PromptDashboard
                    datas={prompts?.data}
                    promptLoading={promptLoading}
                    activeCategory={activeCategory}
                    activeSubCategory={activeSubCategory}
                />

            </div>
        );
    }

};

export default Library;