import Container from "$store/components/ui/Container.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Item {
  title: string;
  link: string;
}

export interface Props {
  /** @title titulo da seção */
  titleSection: string;
  /** @title texto em destaque */
  textHighlight: string;
  items: Item[];
}

export default function ShopByCategory({
  titleSection,
  textHighlight,
  items,
}: Props) {
  return (
    <div class="flex flex-col items-center my-[1.5em] lg:mb-[37px]">
      <h2 class="font-normal text-[#1D1D1D] text-[16px] lg:text-[22px]">
        {titleSection}
      </h2>
      <h3 class="text-[#1d1d1d] text-[22px] font-bold lg:text-[45px] my-[0.5em]">
        {textHighlight}
      </h3>
      <div class="flex justify-center gap-[5px]">
        {items?.map((item, idx: number) => (
          <a
            key={idx}
            href={item.link}
            class="pt-[4px] lg:h-[40px] font-bold text-uppercase lg:text-[13px] lg:px-[20px] lg:py-[10px] lg:text-[#1d1d1d] lg:bg-[#fff]  text-[12px] text-center border-[2px] rounded-[4px] border-solid border-[#1d1d1d] mt-[0.5em] h-[30px] px-[8px]"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
