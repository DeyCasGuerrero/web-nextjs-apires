"use client"
import NextJsIcon from "../icons/NextJSIcon";
import "@/app/extras.module.css"
import { useEffect, useState } from "react";

interface AnimationPops{
    text:string;
    time:number;
}

const Animation:React.FC<AnimationPops> =({text, time})=> {
    const [colors, setColors] = useState<string[]>(["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#800080"]);
    const [colorIndices, setColorIndices] = useState<number[]>(Array.from({ length: 7 }, (_, i) => i));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndices(prevIndices => prevIndices.map(() => Math.floor(Math.random() * colors.length)));
        }, time);

        return () => clearInterval(intervalId);
    }, [time, text]);


    return (
        <>
            <div className="flex justify-center items-center">
                <div className="animation-container animate-pulse flex justify-center items-center border-4 border-red-500 rounded-full w-96 h-96 shadow-xl">
                    <NextJsIcon color="red" size={300} />
                </div>
            </div>

            <p className="text-center text-2xl mt-8 animate-pulse">
                {text.split(" ").map((word, index) => (
                    <span key={index} style={{ color: colors[colorIndices[index]] }}>{word} </span>
                ))}
            </p>

        </>

    )


}

export default Animation;