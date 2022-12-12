import React, { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Link from "next/link";
import ChevronDownIcon from "../../Icons/ChevronDown";
import cn from "classnames";
const LocaleSwitcher: FC = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex justify-center items-center gap-1 bg-[#f3f3f3] w-full px-2.5 py-1.5 text-sm font-medium focus:outline-none uppercase rounded-lg">
          <>
            {t(activeLocale)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                d="M1.49543 3.308L1.49544 3.30801L4.00008 5.81356L6.50464 3.3084L6.50472 3.30832L6.57544 3.37902C6.69791 3.25623 6.89687 3.25623 7.01904 3.37843L1.49543 3.308ZM1.49543 3.308C1.33359 3.14616 1.07165 3.14616 0.909817 3.308L0.909728 3.30809M1.49543 3.308L0.909728 3.30809M3.70704 6.69208L3.70712 6.69216L3.77784 6.62146C3.90032 6.74424 4.09925 6.74424 4.22172 6.62146L3.70704 6.69208ZM3.70704 6.69208L0.909806 3.89391M3.70704 6.69208L0.909806 3.89391M0.909728 3.30809C0.74832 3.46991 0.74832 3.73202 0.909728 3.89383L0.909806 3.89391M0.909728 3.30809L0.909806 3.89391"
                fill="black"
                stroke="black"
                strokeWidth="0.2"
              />
            </svg>
          </>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 origin-top-left bg-[#f3f3f3] rounded-md overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            {locales?.map((locale, index) => {
              const { pathname, query, asPath } = router;
              if (activeLocale !== locale) {
                return (
                  <Menu.Item key={locale}>
                    <Link
                      href={{ pathname, query }}
                      as={asPath}
                      locale={locale}
                      className={cn(
                        "block text-center px-2.5 hover:bg-gray-50 text-sm uppercase leading-[1.6] first:pt-2.5 first:pb-0.5 last:pb-2.5 last:pt-0.5 py-0.5"
                      )}
                    >
                      <span className="">{t(locale)}</span>
                    </Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default LocaleSwitcher;
