import { useTranslation } from "react-i18next";

export default function About() {
  const {t} = useTranslation()
  return (
    <section id="about" className="p-4 mx-auto max-w-screen-2xl w-full flex flex-col items-center justify-center py-20 border-2 dark:border-teal-500 border-teal-700  ">
        <h2 className="dark:text-teal-500 text-6xl  mb-16 font-semibold text-slate-600">{t("About")}</h2>
   

    <div className="mb-10 md:mb-16 flex max-xl:flex-col gap-10 md:gap-24 items-center">
    <div className=" shadow overflow-hidden dark:grayscale-[20%] grayscale-[30%] bg-white rounded-full border-4 border-teal-500">
      <img src="portfolio/profile.png" className="h-48 md:h-60 brightness-95 dark:brightness-90" alt="Jordan Herrera"/>
    </div>
        <div className="max-w-lg text-slate-600 dark:text-slate-200">

        <p className="mb-4">
          {t('About info 1')}
        </p>
        <p  >
          {t('About info 2')}
        </p>
        </div>
    </div>
      {/**contactme button */}
      <div>
        <a href={t("pdf")} target="_blank" className=" text-xl border-zinc-100 text-teal-500 hover:text-zinc-100 hover:bg-teal-500 shadow-[0px_0px_0px_1px_#14b8a6] dark:shadow-[0px_0px_0px_1px_#14b8a6] border-[2px] dark:hover:bg-teal-500 dark:hover:text-zinc-900 dark:border-zinc-900 dark:text-teal-500 py-2 px-8 font-semibold">
        {t('Resume')}
        </a>
        </div>
    </section>
  )
}
