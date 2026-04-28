import { createContext, useContext } from "react";
import type { CardContextValue } from "./card.types";

const CardContext = createContext<CardContextValue>({});

const useCardContext = () => useContext(CardContext);

export { CardContext, useCardContext };