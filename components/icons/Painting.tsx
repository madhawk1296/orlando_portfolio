export default function Painting({ selected }: { selected: boolean }) {
    return (
        <svg className={`h-full smooth ${selected ? "stroke-gray-800" : "stroke-gray-400"}`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" fill="none"><rect x="9.16" y="9.16" width="45.69" height="45.69" rx="2.51"/><polyline points="9.16 41.95 20.68 32.19 29.71 40.38 43.27 23.51 54.77 40.38"/><circle cx="19.76" cy="19.38" r="3.93"/></svg>
    )
}