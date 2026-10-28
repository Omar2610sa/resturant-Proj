import { Search } from 'lucide-react'
import { Input } from '../ui/input'

export default function SerchFilter({ columnId }: { columnId: string }) {
    return (
        <label className="relative w-full sm:w-80">
            <Search className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#938c84]" />
            <Input
                placeholder="ابحث عن مستخدم..."
                // value={(table.getColumn(columnId)?.getFilterValue() as string) ?? ""}
                // onChange={(event) =>
                //     table.getColumn(columnId)?.setFilterValue(event.target.value)
                // }
                className='h-11 w-full rounded-xl bg-white pr-10 pl-4 text-sm'
            />
        </label>
    )
}
