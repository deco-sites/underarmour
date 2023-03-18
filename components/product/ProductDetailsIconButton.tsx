interface Props {
  title: string;
  imageUrl: string;
}

function ProductDetailsIconButton({ title, imageUrl }: Props) {
  return (
    <button id="szb-vfr-button" class="inline-flex items-center" type="button">
      <img width={24} height={18} src={imageUrl} className="mr-2" />
      <span className="text-xs text-left">{title}</span>
    </button>
  );
}

export default ProductDetailsIconButton;
