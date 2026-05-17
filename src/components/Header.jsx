import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [activePage, setActivePage] = useState('Projects')

  return (
    <header className="w-full">
      <div className="flex flex-col items-center py-8">
        <h1 className="text-3xl font-bold m-0">Charlene Teets</h1>
        <p className="text-sm mt-1 m-0">3D Generalist</p>
      </div>
      <nav className="w-full bg-gray-500 bg-opacity-50 backdrop-blur-md">
        <ul className="flex flex-row justify-evenly items-center list-none m-0 p-0 py-3 w-[900px] max-w-full mx-auto">
          {NAV_LINKS.map(({ label, href }, index) => (
            <>
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setActivePage(label)}
                  className={`text-sm no-underline transition-colors duration-150 hover:text-blue-300 ${
                    activePage === label ? 'text-blue-800' : ''
                  }`}
                >
                  {label}
                </a>
              </li>
              {index < NAV_LINKS.length - 1 && (
                <li key={`divider-${index}`} className="text-white select-none">|</li>
              )}
            </>
          ))}
        </ul>
      </nav>
    </header>
  )
}
