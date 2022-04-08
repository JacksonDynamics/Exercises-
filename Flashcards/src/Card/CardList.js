import React from "react"
import {Link} from 'react-router-dom'


function CardList ({cards, handleDelete}) {

        return (
            <>
                {cards.map((deck, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Link to={`/decks/${deck.id}`} className="btn btn-secondary m-2">
                                        <span class="oi oi-eye"></span> View
                                    </Link>
                                    <Link to={`/decks/${deck.id}/study`} className="btn btn-primary m-2">
                                        <span class="oi oi-book"></span> study
                                    </Link>
                                </div>
                                <div> 
                                    <button onClick={() => handleDelete(deck.id)} className="btn btn-danger">
                                    <span class="oi oi-trash"></span></button>   
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>    
        )
}

export default CardList