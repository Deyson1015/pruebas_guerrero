import { memo, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { BrandLogo } from "./BrandLogo";

const iconElements = {
  sparkles: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M12 3L13.44 7.32L17.76 8.76L13.44 10.2L12 14.52L10.56 10.2L6.24 8.76L10.56 7.32L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 15L6.2 16.8L8 17.5L6.2 18.2L5.5 20L4.8 18.2L3 17.5L4.8 16.8L5.5 15Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 13L19.4 15.4L21.8 16.3L19.4 17.2L18.5 19.6L17.6 17.2L15.2 16.3L17.6 15.4L18.5 13Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M12 21C12 21 19 18 19 11V6L12 3L5 6V11C5 18 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11L11 13L15 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  target: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  ),
  camera: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M4 7H20M4 7L6 4H10L12 7M4 7V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V7M20 7L18 4H14L12 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.5C13.933 16.5 15.5 14.933 15.5 13C15.5 11.067 13.933 9.5 12 9.5C10.067 9.5 8.5 11.067 8.5 13C8.5 14.933 10.067 16.5 12 16.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  ),
  play: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M6 4L20 12L6 20V4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  contact: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  sponsors: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function SidebarComponent({ isOpen, onClose, links }) {
  const location = useLocation();
  const navigate = useNavigate();
  const activeHash = location.hash || "#inicio";

  const enhancedLinks = useMemo(
    () =>
      links.map((link) => ({
        ...link,
        isActive:
          link.href === "/"
            ? location.pathname === "/"
            : link.href.endsWith(activeHash),
      })),
    [activeHash, links, location.pathname],
  );

  const handleClose = () => {
    onClose();
  };

  const handleLogoClick = (event) => {
    onClose();
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-r border-slate-200/60 backdrop-blur-sm transition-transform duration-500 md:static md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-8">
          <a
            href="/"
            onClick={handleLogoClick}
            aria-label="Inicio Guerrero de Troya"
            className="flex items-center justify-center mb-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300/60 hover:bg-white"
          >
            <BrandLogo variant="secondary" className="h-14 w-auto" />
          </a>
          <div className="mb-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-2">
              Navegación
            </p>
          </div>
          <div className="space-y-1.5">
            {enhancedLinks.map((link) => (
              <SidebarLinkItem
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                description={link.description}
                isActive={link.isActive}
                onNavigate={handleClose}
              />
            ))}
          </div>
        </nav>
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 md:hidden"
          aria-label="Cerrar menú lateral"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </aside>
      {isOpen ? (
        <button
          type="button"
          onClick={handleClose}
          className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-sm md:hidden"
          aria-label="Cerrar menú"
        />
      ) : null}
    </>
  );
}

function SidebarLinkItem({
  href,
  label,
  icon,
  description,
  isActive,
  onNavigate,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event) => {
    if (href === "/#inicio" || href === "/") {
      onNavigate();
      return;
    }
    
    event.preventDefault();
    onNavigate();
    
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const hashValue = hash ? `#${hash}` : "";
      const targetPath = path || "/";
      const targetId = hashValue.replace("#", "");
      
      if (location.pathname === targetPath) {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 50);
      } else {
        navigate(targetPath);
        setTimeout(() => {
          scrollToSection(targetId);
        }, 200);
      }
    } else {
      navigate(href);
    }
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "inicio") {
      const heroSection = document.getElementById("inicio");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        const mainElement = document.querySelector("main");
        if (mainElement) {
          mainElement.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <a
      href={href}
      className={`group relative flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-all duration-300 ${isActive ? "bg-gradient-to-r from-brand-500/10 to-brand-600/5 text-brand-700 shadow-sm" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-gradient-to-b from-brand-500 to-brand-600" />
      )}
      <span
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center transition-all duration-300 ${isActive ? "text-brand-600" : "text-slate-500 group-hover:text-brand-600"}`}
      >
        {iconElements[icon]}
      </span>
      <span className="flex flex-col flex-1 min-w-0">
        <span className="leading-tight">{label}</span>
        {description ? (
          <span className={`text-[10px] font-normal leading-tight mt-0.5 transition-colors duration-300 ${isActive ? "text-brand-600/70" : "text-slate-400 group-hover:text-slate-500"}`}>
            {description}
          </span>
        ) : null}
      </span>
    </a>
  );
}

export const Sidebar = memo(SidebarComponent);

