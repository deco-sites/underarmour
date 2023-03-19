import Text from "$store/components/ui/Text.tsx";
import Container from "../ui/Container.tsx";
import Rating from "./Rating.tsx";

interface Props {
  userName: string;
  date: string;
  title?: string;
  description: string;
  approval?: number;
  recommended?: boolean;
  rating?: number;
}

function UserComment(
  {
    userName,
    date,
    title,
    description,
    approval = 0,
    recommended = false,
    rating = 0,
  }: Props,
) {
  return (
    <li class="flex flex-row justify-between py-10 px-2 border-b border-gray-300 first:border-t">
      <div class="flex flex-col justify-center">
        <Text
          variant="body"
          tone="default"
          class="text-center text-sm mb-1 font-semibold"
        >
          {userName}
        </Text>
        <Text variant="body" tone="subdued" class="text-center text-xs">
          {date}
        </Text>
      </div>
      <div class="flex flex-col w-[70%]">
        <Rating activeStars={rating} votingCount={0} enableColor={true} />
        <p class="text-black text-base my-4">
          {description}
        </p>
        {recommended && (
          <Text variant="body" tone="default" class="text-left text-xs">
            🙂 Sim, eu recomendo este produto
          </Text>
        )}
      </div>
      <div class="flex flex-col self-end">
        <a>
          <span class="text-sm text-gray-900">
            Esta avaliação foi útil? 👍🏻
          </span>
        </a>
      </div>
    </li>
  );
}

export default UserComment;
