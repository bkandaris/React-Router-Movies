import React, { useState } from "react";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import { Route } from "react-router-dom";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList exact path="/" list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Route exact path="/" component={MovieList} />
      {/* dynamic routing */}
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
