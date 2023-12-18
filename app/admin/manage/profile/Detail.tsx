import openSans from "@/fonts/openSans";

export default function Detail({ title, name, defaultValue, textBox=false }: { title: string, name: string, defaultValue: string, textBox?: boolean }) {
    return (
        <div className="relative w-full md:w-[800px] flex flex-col gap-2 md:flex-row md:justify-between">
            <h1 className={`text-xl ${openSans.medium} text-gray-800`}>{title}</h1>
            {textBox ? <textarea name={name} className="w-full md:w-[400px] h-[200px] p-[10px] border-2 shadow rounded-xl" defaultValue={defaultValue} /> : <input name={name} className="w-full md:w-[400px] h-fit p-[10px] border-2 shadow rounded-xl" defaultValue={defaultValue} />}
        </div>
    )
}