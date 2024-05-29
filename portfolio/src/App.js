import './App.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Infos from './components/Infos/Infos';
import FirstContainer from './components/AllContainers/FirstContainer';
import SecondContainer from './components/AllContainers/SecondContainer';
import ThirdContainer from './components/AllContainers/ThirdContainer';
import FourthContainer from './components/AllContainers/FourthContainer';
import FloatingBtns from './components/FloatingBtns/FloatingBtns';

function App() {
  return (
    <div className="App">
      <body>
        <Tabs className="container">
          <div className="left-painel">
            <Infos/>
            <TabList className="menu-principal">
              <Tab>Sobre mim</Tab>
              <Tab>Histórico acadêmico</Tab>
              <Tab>Principais projetos</Tab>
              <ul>
                  <li><Tab>Season Gems - Site</Tab></li>
                  <li><Tab>Easy Food - Aplicativo</Tab></li>
                  <li><Tab>Teste</Tab></li>
                  <li><Tab>Sobre mim</Tab></li>
              </ul>
              <Tab>Serviços</Tab>
            </TabList>
          </div>
              
          <div className="right-painel">
            <TabPanels>
              <TabPanel><FirstContainer/></TabPanel>
              <TabPanel><SecondContainer/></TabPanel>
              <TabPanel><ThirdContainer/></TabPanel>
              <TabPanel><ThirdContainer/></TabPanel>
              <TabPanel><ThirdContainer/></TabPanel>
              <TabPanel><ThirdContainer/></TabPanel>
              <TabPanel><ThirdContainer/></TabPanel>
              <TabPanel><FourthContainer/></TabPanel>
            </TabPanels>
          </div>    
        </Tabs>

        <FloatingBtns/>
      </body>
    </div>
  );
}

export default App;
