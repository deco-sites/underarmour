import Container from "$store/components/ui/Container.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    mobile?: number;
    desktop?: number;
  };
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    mobile?: number;
    desktop?: number;
  };
  banners: Banner[];
}

export default function BannnerGrid({
  title,
  itemsPerLine,
  borderRadius,
  banners = [],
}: Props) {
  return (
    <div>
      <section class="w-full px-4 md:px-0 mx-auto">
        {title &&
          (
            <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
              <h2 class={"text-lg leading-5 font-semibold uppercase "}>
                {title}
              </h2>

              <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
            </div>
          )}
        <div
          class={`grid gap-4 md:gap-6 grid-cols-${
            itemsPerLine && itemsPerLine.mobile ? itemsPerLine.mobile : "2"
          } md:grid-cols-${
            itemsPerLine && itemsPerLine.desktop
              ? itemsPerLine.desktop
              : banners.length
          }`}
        >
          {banners.map(({ href, srcMobile, srcDesktop, alt }) => (
            <a
              href={href}
              class={`overflow-hidden max-h-[779px] ${
                borderRadius?.mobile && `rounded-[${borderRadius.mobile}px]`
              } ${
                borderRadius?.desktop
                  ? `sm:rounded-[${borderRadius.desktop}px]`
                  : `sm:rounded-none`
              }`}
            >
              <Picture>
                <div class="max-h-[779px] w-[100%] relative pb-[58%]">
                  <img
                    class=" w-full h-[100%] left-0 top-0 absolute object-contain"
                    sizes="(max-width: 640px) 100vw, 30vw"
                    src={srcMobile}
                    alt={alt}
                    width="1320"
                    height="525"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </Picture>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
