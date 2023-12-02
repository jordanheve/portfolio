import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageOptions() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || i18n.language
  );

  const changeLanguage = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage); // set local storage
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage && storedLanguage !== selectedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage); // Change language in app
    }
  }, [i18n, selectedLanguage]);

  // Change the language throughout the application upon mounting the component
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [i18n, selectedLanguage]);

  return (
    <label htmlFor="language">
      {t("Language")}:
      <select
        className="mt-1 cursor-pointer font-medium bg-teal-400 border border-teal-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={changeLanguage}
        value={selectedLanguage}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </label>
  );
}
