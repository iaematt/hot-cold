import React from "react";

import { AppProvider } from "./contexts/app";
import GlobalStyle from "./styles/global";
import {
  Box,
  Divider,
  Form,
  Info,
  Modal,
  Progress,
  Title,
  Reset,
  HowToPlay,
} from "./components";

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />

      <Box>
        <Title />
        <Divider />
        <Info />
        <Form />
        <Divider />
        <Progress />
        <Reset />
        <HowToPlay />
      </Box>

      <Modal />
    </AppProvider>
  );
};

export default App;
