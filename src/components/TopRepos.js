import React from "react";

const TopRepos = () => {
  return (
    <div>
      <div className='container mx-auto p-8 text-black'>
        <h1 className='text-black text-3xl leading-relaxed block mb-2'>
          Most popular repositories:
        </h1>
        <div className='flex flex-row flex-wrap -mx-2'>
          <div className='w-full sm:w-1/2 md:w-1/3 mb-4 px-2'>
            <div className='relative bg-white rounded border'>
              <div className='p-4'>
                <h3 className='text-lg font-bold'>
                  <svg
                    aria-hidden='true'
                    className='mr-2'
                    height='16'
                    role='img'
                    viewBox='0 0 12 16'
                    style={{
                      display: "inline-block",
                      fill: "currentcolor",
                      userSelect: "none",
                    }}
                    width='12'>
                    <path
                      fillRule='evenodd'
                      d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'></path>
                  </svg>
                  <a className='stretched-link' href='#'>
                    Repo title
                  </a>
                </h3>
                <time
                  className='block mb-2 text-sm text-gray-600'
                  dateTime='2019-01-01'>
                  1st January 2019
                </time>
                <p className='font-thin'>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRepos;
