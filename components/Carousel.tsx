'use client'
import { Carousel } from "@material-tailwind/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
    className: string 
}
 
export default function CarouselDefault({ children, className }: Props) {
  return (
    <Carousel className={className + ' overflow-hidden'}>
        {/* className="h-full w-full object-cover" */}
    </Carousel>
  );
}