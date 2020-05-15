import React from "react";
import { Separator } from "devbsb-ui-kit";

import { AppProvider } from "./contexts/app";
import GlobalStyle from "./styles/global";
import { Box, Form, Info, Modal, Progress, Title, Reset } from "./components";

const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />

      <Box>
        <Title />
        <Separator />
        <Info />
        <Form />
        <Separator />
        <Progress />
        <Reset />
      </Box>

      <Modal />
    </AppProvider>
  );
};

export default App;
