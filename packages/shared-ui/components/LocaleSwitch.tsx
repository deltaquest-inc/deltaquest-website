'use client'
import Image from 'next/image'
import langIconDark from '@/data/langIconDark.png'
import langIconWhite from '@/data/langIconWhite.png'
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
    localStorage.setItem('locale', newLocale)
    setLocale(newLocale)
    router.push(newPath)
  }

  const isDark = resolvedTheme === 'dark'
  const icon = isDark ? langIconWhite : langIconDark

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center">
          <MenuButton aria-label="Language switcher">
            {mounted ? (
              <Image
                src={icon}
                alt="Language Icon"
                width={24}
                height={24}
                className="h-6 w-6"
                priority={false}
              />
            ) : (
              <Blank />
            )}
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
                            focus ? 'bg-primary-600 text-white' : ''
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
