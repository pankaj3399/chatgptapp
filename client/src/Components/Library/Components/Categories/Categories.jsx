import {
    Tabs,
    TabsHeader,
    // TabsBody,
    Tab,
    // TabPanel,
} from "@material-tailwind/react";
import { useEffect } from "react";

export function Categories({ categoryDatas, activeCategory, setActiveCategory, setActiveSubCategory }) {

    // console.log(activeCategory);

    // Use useEffect to set the first category as active when the component mounts
    useEffect(() => {
        if (!activeCategory && categoryDatas.length > 0) {
            setActiveCategory(categoryDatas[0].name);
        }
    }, [activeCategory, categoryDatas, setActiveCategory]);

    return (
        <div className="mt-4 w-5/6 ">
            <Tabs id="custom-animation" value={categoryDatas[0].name}>
                <p className="text-[12px] mb-2">Kategorie</p>
                <TabsHeader>

                    {categoryDatas.map((item, index) => (
                        <Tab
                            key={`category${index}`}
                            value={item.name}
                            onClick={() => {
                                setActiveCategory(item.name)
                                setActiveSubCategory('All')
                            }}
                        >
                            {item.name}
                        </Tab>
                    ))}
                </TabsHeader>
                {/* <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody> */}
            </Tabs>
        </div>
    );
}