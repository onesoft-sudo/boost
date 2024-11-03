import Navbar from "@/features/navbar/components/Navbar";
import { ReactNode, type FC } from "react";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
