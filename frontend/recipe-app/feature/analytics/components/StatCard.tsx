import { TrendingDown, TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { StatCardProps, StatTone } from "../types";

const toneStyles: Record<StatTone, string> = {
    primary: "bg-primary/10 text-primary",
    info: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};


export function StatCard({ label, value, icon: Icon, tone, trend }: StatCardProps) {
    const isUp = trend !== undefined && trend >= 0;

    return (
        <Card className="gap-0 rounded-2xl  py-0 shadow-none">
            <CardContent className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                    <span
                        className={cn(
                            "flex size-11 items-center justify-center rounded-xl",
                            toneStyles[tone],
                        )}
                    >
                        <Icon className="size-5" />
                    </span>

                    {trend !== undefined && (
                        <span
                            className={cn(
                                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold",
                                isUp
                                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                    : "bg-destructive/10 text-destructive",
                            )}
                        >
                            {isUp ? (
                                <TrendingUp className="size-3.5" />
                            ) : (
                                <TrendingDown className="size-3.5" />
                            )}
                            {Math.abs(trend).toLocaleString("ar-EG")}٪
                        </span>
                    )}
                </div>

                <div>
                    <p className="text-lg font-bold text-muted-foreground">{label}</p>
                    <p className="mt-1 text-3xl font-black">
                        {value.toLocaleString("ar-EG")}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}