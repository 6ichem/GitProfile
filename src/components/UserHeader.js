import React from "react";
import StatCards from "./StatCards";
import Loader from "react-loader-spinner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faBriefcase,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const UserHeader = ({ info, loading }) => {
  return (
    <div>
      <div className='header'>
        <div className='flex h-full w-full'>
          <div className='container m-auto flex justify-center text-center'>
            <div className='flex flex-wrap justify-center'>
              {loading ? (
                <Loader
                  type='Puff'
                  color='#00BFFF'
                  height={100}
                  width={100}
                  timeout={3000} //3 secs
                  style={{ display: "flex", justifyContent: "center" }}
                />
              ) : (
                <div className='flex flex-wrap justify-center'>
                  <div className='w-6/12 flex justify-center sm:w-4/12 px-4 mt-8'>
                    <img
                      src={info.avatar_url}
                      alt='Avatar'
                      className='shadow rounded-full w-64 h-auto align-middle border-4 object-cover'
                    />
                  </div>
                  <div className='mt-8 w-full'>
                    <h1 className='text-2xl text-center font-thin mb-2'>
                      {info.name}
                    </h1>
                    <a href={info.html_url} className='link text-lg'>
                      @{info.login}
                    </a>
                    <p className='mt-6'>{info.bio}</p>
                    <br />
                    <div className='info'>
                      {info.company && (
                        <span className='info-item'>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            style={{ marginRight: "5px", color: "gray" }}
                          />
                          {info.company}
                        </span>
                      )}
                      {info.location && (
                        <span className='info-item'>
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            style={{ marginRight: "5px", color: "gray" }}
                          />
                          {info.location}
                        </span>
                      )}
                      {info.blog && (
                        <span className='info-item'>
                          <FontAwesomeIcon
                            icon={faGlobe}
                            style={{ marginRight: "5px", color: "gray" }}
                          />
                          {info.blog}
                        </span>
                      )}
                      <span className='info-item'>
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          style={{ marginRight: "5px", color: "gray" }}
                        />
                        {new Date(info.created_at).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <StatCards info={info} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='custom-shape-divider-bottom-1608392670'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'>
            <path
              d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
              className='shape-fill'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
