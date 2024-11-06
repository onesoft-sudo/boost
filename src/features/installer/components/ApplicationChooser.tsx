import { type FC } from "react";
import ApplicationScriptGenerator from "../../script/components/ApplicationScriptGenerator";
import { appsByCategory } from "../config/apps";
import ApplicationCard from "./ApplicationCard";

const ApplicationChooser: FC = () => {
    return (
        <div className="my-3 lg:px-20">
            <h3 className="text-3xl text-center">Application Chooser</h3>
            <div className="w-36 h-1 bg-blue-600 rounded-lg mt-3 mb-8 mx-auto"></div>

            {Object.entries(appsByCategory).map(([category, apps]) => (
                <div key={category} className="mb-10">
                    <h4 className="text-2xl mb-3">{category}</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {apps.map((app) => (
                            <ApplicationCard
                                key={app.id}
                                id={app.id}
                                name={app.name}
                                url={app.url}
                                description={app.description}
                                image={app.image}
                                top={"top" in app && app.top}
                            />
                        ))}
                    </div>
                </div>
            ))}

            <hr className="mt-4 mb-5 block border-t-neutral-600/60" />
            <ApplicationScriptGenerator />
        </div>
    );
};

export default ApplicationChooser;
