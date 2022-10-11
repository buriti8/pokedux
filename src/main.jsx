import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

import "./index.css";

import { logger } from "./middelwares";
import rootReducer from "./reducers/rootReducer";

import App from "./App";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhacers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhacers);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
