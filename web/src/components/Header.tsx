'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import CallToAction from './CallToAction'
import HeroTitle from './HeroTitle'

type HeaderProps = {
  directRoute?: boolean
}

const Header = (props: HeaderProps) => {
  const router = useRouter()
  const [open, setOpen] = useState(Boolean(props.directRoute))
  useEffect(() => {
    const modifier = open ? 'add' : 'remove'
    document.body.classList[modifier]('overflow-y-scroll')
  }, [open])
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setOpen(value => !value)
  }
  const handleNavigation =
    (url: string) => (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()
      setOpen(false)
      router.push(url)
    }
  return (
    <header className="w-full bg-white h-20 fixed left-0 right-0 top-0 z-10 shadow-lg z-20">
      <div
        className={`${
          props.directRoute ? 'justify-center' : 'justify-around'
        } container mx-auto flex items-center h-full`}
      >
        <HeroTitle className="ml-2 md:ml-0 text-2xl md:text-4xl text-blue-1000" />
        {!props.directRoute && (
          <ul className="flex-row items-center hidden lg:flex">
            <li className="">
              <Link
                href="/"
                title=""
                className="rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                href="/our-story"
                className="rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
              >
                About Us
              </Link>
            </li>
            <li className="">
              <Link
                href="/#services"
                title=""
                className="rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
              >
                Services
              </Link>
            </li>
            <li className="">
              <Link
                href="/#packages"
                title=""
                className="rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
              >
                Pricing
              </Link>
            </li>
            <li className="mx-4">
              <CallToAction
                title="Call Today"
                href="tel:+17065301012"
                primary={false}
                hero={false}
                dataTestId="hero-primary-cta"
                includePhone
              />
            </li>
          </ul>
        )}
        <span className="flex items-center">
          {!props.directRoute && (
            <a
              id="overlay-button"
              href="/navigation"
              onClick={handleClick}
              aria-label="Open the menu"
              className="flex items-center w-12 h-12 cursor-pointer block lg:hidden"
            >
              <span
                aria-hidden="true"
                className={`${
                  open
                    ? 'bg-transparent before:rotate-45 before:translate-x-0 before:translate-y-[10px] after:-rotate-45 after:translate-x-0 after:translate-y-[-10px] '
                    : ''
                }transform-gpu before:transform-gpu before:content-[''] after:content-[''] h-1 before:h-1 after:h-1 w-9 before:w-9 after:w-9 before:visible before:top-[-10px] after:top-2.5 relative bg-blue-1000 before:bg-blue-1000 after:bg-blue-1000 before:absolute after:absolute text-blue-1000 rounded-sm before:rounded-sm after:rounded-sm transition-transform before:transition-transform after:transition-transform duration-300 ease-in-out before:duration-300 before:ease-in-out after:duration-300 after:ease-in-out`}
              ></span>
            </a>
          )}
          <div
            id="overlay"
            className={`${
              open ? 'opacity-1 pointer-events-auto' : 'opacity-0'
            } pointer-events-none	fixed z-10 top-20 left-0 right-0 bottom-0 bg-white text-zinc-800 transition-opacity transition duration-300 ease-in-out`}
          >
            <ul className="flex-col items-center flex">
              <li className="h-16 w-full">
                <a
                  href="/"
                  onClick={handleNavigation('/')}
                  title=""
                  className="flex items-center w-full justify-center h-full min-h-full rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
                >
                  Home
                </a>
              </li>
              <li className="mt-8 h-16 w-full">
                <Link
                  href="/our-story"
                  onClick={handleNavigation('/our-story')}
                  className="flex items-center w-full justify-center h-full min-h-full rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
                >
                  About Us
                </Link>
              </li>
              <li className="mt-8 h-16 w-full">
                <Link
                  href="/#services"
                  onClick={handleNavigation('/#services')}
                  title=""
                  className="flex items-center w-full justify-center h-full min-h-full rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
                >
                  Services
                </Link>
              </li>
              <li className="mt-8 h-16 w-full">
                <Link
                  href="/#packages"
                  onClick={handleNavigation('/#packages')}
                  title=""
                  className="flex items-center w-full justify-center h-full min-h-full rounded-md cursor-pointer hover:bg-slate-100 py-3 px-4"
                >
                  Pricing
                </Link>
              </li>
              <li className="mt-8 h-16 w-full">
                <CallToAction
                  title="Call Today"
                  href="tel:+17065301012"
                  primary={false}
                  hero={false}
                  dataTestId="hero-primary-cta"
                  includePhone
                />
              </li>
            </ul>
          </div>
        </span>
      </div>
    </header>
  )
}

export default Header
