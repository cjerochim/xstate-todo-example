import { createMachine } from "xstate";
import actions from "./actions";

const appMachine = createMachine(
  {
    id: "application",
    initial: "init",
    context: {
      createListRef: null,
      list: [],
    },
    states: {
      init: {
        always: "loadAllTasks",
      },
      loadAllTasks: {
        after: {
          1000: "idle",
        },
      },
      idle: {
        on: {
          CREATE_LIST: "createList",
        },
      },
      createList: {
        entry: "initiateCreateList",
        exit: "destroyCreateList",
        on: {
          CANCEL: "idle",
          COMPLETE: { target: "idle", actions: ["addList"] },
        },
      },
    },
  },
  {
    actions,
  }
);

export default appMachine;
