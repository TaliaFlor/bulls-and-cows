import {Theme} from "./interfaces/theme.interface";

export const LightTheme: Theme = {
    id: "light",
    name: "Modo Claro",
    icon: 'https://cdn.iconscout.com/icon/free/png-128/sun-bright-rays-sunny-weather-33960.png',
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
    icon: 'https://cdn.iconscout.com/icon/free/png-128/moon-2130761-1798529.png',
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
