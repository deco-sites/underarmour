import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";
import Community from "./Community.tsx";
import Info from "./Info.tsx";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col">
      <div class="mx-auto text-center ">
        <Container class="w-full flex flex-col ">
          <FooterContainer>
            <Newsletter />
            <Community />
            <Info />
          </FooterContainer>
        </Container>
      </div>

      <Container class="w-full">
        <FooterContainer class="flex justify-between w-full py-3">
          <Text
            class="flex items-center gap-1 text-black"
            variant="body"
            tone="default"
          >
            Powered by{" "}
            <a
              href="https://www.deco.cx"
              aria-label="powered by https://www.deco.cx"
            >
              <Icon
                id="Deco"
                class="text-black"
                fill="#000"
                height={20}
                width={60}
                strokeWidth={0.01}
              />
            </a>
          </Text>

          <ul class="flex items-center justify-center gap-2">
            <li>
              <a
                href="https://www.instagram.com/deco.cx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram logo"
              >
                <Icon
                  class="text-default-inverse"
                  width={32}
                  height={32}
                  id="Instagram"
                  strokeWidth={1}
                />
              </a>
            </li>
            <li>
              <a
                href="http://www.deco.cx/discord"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord logo"
              >
                <Icon
                  class="text-default-inverse"
                  width={32}
                  height={32}
                  id="Discord"
                  strokeWidth={5}
                />
              </a>
            </li>
          </ul>
        </FooterContainer>
      </Container>
    </footer>
  );
}

export default Footer;
