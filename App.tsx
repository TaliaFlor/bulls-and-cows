import React from 'react';
import {DarkThemeProvider} from "./src/contexts/DarkThemeContext";
import {MainPage} from "./src/components/pages/MainPage";

export default function App() {
    return (
        <DarkThemeProvider>
            <MainPage/>
        </DarkThemeProvider>
    );
}
