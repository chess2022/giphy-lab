import { useState } from "react";

// always make sure to declare the props parameter so you can use props in your Component
const Form = (props) => {
  // state to hold the data of our form
  const [formState, setFormState] = useState({
    searchTerm: "",
  });

  // handleChange - updates formState when we type into form
  const handleChange = (event) => {
    // use the event object to update value
    setFormState({ searchTerm: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevent page from refreshing on form submission
    event.preventDefault();
    // pass the search term to the getMovie prop
    props.getGif(formState.searchTerm);
    // reset form state
    setFormState({
      searchTerm: "",
    });
  };

  return (
    <div>
      <h1>Giphy Gif Gif</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formState.searchTerm}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default Form;
