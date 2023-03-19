import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function FilterValues({ key, values }: FilterToggle) {
  const flexDirection = key === "tamanho" || key === "cor"
    ? "flex-row"
    : "flex-col";

  return (
    <ul class={`flex flex-wrap gap-2 ${flexDirection}`}>
      {values.map(({ label, value, url, selected, quantity }) => {
        if (key === "cor") {
          return (
            <a href={url}>
              <Avatar
                // deno-lint-ignore no-explicit-any
                content={value as any}
                disabled={selected}
                variant="color"
              />
            </a>
          );
        }

        if (key === "tamanho") {
          return (
            <a
              href={url}
              class="w-auto
            min-w-[56px]
            min-h-[32px]
            px-1
            flex
            justify-center
            items-center
            text-sm
            border
            border-solid
            border-gray-700"
            >
              <Avatar
                class="border-0"
                content={label}
                disabled={selected}
                variant="abbreviation"
              />
            </a>
          );
        }

        return (
          <a href={url} class="flex items-center gap-2">
            <input type="checkbox" checked={selected} class="hidden" />
            <Text variant="caption">{label}</Text>
            <Text tone="subdued" variant="caption">
              ({quantity})
            </Text>
          </a>
        );
      })}
    </ul>
  );
}

export default function Filters({ filters }: Props) {
  const filterSanitazed = filters.filter((filter) => (
    filter.label.toLowerCase() == "tamanho" ||
    filter.label.toLowerCase() == "cor"
  ));
  const filterSanitazed2 = filters.filter((filter) => (
    filter.label.toLowerCase() == "tamanho"
  ));
  return (
    <>
      <ul class="flex flex-col gap-6 p-4 lg:hidden">
        {filterSanitazed
          .filter(isToggle)
          .map((filter) => (
            filter.label !== "Cor" &&
            (
              <li class="flex flex-col gap-4 group">
                <Text variant="body">{filter.label}</Text>
                <FilterValues {...filter} />
              </li>
            )
          ))}
      </ul>
      <div class="hidden lg:flex flex-col w-full max-w-[1415px] mx-auto">
        {filterSanitazed2.filter(isToggle)
          .map((filter) => (
            <li class="flex flex-col gap-8 first-child:hidden mb-8 containerfilter">
              <Text variant="body" class="lg:hidden">{filter.label}</Text>
              <Text variant="body" class="hidden lg:flex ">
                Selecione o {filter.label}
              </Text>
              <FilterValues {...filter} />
            </li>
          ))}

        <ul class="gap-6 p-4 hidden lg:flex flex-row border border-gray-300 w-full h-[55px] relative">
          {filters
            .filter(isToggle)
            .map((filter) => (
              (filter.label !== "tamanho" &&
                filter.label !== "subcategoria") &&
              (
                <li class="flex flex-col gap-4 group h-[37px] hover:border-[#1d1d1d] hover:border-solid hover:border-b-[5px] ">
                  <Text
                    variant="menu"
                    class="w-min px-[1.25rem] uppercase font-bold text-[13px] font-[700]"
                  >
                    {filter.label}
                  </Text>
                  <div class="group-hover:flex hidden absolute left-0 w-full bg-white w-full z-10
  border border-gray-300 h-[173px] p-[2rem] top-[53px]">
                    <div class=" ">
                      <FilterValues {...filter} />
                    </div>
                  </div>
                </li>
              )
            ))}
        </ul>
      </div>
    </>
  );
}
