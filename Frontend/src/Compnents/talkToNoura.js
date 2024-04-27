import React from "react";
import Microphone from "./Microphone";

export default function TalkToNoura() {
  return (
    <div className="talk-to-noura">
      <div className="left-talk">
        <h1>Talk to Noura</h1>
        <h2>Your AI Assistant</h2>
        <div className="mic-con">
          <Microphone />
          <h3>Start Conversation</h3>
        </div>
      </div>
      <div className="noura-image">      <div className="noura-image-2"></div>
</div>
    </div>
  );
}
