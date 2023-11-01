'use client'

import React, { useState } from 'react'

export type Time = { start: string, finish: string }
type BookStatus = {status: 'bookedByMe' | 'bookedByOthers' | 'free'}
type TimeBookData = Time & BookStatus

const booked = [
    { start: '9:00', finish: '10:00' },
    { start: '10:00', finish: '11:00' },
    { start: '17:00', finish: '18:00' },
    { start: '18:00', finish: '19:00' },
]

const timeStart = 10
const timeFinish = 18
const bookDataTemplate: TimeBookData[] = []
for (let i = timeStart; i < timeFinish; i++) { 
    if (i === timeStart + 1 || i === timeStart + 4 || i === timeStart + 5)
        bookDataTemplate.push({ start: `${i}:00`, finish: `${i + 1}:00`, status: 'bookedByOthers' })
    else 
        bookDataTemplate.push({ start: `${i}:00`, finish: `${i + 1}:00`, status: 'free' })
}

interface TimePickerProps {
    selected: Time[] 
    onSelect: (time: Time[]) => void
    temp: any
}

export const TimePicker = ({ selected, onSelect, temp }: TimePickerProps) => {
    console.log(temp)
    const [bookData, setBookData] = useState<TimeBookData[]>(bookDataTemplate)

    const updateBookDataState = (index: number) => {
        const newBookDataState = [...bookData]
        console.log(newBookDataState[index], index)
        if (newBookDataState[index].status === 'free')
            newBookDataState[index].status = 'bookedByMe'
        else if (newBookDataState[index].status === 'bookedByMe')
            newBookDataState[index].status = 'free'
        else
            return

            console.log(newBookDataState[index], index)

        setBookData(newBookDataState)
        onSelect(newBookDataState.filter(time => time.status === 'bookedByMe').map(time => ({ start: time.start, finish: time.finish })))
    }
    
    console.log(bookData)

    return (
        <div className='w-48 bg-white flex flex-col place-content-between gap-1 rounded-md p-[3px]'>
            {bookData.map((timeBookData, index) => 
                <div 
                    className={`w-full h-6 border-2 text-center flex justify-center items-center input-text  rounded-md ${timeBookData.status === 'free' ? 
                        'bg-white border-grey-300 cursor-pointer' : timeBookData.status === 'bookedByMe' ? 'bg-main-400 border-main-400 cursor-pointer' : 'bg-grey-300 border-grey-300'}`}
                    key={index} 
                    onClick={() => updateBookDataState(index)} 
                >
                    {`${timeBookData.start} - ${timeBookData.finish}`}
                </div>
            )}
        </div>
    )
}


