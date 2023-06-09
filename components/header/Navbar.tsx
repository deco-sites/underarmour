import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />
        <a
          href="/account"
          class={`inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="User" width={20} height={22} />
        </a>
        <a
          href="/"
          class={`inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={55} height={41} />
        </a>

        <HeaderButton variant="search" />
        <HeaderButton variant="cart" />
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b-1 border-default w-full pl-2 pr-3">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={55} height={41} />
          </a>
        </div>
        <div class="flex-auto flex justify-center self-stretch gap-8">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <div class="flex border border-solid px-[9px] rounded-[4px]">
            <input type="text" placeholder="Pesquisar" />
            <HeaderButton variant="search" />
          </div>

          <Button
            as="a"
            variant="icon"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </Button>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
