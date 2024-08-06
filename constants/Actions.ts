import Sprite from "@/lib/Sprite";

const AvailableActions = [
  {
    id: 1,
    actionType: "Motion",
    label: "Move X by",
    value: 100,
    endLabel: "steps",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedValue = sprite.getX() + refObject.value;
      const incrementValue = async () => {
        return new Promise((resolve) => {
          sprite.setX(expectedValue);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(sprite);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 16,
    actionType: "Motion",
    label: "Move Y by",
    value: 100,
    endLabel: "steps",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedValue = sprite.getY() + refObject.value;
      const incrementValue = async () => {
        return new Promise((resolve) => {
          sprite.setY(expectedValue);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(sprite);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 2,
    actionType: "Motion",
    label: "Turn Right",
    value: 15,
    endLabel: "degrees",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedValue = sprite.getDirection() + refObject.value;
      const incrementValue = async () => {
        return new Promise((resolve) => {
          sprite.setDirection(expectedValue);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(sprite);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 3,
    actionType: "Motion",
    label: "Turn Left",
    value: "15",
    endLabel: "degrees",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedValue = sprite.getDirection() - refObject.value;
      const incrementValue = async () => {
        return new Promise((resolve) => {
          sprite.setDirection(expectedValue);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(true);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 5,
    actionType: "Motion",
    label: "Go to",
    value: "Random",
    endLabel: "Position",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedX = refObject.getRandomNumber(-180, 180);
      const expectedY = refObject.getRandomNumber(-180, 180);

      const incrementValue = async () => {
        return new Promise((resolve) => {
          sprite.setX(expectedX); 
          sprite.setY(expectedY);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(sprite);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 4,
    actionType: "Motion",
    label: "Change to",
    value: "Random",
    value1Disabled: true,
    endLabel: "degrees",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedValue = refObject.getRandomNumber(-180, 180);

      const incrementValue = async () => {
        return new Promise((resolve) => {
          sprite.setDirection(expectedValue);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(sprite);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 5,
    actionType: "Motion",
    label: "Go to X",
    input: 2,
    label2: "Y",
    value: 10,
    value2: 12,
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedX = refObject.value;
      const expectedY = refObject.value2;
      const incrementValue = async () => {
        return new Promise((resolve) => {
          sprite.setX(expectedX);
          sprite.setY(expectedY);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(sprite);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 2,
    actionType: "Looks",
    label: "Say",
    value: "Hello",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      await new Promise((resolve) => {
        sprite.setThinking(false).setMessage(refObject.value);
        funcCallback(sprite);
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
      return true;
    },
  },
  {
    id: 1,
    actionType: "Looks",
    label: "Say",
    value: "Hello",
    endLabel: "secs",
    input: 2,
    label2: "For",
    value2: 2,
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      await new Promise((resolve) => {
        sprite
          .setThinking(false)
          .setMessage(
            refObject.value,
            true,
            refObject.value2 * 1000,
            funcCallback
          );
        funcCallback(sprite);
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
      return true;
    },
  },
  {
    id: 3,
    actionType: "Looks",
    label: "Think",
    value: "Hello",
    endLabel: "secs",
    input: 2,
    label2: "For",
    value2: 2,
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      await new Promise((resolve) => {
        sprite
          .setThinking(true)
          .setMessage(
            refObject.value,
            true,
            refObject.value2 * 1000,
            funcCallback
          );
        funcCallback(sprite);
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
      return true;
    },
  },
  {
    id: 4,
    actionType: "Looks",
    label: "Think",
    value: "Hello",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      await new Promise((resolve) => {
        sprite.setThinking(true).setMessage(refObject.value);
        funcCallback(sprite);
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
      return true;
    },
  },
  // {
  //   id: 5,
  //   actionType: "Looks",
  //   label: "Change Color",
  //   value: "Red",
  //   endLabel: "",
  // },
  {
    id: 6,
    actionType: "Looks",
    label: "Change Size by",
    value: 2,
    endLabel: "",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedValue = sprite.getSize() * refObject.value;
      const incrementValue = async () => {
        return new Promise((resolve) => {
          // const currentX = sprite.getSize();
          // if (currentX != expectedValue) {
          //   const increment = refObject.value / 10;
          //   sprite.setSize(currentX - increment);
          //   funcCallback(sprite);

          //   setTimeout(async () => {
          //     await incrementValue();
          //     resolve(true);
          //   }, 1000);
          // } else {
          //   resolve(true);
          // }
          sprite.setSize(expectedValue);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(true);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  {
    id: 7,
    actionType: "Looks",
    label: "Set size to",
    value: 10,
    endLabel: "%",
    type: "number",
    callback: async (sprite: Sprite, refObject: any, funcCallback: any) => {
      const expectedValue = sprite.getSize() * (refObject.value / 100);
      const incrementValue = async () => {
        return new Promise((resolve) => {
          // const currentX = sprite.getSize();
          // if (currentX != expectedValue) {
          //   const increment = refObject.value / 10;
          //   sprite.setSize(currentX - increment);
          //   funcCallback(sprite);

          //   setTimeout(async () => {
          //     await incrementValue();
          //     resolve(true);
          //   }, 150);
          // } else {
          //   resolve(true);
          // }
          sprite.setSize(expectedValue);
          funcCallback(sprite);
          setTimeout(() => {
            resolve(true);
          }, 500);
        });
      };

      await incrementValue();
      return true;
    },
  },
  { id: 1, actionType: "Events", label: "When Flag Clicked", value: "Flag" },
  {
    id: 2,
    actionType: "Events",
    label: "When",
    value: "Space",
    endLabel: "key pressed",
  },
  {
    id: 3,
    actionType: "Events",
    label: "When this sprite clicked",
    value: "",
    isInput: false,
  },
  {
    id: 1,
    actionType: "Control",
    label: "Wait",
    value: "1",
    endLabel: "secs",
    type: "number",
  },
  {
    id: 2,
    actionType: "Control",
    label: "Repeat",
    value: "10",
    endLabel: "times",
    type: "number",
    childrenBlock: true,
  },
  {
    id: 3,
    actionType: "Control",
    label: "Forever",
    value: "",
    childrenBlock: true,
  },
  {
    id: 4,
    actionType: "Control",
    label: "If",
    value: "Condition",
    endLabel: "then",
    childrenBlock: true,
  },
  {
    id: 5,
    actionType: "Control",
    label: "If",
    value: "Condition",
    endLabelMiddle: "then",
    endLabel: "Else",
    childrenBlock: true,
    input: 2,
  },
  {
    id: 6,
    actionType: "Control",
    label: "Wait Until",
    value: "Condition",
    childrenBlock: true,
  },
  {
    id: 7,
    actionType: "Control",
    repetable: true,
    label: "Repeat Until",
    value: "Condition",
    childrenBlock: true,
  },
  {
    id: 8,
    actionType: "Control",
    label: "Stop",
    value: "All",
    endLabel: "",
  },
];
export default AvailableActions;
