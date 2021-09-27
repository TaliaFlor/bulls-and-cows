import {Theme} from "./interfaces/theme.interface";

export const LightTheme: Theme = {
    id: "light",
    name: "Modo Claro",
    icon: 'https://cdn.iconscout.com/icon/free/png-128/sun-bright-rays-sunny-weather-33960.png',
    surfaceColor: "#000000",
    backgroundColor: "#FAFAFA"
}

export const DarkTheme: Theme = {
    id: "dark",
    name: "Modo Escuro",
    icon: 'https://cdn.iconscout.com/icon/free/png-128/moon-2130761-1798529.png',
    surfaceColor: "#FFFFFF",
    backgroundColor: "#303030"
}
