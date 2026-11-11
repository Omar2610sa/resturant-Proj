import { DarkModeToggle } from "@/components/DarkMode";
import { DashboardPageTitle } from "./DashboardPageTitle";
import { DashboardSidebar } from "./DashboardSidebar";
import { MobileSidebar } from "./MobileSidebar";
import LangSwitcher from "@/components/shared/lang/LangSwitcher";

export function DashboardTopbar() {
    return (
        <header className="sticky top-0 z-30 h-20 flex items-center justify-between gap-3 border-b bg-background/95 px-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex  items-center gap-3">
                <MobileSidebar>
                    <DashboardSidebar />
                </MobileSidebar>
                <DashboardPageTitle />
            </div>
            <div className="flex shrink-0 items-center gap-3">
                <LangSwitcher />
                <DarkModeToggle />
            </div>
        </header>
    );
}