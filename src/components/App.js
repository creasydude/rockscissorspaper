import { Fragment, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Storage from 'local-storage-fallback';
import styled, { ThemeProvider } from 'styled-components';



//Components
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import Start from './Start';

const darkThemeColors = {
  bgColor: "#393E46",
  hfbSection: "#222831",
  hfbTxtColor: "#EEEEEE",
  mainSectionTxtColor: "#FFD369",
  selection: "#606366",
  selectionTxtColor: "#FFF",
}

const lightThemeColors = {
  bgColor: "#FAFAF6",
  hfbSection: "#3D6CB9",
  hfbTxtColor: "#FFFFFF",
  mainSectionTxtColor: "#000000",
  selection: "#AACAFF",
  selectionTxtColor: "#000",

}


const themeModes = {
  dark: darkThemeColors,
  light: lightThemeColors,
}


function App() {
  const [chosen, setChosen] = useState('');

  //Theme Mode Handlers...
  const initialTheme = () => {
    const savedTheme = Storage.getItem('theme-mode');
    return savedTheme ? savedTheme : 'light';
  }
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    Storage.setItem('theme-mode', theme)
  }, [theme])
  const themeHandler = () => {
    setTheme(theme === 'dark' ? "light" : "dark")
  }


  return (
    <Fragment>
      <ThemeProvider theme={themeModes[theme]}>

        <Header theme={theme} themeHandler={themeHandler} />
        <Switch>
          <Route exact path="/">
            <Start chosen={chosen} setChosen={setChosen} />
          </Route>
          <Route exact path="/game">
            <Game chosen={chosen} setChosen={setChosen} />
          </Route>
        </Switch>
        <Footer />

      </ThemeProvider>
    </Fragment>
  );
}

export default App;
