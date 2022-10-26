import React from "react";

const ProjectLineIndicator = ({ items, curItemIdx }) => {
  // const progress = (() => {
  //     numOfItems
  // })

  return (
    <>
      <div className="flex">
        {items.map((i) => {
          return (
            <div
              key={i.id}
              className="w-[10px] h-[10px] bg-red-400 relative rounded-full overflow-hidden mr-[4px]"
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectLineIndicator;
