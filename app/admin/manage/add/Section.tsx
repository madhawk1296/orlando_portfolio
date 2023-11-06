export default function Section() {
    return (
        <select name="section" className="bg-gray-100 flex gap-4 items-center border-2 p-[10px] rounded-lg">
            <option value="paints" className="px-[15px] py-[10px] border-2 bg-gray-100 rounded-xl">Paints</option>
            <option value="sculptures" className="px-[15px] py-[10px] border-2 bg-gray-100 rounded-xl">Sculptures</option>
        </select>
    )
}