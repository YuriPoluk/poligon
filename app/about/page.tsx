'use client'
import { getDictionary } from '@/dictionaries'
import Image from 'next/image'
import image5 from '@/public/image_5.png'
import { arkidenz } from '../fonts';
import { Carousel } from '@material-tailwind/react'
import targetsIcon from '@/public/icons/icon-target.svg'
import classIcon from '@/public/icons/icon-class.svg'
import showerIcon from '@/public/icons/icon-shower.svg'
import toiletIcon from '@/public/icons/icon-toilet.svg'
import wifiIcon from '@/public/icons/icon-wifi.svg'
import parkingIcon from '@/public/icons/icon-parking.svg'

const icons = [
    targetsIcon,
    classIcon,
    showerIcon,
    toiletIcon,
    wifiIcon,
    parkingIcon
]



export default function page() {
    const dict = getDictionary('ua')

    const greenMark = (<div className='bg-main-400 w-[1.5rem] h-[0.25rem] my-auto mr-6'></div>)

    return (
    <div className={`${arkidenz.className}`}>
        <div className='relative rounded-[1.5rem]'>
            <div className='min-h-[500px] w-[calc(45%+40px)] border-2 border-grey-200 text-grey-200 rounded-[1.5rem] text-center flex justify-center gap-8 flex-col body-text-medium pl-[5rem] pr-[calc(5rem+40px)] py-[2rem]'>
                <span>{dict.aboutUs.description1}</span>
                <p>{dict.aboutUs.description2}</p>
            </div>
            <div className='absolute w-[55%] rounded-[1.5rem] right-0 top-0 overflow-hidden min-h-[500px]'>
                <Image src={image5} alt='img' fill></Image>
            </div>
        </div>
        <h2 className={`h4-bold text-grey-200 my-[4rem]`}>{dict.aboutUs.infrastructureTitle}</h2>
        {/* {
            dict.aboutUs.infrastructure.map((r, index) => { return <div className='flex flex-row gap-4 items-center text-center body-text-medium text-grey-200' key={index}><Image width={50} height={50} src={icons[index]} alt="icon"/>{r}</div>})
        } */}
        <div className='flex flex-row text-left gap-12 body-text'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-4 items-center text-grey-200'><Image className='w-[60px] h-[60px]' width={60} height={60} src={icons[0]} alt="icon"/>{dict.aboutUs.infrastructure[0]}</div>
                <div className='flex flex-row gap-4 items-center text-grey-200'><Image className='w-[60px] h-[60px]' width={60} height={60} src={icons[1]} alt="icon"/>{dict.aboutUs.infrastructure[1]}</div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-4 items-center text-grey-200'><Image className='w-[60px] h-[60px]' width={60} height={60} src={icons[2]} alt="icon"/>{dict.aboutUs.infrastructure[2]}</div>
                <div className='flex flex-row gap-4 items-center text-grey-200'><Image className='w-[60px] h-[60px]' width={60} height={70} src={icons[3]} alt="icon"/>{dict.aboutUs.infrastructure[3]}</div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-4 items-center text-grey-200'><Image className='w-[60px] h-[60px]' width={60} height={60} src={icons[4]} alt="icon"/>{dict.aboutUs.infrastructure[4]}</div>
                <div className='flex flex-row gap-4 items-center text-grey-200'><Image className='w-[60px] h-[60px]' width={60} height={60} src={icons[5]} alt="icon"/>{dict.aboutUs.infrastructure[5]}</div>
            </div>
        </div>
        <Carousel className='mt-16 pb-10 z-40' 
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
        <div className='max-w-[60rem] flex flex-col mx-auto'>
            <h2 className={`h4-bold text-grey-200 mt-[3rem] mb-[2rem]`}>{dict.aboutUs.rulesTitle}</h2>
            <ol className='list-decimal'>
                {
                    dict.aboutUs.rules.map((r, index) => <li className='body-text text-grey-200 mb-4' key={index}>{r}</li>)
                }
            </ol>
            <h2 className={`h4-bold text-grey-200 mt-[3rem] mb-[2rem]`}>{dict.aboutUs.forbiddenTitle}</h2>
            <ol className='list-decimal'>
                {
                    dict.aboutUs.forbidden.map((r, index) => <li className='body-text text-grey-200 mb-4' key={index}>{r}</li>)
                }
            </ol>
            <p className='body-text text-grey-200 uppercase mt-4'>{dict.aboutUs.warning}</p>
        </div>
    </div>
    )
}
