import React from "react";

const Slogan = () => {
  return (
    <>
      <div className="bg-yellow-200 text-6xl p-7 rounded-3xl font-bold fixed top-4 right-5">
        このCPに注いだ思いとは
      </div>
      <div className="flex flex-row items-center justify-evenly h-screen">
        <div className="w-2/5 h-2/3">
          <img
            className="origin-center -rotate-12 w-screen h-3/5"
            src="../images/sample.jpeg"
            alt=""
          />
        </div>
        <div className="font-Raleway text-6xl text-white">
          ここに説明adasdawda
          <br />
          asasdasd
          <br />
          asdasd
        </div>
      </div>
    </>
  );
};

export default Slogan;
