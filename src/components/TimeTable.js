import React from "react";

const TimeTable = () => {
  return (
    <div className="mt-8 bg-gray-500/90 w-auto flex flex-col items-center justify-center h-auto rounded-2xl border-x-2 border-black border-solid">
      <div className="flex justify-center mt-3 p-3 bg-white w-4/5 rounded-2xl text-7xl">
        TIME TABLE
      </div>
      <div className="flex">
        <div className="overflow-y-scroll h-screen">
          <div className="border-black border-b-2 flex flex-col items-center my-3 px-3 ">
            <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div>
            <div className="mt-5 font-mono text-2xl">OP</div>
            <img
              className="border-black border-solid border-4 rounded-2xl m-2"
              src="../images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="border-black border-b-2 flex flex-col items-center my-3 px-3 ">
            <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div>
            <div className="mt-5 font-mono text-2xl">合奏</div>
            <img
              className="border-black border-solid border-4 rounded-2xl m-2"
              src="../images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="border-black border-b-2 flex flex-col items-center my-3 px-3 ">
            <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div>
            <div className="mt-5 font-mono text-2xl">寿司打</div>
            <img
              className="border-black border-4 rounded-2xl m-2"
              src="../images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="border-black border-b-2 flex flex-col items-center my-3 px-3 ">
            <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div>
            <div className="mt-5 font-mono text-2xl">週1VR</div>
            <img
              className="border-black border-4 rounded-2xl m-2"
              src="../images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="border-black border-b-2 flex flex-col items-center my-3 px-3 ">
            <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div>
            <div className="mt-5 font-mono text-2xl">けん玉検定</div>
            <img
              className="border-black border-4 rounded-2xl m-2"
              src="../images/sample.jpeg"
              alt=""
            />
          </div>
          <div className="border-black border-b-2 flex flex-col items-center my-3 px-3 ">
            <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div>
            <div className="mt-5 font-mono text-2xl">ED</div>
            <img
              className="border-black border-4 rounded-2xl m-2"
              src="../images/sample.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="flex  border-l-2 border-black">
          <div className="flex flex-col justify-evenly">
            <div className="border-black border-b-2 flex flex-col items-center px-3 ">
              {/* <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div> */}
              <div className="font-mono text-2xl">サブコンテンツ</div>
              <img
                className="border-black border-4 rounded-2xl m-2"
                src="../images/sample.jpeg"
                alt=""
              />
            </div>
            <div className="border-black border-b-2 flex flex-col items-center px-3 ">
              {/* <div className="mt-5 font-Raleway text-6xl">11:00-12:00</div> */}
              <div className="font-mono text-2xl">サブコンテンツ</div>
              <img
                className="border-black border-4 rounded-2xl m-2"
                src="../images/sample.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
