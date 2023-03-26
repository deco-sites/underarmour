import Text from "$store/components/ui/Text.tsx";

function Community() {
  return (
    <div class="mt-3 mb-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-20">
      <Text
        variant="caption"
        tone="default-inverse"
        class="text-black mx-auto max-w-screen-md text-center "
        style="font-size: 12px;"
      >
        A maior comunidade fitness do mundo
      </Text>
    </div>
  );
}

export default Community;
