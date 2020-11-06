import { createEvent } from "@testing-library/react"
import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "../game/GameProvider"
import { EventContext } from "./EventProvider"


export const EventForm = props => {
   const {createEvent} = useContext(EventContext)
    const {games, getGames} = useContext(GameContext)

    const [currentEvent, setEvent] = useState({
        date : "",
        time : "",
        description : "",
        game : 0
    })

    useEffect(() => {
       getGames()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEventState = Object.assign({}, currentEvent)
        newEventState[event.target.name] = event.target.value
        setEvent(newEventState)
    }


    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="game">Game: </label>
                    <select name="game" className="form-control" required
                        value={currentEvent.game}
                        onChange={handleControlledInputChange}>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                            <option key={game.id} value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" className="form-control" required
                        value={currentEvent.description}
                        onChange={handleControlledInputChange}/>  
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" className="form-control" required
                        value={currentEvent.date}
                        onChange={handleControlledInputChange}/>  
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" className="form-control" required
                        value={currentEvent.time}
                        onChange={handleControlledInputChange}/>  
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    const event = {
                        date: currentEvent.date,
                        time: currentEvent.time,
                        description: currentEvent.description,
                        game: parseInt(currentEvent.game)
                    }

                    createEvent(event)
                    props.history.push("/events")
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}