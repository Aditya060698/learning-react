import { Header } from './components/Header';
import { CoreConcepts } from './components/CoreConcepts';
import  TabButton  from './components/TabButton';
import { CORE_CONCEPTS,EXAMPLES } from './data';
import { useState } from 'react';
 

function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedButton, selectedTopic);
}
  let tabContent=<p>Please select a button</p>
  if (selectedTopic){
    tabContent=<div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            <li>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            </li>
            <li><CoreConcepts {...CORE_CONCEPTS[1]}></CoreConcepts></li>
            <li><CoreConcepts {...CORE_CONCEPTS[2]}></CoreConcepts></li>
            <li><CoreConcepts {...CORE_CONCEPTS[3]}></CoreConcepts></li>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton lable='Components' onSelect={()=>handleSelect('components')}></TabButton>
            <TabButton lable='JSX' onSelect={()=>handleSelect('jsx')}></TabButton>
            <TabButton lable='Props' onSelect={()=>handleSelect('props')}></TabButton>
            <TabButton lable='States' onSelect={()=>handleSelect('state')}></TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
