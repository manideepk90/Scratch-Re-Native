import Sprite from "@/lib/Sprite";

const AvailableActions = [
  {
    id: 1,
    actionType: "Motion",
    label: "Move",
    value: 10,
    endLabel: "steps",
    type: "number",
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setX(sprite.getX() + refObject.value);
    },
  },
  {
    id: 2,
    actionType: "Motion",
    label: "Turn Right",
    value: 15,
    endLabel: "degrees",
    type: "number",
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setDirection(sprite.getDirection() + refObject.value);
    },
  },
  {
    id: 3,
    actionType: "Motion",
    label: "Turn Left",
    value: "15",
    endLabel: "degrees",
    type: "number",
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setDirection(sprite.getDirection() - refObject.value);
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
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setDirection(refObject.getRandomNumber(-180, 180));
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
    type : "number",
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setX(refObject.value);
      sprite.setY(refObject.value2);
    },
  },
  {
    id: 2,
    actionType: "Looks",
    label: "Say",
    value: "Hello",
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setThinking(false).setMessage(refObject.value);
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
    callback: (sprite: Sprite, refObject: any) => {
      sprite
        .setThinking(false)
        .setMessage(refObject.value, true, refObject.value2 * 1000);
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
    callback: (sprite: Sprite, refObject: any) => {
      sprite
        .setThinking(true)
        .setMessage(refObject.value, true, refObject.value2 * 1000);
    },
  },
  {
    id: 4,
    actionType: "Looks",
    label: "Think",
    value: "Hello",
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setThinking(true).setMessage(refObject.value);
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
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setSize(sprite.getSize() * refObject.value);
    },
  },
  {
    id: 7,
    actionType: "Looks",
    label: "Set size to",
    value: 10,
    endLabel: "%",
    type: "number",
    callback: (sprite: Sprite, refObject: any) => {
      sprite.setSize(sprite.getSize() * (refObject.value / 100));
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
