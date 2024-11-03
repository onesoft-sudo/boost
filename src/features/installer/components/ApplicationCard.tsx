"use client";

import { useStore } from "@/store/store";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { FaFire } from "react-icons/fa6";
import { MdAdd, MdCheck, MdClose } from "react-icons/md";

type ApplicationCardProps = {
    id: string;
    name: string;
    url: string;
    description: string;
    image: string | StaticImport;
    top?: boolean;
};

const ApplicationCard: FC<ApplicationCardProps> = ({
    description,
    name,
    url,
    image,
    top,
    id,
}) => {
    const { apps, setApps } = useStore();
    const isSelected = apps.includes(id);
    const toggleSelected = () => {
        if (isSelected) {
            setApps(apps.filter((app) => app !== id));
        } else {
            setApps([...apps, id]);
        }
    };

    return (
        <div className="bg-neutral-800 rounded-lg py-2 px-4 relative block">
            <div className="grid grid-cols-[4fr_1.5fr] gap-2 h-full pb-5">
                <div className={`px-2 pb-2 ${top ? "" : "pt-2"}`}>
                    {isSelected && (
                        <p className="right-2 absolute">
                            <MdCheck size={25} />
                        </p>
                    )}
                    {top && (
                        <p className="text-neutral-200 text-sm mt-2">
                            <strong className="flex items-center gap-1">
                                <FaFire size={20} /> TOP APP
                            </strong>
                        </p>
                    )}
                    {top && <div className="pt-1">&nbsp;</div>}
                    <Link
                        className="text-2xl pb-3 hover:underline"
                        href={url}
                        target="_blank"
                    >
                        {name}
                    </Link>
                    <p className="text-neutral-400">{description}</p>
                </div>
                <div className="flex justify-center items-center">
                    {typeof image === "string" ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-20 h-20 rounded-lg"
                        />
                    ) : (
                        <Image
                            src={image}
                            alt={name}
                            className="w-20 h-20 rounded-lg"
                        />
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 right-0 p-2 flex items-center">
                <Link
                    href={url}
                    target="_blank"
                    className="text-neutral-400 hover:text-neutral-200"
                >
                    View
                </Link>

                <button
                    onClick={toggleSelected}
                    className={clsx(
                        "w-24 flex items-center gap-1 rounded text-white pl-1.5 pr-2.5 py-1 ml-4 uppercase focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 font-semibold text-sm",
                        {
                            "bg-blue-600 focus:ring-blue-600 hover:bg-blue-700":
                                !isSelected,
                            "bg-red-700 focus:ring-red-700 hover:bg-red-800":
                                isSelected,
                        }
                    )}
                >
                    {isSelected ? (
                        <MdClose size={20} />
                    ) : (
                        <MdAdd size={20} className="inline" />
                    )}
                    {isSelected ? "Remove" : "Select"}
                </button>
            </div>
        </div>
    );
};

export default ApplicationCard;
