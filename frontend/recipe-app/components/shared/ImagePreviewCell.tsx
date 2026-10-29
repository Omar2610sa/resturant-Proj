// ImagePreviewCell.tsx
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Image from 'next/image'
import { getImageUrl } from '@/lib/image'

interface ImagePreviewCellProps {
    coverImage: string
    alt?: string
}

const ImagePreviewCell = ({ coverImage, alt = "preview" }: ImagePreviewCellProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const imageUrl = getImageUrl(coverImage);

    return (
        <>
            <div
                className="relative inline-block cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsOpen(true)}
            >
                <Image
                    width={350}
                    height={350}
                    src={imageUrl ?? ''}
                    className="size-12 xl:size-25 rounded-xl mx-auto bg-gray-50 object-cover"
                    alt={alt}
                />

                {isHovered && (
                    <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                        <span className="text-white  text-xs font-semibold">عرض</span>
                    </div>
                )}
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogContent showCloseButton={false} className="max-w-3xl ring-0  bg-transparent shadow-none">
                    <Image
                        src={imageUrl ?? ''}
                        className="rounded-lg w-full h-auto object-contain"
                        alt={alt}
                        width={350}
                        height={350}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ImagePreviewCell