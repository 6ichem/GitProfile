import React from "react";

const StatCards = (props) => {
  return (
    <div className='flex items-center justify-center px-5 py-5 mt-3'>
      <div className='w-full max-w-3xl'>
        <div className='-mx-2 md:flex'>
          <div className='w-full md:w-1/3 px-2'>
            <div className='rounded-lg shadow-sm mb-4'>
              <div className='rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden card'>
                <div className='px-3 pt-8 pb-10 text-center relative z-10'>
                  <h4 className='text-sm uppercase leading-tight text-gray-300'>
                    Followers
                  </h4>
                  <h3 className='text-3xl font-semibold leading-tight my-3'>
                    {props.info.followers}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/3 px-2'>
            <div className='rounded-lg shadow-sm mb-4'>
              <div className='rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden card'>
                <div className='px-3 pt-8 pb-10 text-center relative z-10'>
                  <h4 className='text-sm uppercase leading-tight text-gray-300'>
                    Following
                  </h4>
                  <h3 className='text-3xl font-semibold leading-tight my-3'>
                    {props.info.following}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-1/3 px-2'>
            <div className='rounded-lg shadow-sm mb-4'>
              <div className='rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden card'>
                <div className='px-3 pt-8 pb-10 text-center relative z-10'>
                  <h4 className='text-sm uppercase leading-tight text-gray-300'>
                    Repositories
                  </h4>
                  <h3 className='text-3xl font-semibold leading-tight my-3'>
                    {props.info.public_repos}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
