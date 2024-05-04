import React from "react";
import "./Socials.css";
import SocialMediaButtons from "react-social-media-buttons";


export const Socials = () => {
  return (
    <div className="socials_container">
      <ul>
        <li className="hover:bg-Gray active:bg-lighterGray">
          <SocialMediaButtons
            links={["https://github.com/RaphaLK"]}
            buttonStyle={{
              width: "80px",
              height: "80px",
              margin: "0px 0px",
              backgroundColor: "transparent",
            }}
            iconStyle={{ color: "Gray" }}
            openNewTab={true}
          />
        </li>
      </ul>
    </div>
  );
};

export default Socials