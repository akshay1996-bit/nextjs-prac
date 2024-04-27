/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";

const Calc = () => {
  const [inputVal, setInputVal] = useState("");
  const handleNumClick = (e: any) => {
    const { name } = e.target;
    setInputVal((prev) => (prev += name));
  };
  const handleClear = () => {
    setInputVal("");
  };
  const handleResult = () => {
    let x = new Function("return " + inputVal)();
    setInputVal(x.toString());
  };
  const btnStyle = {
    width: "80px",
    height: "30px",
    fontSize: "15px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
  };
  const btns = [
    { name: "(", theme: "dark" },
    { name: ")", theme: "dark" },
    { name: "%", theme: "dark" },
    { name: "AC", theme: "dark" },
    { name: "7", theme: "light" },
    { name: "8", theme: "light" },
    { name: "9", theme: "light" },
    { name: "/", theme: "dark" },
    { name: "4", theme: "light" },
    { name: "5", theme: "light" },
    { name: "6", theme: "light" },
    { name: "*", theme: "dark" },
    { name: "1", theme: "light" },
    { name: "2", theme: "light" },
    { name: "3", theme: "light" },
    { name: "-", theme: "dark" },
    { name: "0", theme: "light" },
    { name: ".", theme: "light" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
      }}
    >
      <h3>Harshal challenged me to build calculator. And he lost!!</h3>
      <p>
        @Harshal accept that I'm better developer than you and AI/chatgpt cannot replace
        developers
      </p>
      <input
        value={inputVal}
        style={{
          height: "50px",
          fontSize: "2rem",
          width: "55%",
        }}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
        }}
      >
        {btns.map((btn) => (
          <button
            key={btn.name}
            style={
              btn.theme === "dark"
                ? { ...btnStyle, backgroundColor: "#DADCE0" }
                : btnStyle
            }
            name={btn.name}
            onClick={btn.name === "AC" ? handleClear : handleNumClick}
          >
            {btn.name}
          </button>
        ))}
        <button
          style={{ ...btnStyle, backgroundColor: "#4285F4", border: "none" }}
          onClick={handleResult}
        >
          =
        </button>
        <button
          style={{ ...btnStyle, backgroundColor: "#DADCE0" }}
          name="+"
          onClick={handleNumClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Calc;
