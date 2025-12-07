export const Logo = () => {
  return (
    <div className="flex items-center -translate-y-2">
      <span className="font-hina-mincho text-4xl font-normal text-foreground tracking-wide">
        The h
      </span>
      <div className="-mx-1 mt-7">
        <svg
          className="w-6 h-6"
          viewBox="0 0 221 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M197.97 279.5H23.0303L110.5 110.858L197.97 279.5Z"
            fill="white"
            stroke="#0A1428"
            strokeWidth="10"
          />
          <circle
            cx="111"
            cy="100"
            r="95"
            fill="white"
            stroke="#0A1428"
            strokeWidth="10"
          />
          <path
            d="M82.5 174.5L59.5 220.5L92.5 206.5L143.5 216.5L166.5 230.5L138 174.5H82.5Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="font-hina-mincho text-4xl font-normal text-primary tracking-wide">
        usekeeper
      </span>
    </div>
  );
};
