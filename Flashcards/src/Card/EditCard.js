import React, {useState, useEffect} from 'react'
import {updateDeck, readCard} from "../utils/api"
import {useNavigate, useParams, Link} from "react-router-dom"

function EditCard () {

    const history = useNavigate()

    const {cardId} = useParams()

    const [card, setCard] = useState({})
    
    
    useEffect(() => {
        readCard(cardId)
        .then(setCard)
    }, [cardId])

const initialFormState = {
    name: "",
    description: ""
}

const [formData, setFormData] = useState({initialFormState})


const handleChange = ({target}) => {
    setFormData({
        ...formData,
        [target.name]: target.value
    })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    await updateDeck(formData)
    history.navigate(-1)
}

    return  (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home"/> Home</Link></li>
            <li className="breadcrumb-item"><Link to={`/decks/${cardId}`}> {card.name}</Link></li>
            <li className="breadcrumb-item active" aria-current="page"> Edit Card</li>
            </ol>
        </nav>

        <h1>Edit Card</h1>
        
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input 
                    className="form-control"
                    type="text"
                    name="name"
                    id="name" 
                    onChange={handleChange}
                    value={formData.front}
                    placeholder="Card Name"
                    required={true}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="comment">Description</label>
                <textarea 
                    className="form-control"
                    id="front" 
                    name="front" 
                    rows="2"
                    onChange={handleChange}
                    value={formData.back}
                    placeholder="Card Back"
                    required={true}
                    >
                </textarea>
            </div>

            <button 
                    type="button" 
                    onClick={() => history(-1)} 
                    className="btn btn-secondary mb-2 mr-2">Cancel
            </button>

            <button type="submit" className="btn btn-primary mb-2">Submit</button>

        </form>
    </>
)
}

export default EditCard