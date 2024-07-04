const AvailableActions = {
  Motion: [
    {
      label: "Move",
      value: "10",
      endLabel: "steps",
      type: "number",
    },
    {
      label: "Turn Right",
      value: "15",
      endLabel: "degrees",
      type: "number",
    },
    {
      label: "Turn Left",
      value: "15",
      endLabel: "degrees",
      type: "number",
    },
    {
      label: "Go to ",
      value: "Random",
      endLabel: "degrees",
      type: "number",
    },
    {
      label: "Go to X",
      input: 2,
      label2: "Y",
    },
  ],
  Looks: [
    {
      label: "Say",
      value: "Hello",
      endLabel: "secs",
      input: 2,
      label2: "For",
      value2: "2",
    },
    {
      label: "Say",
      value: "Hello",
    },
    {
      label: "Think",
      value: "Hello",
      endLabel: "secs",
      input: 2,
      label2: "For",
      value2: "2",
    },
    {
      label: "Think",
      value: "Hello",
    },
    {
      label: "Change Color",
      value: "Red",
      endLabel: "",
    },
    {
      label: "Change Size by",
      value: "10",
      endLabel: "",
      type: "number",
    },
    {
      label: "Set size to",
      value: "10",
      endLabel: "%",
      type: "number",
    },
  ],
  Events: [
    { label: "When Flag Clicked", value: "Flag" },
    {
      label: "When",
      value: "Space",
      endLabel: "key pressed",
    },
    {
      label: "When this sprite clicked",
      value: "",
      isInput: false,
    },
  ],
  Control: [
    {
      label: "Wait",
      value: "1",
      endLabel: "secs",
      type: "number",
    },
    {
      label: "Repeat",
      value: "10",
      endLabel: "times",
      type: "number",
      childrenBlock: true,
    },
    {
      label: "Forever",
      value: "",
      childrenBlock: true,
    },
    {
      label: "If",
      value: "Condition",
      endLabel: "then",
      childrenBlock: true,
    },
    {
      label: "If",
      value: "Condition",

      endLabelMiddle: "then",
      endLabel: "Else",
      childrenBlock: true,
      input: 2,
    },
    {
      label: "Wait Until",
      value: "Condition",
      childrenBlock: true,
    },
    {
      repetable: true,
      label: "Repeat Until",
      value: "Condition",
      childrenBlock: true,
    },
    {
      label: "Stop",
      value: "All",
      endLabel: "",
    },
  ],
};
export default AvailableActions;
