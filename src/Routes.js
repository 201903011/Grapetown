import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Form from './components/Form';
import Sec from './pages/Sec';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Reel from './pages/Reel';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
				  <Scene key="form" component={Form} title="Login" initial={true}/>
				  <Scene key="upload" component={Upload} title="Upload"/>
			      <Scene key="sec" component={Sec} title="Sec"/>
				  <Scene key="profile" component={Profile} title="Profile"/>
				  <Scene key="reel" component={Reel} title="Reel"/>
			    </Stack>
			 </Router>
			)
	}
}