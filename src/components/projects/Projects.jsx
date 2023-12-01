import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { projectsData } from "./data.js";
export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="max-w-screen-2xl text-center  mx-auto " >
      <h3 className="dark:text-teal-400 text-6xl  mb-10 font-semibold text-slate-600">
        {t("Projects")}
      </h3>
      {/**Projects maping */}
      <div className="grid lg:grid-cols-2  xl:grid-cols-3 gap-y-12 place-items-center ">
        {projectsData.map((item) => (
          <div
            key={item.id}
            className=" max-w-sm w-full h-full border-2 border-zinc-400 dark:border-zinc-600"
          >
            <div className="relative overflow-hidden group max-h-[192px]">
              <a href={item.url} target="_blank" rel="noreferrer">
                <span className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 bg-zinc-100 dark:bg-slate-950 p-2  z-40 opacity-0 group-hover:opacity-100 border-zinc-100 text-teal-600 hover:text-zinc-100 hover:bg-teal-500 shadow-[0px_0px_0px_1px_#14b8a6] dark:shadow-[0px_0px_0px_1px_#14b8a6] border-[2px] dark:hover:bg-teal-500 dark:hover:text-zinc-900 dark:border-zinc-900 dark:text-teal-500 font-semibold">
                  {t("Go to web")}
                  <FontAwesomeIcon className="ml-2" icon="fa-solid fa-link" />
                </span>
                <img
                    
                  src={item.img}
                  alt=""
                  className=" transform transition duration-300 ease-in-out group-hover:brightness-75 group-hover:scale-125"
                />
              </a>
            </div>
            <div className="py-4 px-4 flex flex-col  justify-between min-h-[192px]">
              <h6 className=" dark:text-teal-400 text-teal-600 font-semibold text-xl">
                <a target="_blank" rel="noreferrer" href={item.url}>{item.title}</a>
              </h6>
              <p className="text-justify text-sm mb-2 dark:text-zinc-200 text-slate-600">
                {t(item.title)}
              </p>
              <div className="flex justify-between">
                <div className=" flex items-center gap-3">
                  <span className="text-left text-zinc-400 text-xs">
                    {t("Tech")}:
                  </span>
                  <div className="text-xl text-zinc-400 flex gap-2">
                    <FontAwesomeIcon title="HTML 5" icon="fa-brands fa-html5" />
                    <FontAwesomeIcon
                      title="CSS3"
                      icon="fa-brands fa-css3-alt"
                    />
                    <FontAwesomeIcon
                      title="Javascript"
                      icon="fa-brands fa-js"
                    />
                    <FontAwesomeIcon title="React" icon="fa-brands fa-react" />
                  </div>
                </div>
                  <a title="Github" aria-labelledby="Github repo website" href={item.repo} className="text-2xl text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-200">
                  <FontAwesomeIcon icon="fa-brands fa-github"/>
                  </a>
              </div>
            </div>
          </div>
        ))}
        {/**More projects */}
        <div className=" p-2  max-w-sm w-full h-full border-2 border-zinc-400 dark:border-zinc-600">
          <a className=" hover:opacity-75 gap-10 text-xl flex flex-col justify-center items-center h-full" href="https://www.frontendmentor.io/profile/jordanheve">
          <h6 className="dark:text-zinc-200">
          {t("More Projects")}
          <br/>
          <span className="dark:text-teal-400 text-teal-600 font-semibold">
          Frontend Mentor
          </span>
          </h6>
          <div >
            <img className="h-20" src='portfolio/frontend-mentor-logo.svg'  alt="frontend mentor logo"/>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}
