import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Main from "./components/MainComponent";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";

const store = configureStore({
	reducer: rootReducer,
});

function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}

export default App;
