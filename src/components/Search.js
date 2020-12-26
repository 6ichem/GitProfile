import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
  const [username, setUsername] = useState("");
  const handleChange = (e) => setUsername(e.target.value);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/user/${username}`,
      state: { username: username },
    });
  };
  return (
    <div className='block flex justify-center'>
      <form onSubmit={handleSubmit}>
        <input
          className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
          type='text'
          name='username'
          placeholder='Search'
          value={username}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
