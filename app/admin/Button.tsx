export default function Button({ title, disabled=false }: { title: string, disabled?: boolean }) {
    return (
        <button disabled={disabled} className={`disabled:bg-gray-400 smoothe w-full py-[10px] text-gray-50 tracking-wide text-lg bg-gray-800 rounded-lg shadow`}>{title}</button>
    )
}