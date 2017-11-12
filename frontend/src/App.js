import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import {blue500, cyan500} from 'material-ui/styles/colors';
import HomeStyle from 'material-ui/svg-icons/action/home';
import ActionAssigment from 'material-ui/svg-icons/action/assignment';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionCreate from 'material-ui/svg-icons/action/code';


import Paper from 'material-ui/Paper';

const logo = require ('./image/putih.png');

const PaperStyle = {
  backgroundColor: cyan500,
  height: 200,
  padding: 0

};

const ImageStyle = {
  width: 200,
  margin: 20

};

injectTapEventPlugin();

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpened: false
    }
  }
  _toggleDrawer () {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <AppBar title="Metuyo" onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
          <Drawer  open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>

            <List style={{padding: 0}}>
              <Paper style={PaperStyle} zDepth={0}>
                <center>  <img src={logo} style={ImageStyle} /> </center>
                </Paper>
            </List>
            <List>
              <ListItem
                primaryText="Home"
                leftIcon={<HomeStyle />}
                colors={<blue500 />} />
            </List>
            <List>
              <ListItem
                primaryText="Learning Present"
                leftIcon={<ActionAssigment />}
                color={<blue500 />} />
            </List>
            <List>
              <ListItem
                primaryText="Profile"
                leftIcon={<ActionAccountCircle />}
                color={<blue500 />} />
            </List>
            <List>
              <ListItem
                primaryText="New Learning"
                leftIcon={<ActionCreate />}
                color={<blue500 />} />
            </List>

          </Drawer>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
