interface Props {
  activeStars: number;
  votingCount: number;
  enableColor: boolean;
}

function Rating({ activeStars = 0, votingCount = 0, enableColor = true }: Props) {
  const inactiveColor = "#7e7b7b";
  const activeColor = enableColor ? "rgb(255, 196, 0)" : "#000";

  const floorActiveStars = Math.floor(activeStars);
  const decimalPart = activeStars - floorActiveStars;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    let color = inactiveColor;
    if (i < floorActiveStars) {
      color = activeColor;
    } else if (i === Math.ceil(activeStars) - 1 && decimalPart > 0) {
      color = activeColor;
    }

    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.14 22 9.27 17 14.14 18.18 21 12 17.77 5.82 21 7 14.14 2 9.27 8.91 8.14 12 2"></polygon>
      </svg>
    );
  }

  return (
    <div className="flex items-center w-[100px]">
      {stars}
      <span className="ml-2 text-sm font-medium">{votingCount}</span>
    </div>
  );
}

export default Rating;