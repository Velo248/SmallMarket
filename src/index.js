import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app"
import "@fortawesome/fontawesome-free/js/all"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)
