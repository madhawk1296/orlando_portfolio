export default function ContactInfo({ content }: { content: string}) {
    return (
        <h1 className={`w-fit text-lg tracking-wide text-gray-900`}>{content}</h1>
    )
}