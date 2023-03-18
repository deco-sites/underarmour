import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";
import Icon from "../ui/Icon.tsx";

interface Props {
  skuId: string;
  sellerId: string;
  showIcon?: boolean;
}

function AddToCartButton({ skuId, sellerId, showIcon = true }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <Button {...props} class="w-full">
      Adicionar à Sacola
      {showIcon && <Icon id="Heart" width={20} height={20} strokeWidth={2} />}
    </Button>
  );
}

export default AddToCartButton;
