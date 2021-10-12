import React from 'react';
import {DarkThemeProvider} from "./src/contexts/DarkThemeContext";
import {Main} from "./src/pages/Main";
import {SecretCodeProvider} from "./src/contexts/SecretCodeContext";

export default function App() {
    return (
        <DarkThemeProvider>
            <SecretCodeProvider>
                <Main/>
            </SecretCodeProvider>
        </DarkThemeProvider>
    );
}
