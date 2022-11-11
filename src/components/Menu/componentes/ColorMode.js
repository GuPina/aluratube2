import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro!")  },
    toggleMode: () => { alert("Você precisa me configurar primeiro!")  },
});

export default function colorModeProvider({ props }) {
    const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        if(cmode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }
    
    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
           {props.children} 
        </ColorModeContext.Provider>
    );
}