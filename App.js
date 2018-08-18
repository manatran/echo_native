import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store';

import Main from './src/layouts/Main';

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Main />
      	</PersistGate>
			</Provider>
		);
	}
}

export default App;
