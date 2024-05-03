"use client"

interface ButtonProps{
    color?:string;
    bg?:string;
    buttonText:string;
    onClick?:()=>void;
}

const Button:React.FC<ButtonProps>=({color, buttonText, bg})=> {

    const buttonStyles={
        bg:bg|| 'bg-slate-600',
        color:color || 'text-yellow-300',
    }

    return (
        <button className={`p-2 rounded-lg mt-4 ${buttonStyles.color} ${buttonStyles.bg}`} >
            {buttonText}
        </button>
    )
}

export default Button