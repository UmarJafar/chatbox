import React, { useState } from "react";
import "./style.css";
import SendMessageForm from "./SendMessageForm";
import FormToggleButton from "./FormToggleButton";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route } from "react-router-dom";
import MessageReceived from "./MessageReceived";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleForm = () => {
    setToggle(!toggle);
  };
  return (
    <BrowserRouter>
      <div className="ChatBoxApp">
        <AnimatePresence>{toggle && <SendMessageForm />}</AnimatePresence>
        <FormToggleButton toggleForm={toggleForm} />
        <Route path="/success" component={MessageReceived} />
      </div>
    </BrowserRouter>
  );
};

export default App;
