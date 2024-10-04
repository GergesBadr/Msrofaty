import { PiHandWaving } from "react-icons/pi";
import { useAppSelector } from "../../app/hooks";

export default function UserNameDisplay() {
  const userName = useAppSelector((state) => state.user.user.name);

  return (
    <h2 className="heading-2 flex items-center gap-2">
      <span>أهلًا بيك{userName ? `، ${userName}` : ""}</span>
      <span>
        <PiHandWaving className="size-10" />
      </span>
    </h2>
  );
}
