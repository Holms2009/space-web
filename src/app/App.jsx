import { useState } from 'react';

import styles from './App.module.css';

import { Header, SideBar } from '../components';
import { selectSection } from './utils';
import { useSelector } from 'react-redux';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const { activeSection } = useSelector(state => state.app);

  function toggleSideBar() {
    setShowSideBar(!showSideBar);
  }

  return (
    <>
      <Header showThemeToggle={showSideBar} onBurgerClick={toggleSideBar} />
      <div className={styles.wrapper}>
        <SideBar isOpened={showSideBar} />
        {selectSection(activeSection)}
      </div>
    </>
  )
}

export default App
