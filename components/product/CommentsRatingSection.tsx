import Text from "$store/components/ui/Text.tsx";
import Button from "../ui/Button.tsx";
import Container from "../ui/Container.tsx";
import Rating from "./Rating.tsx";
import UserComment from "./UserComment.tsx";

interface Props {
  rating?: number;
  approval?: number;
}

function CommentsRatingSection({ rating = 0, approval = 0 }: Props) {
  return (
    <div class="mt-6 mb-16">
      <div class="flex items-center justify-evenly mb-10">
        <div class="h-[2px] bg-[#c3cec6] w-[80%]"></div>
        <h3 class="relative whitespace-nowrap mx-10 uppercase text-3xl text-center font-extrabold text-gray-800">
          RESUMO DE AVALIAÇÕES
        </h3>
        <div class="h-[2px] bg-[#c3cec6] w-[80%]"></div>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-evenly overflow-hidden my-4">
        <div class="flex flex-col items-center">
          <div class="inline-flex items-end">
            <span class="text-6xl font-bold">4.6</span>
            <span class="text-3xl font-bold">/5</span>
          </div>
          <span class="uppercase text-sm">Nota do produto</span>
          <Rating activeStars={4} votingCount={0} enableColor={true} />
          <span class="mt-2 text-sm text-gray-900">
            Baseado em <strong>48</strong> avaliações
          </span>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <div class="text-base text-gray-900 flex items-center my-4 justify-center relative">
            <svg
              height="66"
              width="66"
              class="transform -rotate-90 transition origin-center"
              stroke="gray-400"
            >
              <circle
                stroke-width="5"
                fill="transparent"
                r="28"
                cx="32"
                cy="32"
                style="stroke: #ddd;"
              >
              </circle>
              <circle
                stroke-width="5"
                fill="transparent"
                r="28"
                cx="32"
                cy="32"
                stroke-dasharray="175.92918860102841 175.92918860102841"
                style="stroke: #ffc400;stroke-dashoffset: 14.0743%;"
              >
              </circle>
            </svg>
            <span className="text-black text-sm font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {approval}%
            </span>
          </div>
          <span className="text-xs font-semibold leading-5 pl-1 text-left text-black">
            &nbsp;dos clientes recomendam este produto
          </span>
        </div>
      </div>
      <div class="flex flex-row mt-10 mx-4 lg:mx-0">
        <Text variant="heading-3" tone="default">Avaliações mais recentes</Text>
      </div>
      <ul class="flex flex-col mt-8 mb-10">
        <UserComment
          userName="Leila C."
          date="27/02/2023"
          description="Um produto com excelência de qualidade, esse foi para meu esposo,comprarei novamente, agora pra mim com certeza!"
          recommended={true}
          rating={5}
        />
        <UserComment
          userName="Viviane R."
          date="27/02/2023"
          title="O número exatamente compatível!"
          description="Super confortável e excelente para treinar."
          rating={4}
        />
        <UserComment
          userName="Bruno H."
          date="14/01/2023"
          description="Confortável e apropriado tanto para atividades físicas quanto para o dia a dia."
          rating={5}
        />
        <UserComment
          userName="Maricelia F."
          date="12/01/2023"
          description="Comprei pro meu marido ele falou q é muito confortável ele adorou ótimo pra caminhar super recomendo!"
          rating={3}
        />
      </ul>
      <button class="uppercase flex flex-row border-1 border-gray-500 mt-1 mx-auto mb-16">
        <span class="text-sm uppercase text-black px-8 py-4">
          Carregar mais
        </span>
      </button>
    </div>
  );
}

export default CommentsRatingSection;
