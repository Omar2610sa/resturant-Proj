import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { cn } from 'cn'
import { AddCardProps } from '@/types'

export default function AddCard({
    title,
    description,
    children,
    className,
}: AddCardProps) {

    return (
        <div className={cn("w-full max-w ", className)}>
            <Card className="overflow-hidden rounded-2xl border-none  bg-white">
                <CardHeader className=" px-5 sm:px-7">
                    <CardTitle className="text-3xl font-black">{title}</CardTitle>
                    <CardDescription className="text-lg font-medium">{description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {children}
                </CardContent>

            </Card>
        </div>
    );
}
