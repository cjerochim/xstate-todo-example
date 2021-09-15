import { createMachine } from "xstate";
import actions from "./actions";

const context = {
  name: "",
  category: "",
};

const inputStatechart = {
  initial: "init",
  states: {
    init: {
      after: {
        200: "focus",
      },
    },
    focus: {
      on: {
        INPUT: "input",
      },
    },
    input: {
      entry: "updateInput",
      always: "focus",
    },
  },
};

const createListMachine = createMachine(
  {
    initial: "name",
    context,
    states: {
      name: {
        meta: { attr: "name" },
        on: {
          NEXT: "category",
        },
        ...inputStatechart,
      },
      category: {
        meta: { attr: "category" },
        on: {
          NEXT: "celebrate",
        },
        ...inputStatechart,
      },
      celebrate: {
        after: {
          700: "complete",
        },
      },
      complete: {
        entry: "notifyComplete",
        type: "final",
      },
    },
  },
  {
    actions,
  }
);

export default createListMachine;
