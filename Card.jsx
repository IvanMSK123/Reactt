import React, { useState } from "react";
import { css } from "emotion";

const Card = () => {
  const [background, setBackground] = useState("green");

  const [font, setFont] = useState("white");

  
  const [size, setSize] = useState(25);

  const setStyle = (background, font,size) => {
    setBackground(background);
    setFont(font);
    setSize(size);
  };

 




  const yellowButton = css`
    color: ${font};
    background-color: ${background};
    border:none;
    font-size:18px;
    padding:10px ${size}px;
    border-radius: 50px;
    margin: 20px;
  `;

  return (
    
        <button 
          onMouseEnter={() => setStyle("#00bb00", "black",30)}
          onMouseOut={() => setStyle("green", "white",25)}
          className={yellowButton}
        >
          Upload
        </button>
    
    
  );
};

export default Card;







/*import React, { useState } from "react";
import { css } from "emotion";

const Card = () => {
  const [background, setBackground] = useState("green");

  const [font, setFont] = useState("#424246");

  const setStyle = (background, font) => {
    setBackground(background);
    setFont(font);
  };

  const card = css`
    max-width: 600px;
    padding: 40px 40px 20px 40px;
    background-color: white;
    h1 {
      font-family: "Abril Fatface", cursive;
      font-weight: 400;
      font-size: 36px;
      margin-bottom: 10px;
      color: black;
    }
    p {
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 20px;
      color: black;
    }
  `;

  const cardButtons = css`
    display: flex;
    flex-wrap: wrap;

    div {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 12px;
      padding: 10px 30px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  `;

  const blackButton = css`
    color: ${font};
    background-color: ${background};
  `;

  const blueButton = css`
    color: ${font};
    background-color: ${background};
  `;

  const yellowButton = css`
    color: ${font};
    background-color: ${background};
  `;

  return (
    <div className={card}>
      <h1>Your Life is Your Message</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
        elementum egestas blandit. Proin augue lacus, phasellus vel lorem risus.
      </p>
      <div className={cardButtons}>
        <div
          onMouseEnter={() => setStyle("black", "#fdfdfd")}
          onMouseOut={() => setStyle("red", "#424246")}
          className={blackButton}
        >
          Black
        </div>
        <div
          onMouseEnter={() => setStyle("#1d499b", "#fdfdfd")}
          onMouseOut={() => setStyle("#fdfdfd", "#424246")}
          className={blueButton}
        >
          Blue
        </div>
        <div
          onMouseEnter={() => setStyle("green", "#424246")}
          onMouseOut={() => setStyle("#fdfdfd", "#424246")}
          className={yellowButton}
        >
          Yellow
        </div>
      </div>
    </div>
  );
};

export default Card;*/
