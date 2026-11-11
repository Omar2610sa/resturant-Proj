import {DashboardSidebar} from "@/components/dashboard/layout/DashboardSidebar";
import {DashboardTopbar} from "@/components/dashboard/layout/DashboardTopbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-svh bg-muted/30">
            <aside className="sticky top-0 hidden h-svh w-64 shrink-0 flex-col border-e bg-background lg:flex">
                <DashboardSidebar />
            </aside>

            <div className="flex min-w-0 flex-1 flex-col">
                <DashboardTopbar />
                <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
            </div>
        </div>
    )
}
