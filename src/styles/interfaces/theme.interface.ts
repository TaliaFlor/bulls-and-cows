export interface Theme {
    id: string;
    name: string;
    icon: any;
    surfaceColor: string;
    surfaceShades?: ColorShades;
    backgroundColor: string;
    backgroundShades?: ColorShades;
}

interface ColorShades {
    lighter?: {
        one?: string;
        two?: string;
    };
    darker?: {
        one?: string;
        two?: string;
    }
}
