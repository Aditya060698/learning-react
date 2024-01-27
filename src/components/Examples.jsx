import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton, selectedTopic);
  }
  let tabContent = <p>Please select a button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          lable="Components"
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        ></TabButton>
        <TabButton
          lable="JSX"
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        ></TabButton>
        <TabButton
          lable="Props"
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        ></TabButton>
        <TabButton
          lable="State"
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        ></TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
