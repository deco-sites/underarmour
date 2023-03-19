import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-20">
      <div class="flex flex-col gap-2 max-w-[400px]">
        <Text
          variant="caption"
          tone="default-inverse"
          class="text-black font-bold"
          style="font-size: 12px;"
        >
          Newsletter
        </Text>
      </div>
      <form class="flex flex-row items-center gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="bg-white py-2 px-3 flex-grow rounded text-default-inverse border-1 border-default"
          placeholder="Insira seu e-mail"
        />
        <button
          class="text-white bg-red-600 py-2 px-3 bg-interactive-inverse 	font-bold rounded"
          type="bgutton" // prevent form's default behavior
          style="font-size: 15px;"
        >
          SE INSCREVA
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
