import React from "react"

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [dados, setDados] = React.useState(null)

    React.useEffect(() => {
      fetch('http://localhost:3000/db.json')
        .then((response) => response.json())
        .then((json) => setDados(json))
    }, [])
    
    return (
        <GlobalContext.Provider value={ {dados} }>
            {children}
        </GlobalContext.Provider>
    )
}