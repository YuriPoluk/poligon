'use client'
import { getDictionary } from '@/dictionaries'
import Image from 'next/image'
import image5 from '@/public/image_5.png'
import { arkidenz } from '../fonts';
import { Carousel } from '@material-tailwind/react'



export default function page() {
    const dict = getDictionary('ua')

    const greenMark = (<div className='bg-military-green-400 w-[1.5rem] h-[0.25rem] my-auto mr-6'></div>)

    return (
    <div className={`${arkidenz.className}`}>
        <div className='flex bg-[#ebebeb] rounded-[1.5rem]'>
            <div className='w-[45%] bg-[#ebebeb] rounded-[1.5rem] text-center flex justify-center gap-8 flex-col text-[1.3125rem] leading-[2rem] px-[5rem] py-[2rem]'>
                <span>{dict.aboutUs.description1}</span>
                <p>{dict.aboutUs.description2}</p>
            </div>
            <div className='w-[55%] rounded-[1.5rem] relative overflow-hidden min-h-[500px]'>
                <Image src={image5} alt='img' fill></Image>
            </div>
        </div>
        <h2 className={`font-bold text-white text-[2rem] leading-[3rem] uppercase mt-[3rem] mb-[2rem]`}>{dict.aboutUs.infrastructureTitle}</h2>
        {
            dict.aboutUs.infrastructure.map((r, index) => { return <div className='text-center text-[1.3125rem] leading-[1.75rem] text-white flex' key={index}>{greenMark}{r}</div>})
        }
        <Carousel className='mt-16 pb-10' 
                  autoplay 
                  autoplayDelay={3000} 
                  loop 
                  transition={{type: 'tween', duration: 1.5}}
                //   navigation={({ setActiveIndex, activeIndex, length }) => (
                //     <div className="absolute bottom-[-1rem] left-2/4 z-50 flex -translate-x-2/4 gap-2">
                //       {new Array(length).fill("").map((_, i) => (
                //         <span
                //           key={i}
                //           className={`block h-2 w-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                //             activeIndex === i ? "bg-white" : " bg-white/50"
                //           }`}
                //           onClick={() => setActiveIndex(i)}
                //         />
                //       ))}
                //     </div>
                //   )}
        >
            <div className='flex w-full h-[30rem] gap-8'>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
            </div>
            <div className='flex w-full h-[30rem] gap-8'>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
            </div>
            <div className='flex w-full h-[30rem] gap-8'>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
                <div className='relative w-[32%] rounded-[1.5rem] overflow-hidden'>
                    <Image src={image5} alt='img' fill></Image>
                </div>
            </div>
        </Carousel>
        <h2 className={`font-bold text-white text-[2rem] leading-[3rem] uppercase mt-[3rem] mb-[2rem]`}>{dict.aboutUs.rulesTitle}</h2>
        <ol className='list-decimal'>
            {
                dict.aboutUs.rules.map((r, index) => <li className='text-[1.3125rem] leading-[1.75rem] text-white' key={index}>{r}</li>)
            }
        </ol>
        <h2 className={`font-bold text-white text-[2rem] leading-[3rem] uppercase mt-[3rem] mb-[2rem]`}>{dict.aboutUs.forbiddenTitle}</h2>
        <ol className='list-decimal'>
            {
                dict.aboutUs.forbidden.map((r, index) => <li className='text-[1.3125rem] leading-[1.75rem] text-white' key={index}>{r}</li>)
            }
        </ol>
        <p className='text-[1.3125rem] leading-[1.75rem] text-white uppercase mt-4'>{dict.aboutUs.warning}</p>
    </div>
    )
}
