import Link from "next/link";
import { type FC } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import Brand from "./Brand";

const Footer: FC = () => {
    return (
        <footer className="p-4 sm:p-6 bg-neutral-800/70">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Brand />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Resources
                            </h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <Link
                                        href="https://github.com/onesoft-sudo/boost"
                                        className="hover:underline"
                                        target="_blank"
                                    >
                                        Source Code
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/onesoft-sudo"
                                        className="hover:underline"
                                    >
                                        Github
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                About
                            </h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <Link
                                        href="/about"
                                        className="hover:underline"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/docs"
                                        className="hover:underline"
                                    >
                                        Docs (Coming Soon)
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">
                        Copyright © {new Date().getFullYear()}{" "}
                        <Link
                            href="https://github.com/onesoft-sudo"
                            className="hover:underline"
                        >
                            OSN Developers
                        </Link>
                        .
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link
                            href="https://github.com/onesoft-sudo"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href="https://discord.com/invite/892GWhTzgs"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaDiscord />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
