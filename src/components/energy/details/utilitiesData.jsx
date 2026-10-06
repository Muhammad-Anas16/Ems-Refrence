import React from "react";

const UtilitiesData = ({ data }) => {
  // console.log(data?.dataType);

  return (
    <div className="flex flex-col gap-2">
      {data?.dataType?.map((type, ind) => (
        <div
          key={ind}
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center transition hover:bg-white/10"
        >
          <h1 className="text-sm font-medium capitalize text-white">
            {type || "Not Defined"}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UtilitiesData;
