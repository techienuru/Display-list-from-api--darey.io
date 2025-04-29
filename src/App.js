import { useEffect, useState } from "react";
import List from "./components/List";
import useFetch from "./useFetch";
import RenderChars from "./utils/RenderChars";

// Display list from an API
// Poject objectives:
// 1. Fetch data from a public API
// 2. Store the data in a React State
// 3. Use useEffect hook to fetch the data
// 4. Create a reusable list component and render each dynamically
// 5. Render the list component in a parent component
// 6. Display a loading indicator while the data is being fetched
// 7. Show an error message if the API request fail
// 8. Use semantic HTML (<ul>, <li>, <div>) for accessibility
// 9. Handle edge cases (empty lists, API error)

function App() {
  const {
    data: chars,
    isLoading,
    error
  } = useFetch("https://rickandmortyapi.com/api/character");

  return (
    <div className="app-container">
      <main className="main-content">
        <div className="char-list-container">
          {isLoading && (
            <div className="preloader-container">
              <div className="preloader"></div>
            </div>
          )}
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
          {chars && chars.length === 0 && (
            <div className="empty-list-message">
              <p>No characters found.</p>
            </div>
          )}
          {chars && <List data={chars} RenderChars={RenderChars} />}
        </div>
      </main>
    </div>
  );
}

export default App;
