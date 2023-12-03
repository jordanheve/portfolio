import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
export default function Skills() {
  const { t } = useTranslation();
  const skillClass = "flex flex-col justify-between items-center h-24 w-24 "
  const spanClass = "dark:text-zinc-200 font-semibold"
  return (

    <section id="skills" className="max-w-screen-2xl flex flex-col mx-auto items-center py-10">
      <h3 className="dark:text-teal-500 text-4xl md:text-6xl  mb-10 font-semibold text-slate-600">
        {t("Skills")}
      </h3>
      <div className="flex flex-col gap-20">

        <div className="grid lg:grid-cols-4  grid-cols-2 gap-20 justify-center items-center">
            <div className={skillClass}>
                <FontAwesomeIcon className="text-6xl text-orange-600" icon="fa-brands fa-html5"/>
                <span className={spanClass}>HTML</span>
            </div>
            <div className={skillClass}>
                <FontAwesomeIcon className="text-6xl text-blue-600" icon="fa-brands fa-css3-alt"/>
                <span className={spanClass}>CSS</span>
            </div>
            <div className={skillClass}>
                <FontAwesomeIcon className="text-5xl text-yellow-500" icon="fa-brands fa-js"/>
                <span className={spanClass}>Javascript</span>
            </div>
            <div className={skillClass}>
                <FontAwesomeIcon className="text-6xl text-blue-500" icon="fa-brands fa-react"/>
                <span className={spanClass}>React</span>
            </div>
            <div className={skillClass}>
                <img alt="tailwind logo" src="tailwind-logo.svg" className="h-10" />
                <span className={spanClass}>Tailwind</span>
            </div>
            <div className={skillClass}>
                <FontAwesomeIcon className="text-6xl text-orange-500" icon="fa-brands fa-git-alt"/>
                <span className={spanClass}>Git</span>
            </div>
            <div className={skillClass}>
                <FontAwesomeIcon className="text-5xl text-sky-500" icon="fa-brands fa-php"/>
                <span className={spanClass}>PHP</span>
            </div>
            <div className={skillClass}>
                <FontAwesomeIcon className="text-5xl text-teal-500" icon="fa-brands fa-figma"/>
                <span className={spanClass}>Figma</span>
            </div>
        </div>
        
      </div>
    </section>
  );
}
