import React, { useRef, useEffect } from "react";
import { useActor } from "@xstate/react";
import { useApp } from "providers/app";
import Modal from "components/modal/Modal";
import Button from "components/button/Button";
import Input from "components/input/Input";
import Celebrate from "components/celebrate/Celebrate";

const onSubmit = (fn) => (e) => {
  e.preventDefault();
  fn();
};

const CreateListView = ({ actor }) => {
  const nameRef = useRef();
  const categoryRef = useRef();
  const [state, send] = useActor(actor);
  const { name, category } = state.context;

  useEffect(() => {
    if (state.matches({ name: "focus" })) nameRef.current.focus();
    if (state.matches({ category: "focus" })) categoryRef.current.focus();
  }, [state.value]);

  return (
    <>
      <Modal.Group active={state.matches("name")}>
        <form autoComplete="off" onSubmit={onSubmit(() => send("NEXT"))}>
          <Input
            ref={nameRef}
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => send({ type: "INPUT", payload: e.target.value })}
          />
          <Button full>Next</Button>
        </form>
      </Modal.Group>
      <Modal.Group active={state.matches("category")}>
        <form autoComplete="off" onSubmit={onSubmit(() => send("NEXT"))}>
          <Input
            ref={categoryRef}
            id="category"
            label="Category"
            type="text"
            value={category}
            onChange={(e) => send({ type: "FOCUS", payload: e.target.value })}
          />
          <Button full>Next</Button>
        </form>
      </Modal.Group>
      <Modal.Group active={state.matches("celebrate")}>
        <Celebrate active={state.matches("celebrate")}>
          <h2>Complete</h2>
        </Celebrate>
      </Modal.Group>
    </>
  );
};

const App = () => {
  const { appService } = useApp();
  const [state, send] = useActor(appService);
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Button onClick={() => send("CREATE_LIST")}>Create list</Button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Modal
          active={state.matches("createList")}
          title="Create list"
          onCancel={() => send("CANCEL")}
        >
          {state.matches("createList") && (
            <CreateListView actor={state.context.createListRef} />
          )}
        </Modal>
      </main>
    </div>
  );
};

export default App;
