import {
    Tabs,
    TabsHeader,
    Tab,

} from "@material-tailwind/react";

export function UseCase() {
    const data = [
        {
            label: "All",
            value: "all",
        },
        {
            label: "Rolle",
            value: "rolle",
        },

        {
            label: "Content",
            value: "content",
        },

        {
            label: "Produkt",
            value: "produkt",
        },

        {
            label: "Social Media",
            value: "social media",
        },
        {
            label: "Presse",
            value: "presse",
        },
        {
            label: "SEO",
            value: "seo",
        },
    ];

    return (
        <div className="mt-1 w-4/6">
            <Tabs id="custom-animation" value="html">
                <p className="text-[12px] mb-1">Use Case</p>
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
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