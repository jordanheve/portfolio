import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function Header({ ThemeToggle }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <div className="max-md:hidden justify-between py-8 transition-colors fixed dark:text-white text-slate-700 font-semibold bg-teal-500 dark:bg-zinc-700 flex flex-col items-center gap-4 text-center p-4 min-h-screen w-52">
        <FontAwesomeIcon
          className="h-16 text-white dark:text-teal-400"
          icon="fa-code"
        />
        <nav>
          <ul className="grid gap-4">
            <li>
              <a href="#home">{t("Home")}</a>
            </li>
            <li>
              <a href="#about">{t("About")}</a>
            </li>
            <li>
              <a href="#skills">{t("Skills")}</a>
            </li>
            <li>
              <a href="#projects">{t("Projects")}</a>
            </li>
            
            <li>
              <a href="#contact">{t("Contact")}</a>
            </li>
          </ul>
        </nav>

        <div>
          <ThemeToggle />
          <div className="mt-8">
            <label htmlFor="language">
              {t("Language")}:
              <select
                id="laguange"
                className="mt-1 cursor-pointer font-medium bg-teal-400 border border-teal-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option onClick={() => changeLanguage("en")}>
                  <span>English</span>
                </option>
                <option onClick={() => changeLanguage("es")}>
                  <span>Español</span>
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
