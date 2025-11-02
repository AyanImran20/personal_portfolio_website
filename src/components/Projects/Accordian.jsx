import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-matte transition-all lg:hover:-translate-y-2 rounded bg-card text-matte">
      {/* button row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center p-2"
      >
        <div className="text-xl font-bold text-left">{data.title}</div>
        <svg
          className="fill-matte shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* horizontal bar */}
          <rect y="7" width="16" height="2" rx="1" />
          {/* vertical bar */}
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
        </svg>
      </button>

      {/* answer panel */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
          ${open ? "opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="p-2 lg:p-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ul className="flex flex-col gap-2 list-disc list-outside pl-6 order-3 lg:order-1">
            {data.details.map((detail, idx) => {
              return (<li key={`detail_${idx}`} className="">
                {detail}
              </li>)
            })}
          </ul>
          <div className="flex justify-center items-center order-1 lg:order-2">
            <img src={data.imageSrc} alt="" className="max-h-[150px] lg:max-h-[300px]" />
          </div>
          <div className="lg:flex hidden flex-wrap gap-2 order-4 lg:order-3">
            {data.skills.map((skill, idx) => {
              return (
                <div className="flex p-2 rounded-xl bg-surface" key={idx}>
                  {skill}
                </div>
              );
            })}
          </div>
          <div className="flex justify-around items-center order-2 lg:order-4">
            <a className={`border-matte transitional-all border hover:border-highlight hover:-translate-y-1 bg-surface rounded-xl p-2 hover:text-highlight hover:shadow-xl shadow hover:shadow-highlight ${data.source === "" ? "hidden" : "block"}`}
            href={data.source} target="blank">Source</a>
            <a className={`border-matte transitional-all border hover:border-highlight hover:-translate-y-1 bg-surface rounded-xl p-2 hover:text-highlight hover:shadow-xl shadow hover:shadow-highlight ${data.demo === "" ? "hidden" : "block"}`}
            href={data.demo} target="blank">Demo</a>
            <a className={`border-matte transitional-all border hover:border-highlight hover:-translate-y-1 bg-surface rounded-xl p-2 hover:text-highlight hover:shadow-xl shadow hover:shadow-highlight ${data.paper === "" ? "hidden" : "block"}`}
            href={data.paper} target="blank">Paper</a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Accordion;
