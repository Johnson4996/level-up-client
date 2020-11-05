import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./event/EventList"
import { EventProvider } from "./event/EventProvider"
import { GameForm } from "./game/GameForm"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views
        </main>

        <GameProvider>
            <Route exact path="/" render={props => <GameList {...props} />} />
            <Route exact path="/games/new" render={props => <GameForm {...props} />} />
        </GameProvider>

        <EventProvider>
            <Route exact path="/events">
                <EventList />
            </Route>
        </EventProvider>

    </>
}
