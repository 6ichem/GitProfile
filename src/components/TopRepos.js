import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import Colors from "./Colors";

const TopRepos = (props) => {
  const repos = props.repos;
  const loading = props.loading;

  console.log(loading);

  const [topRepos, setTopRepos] = useState([]);
  const [sortType, setSortType] = useState("stars");
  const [data, setData] = useState(8);

  const getTopRepos = (type) => {
    const map = {
      stars: "stargazers_count",
      forks: "forks_count",
      size: "size",
    };
    const sortProperty = map[type];
    const sorted = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, data);

    setTopRepos(sorted);
  };

  const sortTypes = ["stars", "forks", "size"];

  useEffect(() => {
    if (repos.length) {
      getTopRepos(sortType);
    }
  });

  useEffect(() => getTopRepos(sortType), [sortType]);

  const loadMoreData = () => {
    setData((prevState) => prevState + 8);
  };

  const changeRepoSort = (sortType) => {
    setSortType(sortType);
  };

  return (
    <div className='container m-auto pb-24'>
      <div className='dropdown-wrapper mb-3'>
        <h1 className='text-black text-2xl leading-relaxed block mr-2'>
          {props.username}'s top repositories:
        </h1>
        <div class='dropdown inline-block relative'>
          <button class='text-indigo-500 p-2 rounded inline-flex items-center'>
            <span class='mr-1'>{sortType}</span>
            <svg
              class='fill-current h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'>
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{" "}
            </svg>
          </button>
          <ul class='dropdown-menu absolute text-indigo-500	pt-1'>
            {loading ? (
              <Loader
                type='Puff'
                color='#00BFFF'
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            ) : (
              sortTypes.map((type) => (
                <li>
                  <button
                    className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'
                    onClick={() => changeRepoSort(type)}>
                    {type}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className='repo-list'>
        <ul style={{ position: "relative" }}>
          {topRepos &&
            topRepos.map((repo) => (
              <li>
                <a href={repo.html_url}>
                  <div>
                    <div className='name'>
                      <h3>{repo.name}</h3>
                    </div>
                    <p>{repo.description}</p>
                  </div>
                  <div className='stats'>
                    <div className='left'>
                      <span>
                        <div
                          className='language'
                          style={{ backgroundColor: Colors[repo.language] }}
                        />
                        {repo.language}
                      </span>
                      <span>
                        <svg
                          aria-hidden='true'
                          height='16'
                          role='img'
                          viewBox='0 0 14 16'
                          width='14'
                          style={{
                            display: "inline-block",
                            fill: "currentcolor",
                            userSelect: "none",
                            verticalAlign: "text-bottom",
                          }}>
                          <path
                            fill-rule='evenodd'
                            d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'></path>
                        </svg>
                        {repo.stargazers_count.toLocaleString()}
                      </span>
                      <span>
                        <svg
                          aria-hidden='true'
                          height='16'
                          role='img'
                          viewBox='0 0 10 16'
                          width='10'
                          style={{
                            display: "inline-block",
                            fill: "currentcolor",
                            userSelect: "none",
                            verticalAlign: "text-bottom",
                          }}>
                          <path
                            fill-rule='evenodd'
                            d='M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'></path>
                        </svg>
                        {repo.forks.toLocaleString()}
                      </span>
                    </div>
                    <div className='right'>
                      <span>{repo.size.toLocaleString()} KB</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
        {repos.length > 8 && (
          <button
            className='flex justify-center text-indigo-500 m-auto mt-10'
            onClick={() => loadMoreData()}>
            Load more repositories <span className='emoji'>⬇️</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TopRepos;
