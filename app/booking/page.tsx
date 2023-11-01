'use client'
import { getDictionary } from '@/dictionaries'
import BookingForm from '@/components/BookingForm'

export default function page({ searchParams }: { searchParams: any}) {
    const dict = getDictionary('ua')

    return (
        <>
            <h3 className='h4-bold text-main-400 mb-8'>{dict.caponierBooking}</h3>
            <div className='text-gray-200 flex gap-8'>
                <div className='min-w-[250px] max-w-[500px]'>
                    <BookingForm caponier={searchParams.caponier} />
                </div>
                <div className='mt-[2.25rem] grow'>
                    <img
                        alt="image 4"
                        className="h-[32.3rem] w-full object-cover rounded-3xl"
                        src="/3.png"
                    />
                </div>
            </div>
        </>
    )
}
