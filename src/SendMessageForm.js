import React from "react";
import { motion } from "framer-motion";
import MainHeader from "./MainHeader";
const SendMessageForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <motion.div
      className="send-message-form"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
    >
      <MainHeader />
      <form className="custom-form" onSubmit={handelSubmit}>
        <input type="text" placeholder="Name"></input>
        <br />
        <input type="text" placeholder="Subjext"></input>
        <br />
        <input type="email" placeholder="Email"></input>
        <br />
        <textarea type="text" placeholder="How we can help?"></textarea>
        <br />
        <button>Send a message</button>
      </form>
    </motion.div>
  );
};

export default SendMessageForm;
