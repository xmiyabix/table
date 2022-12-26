import "bulma/css/bulma.css"
import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.querySelector("#content")).render(<App />);