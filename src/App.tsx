import React from "react";
import './App.css'

import { IconsGenerator } from "./components/IconsGenerator/IconsGenerator";

export const App: React.FC = ({ }) => {
  return (
    <div className="App">
      <IconsGenerator />
    </div>
  );
}
