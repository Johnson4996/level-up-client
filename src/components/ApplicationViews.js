import React from "react"
import { Route } from "react-router-dom"
import { EventForm } from "./event/EventForm"
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
            <GameProvider>
                <Route exact path="/events" render={props => <EventList {...props} />} />
                <Route exact path="/events/new" render={props => <EventForm {...props} />} />
            </GameProvider>
        </EventProvider>

    </>
}
