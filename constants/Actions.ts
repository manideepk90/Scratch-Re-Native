import Sprite from "@/lib/Sprite";

const AvailableActions = {
  Motion: [
    {
      id: 1,
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
      label: "Turn Right",
      value: 15,
      endLabel: "degrees",
      type: "number",
    },
    {
      id: 3,
      label: "Turn Left",
      value: "15",
      endLabel: "degrees",
      type: "number",
    },
    {
      id: 4,
      label: "Go to ",
      value: "Random",
      endLabel: "degrees",
      type: "number",
    },
    { id: 5, label: "Go to X", input: 2, label2: "Y" },
  ],
  Looks: [
    {
      id: 1,
      label: "Say",
      value: "Hello",
      endLabel: "secs",
      input: 2,
      label2: "For",
      value2: "2",
    },
    {
      id: 2,
      label: "Say",
      value: "Hello",
    },
    {
      id: 3,
      label: "Think",
      value: "Hello",
      endLabel: "secs",
      input: 2,
      label2: "For",
      value2: "2",
    },
    {
      id: 4,
      label: "Think",
      value: "Hello",
    },
    {
      label: "Change Color",
      value: "Red",
      endLabel: "",
    },
    {
      id: 5,
      label: "Change Size by",
      value: "10",
      endLabel: "",
      type: "number",
    },
    {
      id: 6,
      label: "Set size to",
      value: "10",
      endLabel: "%",
      type: "number",
    },
  ],
  Events: [
    { id: 1, label: "When Flag Clicked", value: "Flag" },
    {
      id: 2,
      label: "When",
      value: "Space",
      endLabel: "key pressed",
    },
    {
      id: 3,
      label: "When this sprite clicked",
      value: "",
      isInput: false,
    },
  ],
  Control: [
    { id: 1, label: "Wait", value: "1", endLabel: "secs", type: "number" },
    {
      id: 2,
      label: "Repeat",
      value: "10",
      endLabel: "times",
      type: "number",
      childrenBlock: true,
    },
    {
      id: 3,
      label: "Forever",
      value: "",
      childrenBlock: true,
    },
    {
      id: 4,
      label: "If",
      value: "Condition",
      endLabel: "then",
      childrenBlock: true,
    },
    {
      id: 5,
      label: "If",
      value: "Condition",

      endLabelMiddle: "then",
      endLabel: "Else",
      childrenBlock: true,
      input: 2,
    },
    {
      id: 6,
      label: "Wait Until",
      value: "Condition",
      childrenBlock: true,
    },
    {
      id: 7,
      repetable: true,
      label: "Repeat Until",
      value: "Condition",
      childrenBlock: true,
    },
    {
      id: 8,
      label: "Stop",
      value: "All",
      endLabel: "",
    },
  ],
};
export default AvailableActions;
