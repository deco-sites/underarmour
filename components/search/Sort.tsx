import { useMemo } from "preact/hooks";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { JSX } from "preact";

const SORT_QUERY_PARAM = "sort";

// TODO: The search query should also be from a commerce schema
const options = [
  { value: "", label: "Relevância" },
  { value: "price:desc", label: "Maior Preço" },
  { value: "price:asc", label: "Menor Preço" },
  { value: "orders:desc", label: "Mais Pedidos" },
  { value: "name:asc", label: "Nome (A -> Z)" },
  { value: "name:desc", label: "Nome (Z -> A)" },
  { value: "release:desc", label: "Lançamentos" },
  { value: "discount:desc", label: "Maior Desconto" },
];

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  console.log(e.currentTarget.value);

  urlSearchParams.set(SORT_QUERY_PARAM, e.currentTarget.value);
  window.location.search = urlSearchParams.toString();
};

function Sort() {
  const sort = useSort();

  return (
    <select
      id="sort"
      name="sort"
      onInput={applySort}
      class="lg:w-[160px] lg:h-[30px] lg:min-h-0 lg:px-1 lg:py-0 lg:border-[2px] h-[36px] px-1 rounded m-2 text-button font-button text-default hover:bg-hover cursor-pointer outline-none min-w-44
      min-h-[40px]
      p-[8px]
      flex
      items-center
      w-[48%]
      relative
      text-sm
      font-bold
      text-gray-900
      border-solid
      border-1
      border-gray-900
      bg-white
      outline-none
      rounded-[0px]"
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value} selected={value === sort}>
          <Text variant="caption">{label}</Text>
        </option>
      ))}
    </select>
  );
}

export default Sort;
