"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BobAction({classNames, setBg, bg}){
    const [aksi, setAksi] = useState(0);
    const [ganti, setGanti] = useState(false);
    const suara = new Audio("bob.mp3");
    const suarafull = new Audio("full-soundbob.mp3");
    useEffect(()=>{
        let inter = setInterval(()=>{
            setGanti(false);
            setBg(false);
            
            clearInterval(inter);
        }, 1000);
    }, [ganti]);

    
    return (
        <div className={classNames}>
            <div className="flex flex-col w-full h-screen gap-5 items-center justify-evenly">
                <div className="text-4xl text-white font-bold relative top-22 scale-150 ">
                {aksi}
                </div>

                <div onClick={()=>{

                if(aksi != 0 && aksi % 100 == 0){
                    suarafull.play();
                }else{
                    suarafull.pause();
                }
                    setAksi(aksi+1); suara.play(); setGanti(!ganti); setBg(!bg);
                    
                }
                    } className="cursor-pointer hover:scale-105 duration-500 transtition-all">
                    {ganti ? (
                        <Image
                        src="/lada.png"
                        width={200}
                        height={200}
                        alt="lada"
                        />
                    ): (
                        <Image
                    src="/anjay.png"
                    width={200}
                    height={200}
                    className="hover:scale-105"
                    alt="anjay"
                    />
                    )}
                </div>
            </div>
        </div>
    )
}