import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
export default function Contact() {
    const {t} = useTranslation();
  return (
    <section id="contact" className="flex items-center flex-col">
    <h3 className="text-center dark:text-teal-500 text-6xl  mb-10 font-semibold text-slate-600">
        {t("Lets Work")}
      </h3>
      <p className="mb-10 text-slate-600 dark:text-zinc-200 max-w-lg text-center">{t("Contact Paragraph")}</p>

        {/**Github and linkedin icons */}
        <div className="flex gap-4 text-3xl text-teal-600 dark:text-teal-500 mb-7">
        <a href="#" className="hover:text-teal-700 dark:hover:text-teal-400">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="#" className="hover:text-teal-700 dark:hover:text-teal-400">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
      </div>
      <div className="text-zinc-500 dark:text-zinc-200 flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon="fa-regular fa-envelope" className="dark:text-teal-500 text-xl"/> 
        <span className="mb-1">
          jordan.herreravera@gmail.com
        </span>
      </div>
        {/**contactme button */}
        <div className="py-4">
        <a href="mailto:jordan.herreravera@gmail.com" target="_blank" rel="noreferrer" className="border-zinc-100 text-teal-500 hover:text-zinc-100 hover:bg-teal-500 shadow-[0px_0px_0px_1px_#14b8a6] dark:shadow-[0px_0px_0px_1px_#14b8a6] border-[2px] dark:hover:bg-teal-500 dark:hover:text-zinc-900 dark:border-zinc-900 dark:text-teal-500 p-2 font-semibold">
        {t('Contact me')}
        </a>
        </div>
    </section>
  )
}
