const firefox = {
    id: "firefox",
    name: "Mozilla Firefox",
    url: "https://www.mozilla.org/en-US/firefox/new/",
    description:
        "A free and open-source web browser developed by the Mozilla Foundation.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
    top: true,
};

const chrome = {
    id: "chrome",
    name: "Google Chrome",
    url: "https://www.google.com/chrome/",
    description: "A cross-platform web browser developed by Google.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg",
    top: true,
};

const code = {
    id: "code",
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com/",
    description:
        "A free source-code editor made by Microsoft for Windows, Linux and macOS.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    top: true,
};

export const appsByCategory = {
    "Web Browsers": [firefox, chrome],
    "Social Media": [
        {
            id: "discord",
            name: "Discord",
            url: "https://discord.com/",
            description:
                "A proprietary freeware VoIP application and digital distribution platform designed for video gaming communities.",
            image: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/653714c1f22aef3b6921d63d_636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg",
        },
    ],
    "Editors and IDEs": [
        code,
        {
            id: "emacs",
            name: "GNU Emacs",
            url: "https://www.gnu.org/software/emacs/",
            description:
                "A customizable, self-documenting, real-time display editor.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg",
        },
    ],
    "Compilers & Runtime": [
        {
            id: "gcc",
            name: "GNU Compiler Collection",
            url: "https://gcc.gnu.org/",
            description:
                "A compiler system produced by the GNU Project supporting various programming languages.",
            image: "https://gcc.gnu.org/img/gccegg-65.png",
        },
        {
            id: "nodejs",
            name: "Node.js",
            url: "https://nodejs.org/",
            description:
                "An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
            image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
            id: "bun",
            name: "Bun",
            url: "https://bun.sh/",
            description:
                "A blazingly-fast JavaScript runtime with a package manager, test runner, bundler and many more tools included.",
            image: "https://bun.sh/logo.svg",
        },
        {
            id: "python",
            name: "Python",
            url: "https://www.python.org/",
            description:
                "An interpreted high-level general-purpose programming language.",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
        {
            id: "java",
            name: "OpenJDK",
            url: "https://www.java.com/",
            description:
                "A class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
            image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Duke_%28Java_mascot%29_waving.svg",
        },
    ],
};
