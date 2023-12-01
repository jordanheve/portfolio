import { useTranslation } from "react-i18next";

export default function LanguageOptions() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <label htmlFor="language">
      {t("Language")}:
      <select
        className="mt-1 cursor-pointer font-medium bg-teal-400 border border-teal-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option onClick={() => changeLanguage("en")}>
          English
        </option>
        <option onClick={() => changeLanguage("es")}>
          Español
        </option>
      </select>
    </label>
  );
}
