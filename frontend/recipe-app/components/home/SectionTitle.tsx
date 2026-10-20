export function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
}) {
    return (
        <div className='space-y-3'>
            {eyebrow && (
                <span className=" block text-2xl font-extrabold text-primary">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl font-black tracking-tight  sm:text-5xl">
                {title}
            </h2>
            {description && (
                <p className=" max-w-2xl leading-7 text-muted-foreground ">{description}</p>
            )}
        </div>
    );
}