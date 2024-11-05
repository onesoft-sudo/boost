import Footer from "@/components/Footer";
import ApplicationChooser from "@/features/installer/components/ApplicationChooser";
import { MdBolt } from "react-icons/md";

export default function Home() {
    return (
        <>
            <main className="px-3 lg:px-0">
                <div className="mx-auto text-center my-10 bg-gradient-to-tr from-blue-600/70 to-blue-600/10 backdrop-blur-2xl rounded-2xl p-5 max-w-[40rem] min-h-56">
                    <div className="size-16 border-blue-400 border-2 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <MdBolt size={50} className="text-blue-400" />
                    </div>

                    <br />

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-1">
                        Welcome to <span className="text-blue-600">Boost</span>
                    </h1>
                    <p className="text-neutral-200 mt-3 mx-auto">
                        Boost is a CLI tool to automatically install your
                        favorite apps and tools on a new Debian-based GNU/Linux
                        machine.
                    </p>
                </div>

                <ApplicationChooser />
                <br />
                <br />
                <br />
            </main>
            <Footer />
        </>
    );
}
