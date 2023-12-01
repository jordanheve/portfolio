import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
  const { t } = useTranslation();
  return (
    <section id="home" className="mx-auto max-w-screen-2xl h-screen flex justify-center items-center gap-10">
      <div className="lg:w-2/5">
        <h1 className="dark:text-zinc-100 flex flex-col text-slate-600">
          <span className="text-2xl font-light">{t("Hi")}</span>
          <span className="text-7xl font-semibold"> Jordan Herrera </span>
          <span className=" text-teal-500 text-5xl font-smi">
            {t("Developer")}
          </span>
        </h1>
        <p className="dark:text-slate-300 text-slate-600 max-w-md my-6">
          {t("Home description")}
        </p>

        {/**Github and linkedin icons */}
        <div className="max-md:w-full justify flex gap-4 text-3xl text-teal-600 dark:text-teal-500 mb-7">
        <a href="#" className="hover:text-teal-700 dark:hover:text-teal-400">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="#" className="hover:text-teal-700 dark:hover:text-teal-400">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>

        {/**contactme button */}
        <div>
        <a href="mailto:jordan.herreravera@gmail.com" target="_blank" rel="noreferrer" className="border-zinc-100 text-teal-500 hover:text-zinc-100 hover:bg-teal-500 shadow-[0px_0px_0px_1px_#14b8a6] dark:shadow-[0px_0px_0px_1px_#14b8a6] border-[2px] dark:hover:bg-teal-500 dark:hover:text-zinc-900 dark:border-zinc-900 dark:text-teal-500 p-2 font-semibold">
        {t('Contact me')}
        </a>
        </div>
        
        

      </div>
    <div className="relative md:w-3/5  max-lg:hidden">
  <div className="z-20 filter: absolute inset-0 bg-gradient-to-r from-zinc-100  dark:from-zinc-900  to-transparent to-50%  ">
  </div>
  <div className="absolute z-10 h-full w-full   backdrop-grayscale-[70%] dark:backdrop-grayscale-[50%]"></div>
  <img src="portfolio/programing-img.jpg" className="darK:brightness-100 brightness-150 w-full h-full  object-cover" alt={t("Alt programming")} />
</div>
    </section>
  );
}
