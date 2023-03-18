import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";
import Rating from "./Rating.tsx";
import ProductDetailsIconButton from "./ProductDetailsIconButton.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];

  const discount = listPrice! - price!;
  const percentDiscount = ((listPrice! - price!) / listPrice!) * 100;

  return (
    <Container className="sm:w-[82%] max-w-[1400px] mx-auto">
      <div class="py-0 sm:py-0">
        <div class="mb-2.5 p-2 mt-0 lg:mt-4">
          {/* Breadcrumb */}
          <Breadcrumb
            itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
          />
        </div>
        <div class="flex flex-col px-2 gap-4 sm:flex-row sm:gap-10">
          {/* Product Info */}
          <div class="flex-auto px-4 border sm:order-2 border-gray-300 p-10">
            {/* Code and name */}
            <div>
              <h1 className="mb-4">
                <Text variant="heading-1" className="font-bold">
                  {name}
                </Text>
              </h1>
              <div class="flex flex-row">
                <Rating enableColor={false} votingCount={22} activeStars={4} />
                <Text
                  tone="subdued"
                  variant="caption"
                  class="ml-3 inline-flex font-normal text-gray-900 items-end"
                  style="font-size: 11px;"
                >
                  Estilo # {gtin}
                </Text>
              </div>
            </div>
            {/* Prices */}
            <div class="mt-4">
              <div class="flex flex-row gap-2 items-center">
                <Text
                  class="line-through"
                  tone="subdued"
                  className="text-gray-500 line-through text-lg"
                >
                  {formatPrice(listPrice, offers!.priceCurrency!)}
                </Text>
                <Text
                  tone="price"
                  variant="heading-3"
                  className="block text-black mr-2 text-lg font-bold"
                >
                  {formatPrice(price, offers!.priceCurrency!)}
                </Text>
              </div>
              <Text
                tone="subdued"
                variant="caption"
                className="text-xs self-start font-light mt-5"
              >
                {installments}
              </Text>
              {discount > 0 && (
                <Text className="block py-2 font-semibold text-sm text-green-500">
                  Economize {formatPrice(discount, offers!.priceCurrency!)}{" "}
                  ({percentDiscount.toFixed(0)}%)
                </Text>
              )}
            </div>
            {/* Sku Selector */}
            <div class="mt-4 sm:mt-6">
              <ProductSelector product={product} />
            </div>
            {/* Wearing References */}
            <div class="flex flex-row mt-4 sm:mt-10 justify-center gap-6">
              <ProductDetailsIconButton
                title="Provador virtual"
                imageUrl="https://static.sizebay.technology/icons/Icone-de-Shoe-black.svg"
              />
              <ProductDetailsIconButton
                title="Tabela de medidas"
                imageUrl="https://static.sizebay.technology/icons/reguaBoldBlack.svg"
              />
            </div>
            {/* Add to Cart and Favorites button */}
            <div class="mt-4 sm:mt-10 flex flex-col gap-2">
              {seller && (
                <AddToCartButton
                  skuId={productID}
                  sellerId={seller}
                />
              )}
              <Button variant="secondary">
                <Icon id="Heart" width={20} height={20} strokeWidth={2} />
                Favoritar
              </Button>
            </div>
            <div class="mt-4 sm:mt-10 inline-flex items-center">
              <img
                width={24}
                height={18}
                src="https://www.underarmour.com.br/arquivos/coin.png"
                className="mr-2"
              />
              <p className="text-sm text-left">
                Compre e{" "}
                <span></span>receba R$ 52,00 de bônus para sua próxima compra.
                {" "}
                <span>
                  <a href="/politica-de-promocoes">Veja as regras.</a>
                </span>
              </p>
            </div>
          </div>
          {/* Image Gallery */}
          <div class="flex flex-row sm:flex-row-reverse sm:order-1 overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2 relative">
            {[front].map((img, index) => (
              <Image
                style={{ aspectRatio: "1" }}
                class="snap-center min-w-[200vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
                sizes="(max-width: 640px) 200vw, 30vw"
                src={img.url!}
                alt={img.alternateName}
                width={350}
                height={350}
                // Preload LCP image for better web vitals
                preload={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
            {discount > 0 && (
              <span className="flex justify-center items-center absolute top-11 left-1 text-black 
            uppercase text-white font-bold bg-red-600 tracking-wider py-2 px-5">
                {percentDiscount.toFixed(0)} OFF
              </span>
            )}
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div class="mt-4 sm:mt-6 bg-gray-200 max-w-fit-content flex items-center mx-auto cursor-pointer">
          <div class="flex justify-center items-center py-2 px-4 bg-red-600 text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 14 16"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
              >
              </path>
            </svg>
          </div>
          <p class="text-black text-lg leading-6 flex justify-center items-center px-4 py-2">
            Cadastre-se agora e&nbsp;<strong>GANHE 10% OFF</strong>&nbsp;na
            primeira compra.
          </p>
        </div>
        {/* Description card */}
        <div class="mt-4 sm:mt-6">
          <Text variant="caption">
            {description && (
              <details>
                <summary class="cursor-pointer text-xl font-semibold">
                  Exibir detalhes
                </summary>
                <div class="ml-2 mt-2 text-lg">{description}</div>
              </details>
            )}
          </Text>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
