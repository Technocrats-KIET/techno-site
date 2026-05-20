import React from "react";
const linkedin = "/common/linkedin.webp";
const insta = "/common/insta.webp";

const Card = ({ instagram, linkedin_link, name, image }) => {
  return (
    <div>
      <div class="bg-transparent w-72">
        <div class="">
          <img
            width="240"
            height="250"
            loading="lazy"
            decoding="async"
            src={image}
            alt={name}
            className="rounded-lg w-full"
          />
        </div>

        <div className="text-white py-5 text-2xl  justify-start ">{name}</div>
        <div className="flex justify-around ">
          <a href={instagram}>
            <div className="w-10">
              <img
                width="146"
                height="141"
                loading="lazy"
                decoding="async"
                src={insta}
                alt=""
              />
            </div>
          </a>

          <a href={linkedin_link}>
            <div className="w-10">
              <img
                width="184"
                height="175"
                loading="lazy"
                decoding="async"
                src={linkedin}
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
