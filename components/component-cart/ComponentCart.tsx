"use client"
import React, { useState } from 'react'
import styles from "@/components/nav/cart-component/cart-component.module.css"
import { useMyContext } from '@/context/ListContext';
import {DeleteIcon} from '@/Icons/CartIcon';
import {IncreaseIcon} from '@/Icons/CartIcon';;
import {DecreaseIcon} from '@/Icons/CartIcon';;
import { Product } from '@/types/types';
import Image from 'next/image';
import { formatoContabilidad } from '@/utils/functions/buttonMain';

export const ComponentCart:  React.FC<Product> = ({ 
  name, description, image, price, amount, id, unitPrice, stock
}) => {

  const { Discard, Subir, Bajar } = useMyContext()
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      Discard(id, amount);
    }, 800); // El tiempo debe coincidir con la duración de la animación
  };
  return (
    <div className={`grid grid-cols-[1fr_4fr] h-[100px] w-[100%] select-none bg-bknav text-navcolor mt-[5px] ${isRemoving ? "animate-fadeOut pointer-events-none" : ""}`}>
    <div className="relative">
      <Image 
        src={image}
        alt='product-image-cart'
        loading='lazy'
        fill
        objectFit='cover'
      />
    </div>
    
    <div className="p-[0.4rem] pt-[0.8rem]">
      <div className="flex justify-between">
        <div className="text-[13px]">
          <a href="">{name.toLocaleUpperCase()}</a>
          <small className='text-[11px] ml-[3px]'>({description.slice(0,15)})</small>
        </div> 
        <div>
          <span className="text-[17px] hover:cursor-pointer hover:opacity-90" onClick={handleRemove}>
            <DeleteIcon />
          </span>
        </div>
      </div>
      <div className="flex justify-between pt-[9px] text-[13px]">
        <div className="w-[90px] p-[5px] border-[1px] border-[rgb(158_158_158)] flex justify-between text-[13px] rounded-[4px] hover:border-[1px] hover:border-[rgb(109_109_109)] cursor-pointer">
          <span onClick={()=> Bajar(id)}>
          <DecreaseIcon />
          </span>
          <span>{amount}</span>
          <span onClick={()=> Subir(id)}>
              <IncreaseIcon />
          </span>
        </div>
        <div>
          <span>${formatoContabilidad(price)}</span>
        </div>
      </div>
    </div>

  </div>
  )
}
