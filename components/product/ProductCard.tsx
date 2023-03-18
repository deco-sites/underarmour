import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import AddToCartButton from "./AddToCartButton.tsx";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-start items-center gap-2 mb-[13px]">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group rounded-[4px] "
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={279}
            class="w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={200}
            height={279}
            class="w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
        </div>

        <div class="flex flex-col gap-1 py-2">
          <Text
            class="overflow-hidden overflow-ellipsis whitespace-nowrap text-[14px] text-[#1d1d1d]"
            variant="caption"
          >
            {name}
          </Text>
          <div class="flex items-center gap-2">
            <Text
              class="line-through"
              variant="list-price"
              tone="subdued"
            >
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </Text>
            <Text
              class="text-base text-gray-800 font-medium"
              variant="caption"
              tone="price"
            >
              {formatPrice(price, offers!.priceCurrency!)}
            </Text>
          </div>
        </div>
        {seller && (
          <div class="">
            <Sizes {...product} />
          </div>
        )}
        <AddToCartButton
          skuId={productID}
          sellerId={"1"}
        />
      </a>
    </div>
  );
}

export default ProductCard;
