import React from 'react'

const TimeTable = () => {
  return (
    <div className="mt-8 bg-gray-500 w-2/5 flex flex-col items-center justify-center h-auto rounded-2xl ">
      <div className="flex justify-center mt-3 p-3 bg-white w-4/5 rounded-2xl text-7xl">
        番組表
      </div>
      <div className=" flex flex-col items-center my-3 px-3 border-black border-solid border-2"> {/* リスト */}
        <img className="rounded-2xl m-2" src="../images/sample.jpeg" alt="" />
        <div className="mt-5 font-mono text-2xl">
          あああ
        </div>
      </div>
      <div className=" flex flex-col items-center my-3 px-3 border-black border-solid border-2"> {/* リスト */}
        <img className="rounded-2xl m-2" src="../images/sample.jpeg" alt="" />
        <div className="mt-5 font-mono text-2xl">
          あああ
        </div>
      </div>
      <div className=" flex flex-col items-center my-3 px-3 border-black border-solid border-2"> {/* リスト */}
        <img className="rounded-2xl m-2" src="../images/sample.jpeg" alt="" />
        <div className="mt-5 font-mono text-2xl">
          あああ
        </div>
      </div>
    </div>
  )
}

export default TimeTable