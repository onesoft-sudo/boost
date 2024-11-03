"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC } from "react";

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
        <nav className="grid items-center grid-cols-[1fr_10fr_1fr] gap-4 bg-neutral-800 py-2 px-5">
            <Link href="/">
                <span className="font-semibold text-2xl bg-gradient-to-tr from-blue-600 to-purple-500 bg-clip-text text-transparent">
                    &gt;_ Boost
                </span>
            </Link>

            <ul className="flex items-center gap-5 justify-center">
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
        </nav>
    );
};

export default Navbar;
