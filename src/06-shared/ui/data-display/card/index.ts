import { Card } from "./card";
import { CardHeader } from "./ui/card-header";
import { CardContent } from "./ui/card-content";
import { CardFooter } from "./ui/card-footer";

const CardCompound = Object.assign(Card, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export { CardCompound as Card };