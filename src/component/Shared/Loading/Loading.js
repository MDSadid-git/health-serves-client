import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <progress className="progress w-56 progress-error"></progress>
    </div>
  );
};

export default Loading;
