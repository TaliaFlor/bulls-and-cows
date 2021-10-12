import React from 'react';
import {DarkThemeProvider} from "./src/contexts/DarkThemeContext";
import {Main} from "./src/pages/Main";

export default function App() {
    return (
        <DarkThemeProvider>
            <Main/>
        </DarkThemeProvider>
    );
}
