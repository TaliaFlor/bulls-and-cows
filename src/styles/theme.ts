import {Theme} from "./interfaces/theme.interface";

// === Colors ===

export const PRIMARY_COLOR = "#9C27B0";

// === Themes ===

export const LightTheme: Theme = {
    id: "light",
    name: "Modo Claro",
    icon: require('../../assets/sun.png'),
    surfaceColor: "hsl(0, 0%, 0%)",
    surfaceShades: {
        lighter: {
            one: "hsl(0, 0%, 30%)",
        }
    },
    backgroundColor: "hsl(0, 0%, 98%)",
    backgroundShades: {
        darker: {
            one: 'hsl(0, 0%, 97%)'
        }
    }
}

export const DarkTheme: Theme = {
    id: "dark",
    name: "Modo Escuro",
    icon: require('../../assets/moon.png'),
    surfaceColor: "hsl(0, 0%, 100%)",
    surfaceShades: {
        darker: {
            one: "hsl(0, 0%, 60%)",
        }
    },
    backgroundColor: "hsl(0, 0%, 19%)",
    backgroundShades: {
        lighter: {
            one: 'hsl(0, 0%, 20%)'
        }
    }
}
