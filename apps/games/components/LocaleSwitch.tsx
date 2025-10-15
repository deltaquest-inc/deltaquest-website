'use client'
import { Fragment, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
  Transition,
} from '@headlessui/react'

const locales = [
  { code: 'ja', label: '日本語' },
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
]

const Blank = () => <span className="inline-block h-6 w-6" />

const LanguageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 cursor-pointer"
  >
    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
  </svg>
)

export default function LocaleSwitch() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const storedLocale = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
  const pathLocale = pathname?.split('/')[1] || null
  const initialLocale = pathLocale || storedLocale || 'ja'
  const [locale, setLocale] = useState(initialLocale)

  useEffect(() => {
    setMounted(true)

    if (!pathLocale && storedLocale && pathname) {
      const segments = pathname.split('/')
      segments[1] = storedLocale
      router.replace(segments.join('/'))
    } else if (pathLocale) {
      setLocale(pathLocale)
      localStorage.setItem('locale', pathLocale)
    }
  }, [pathname, router, storedLocale, pathLocale])

  function changeLocale(newLocale: string) {
    if (!pathname) return
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    
    // Save user preference
    localStorage.setItem('locale', newLocale)
    localStorage.setItem('user-locale-preference', newLocale)
    
    setLocale(newLocale)
    router.push(newPath)
  }


  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center cursor-pointer group">
          <MenuButton aria-label="Language switcher">
            {mounted ? <LanguageIcon /> : <Blank />}
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="ring-opacity-5 absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black focus:outline-hidden dark:bg-gray-800">
            <RadioGroup value={locale} onChange={changeLocale}>
              <div className="p-1">
                {locales.map(({ code, label }) => (
                  <Radio key={code} value={code}>
                    <MenuItem>
                      {({ focus }) => (
                        <button
                          className={`${
                            focus ? 'bg-blue-600 text-white' : ''
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {label}
                        </button>
                      )}
                    </MenuItem>
                  </Radio>
                ))}
              </div>
            </RadioGroup>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

