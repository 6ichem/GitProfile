import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile } from "../store/actions/Actions";

import UserHeader from "../components/UserHeader";
import UserData from "../components/UserData";
import TopRepos from "../components/TopRepos";

const User = (props) => {
  useEffect(() => {
    props.getProfile(username);
  }, []);
  const { info } = props.info;
  const { username } = useParams();
  return (
    <div className='user'>
      <UserHeader info={info} />
      <div className='user-data'>
        <UserData username={username} />
        <TopRepos />
      </div>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      info: state.info,
    };
  },
  {
    getProfile,
  }
)(User);
