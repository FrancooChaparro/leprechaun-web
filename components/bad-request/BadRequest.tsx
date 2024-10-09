import React from 'react';
import styles from "./bad-request.module.css";
import { EyeIcon } from '@/Icons/CartIcon';

export const BadRequest = () => {
  return (
    <div className="w-[100vw] h-[90vh] flex justify-center items-center text-[#3b3b3b] text-xl">
        <div className="flex justify-center items-center flex-col gap-[30px]">
            <h6>No encontramos el producto que buscás</h6>
                <a className="inline-flex bg-[#409735] text-[white] items-center justify-center leading-[1.7] tracking-[-.01rem] text-center whitespace-nowrap align-middle cursor-pointer select-none border-[2px] border-transparent box-border py-[0.45rem] px-[1.2rem] text-[.8rem] rounded-[.4rem] hover:opacity-90" href="/shoop"><EyeIcon />Ver productos</a>
        </div>
    </div>
  )
}
