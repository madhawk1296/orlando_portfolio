import { Tables } from "@/types/tables";
import Item from "./Item";

export default function Items({ items }: { items: Tables<"items">[] }) {
    return (
        <div className="relative w-full flex gap-10 flex-wrap ">
            {items.map((item, index) => <Item key={index} item={item}  />)}
        </div>
    )
}