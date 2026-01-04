import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const answer = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setUserData(answer.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printData = (
    <h3 className="text-gray-300 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-20 font-semibold">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printData = userData.map((elem, idx) => {
      return (
        <div key={idx} className="h-55 w-55 bg-amber-300 flex flex-col rounded-xl">
        <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="h-screen w-screen overflow-auto bg-black flex flex-wrap justify-center items-center gap-8">
      {printData}

      {/* <button
        onClick={() => {
          getData();
        }}
        className="px-4 py-2 bg-green-600 text-white m-auto rounded font-bold text-lg"
      >
        Get Data
      </button> */}
      <button
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1);
            setUserData([]);
          }
        }}
        className="px-3 py-2 bg-amber-400 rounded-lg text-white text-sm font-bold hover:bg-amber-500 active:scale-95 cursor-pointer"
      >
        Prev
      </button>

        <h1 className="text-white text-lg font-medium">Page {index}</h1>

      <button
        onClick={() => {
          setIndex(index + 1);
          setUserData([]);
        }}
        className="px-3 py-2 bg-amber-400 rounded-lg text-white text-sm font-bold hover:bg-amber-500 active:scale-95 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default App;
