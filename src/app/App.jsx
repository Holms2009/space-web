import { useState } from 'react';

import styles from './App.module.css';

import { Header, SideBar, Footer } from '../components';
import { selectSection } from './utils';
import { useSelector } from 'react-redux';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const { activeSection } = useSelector(state => state.app);

  function toggleSideBar(value) {
    setShowSideBar(value);
  }

  return (
    <>
      <Header showThemeToggle={showSideBar} onBurgerClick={toggleSideBar} />
      <div className={styles.wrapper}>
        <SideBar isOpened={showSideBar} openHandler={toggleSideBar}/>
        {selectSection(activeSection)}
      </div>
      <Footer />
    </>
  )
}

export default App
