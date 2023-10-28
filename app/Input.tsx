export default function Input({ name, placeholder }: { name: string, placeholder?: string }) {
    return (
        <input name={name} className="w-full h-[60px] p-[15px] outline-none border-2 rounded-lg shadow text-lg placeholder:text-gray-400 focus:border-gray-500 smooth" type="text" placeholder={placeholder} />
    )
}