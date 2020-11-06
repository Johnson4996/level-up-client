import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import "./event.css"

export const EventList = (props) => {
    const { events, getEvents,joinEvent } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
        <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    props.history.push({ pathname: "/events/new" })
                }}
            >Register New Game</button>
        <article className="events">
            <header className="events__header">
                <h1>Level Up Game Events</h1>
            </header>
            {
                
                    events.map(event => {
                        return <section key={event.id} className="registration">
                            <div className="registration__game">{event.game.title}</div>
                            <div>{event.description}</div>
                            <div>
                                {event.date} @ {event.time}
                            </div>
                            <button className="btn btn-2"
                                    onClick={() => joinEvent(event.id)}
                            >Join</button>
                        </section>
                    })
                
            }
        </article >
        </>
    )
}