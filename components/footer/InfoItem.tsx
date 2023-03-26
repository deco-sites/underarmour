export interface Props {
  className?: string;
  title?: string;
  link?: string;
}

function InfoItem({ title = "", link = "", className = "" }: Props) {
  return (
    <>
      {link !== ""
        ? <a class={className} href={link}>{title}</a>
        : <p class="font-bold">{title}</p>}
    </>
  );
}

export default InfoItem;
