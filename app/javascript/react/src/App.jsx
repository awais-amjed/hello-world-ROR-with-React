import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Greeting from './components/Greeting';
import store from './redux/configureStore';
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div id="app">
                    <Routes>
                        <Route path="*" element={<Greeting />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
