import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Ditemukan :{" "}
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchDown}
        />
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Di temukan {props.totalPosts} data adengan pencarian kata {search}
      </small>
    </>
  );
};

export default Search;
