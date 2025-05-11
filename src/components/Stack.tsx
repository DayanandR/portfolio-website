import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiMui,
  SiFormik,
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const stackItem = [
  { id: 1, name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { id: 2, name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { id: 3, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 4, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },

  { id: 5, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 6, name: "React Native", icon: FaReact, color: "#61DBFB" },
  { id: 7, name: "Next.js", icon: TbBrandNextjs, color: "#000000" },

  { id: 8, name: "Redux", icon: SiRedux, color: "#764ABC" },
  { id: 9, name: "Formik", icon: SiFormik, color: "#FF7F50" },

  { id: 10, name: "Material UI", icon: SiMui, color: "#007FFF" },
];

const Stack = () => {
  return (
    <section className="py-24 glass" id="stack">
      <div className="max-w-[1200px] flex justify-center items-center mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold my-4">My Stack</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {stackItem.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center flex-col rounded-xl p-4"
          >
            <div className="mb-4 bg-white/10 p-6 rounded-xl">
              {React.createElement(item.icon, {
                className: "w-32 h-32",
                style: { color: item.color },
              })}
            </div>
            <p className="text-gray-400 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
