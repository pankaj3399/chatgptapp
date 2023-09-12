import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export function Categories() {
    const data = [
        {
            label: "Marketing",
            value: "html",
        },
        {
            label: "Vertrieb",
            value: "react",
        },

        {
            label: "Controlling",
            value: "vue",
        },

        {
            label: "Qualität",
            value: "angular",
        },

        {
            label: "Personal",
            value: "svelte",
        },
        {
            label: "Produktivität",
            value: "produktivität",
        },
        {
            label: "Projektmanagement",
            value: "projektmanagement",
        },
    ];

    return (
        <div className="mt-4 w-5/6 ">
            <Tabs id="custom-animation" value="html">
                <p className="text-[12px] mb-2">Kategorie</p>
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
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
                </TabsBody>
            </Tabs>
        </div>
    );
}