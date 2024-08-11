import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import RunItem from "./RunItem";
import { useMainContextProvider } from "@/hooks/MainContextProvider";
import Action from "@/lib/Action";
import Sprite from "@/lib/Sprite";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowRight,
  faBolt,
  faReplyAll,
} from "@fortawesome/free-solid-svg-icons";
import DraggableFlatList from "react-native-draggable-flatlist";
import AvailableSprites from "@/constants/AvailableSprites";
import Confirmation from "@/components/Confirmation/Confirmation";
const RunPanel = () => {
  const { selectedSprite, setSprites, setSelectedSprite, sprites } =
    useMainContextProvider();

  // for time controlled changed

  const updateSprite = useCallback(
    (sprite: Sprite) => {
      setSprites((prev) =>
        prev.map((s) => (s.getId() === sprite.getId() ? sprite : s))
      );
    },
    [setSprites]
  );

  const runMethods = useCallback(
    async (sprite: Sprite) => {
      const actions = sprite?.getActions();
      if (!actions) return;

      for (const ac of actions) {
        for (const runAction of ac.getMethods()) {
          try {
            await runAction.callback(sprite, runAction, updateSprite);
          } catch (error) {
            console.error("Error executing action method:", error);
          }
        }
      }
    },
    [updateSprite]
  );
  // Handler to run all actions as well as to run one by one
  const runAction = useCallback(
    async (action: Action | any, all = false) => {
      if (all) {
        for (const sprite of sprites) {
          // await runMethods(sprite);  // for running one after other
          runMethods(sprite);
        }
      } else if (Object.keys(action).length > 0) {
        for (const runAction of action.getMethods()) {
          try {
            await runAction.callback(selectedSprite, runAction, updateSprite);
          } catch (error) {
            console.error("Error executing selected action method:", error);
          }
        }
      } else if (selectedSprite) {
        await runMethods(selectedSprite);
      }
    },
    [sprites, selectedSprite, runMethods, updateSprite]
  );

  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: {
    item: any;
    drag: () => void;
    isActive: boolean;
    getIndex: () => number | undefined;
  }) => {
    return (
      <RunItem
        key={getIndex()}
        action={item}
        longPress={drag}
        onclick={runAction}
      />
    );
  };
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <Confirmation
          open={open}
          handleClose={setOpen}
          handleConfirm={() => {
            // setSelectedSprite(null);
            // setSprites([new Sprite(AvailableSprites[0])]);
            // setOpen(false);
          }}
          title="Do you want to reset all"
          content={
            <View
              style={{
                // justifyContent: "center",
                flexDirection: "column",
                // alignItems : "center",
                gap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  padding: 10,
                }}
                onPress={() => {
                  // setSelectedSprite(null);
                  setSprites((prev) =>
                    prev.map((spr) => {
                      spr.setActions([new Action({ name: "action-1" })]);
                      return spr;
                    })
                  );
                  setOpen(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Reset actions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  padding: 10,
                }}
                onPress={() => {
                  setSelectedSprite(null);
                  setSprites([new Sprite(AvailableSprites[0])]);
                  setOpen(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Reset all canvas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#0090FF",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  padding: 10,
                }}
                onPress={() => {
                  setOpen(false);
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Discard
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: 46,
            height: 46,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faReplyAll} color="white" />
          <Text style={{ color: "white" }}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles?.runAllButton}
          onPress={() => runAction({}, true)}
        >
          <FontAwesomeIcon icon={faBolt} color="white" />
          <Text style={{ color: "white" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles?.runAllButton}
          onPress={() => runAction({})}
        >
          <FontAwesomeIcon icon={faArrowRight} color="white" />
          <Text style={{ color: "white" }}>run</Text>
        </TouchableOpacity>
        <DraggableFlatList
          contentContainerStyle={{
            gap: 10,
          }}
          data={
            selectedSprite?.getActions() ? selectedSprite?.getActions() : []
          }
          renderItem={renderItem}
          keyExtractor={(item) => item.getId()}
          horizontal
          onDragEnd={({ data }) =>
            setSprites((prev) =>
              prev.map((sprite) => {
                if (sprite.getId() === selectedSprite?.getId()) {
                  sprite.setActions(data);
                }
                return sprite;
              })
            )
          }
          containerStyle={{ gap: 10 }}
        />
        {/* {selectedSprite?.getActions().map((action, index) => (
            <RunItem key={index} action={action} onclick={runAction} />
          ))} */}
      </View>
    </View>
  );
};

export default RunPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    width: "100%",
    backgroundColor: "#FDE4BE",
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 4,
  },
  scrollView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    gap: 4,
    borderRadius: 4,
  },
  runLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  resetAll: {
    backgroundColor: "red",
  },
  runAllButton: {
    backgroundColor: "green",
    width: 44,
    height: 44,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
