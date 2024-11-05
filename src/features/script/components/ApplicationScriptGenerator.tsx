"use client";

import { useStore } from "@/store/store";
import { useState, type FC } from "react";
import { MdClose, MdDownload, MdDownloadDone } from "react-icons/md";
import { generateInstallScript } from "../actions/generator";

const ApplicationScriptGenerator: FC = () => {
    const { apps, setApps } = useStore();
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    const handleDownload = async () => {
        if (apps.length === 0) {
            return;
        }

        try {
            const script = await generateInstallScript(apps);
            const blob = new Blob([script], {
                type: "application/octet-stream",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");

            a.href = url;
            a.download = "boost_install_apps.sh";

            a.click();
            URL.revokeObjectURL(url);
            setDownloadSuccess(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center gap-2 flex-col lg:flex-row">
            <button
                onClick={() => setApps([])}
                className={
                    "disabled:bg-red-800 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:focus:ring-none disabled:hover:bg-red-800 hover:bg-red-700 bg-red-600 focus:ring-red-600 flex items-center gap-1 rounded text-white pl-1.5 pr-2.5 py-1 ml-4 uppercase focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 font-semibold text-sm"
                }
                disabled={apps.length === 0}
            >
                <MdClose size={20} />
                Clear Selection
            </button>
            <button
                onClick={handleDownload}
                className={
                    "disabled:bg-blue-800 disabled:cursor-not-allowed disabled:text-neutral-300 disabled:focus:ring-none disabled:hover:bg-blue-800 hover:bg-blue-700 bg-blue-600 focus:ring-blue-600 flex items-center gap-1 rounded text-white pl-1.5 pr-2.5 py-1 ml-4 uppercase focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 font-semibold text-sm"
                }
                disabled={apps.length === 0}
            >
                {downloadSuccess ? (
                    <MdDownloadDone size={20} />
                ) : (
                    <MdDownload size={20} />
                )}
                Download Installer Script
            </button>
        </div>
    );
};

export default ApplicationScriptGenerator;
