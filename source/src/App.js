import { Box } from '@chakra-ui/react';

import { Switch, Route } from "react-router-dom";

import Topnav from './components/Topnav';
import Home from './components/Home';

export default function App() {
  return(
    <Box pb="50">
      <Topnav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Box>
  );
}
