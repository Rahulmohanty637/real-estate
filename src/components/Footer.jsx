import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div>
          <img src={assets.logo_dark} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            asperiores ratione magnam veritatis veniam, in optio quis tempora
            laborum sunt magni. Corporis sequi, amet magni fuga inventore
            nostrum incidunt voluptas.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
