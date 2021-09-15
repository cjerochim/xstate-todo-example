import { createMachine } from "xstate";
import actions from "./actions";

const listMachine = ({ name, category, tasks }) =>
  createMachine(
    {
      initial: "idle",
      context: {
        name,
        category,
        tasks,
      },
      states: {
        idle: {},
      },
    },
    { actions }
  );

export default listMachine;
