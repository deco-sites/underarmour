import { Picture } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
  };
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <div class="relative min-w-[100vw] overflow-y-hidden">
      <a href={action?.href ?? "#"} aria-label={action?.label}>
        <Picture class="w-full" preload={lcp}>
          <div class="max-h-[779px] w-[100%] relative pb-[47%]">
            <img
              class="lg:hidden object-cover w-full sm:h-full w-full h-[100%] left-0 top-0 absolute"
              loading={lcp ? "eager" : "lazy"}
              src={mobile}
              alt={alt}
              width="2520"
              height="550"
            />
            <img
              class="hidden lg:block object-cover w-full sm:h-full w-full h-[100%] left-0 top-0 absolute"
              loading={lcp ? "eager" : "lazy"}
              src={desktop}
              alt={alt}
              width="2520"
              height="550"
            />
          </div>
        </Picture>
      </a>
    </div>
  );
}

export default BannerItem;