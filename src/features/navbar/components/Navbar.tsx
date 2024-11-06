"use client";

import Brand from "@/components/Brand";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC } from "react";
import { FaGithub } from "react-icons/fa6";

const links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Docs", href: "/docs" },
    {
        title: "GitHub",
        href: "https://github.com/onesoft-sudo/boost",
        newTab: true,
    },
];

const Navbar: FC = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between lg:justify-normal lg:grid items-center grid-cols-[1fr_10fr_1fr] gap-4 bg-neutral-800/70 backdrop-blur-2xl py-2 px-5 sticky top-0 left-0 z-50">
            <Link href="/">
                <Brand />
            </Link>

            <ul className="items-center gap-5 justify-center hidden lg:flex">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            target={link.newTab ? "_blank" : undefined}
                            className={clsx("hover:text-neutral-100", {
                                "text-neutral-200 after:content-[''] after:absolute relative after:-bottom-3 after:bg-white after:h-[2px] after:w-full after:block after:rounded-lg":
                                    link.href === pathname,
                                "text-neutral-300": link.href !== pathname,
                            })}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden lg:block">&nbsp;</div>

            <Link
                href="https://github.com/onesoft-sudo/boost"
                target="_blank"
                className="lg:hidden"
            >
                <FaGithub size={20} />
            </Link>
        </nav>
    );
};

export default Navbar;
