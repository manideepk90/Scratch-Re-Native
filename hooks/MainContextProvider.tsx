import AvailableSprites from "@/constants/AvailableSprites";
import Sprite from "@/lib/Sprite";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MainContextType = {
  sprites: Sprite[];
  setSprites: Dispatch<SetStateAction<Sprite[]>>;
  selectedSprite: Sprite;
  setSelectedSprite: Dispatch<SetStateAction<Sprite>>;
  deleteSprite: (idx: number | undefined) => void;
};

const defaultContext: MainContextType = {
  sprites: [],
  setSprites: () => {},
  selectedSprite: new Sprite(AvailableSprites[0]),
  setSelectedSprite: () => {},
  deleteSprite: (idx: number | undefined) => {},
};

export const MainContext = createContext<MainContextType>(defaultContext);

export const useMainContextProvider = () => useContext(MainContext);

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [sprites, setSprites] = useState<Sprite[]>([
    new Sprite(AvailableSprites[0]),
    new Sprite(AvailableSprites[1]),
    new Sprite(AvailableSprites[2]),
    new Sprite(AvailableSprites[3]),
    new Sprite(AvailableSprites[4]),
  ]);
  const [selectedSprite, setSelectedSprite] = useState<Sprite>(sprites[0]);

  const deleteSprite = (idx: number | undefined) => {
    if (idx === undefined) return;
    setSprites(sprites.filter((_, i) => i !== idx));
  };

  return (
    <MainContext.Provider
      value={{
        sprites,
        setSprites,
        selectedSprite,
        setSelectedSprite,
        deleteSprite,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
