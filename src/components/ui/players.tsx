import type { Player } from "@/types/game";
import { Badge } from "./badge";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type PlayersProps = {
  players: Player[];
  active: string;
} & ComponentProps<"div">;
const Players = ({ players, active, className, ...props }: PlayersProps) => {
  return (
    <div
      className={cn(
        "flex flex-row justify-evenly w-full max-w-xl mx-auto",
        className
      )}
      {...props}
    >
      {players.map((p, i) => (
        <Badge
          key={p.name + i}
          variant={p.name === active ? "default" : "outline"}
        >
          {p.name}
        </Badge>
      ))}
    </div>
  );
};

export default Players;
