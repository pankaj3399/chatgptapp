import { useEffect, useState } from 'react'
import { Prompt } from './Prompt';

const PromptDashboard = ({ activeCategory, activeSubCategory, promptLoading, datas }) => {

    // states
    const [filteredPrompts, setFilterPrompts] = useState([]);

    // set filterd prompt
    useEffect(() => {
        if (activeCategory && activeSubCategory === 'All' && datas?.length) {
            setFilterPrompts(datas.filter((item) => item.category.name === activeCategory))
        } else if (activeCategory && activeSubCategory !== 'All' && datas?.length) {
            setFilterPrompts(datas.filter((item) => item.category.name === activeCategory && item.subCategory.name === activeSubCategory))
        } else {
            setFilterPrompts(datas ? datas : [])
        }
    }, [activeCategory, datas, activeSubCategory])

    return (
        <div className="home-prompts pb-5 mt-5 overflow-y-auto pr-5">

            {promptLoading ? <div className="flex justify-center items-center h-1/2 tracking-wider text-[32px] font-semibold"> Loading...</div> : filteredPrompts.length === 0 ?
                <div className="flex items-center justify-center text-red-500 h-1/2">No records found there</div> :
                <div className="grid grid-cols-5 gap-[10px]">
                    {filteredPrompts.map(prompt => <Prompt
                        key={prompt._id}
                        prompt={prompt}
                    ></Prompt>)}
                </div>}

        </div>
    )
}

export default PromptDashboard