import styles from './App.module.css';

import { Header } from '../components/Header';
import { useState } from 'react';
import { SideBar } from '../components/SideBar';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <>
      <Header showThemeToggle={showSideBar} onBurgerClick={toggleSideBar} />
      <div className={styles.wrapper}>
        <SideBar isOpened={showSideBar}/>
      </div>
    </>
  )
}

export default App
