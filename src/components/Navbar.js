"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram, FaHome, FaProjectDiagram, FaFileAlt, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";


const NAV_LINKS = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Projects", href: "/projects", icon: FaProjectDiagram },
  { name: "Resume", href: "/RamPrakhyathA_Resume.pdf", icon: FaFileAlt, external: true },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/RamPrakhyath05", label: "GitHub", icon: FaGithub, color: "hover:text-[#8250DF]" },
  { href: "https://in.linkedin.com/in/ram-prakhyath-annamreddy", label: "LinkedIn", icon: FaLinkedin, color: "hover:text-[#0A66C2]" },
  { href: "https://instagram.com/ramprakhyath", label: "Instagram", icon: FaInstagram, color: "hover:text-[#C13584]" },
];


export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center justify-between w-[95vw] max-w-4xl rounded-full border border-white/10 bg-neutral-900/70 px-5 py-3 backdrop-blur-xl shadow-xl">
        <DesktopNav />
        <MobileNav />
        <SocialIcons />
      </div>
    </motion.nav>
  );
}


function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          className={`relative text-sm font-medium transition-colors ${
            pathname === link.href ? "text-white" : "text-neutral-400 hover:text-white"
          }`}
        >
          {link.name}
          {pathname === link.href && (
            <motion.span
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 h-[2px] w-full bg-white"
            />
          )}
        </Link>
      ))}
    </div>
  );
}


function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden items-center gap-6">
      {NAV_LINKS.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            aria-label={link.name}
            className={`flex items-center justify-center rounded-full p-2 transition ${
              isActive
                ? "text-white bg-white/10"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map(({ href, label, icon: Icon, color }) => (
        <NavIcon key={label} href={href} label={label} color={color}>
          <Icon size={18} />
        </NavIcon>
      ))}
    </div>
  );
}

function NavIcon({ href, children, label, color = "hover:text-white" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group relative flex items-center text-neutral-400 transition-all duration-300 ${color} hover:scale-110`}
    >
      {children}
      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 rounded bg-neutral-800 px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}
