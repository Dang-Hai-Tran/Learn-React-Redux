import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
const Header = (props) => {
  const user = useSelector((state) => state.user);
  const { setIsEdit } = props;
  const clickEdit = () => {
    setIsEdit((prev) => !prev);
  };
  return (
    <header
      style={{
        backgroundColor: `${user.themeColor}`,
        backgroundImage: `linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor} 65%, #181818 100% )`,
      }}>
      <div className="info-container">
        <div className="info-edit" onClick={clickEdit}>
          Edit
        </div>
        <img src={user.avaUrl} alt="" className="info-ava" />
        <div className="info-username">{user.name}</div>
        <div className="info-age">{user.age} years old</div>
        <div className="info-about">{user.about}</div>
      </div>
    </header>
  );
};

export default Header;
