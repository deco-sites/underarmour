import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { useId } from "preact/hooks";
import { animation, keyframes, tw } from "twind/css";
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

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
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
            />
            <img
              class="hidden lg:block object-cover w-full sm:h-full w-full h-[100%] left-0 top-0 absolute"
              loading={lcp ? "eager" : "lazy"}
              src={desktop}
              alt={alt}
            />
          </div>
        </Picture>
      </a>
    </div>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }`,
        }}
      >
      </style>
      <ol class="flex items-center justify-center col-span-full gap-2 z-10 mt-[-13px] xl:hidden">
        {images?.map((_, index) => (
          <li class="h-full">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="h-full rounded focus:outline-none w-[6px] h-[6px] group bg-[#0000003b] disabled:bg-black"
            >
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

function Controls() {
  return (
    <>
      <div class="lg:flex items-center justify-center z-10 col-start-1 row-start-2 hidden ">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            class="text-default-inverse"
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Button>
      </div>
      <div class="lg:flex items-center justify-center z-10 col-start-3 row-start-2 hidden">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            class="text-default-inverse"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Button>
      </div>
    </>
  );
}

function BannerCarousel({ images, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
    >
      <Slider class="col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((image, index) => (
          <BannerItem image={image} lcp={index === 0 && preload} />
        ))}
      </Slider>

      <Controls />

      <Dots images={images} interval={interval} />

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default BannerCarousel;
