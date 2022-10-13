import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/carteira" component={ Wallet } />
        </Switch>
      </div>
    );
  }
}
export default App;
// https://www.youtube.com/watch?v=psy3s7D-8lo&ab_channel=FawadBinTariq
// https://www.youtube.com/watch?v=3wP4JcDVdaU&list=PLRGv4LGMjiB9nBoDXNR19CiOft3fW0ald&ab_channel=SilvaneiMartins
// https://www.youtube.com/watch?v=-oNrp52g-YM&ab_channel=FawadBinTariq
