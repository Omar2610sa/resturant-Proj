import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const instant = false;

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
