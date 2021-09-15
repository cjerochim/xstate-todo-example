import { spawn, assign } from "xstate";
import createListMachine from "../../createList";
import listMachine from "../../list";

export default {
  initiateCreateList: assign({
    createListRef: () => spawn(createListMachine, "create-list-machine"),
  }),
  destroyCreateList: assign({
    createListRef: (ctx, evt) => {
      ctx.createListRef.stop();
      return null;
    },
  }),
  addList: assign({
    list: ({ list }, { payload }) => {
      return [...list, spawn(listMachine(payload))];
    },
  }),
};
