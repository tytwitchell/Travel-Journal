import React from 'react'
import NavBar from './components/NavBar.js'
import Main from './components/Main.js'
import data from './data.js'

export default function App() {

    const Trips = data.map(data => {

        return (
            <>
                <Main 
                    key={data.id}
                    {...data}
                />
                <hr />
            </>
        )
    })
    
    return (
        <>
            <NavBar />
            {Trips}
        </>
    )
    
}
   