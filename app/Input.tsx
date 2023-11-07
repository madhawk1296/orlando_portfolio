import { ChangeEvent } from "react"

export default function Input({ name, placeholder, isPassword=false, isNumber=false, value, onChange }: { name: string, placeholder?: string, isPassword?: boolean, isNumber?: boolean, value?: string | number, onChange?: (value: string) => void  }) {
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange){
             onChange(e.target.value)
        }
    }

    return (
        <input required name={name} value={value} onChange={onChange && handleChange} className="w-full h-[60px] p-[15px] outline-none border-2 rounded-lg shadow text-lg placeholder:text-gray-400 focus:border-gray-500 smoothe" type={isPassword ? "password" : isNumber ? "number" : "text"} placeholder={placeholder} />
    )
}