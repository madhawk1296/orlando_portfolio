import openSans from "@/fonts/openSans";

export default function Label({ title, secondary=null }: { title: string, secondary?: string | null}) {
    return (
        <h1 className={`"text-lg text-gray-900 tracking-wide ${openSans.medium}`}>
            {title}<span className="text-gray-600">{secondary}</span>
        </h1>
    )
}