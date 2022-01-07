import React from 'react';
import {useRoutes} from "./routes";
import 'primeicons/primeicons.css'
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    const routes = useRoutes()

    return (
        <Router>
            {routes}
        </Router>
    );
}

export default App;
