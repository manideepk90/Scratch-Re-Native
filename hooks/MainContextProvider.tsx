import AvailableSprites from "@/constants/AvailableSprites";
import Sprite from "@/lib/Sprite";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

type MainContextType = {
  sprites: Sprite[];
  setSprites: Dispatch<SetStateAction<Sprite[]>>;
  selectedSprite: Sprite | null;
  setSelectedSprite: Dispatch<SetStateAction<Sprite | null>>;
  deleteSprite: (sprite: Sprite | undefined) => void;
  setDefaultSelection: () => void;
  addSprite: (sprite: Sprite) => void;
};

const defaultContext: MainContextType = {
  sprites: [],
  setSprites: () => {},
  selectedSprite: new Sprite(AvailableSprites[0]),
  setSelectedSprite: () => {},
  deleteSprite: (sprite: Sprite | undefined) => {},
  addSprite: (sprite: Sprite) => {},
  setDefaultSelection: () => {},
};

export const MainContext = createContext<MainContextType>(defaultContext);

export const useMainContextProvider = () => useContext(MainContext);

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [sprites, setSprites] = useState<Sprite[]>([
    new Sprite(AvailableSprites[0]),
  ]);
  const [selectedSprite, setSelectedSprite] = useState<Sprite | null>(
    sprites[0]
  );

  const deleteSprite = (sprite: Sprite | undefined) => {
    if (sprite === undefined) return;
    setSprites((prev) => prev.filter((e, i) => e.getId() !== sprite.getId()));
  };

  const addSprite = (sprite: Sprite) => {
    setSprites((prev) => [...prev, sprite]);
  };

  const setDefaultSelection = useCallback(() => {
    if (sprites.length > 0) {
      setSelectedSprite(sprites[0]);
    } else {
      setSelectedSprite(null);
    }
  }, [sprites]);

  return (
    <MainContext.Provider
      value={{
        sprites,
        setSprites,
        selectedSprite,
        setSelectedSprite,
        setDefaultSelection,
        deleteSprite,
        addSprite,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
