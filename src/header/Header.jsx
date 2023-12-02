import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import LanguageOptions from "./LanguageOptions";
import PopoverNav from "./PopoverNav";

export default function Header({ ThemeToggle }) {
  const { t } = useTranslation();

  return (
    <header className="overflow-hidden z-50">
      <div className="">
        <div className="w-full max-2xl:py-2 max-2xl:px-6 justify-between  2xl:py-8 transition-colors fixed dark:text-white text-slate-700 font-semibold bg-teal-500 dark:bg-zinc-700 flex 2xl:flex-col items-center gap-4 text-center 2xl-4 2xl:min-h-screen 2xl:w-52">
        <PopoverNav/>
        <a href="#home">
          <FontAwesomeIcon
            className="h-10 2xl:h-16 text-white dark:text-teal-500"
            icon="fa-code"
          />
        </a>
          <nav className="hidden 2xl:inline">
            <ul className="grid gap-4">
              <li >
                <a className="dark:hover:text-teal-400 hover:text-zinc-100" href="#home">{t("Home")}</a>
              </li>
              <li>
                <a className="dark:hover:text-teal-400 hover:text-zinc-100" href="#about">{t("About")}</a>
              </li>
              <li>
                <a className="dark:hover:text-teal-400 hover:text-zinc-100" href="#skills">{t("Skills")}</a>
              </li>
              <li>
                <a className="dark:hover:text-teal-400 hover:text-zinc-100" href="#projects">{t("Projects")}</a>
              </li>

              <li>
                <a className="dark:hover:text-teal-400 hover:text-zinc-100" href="#contact">{t("Contact")}</a>
              </li>
            </ul>
          </nav>

          <div>
          <div className="max-w-20 max-2xl:flex justify-end">
            <ThemeToggle />
          </div>
            <div className="mt-8 max-2xl:hidden">
              <LanguageOptions/>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
