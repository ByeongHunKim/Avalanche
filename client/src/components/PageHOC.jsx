import React from "react";
import { useNavigate } from "react-router-dom";

import { logo, heroImg } from "../assets";
import s from "../styles";

const PageHOC = (Component, title, description) => () => {
  const navigate = useNavigate();
  return (
    <div className={s.hocContainer}>
      <div className={s.hocContentBox}>
        <img
          src={logo}
          alt="logo"
          className={s.hocLogo}
          onClick={() => navigate("/")}
        />
        <div className={s.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${s.headText} head-text`}>{title}</h1>
          </div>
          <p className={`${s.normalText} my-10`}>{description}</p>
        </div>
        <Component />
        <p className={s.footerText}>Made with hunsman</p>
      </div>
      <div className="flex flex-1">
        <img
          src={heroImg}
          alt="hero-img"
          className="w-full xl:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PageHOC;
