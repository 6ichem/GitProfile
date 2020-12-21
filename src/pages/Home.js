import React from "react";
import Search from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
