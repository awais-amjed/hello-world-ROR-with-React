import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Greeting from './Greeting';

function App() {
    return (
        <BrowserRouter>
            <div id="app">
                <Routes>
                    <Route path="*" element={<Greeting />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
