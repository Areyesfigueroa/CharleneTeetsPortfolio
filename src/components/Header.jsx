import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Projects", href: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="w-full">
      <div className="flex flex-col items-center py-8">
        <h1 className="text-3xl font-bold m-0">Charlene Teets</h1>
        <p className="text-sm mt-1 m-0">3D Generalist</p>
      </div>
      <nav
        className="w-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url(https://picsum.photos/900/24)" }}
      >
        <ul className="flex flex-row justify-evenly items-center list-none m-0 p-0 py-3 w-[900px] max-w-full mx-auto">
          {NAV_LINKS.map(({ label, href, to }, index) => {
            const isActive = to ? location.pathname === to : false;
            const className = `text-sm no-underline transition-colors duration-150 hover:text-blue-300 ${
              isActive ? "text-blue-800" : ""
            }`;
            return (
              <>
                <li key={label}>
                  {to ? (
                    <Link to={to} className={className}>
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className={className}>
                      {label}
                    </a>
                  )}
                </li>
                {index < NAV_LINKS.length - 1 && (
                  <li
                    key={`divider-${index}`}
                    className="text-white select-none"
                  >
                    |
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
