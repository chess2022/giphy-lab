import './App.css';
import { useState, useEffect } from "react";
import GifDisplay from "./components/GifDisplay";
import Form from "./components/Form";

export default function App() {
  const API_KEY = "vHU2Wz2BdH864RgEdVQ1H6yeP87bb7uE";
  // state to hold data
  const [gif, setGif] = useState(null);
  // function to getGifs
  const getGif = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=1&lang=en`
    );
    // parse JSON response into a javascript object
    const data = await response.json();
    // set the Movie state to the movie
    setGif(data);
  };

  console.log(gif);

  //  useEffect(() => {
  //    getGif();
  //  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // we pass the getGif function as a prop
  return (
    <div className="App">
      <Form getGif={getGif} />
      <hr />
      <GifDisplay gif={gif} />
    </div>
  );
}

