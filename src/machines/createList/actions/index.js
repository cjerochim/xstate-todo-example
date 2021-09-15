import { sendParent, assign } from "xstate";

function mergeMeta(meta) {
  return Object.keys(meta).reduce((acc, key) => {
    const value = meta[key];
    // Assuming each meta value is an object
    Object.assign(acc, value);
    return acc;
  }, {});
}

export default {
  notifyComplete: sendParent((ctx, evt) => ({
    type: "COMPLETE",
    payload: ctx,
  })),
  updateInput: assign((ctx, evt, { state }) => {
    const { attr } = mergeMeta(state.meta);
    return {
      ...ctx,
      [attr]: evt.payload,
    };
  }),
};
