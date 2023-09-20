import {
    Tabs,
    TabsHeader,
    Tab,

} from "@material-tailwind/react";
import { useEffect } from "react";

export function UseCase({ subCategories, activeSubCategory, setActiveSubCategory }) {

    // Use useEffect to set the first category as active when the component mounts
    useEffect(() => {
        if (!activeSubCategory && subCategories.length > 0) {
            setActiveSubCategory(subCategories[0].name);
        }
    }, [activeSubCategory, subCategories, setActiveSubCategory]);

    return (
        <div className="mt-1 w-4/6">
            <Tabs id="custom-animation" value={subCategories[0].name}>
                <p className="text-[12px] mb-1">Use Case</p>
                <TabsHeader>
                    {subCategories.map((item) => (
                        <Tab
                            key={item._id}
                            value={item.name}
                            onClick={() => setActiveSubCategory(item.name)}
                            className="overflow"
                            style={{
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis'
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