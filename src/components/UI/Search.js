import React, { useState } from "react";

const Search = ({getQuery}) => {
  const [text, setText] = useState();
  const onchange = (query) => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search characters"
          value={text}
          onChange={(e) => {
            onchange(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default Search;
