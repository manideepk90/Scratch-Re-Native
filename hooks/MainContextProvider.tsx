import AvailableSprites from "@/constants/AvailableSprites";
import Sprite from "@/lib/Sprite";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
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
  showingAction: number;
  setShowingAction: Dispatch<SetStateAction<number>>;
};

const defaultContext: MainContextType = {
  sprites: [],
  setSprites: () => {},
  selectedSprite: new Sprite(AvailableSprites[0]),
  setSelectedSprite: () => {},
  deleteSprite: (sprite: Sprite | undefined) => {},
  addSprite: (sprite: Sprite) => {},
  setDefaultSelection: () => {},
  showingAction: 0,
  setShowingAction: () => {},
};

export const MainContext = createContext<MainContextType>(defaultContext);

export const useMainContextProvider = () => useContext(MainContext);

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [sprites, setSprites] = useState<Sprite[]>([
    new Sprite(AvailableSprites[0]),
  ]);
  const [showingAction, setShowingAction] = useState(0);
  const [selectedSprite, setSelectedSprite] = useState<Sprite | null>(
    sprites.length > 0 ? sprites[0] : null
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

  const contextValue = useMemo(
    () => ({
      sprites,
      setSprites,
      selectedSprite,
      setSelectedSprite,
      setDefaultSelection,
      deleteSprite,
      addSprite,
      showingAction,
      setShowingAction,
    }),
    [sprites, selectedSprite, setDefaultSelection, showingAction]
  );

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default MainContextProvider;
