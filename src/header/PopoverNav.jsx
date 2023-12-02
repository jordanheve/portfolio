import {Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguageOptions from './LanguageOptions';

export default function PopoverNav() {
    const {t} = useTranslation()
  return (
    <Popover className='2xl:hidden '>
        <Popover.Button aria-label={t('Menu')} className="w-20 flex">
        <FontAwesomeIcon className='h-8' icon="fa-solid fa-bars" />
        </Popover.Button>
        <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        >
        <Popover.Panel className='absolute grid items-center w-48 h-screen top-0 left-0 bg-zinc-100 dark:bg-zinc-700'>
            
        <div className='absolute left-7 top-4'>
        <Popover.Button>
            <FontAwesomeIcon className='h-6' icon="fa-solid fa-x" />
        </Popover.Button>
        </div>
        <div></div>
        <nav >
            <ul className="grid gap-4">
            
              <li>
              <Popover.Button>
                <a className="dark:hover:text-teal-400 hover:text-teal-600" href="#home">{t("Home")}</a>
              </Popover.Button>
              </li>
              <li>
              <Popover.Button>
                <a className="dark:hover:text-teal-400 hover:text-teal-600" href="#about">{t("About")}</a>
              </Popover.Button>
              </li>
              <li>
              <Popover.Button>
                <a className="dark:hover:text-teal-400 hover:text-teal-600" href="#skills">{t("Skills")}</a>
              </Popover.Button>
              </li>
              <li>
              <Popover.Button>
                <a className="dark:hover:text-teal-400 hover:text-teal-600" href="#projects">{t("Projects")}</a>
              </Popover.Button>
              </li>

              <li>
              <Popover.Button>
                <a className="dark:hover:text-teal-400 hover:text-teal-600" href="#contact">{t("Contact")}</a>
              </Popover.Button>
              </li>
            </ul>
          </nav>
          <div className='w-fit mx-auto mt-10'>
          <LanguageOptions/>
          </div>
        </Popover.Panel>
        </Transition>
    </Popover>
  )
}
