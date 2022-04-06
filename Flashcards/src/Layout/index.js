import React from "react";
import {Routes, Route} from "react-router-dom"

import Header from "./Header";
import NotFound from "./NotFound";
import HomePage from "../Home/HomePage";
import DeckView from "../Decks/DeckView";
import CreateDeck from "../Home/CreateDeck";
import StudyView from "../Study/StudyView";
import AddCards from "../Cards/AddCards";
import EditDeck from "../Decks/EditDeck";
import EditCard from "../Cards/EditCard";


function Layout() {

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Routes>

          <Route path="/" element={<HomePage />} />
          
          <Route path="/decks/new" element={<CreateDeck />} />
          
          <Route path="/decks/:deckId" element={<DeckView />} />
          
          <Route path="/decks/:deckId/study" element={<StudyView />} />
          
          <Route path="/decks/:deckId/edit" element={<EditDeck />} />
          
          <Route path="/decks/:deckId/cards/new" element={<AddCards />} />
          
          <Route exact path="/decks/:deckId/cards/:cardId/edit" element={<EditCard />} />
          
          <Route element={<NotFound />} />
        
        </Routes>
      </div>
    </>
  );
}

export default Layout;
