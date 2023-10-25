'use client'
import { Tab } from '@headlessui/react'
import { getDictionary } from '@/dictionaries';
import { arkidenz, space_grotesk } from '../fonts';
import { Button } from '@/components'
import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'

const headerPriceData = [
    { 
        label: 'Аренда капонірів',
        value: 'caponiers'
    },
    { 
        label: 'Мішені',
        value: 'targets'
    },
    { 
        label: 'Корпоративні івенти',
        value: 'events'
    },
    { 
        label: 'Подарункові сертифікати',
        value: 'gifts'
    },
]

export default function page() {
    const dict = getDictionary('ua')

    const caponierTabs = Object.keys(dict.caponiers).map(key => dict.caponiers[key].name)
    const caponierPanels = Object.keys(dict.caponiers).map(key => dict.caponiers[key])
    console.log(caponierTabs)
    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className='flex'>
                    <Tab 
                        className={`w-full outline-none ui-selected:text-main-400 ui-not-selected:text-white border-white border-2 h-[8rem] text-center text-[1.7rem] font-bold uppercase padding-x-[2.5rem] rounded-tl-[1.5rem] ${arkidenz.className} leading-[111%]`} 
                        key={headerPriceData[0].value}>
                            {headerPriceData[0].label}
                        
                    </Tab>  
                    <Tab 
                        className={`w-full outline-none ui-selected:text-main-400 ui-not-selected:text-white border-white border-2 h-[8rem] text-center text-[1.7rem] font-bold uppercase padding-x-[2.5rem] ${arkidenz.className} leading-[111%] ml-[-2px]`} 
                        key={headerPriceData[1].value}>
                            {headerPriceData[1].label}
                        
                    </Tab> 
                    <Tab 
                        className={`w-full outline-none ui-selected:text-main-400 ui-not-selected:text-white border-white border-2 h-[8rem] text-center text-[1.7rem] font-bold uppercase padding-x-[2.5rem] ${arkidenz.className} leading-[111%] ml-[-2px]`} 
                        key={headerPriceData[2].value}>
                            {headerPriceData[2].label}
                        
                    </Tab> 
                    <Tab 
                        className={`w-full outline-none ui-selected:text-main-400 ui-not-selected:text-white border-white border-2 h-[8rem] text-center text-[1.7rem] font-bold uppercase padding-x-[2.5rem] ${arkidenz.className} leading-[111%] rounded-tr-[1.5rem] ml-[-2px]`} 
                        key={headerPriceData[3].value}>
                            {headerPriceData[3].label}
                        
                    </Tab>               
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel className='border-2 border-white rounded-b-[1.5rem] mt-[-2px]'>
                        <Tab.Group>
                            <Tab.List className='flex'>
                                {caponierTabs.map(c => 
                                    <Tab 
                                        className={`w-full outline-none ui-selected:text-white ui-not-selected:text-black text-center ui-not-selected:bg-[#474e3c] ui-selected:bg-main-500 text-[1.3rem] font-bold uppercase px-[2.5rem] py-[1rem] ${arkidenz.className} leading-[111%]`} 
                                        key={c}>
                                            {c} 
                                    </Tab> 
                                )}
                            </Tab.List>
                            <Tab.Panels>
                                {caponierPanels.map(p =>
                                    <Tab.Panel key={p.name}>
                                        <div className='flex mt-[2.5rem] px-[2.5rem] pb-[2.5rem] gap-8'>
                                            <div className='w-[45%] text-left'>
                                                <p className={`h4-bold text-grey-200 ${arkidenz.className}`}>{p.name}</p>
                                                <p className={`text-[1.3rem] text-main-400 font-bold leading-[140%] uppercase mt-1 mb-4 ${arkidenz.className}`}>{p.price}*</p>
                                                <span className={`text-[1.3rem] text-white text-normal leading-[130%] ${arkidenz.className}`}>{p.description}</span>
                                                <Button className={`ml-0 bg-main-400 hover:bg-main-500 hover:text-white px-8 block py-4 text-xl font-bold uppercase mt-10 ${space_grotesk.className}`}>{dict.buttons.book}</Button>
                                                <p className={`${space_grotesk.className} medium-text-regular text-white mt-8`}>{dict.disclaimer}</p>
                                            </div>
                                            <Carousel 
                                                  className='w-[55%] h-full relative mb-8'>
                                                    <img
                                                        src="/image_5.png"
                                                        alt="image 4"
                                                        className="h-full w-full object-cover rounded-3xl"
                                                    />
                                                    <img
                                                        src="/image_5.png"
                                                        alt="image 4"
                                                        className="h-full w-full object-cover rounded-3xl"
                                                    />
                                                    <img
                                                        src="/image_5.png"
                                                        alt="image 4"
                                                        className="h-full w-full object-cover rounded-3xl"
                                                    />
                                                </Carousel>
                                        </div>
                                    </Tab.Panel>
                                )}
                            </Tab.Panels>
                        </Tab.Group>
                    </Tab.Panel>
                    <Tab.Panel className='border-2 border-white rounded-b-[1.5rem] p-[2.5rem]'>
                        <div className='flex mt-[2.5rem]'>
                            <div className='w-[45%] text-left'>
                                <p className={`text-[1.3rem] text-main-400 font-bold leading-[140%] uppercase ${arkidenz.className}`}>{dict.targets.price}</p>
                                <span className={`text-[1.3rem] text-white text-normal leading-[130%] ${arkidenz.className}`}>{dict.targets.description}</span>
                                <Button className={`ml-0 bg-main-400 hover:bg-main-500 hover:text-white px-8 button-text mx-auto mt-10 block ${space_grotesk.className}`}>{dict.buttons.book}</Button>
                            </div>
                            <div className='w-[55%]'>
                                <Carousel>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                </Carousel>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className='border-2 border-white rounded-b-[1.5rem] p-[2.5rem]'>
                        <div className='flex mt-[2.5rem]'>
                            <div className='w-[45%] text-left'>
                               <span className={`text-[1.3rem] text-white text-normal leading-[130%] ${arkidenz.className}`}>{dict.events.description}</span>
                                <Button className={`ml-0 bg-main-400 hover:bg-main-500 hover:text-white px-8 button-text mx-auto mt-10 block ${space_grotesk.className}`}>{dict.buttons.purchase}</Button>
                            </div>
                            <div className='w-[55%]'>
                                <Carousel>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                </Carousel>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className='border-2 border-white rounded-b-[1.5rem] p-[2.5rem]'>
                        <div className='flex mt-[2.5rem]'>
                            <div className='w-[45%] text-left'>
                              <span className={`text-[1.3rem] text-white text-normal leading-[130%] ${arkidenz.className}`}>{dict.gifts.description}</span>
                                <Button className={`ml-0 bg-main-400 hover:bg-main-500 hover:text-white px-8 button-text mx-auto mt-10 block ${space_grotesk.className}`}>{dict.buttons.purchase}</Button>
                                <p></p>
                            </div>
                            <div className='w-[55%]'>
                                <Carousel>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                    <Image src='/image_5.png' alt='img' height={817} width={1300} className='rounded-3xl'></Image>
                                </Carousel>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
      );
}
