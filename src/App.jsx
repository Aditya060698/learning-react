import { Header } from "./components/Header";
import { CoreConcepts } from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            
            {CORE_CONCEPTS.map((conceptItems) => 
              <li key={conceptItems.title}><CoreConcepts  {...conceptItems} /></li>
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              lable="Components"
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            ></TabButton>
            <TabButton
              lable="JSX"
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            ></TabButton>
            <TabButton
              lable="Props"
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            ></TabButton>
            <TabButton
              lable="State"
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            ></TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
