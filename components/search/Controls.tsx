import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function Controls({ page }: { page: ProductListingPage }) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;

  return (
    <Container class="flex flex-col justify-between mb-4 md:mb-0 p-4 md:p-0 sm:gap-4 sm:flex-row sm:h-[53px] md:border-b-1">
      <div class="flex flex-row items-center sm:p-0 mb-2">
        <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
      </div>
      <div class="flex flex-row sm:gap-4 items-center justify-between ">
        <Button
          class="  min-w-[44px]
        min-h-[40px]
        w-[48%]
        p-[8px]
        flex
        items-center
        justify-between
        text-sm
        font-bold
        bg-gray-900
        text-white
        border-none
        border-solid
        border-1
        border-gray-900
        transition-all
        duration-1000
        ease-in
        rounded-[0px]"
          variant="tertiary"
          onClick={() => {
            open.value = true;
          }}
        >
          Filtrar por
          <Icon id="FilterList" width={27} height={27} />
        </Button>
        <Sort />
      </div>

      <Modal
        title="Filtrar"
        mode="sidebar-left"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <Filters filters={filters} />
      </Modal>
    </Container>
  );
}

function SearchControls({ page }: Props) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} />;
}

export default SearchControls;
