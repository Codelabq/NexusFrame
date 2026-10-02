import type { Dish } from "../data";
import MenuItem from "./MenuItem";

type MenuSectionProps = { title: string; index: string; note: string; dishes: Dish[]; onAdd: (dish: Dish) => void };

export default function MenuSection({ title, index, note, dishes, onAdd }: MenuSectionProps) { return <section className="space-y-6"><div className="flex flex-col justify-between gap-2 border-b-2 border-[#1d1b18] pb-2 md:flex-row md:items-baseline"><div><span className="font-['Hanken_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a4509]">Course Index {index}</span><h3 className="font-['Bodoni_Moda'] text-[clamp(2rem,4vw,2.8rem)] leading-tight text-[#1d1b18]">{title}</h3></div><p className="font-['Hanken_Grotesk'] text-[12px] text-[#544339]">{note}</p></div><div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">{dishes.map((dish) => <MenuItem key={dish.id} dish={dish} onAdd={onAdd} />)}</div></section>; }
