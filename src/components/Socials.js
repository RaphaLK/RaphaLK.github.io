import React from "react";
import "./Socials.css";
import SocialMediaButtons from "react-social-media-buttons";


export const Socials = () => {
  return (
    <div className="socials_container">
      <ul>
        <li className="hover:bg-Gray active:bg-lighterGray rounded-full transition ease-in-out mr-2">
          <SocialMediaButtons
            links={["https://github.com/RaphaLK"]}
            buttonStyle={{
              width: "85px",
              height: "80px",
              margin: "0px 0px",
              backgroundColor: "transparent",
            }}
            iconStyle={{ color: "Gray" }}
            openNewTab={true}
          />
        </li>
        <li className="hover:bg-Gray active:bg-lighterGray rounded-full transition ease-in-out ml-2">
            <SocialMediaButtons
              links={["https://www.linkedin.com/in/raphaelkusuma/"]}
              buttonStyle={{
                width: "85px",
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