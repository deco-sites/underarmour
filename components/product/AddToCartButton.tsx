import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";
import Icon from "../ui/Icon.tsx";

interface Props {
  skuId: string;
  sellerId: string;
  showIcon?: boolean;
  typeButton?: "cart" | "shelfs";
}

function AddToCartButton(
  { skuId, sellerId, showIcon = true, typeButton = "cart" }: Props,
) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <>
      {typeButton === "shelfs"
        ? (
          <Button {...props} class="w-full bg-[#000]">
            Adicionar à Sacola
          </Button>
        )
        : (
          <Button {...props} class="w-full rounded-[0px]">
            Adicionar à Sacola
            {showIcon && (
              <Icon id="Heart" width={20} height={20} strokeWidth={2} />
            )}
          </Button>
        )}
    </>
  );
}

export default AddToCartButton;
