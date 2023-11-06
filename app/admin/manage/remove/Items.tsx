import { Tables } from "@/types/tables";
import Item from "./Item";

export default function Items({ items, addRemoveItem }: { items: Tables<"items">[], addRemoveItem: (item: Tables<"items">) => void }) {
    return (
        <div className="relative w-full flex gap-10 flex-wrap ">
            {items.map((item, index) => <Item addRemoveItem={addRemoveItem} key={index} item={item}  />)}
        </div>
    )
}