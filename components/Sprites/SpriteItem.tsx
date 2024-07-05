import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React from "react";
import { deleteIcon } from "@/constants/icons";
import Sprite from "@/lib/Sprite";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Confirmation from "../Confirmation/Confirmation";
import { randomXY } from "@/lib/randomNess";

interface props {
  sprite: Sprite;
  longPress?: () => void;
  index: number | undefined;
  isDelete?: boolean;
  isAdd?: boolean;
  isActivelyDragging?: boolean;
}

const SpriteItem = ({
  sprite,
  longPress,
  index,
  isDelete = true,
  isAdd = false,
  isActivelyDragging = false,
}: props) => {
  var { selectedSprite, setSelectedSprite, deleteSprite, addSprite } =
    useMainContextProvider();

  const mainStyles = StyleSheet.create({
    container: {
      justifyContent: "center",
      width: isActivelyDragging ? 80 : 75,
      height: isActivelyDragging ? 80 : 75,
      borderWidth: isActivelyDragging
        ? 3
        : sprite.getId() === selectedSprite?.getId() && isDelete
        ? 2
        : 0.8,
      borderColor:
        sprite.getId() === selectedSprite?.getId() && isDelete
          ? "#1E6BFF"
          : "#ffffff",
      alignItems: "center",
      position: "relative",
      borderRadius: 4,
    },
  });

  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const handleConfirm = () => {
    deleteSprite(sprite);
    setSelectedSprite(null);
  };

  return (
    <TouchableOpacity
      style={mainStyles.container}
      onLongPress={longPress}
      onPress={() => {
        const addNew = () => {
          sprite.setNewId();
          const ranXY = randomXY();
          sprite.setX(ranXY.x);
          sprite.setY(ranXY.y);
          addSprite(sprite);
        };
        isAdd
          ? addNew()
          : selectedSprite && selectedSprite.getId() === sprite.getId()
          ? setSelectedSprite(null)
          : setSelectedSprite(sprite.getSprite());
      }}
    >
      <Confirmation
        open={confirmDelete}
        handleClose={setConfirmDelete}
        handleConfirm={handleConfirm}
      />
      {isDelete && (
        <TouchableOpacity
          style={styles.deleteIconContainer}
          onPress={() => {
            setConfirmDelete(true);
          }}
        >
          <Image style={styles.deleteIcon} source={deleteIcon} />
        </TouchableOpacity>
      )}
      <Image
        source={sprite.getIcon()}
        style={{
          width: 45,
          height: 45,
          objectFit: "contain",
        }}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          {sprite.getName().slice(0, 7)} {sprite.getName().length > 7 && "..."}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: "#FDE4BE",
    width: "100%",
    padding: 4,
    height: 25,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  deleteIconContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 30,
    height: 30,
    backgroundColor: "#FFAB19",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});
export default SpriteItem;
