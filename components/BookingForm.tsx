'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import ButtonPlgn from '@/components/Button'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from './ui/form'
import { Input } from './ui/input'
import { CAPONIERS } from '@/constants'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getDictionary } from '@/dictionaries'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar } from './ui/calendar'
import calendarIcon from '@/public/icons/icon-calendar.svg'
import clockIcon from '@/public/icons/icon-clock.svg'
import Image from 'next/image';
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Time, TimePicker } from './TimePicker'


const bookingFormSchema = z.object({
    caponier: z.nativeEnum(CAPONIERS),
    date: z.date(),
    time: z.array(z.object({
        start: z.string(),
        finish: z.string(),
    })),
    name: z.string().min(1),
    phone: z.string().min(7),
    email: z.string().email(),
})

type BookingFormValues = z.infer<typeof bookingFormSchema>

// This can come from your database or API.
const defaultValues: Partial<BookingFormValues> = {
  name: "",
  date: undefined,
  phone: "",
  email: "",
}

export const BookingForm = ({ caponier }: {caponier: keyof typeof CAPONIERS}) => {

    const dict = getDictionary('ua')

    const form = useForm<z.infer<typeof bookingFormSchema>>({
        resolver: zodResolver(bookingFormSchema),
        defaultValues: {
            ...defaultValues,
            caponier: caponier || ''
        }
    })
     
    function onSubmit(values: z.infer<typeof bookingFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }  

    function validationStyles(field: keyof BookingFormValues) {
        return form.getFieldState(field).invalid && 'validation-error'
    }

    function formatBookedTime(time: Time[]) {
        time = mergeTime(time)
        return time.map(t => `${t.start} - ${t.finish}`).join(', ')
    }

    function mergeTime(time: Time[]): Time[] {
        let wasTimeMerged = false

        for (let i = 0; i < time.length - 1; i++) {
            if (time[i].finish === time[i+1].start) {
                time[i].finish = time[i+1].finish
                time.splice(i+1, 1)
                wasTimeMerged = true
                break
            }
        }

        return wasTimeMerged ? mergeTime(time) : time
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
                control={form.control}
                name="caponier"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='form-label'>{dict.caponier}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className={`form-item ${validationStyles('caponier')}`} >
                                    <SelectValue placeholder={dict.caponierPlaceholder} />
                                </SelectTrigger>
                            </FormControl>    
                            <SelectContent className='bg-grey-200'>
                                {Object.values(CAPONIERS).map(caponier => <SelectItem value={caponier} key={caponier}>{dict.caponiers[caponier].name}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel className='form-label'>{dict.date}</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button className={`form-item ${validationStyles('date')}`}>
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span className='text-black-100'>{dict.datePlaceholder}</span>
                                        )}
                                        <Image src={calendarIcon} alt="icon calendar" className='inline-block'></Image>
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 rounded-lg overflow-hidden right-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                    }
                                    initialFocus
                                    className='bg-grey-200'
                                />
                            </PopoverContent>
                        </Popover>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel className='form-label'>{dict.time}</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        className={`form-item ${validationStyles('time')}`}
                                    >
                                        {field.value ? (
                                            <span>{formatBookedTime(field.value)}</span>
                                        ) : (
                                            <span className='text-black-100'>{dict.timePlaceholder}</span>
                                        )}
                                        <Image src={clockIcon} alt="icon calendar" className='inline-block'></Image>
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <TimePicker 
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    temp={field}
                                />
                            </PopoverContent>
                        </Popover>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='form-label'>{dict.name}</FormLabel>
                        <FormControl>
                            <Input className={`form-item ${validationStyles('name')}`} placeholder={dict.namePlaceholder} {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='form-label'>{dict.phone}</FormLabel>
                        <FormControl>
                            <Input className={`form-item ${validationStyles('phone')}`} placeholder={dict.phonePlaceholder} {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className='form-label'>{dict.email}</FormLabel>
                        <FormControl>
                            <Input className={`form-item ${validationStyles('email')}`} placeholder={dict.emailPlaceholder} {...field} />
                        </FormControl>
                    </FormItem>
                )}
            />
            <p className='medium-text-regular text-grey-300 !mt-8'>{dict.disclaimer2}</p>
            <ButtonPlgn className='!mt-14 !btn bg-main-400 hover:bg-main-500 hover:text-white px-8 button-text text-black-900' type="submit">{dict.proceedToPayment}</ButtonPlgn>
        </form>
    </Form>
  )
}

export default BookingForm
