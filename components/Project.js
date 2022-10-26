export const ProjectContainer = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const WorkBackground = () => (
  <div className="grid grid-cols-1 md:grid-cols-2  top-0 sticky">
    <div className="h-[40vh] md:h-auto"></div>
    <div className="h-[60vh] md:min-h-screen"></div>
  </div>
);

export const ProjectLeft = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl h-[40vh] md:h-auto px-8 md:pl-24"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="flex flex-col items-start justify-center leading-10 md:w-full md:gap-5">
        {children}
      </div>
    </div>
  );
};

export const ProjectRight = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 md:items-center justify-center h-screen px-8"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="w-full max-w-md pt-10 md:pt-0 ">{children}</div>
    </div>
  );
};
