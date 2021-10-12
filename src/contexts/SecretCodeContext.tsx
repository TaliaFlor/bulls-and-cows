import React, {createContext, useContext, useState} from "react";
import {generateSecret} from "../utils/game.utils";

interface SecretCodeContext {
    secret: number;
    generateSecret: () => void;
}

export const SecretContext = createContext<SecretCodeContext>({
    secret: generateSecret(),
    generateSecret: () => {
    }
});

type Props = {
    children: any;
}

export const SecretCodeProvider = (props: Props) => {
    /*
    * Enables changing the game's secret dynamicly during runtime by
    * overriding the game's default secret.
   */
    const [secret, setSecret] = useState<number>(generateSecret());

    const currentSecret: SecretCodeContext = {
        secret,
        generateSecret: () => setSecret(generateSecret())
    }

    return (
        <SecretContext.Provider value={currentSecret}>
            {props.children}
        </SecretContext.Provider>
    );
};

// Custom hook to get the theme object returns {darkMode, theme, setTheme}
export const useSecretCode = () => useContext(SecretContext);
