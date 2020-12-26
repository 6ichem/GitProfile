import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";
import { signInWithGithub, auth } from "../firebase";

const Home = () => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      setUser(signInWithGithub.username);
    });
  }, [user]);

  const login = () => {
    signInWithGithub().then((username) => {
      history.push({
        pathname: `/user/${username}`,
        state: { user: username },
      });
    });
  };

  return (
    <div className='home'>
      <div className='flex h-screen w-screen'>
        <div className='container m-auto flex justify-center text-center'>
          <div className='pt-2 text-gray-600'>
            <img src='github.svg' width='500px' height='500px' alt='' />
            <h1 className='font-bold mt-3 text-3xl'>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ marginRight: "5px", color: "purple" }}
              />
              <span className='font-thin'>Git</span>
              Profile
            </h1>
            <br />
            <div className='block flex justify-center'>
              <Search />
            </div>
            <div className='block flex justify-center'>
              <button
                className='mt-3 w-60 uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded'
                onClick={login}>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "5px", color: "white" }}
                />
                Sign in with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
