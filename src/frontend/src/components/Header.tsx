import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Mail, Menu, Phone, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Academics",
    path: "/academics",
    children: [
      { label: "Curriculum", path: "/academics#curriculum" },
      { label: "Calendar", path: "/academics#calendar" },
      { label: "Results", path: "/academics#results" },
    ],
  },
  {
    label: "Admissions",
    path: "/admissions",
    children: [
      { label: "Process & Eligibility", path: "/admissions#process" },
      { label: "Fee Structure", path: "/admissions#fees" },
      { label: "Apply Now", path: "/admissions#form" },
    ],
  },
  { label: "Faculty", path: "/faculty" },
  {
    label: "Students",
    path: "/students",
    children: [
      { label: "Student Life", path: "/students#life" },
      { label: "Clubs & Activities", path: "/students#clubs" },
      { label: "Sports", path: "/students#sports" },
    ],
  },
  { label: "Parents", path: "/parents" },
  { label: "News & Events", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional reset on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="gradient-navy text-white py-2 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors"
            >
              <Phone size={12} />
              +1-555-123-4567
            </a>
            <a
              href="mailto:info@sunriseacademy.edu"
              className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors"
            >
              <Mail size={12} />
              info@sunriseacademy.edu
            </a>
          </div>
          <div className="text-white/70">Mon–Fri: 8:00 AM – 4:00 PM</div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center group-hover:opacity-90 transition-opacity">
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <div className="font-bold text-lg leading-none text-school-navy font-display">
                  Sunrise Academy
                </div>
                <div className="text-xs text-muted-foreground leading-none mt-0.5">
                  Shaping Tomorrow's Leaders
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-0.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "text-school-navy bg-secondary"
                        : "text-foreground/70 hover:text-school-navy hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={13} className="mt-0.5 opacity-60" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-border min-w-48 py-2 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-foreground/70 hover:text-school-navy hover:bg-secondary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Apply button + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/admissions"
                className="hidden md:flex items-center px-4 py-2 rounded-md text-sm font-semibold gradient-navy text-white hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
              <button
                type="button"
                className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border overflow-hidden"
            >
              <div className="bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-school-navy bg-secondary"
                          : "text-foreground/80 hover:text-school-navy hover:bg-secondary"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-school-navy hover:bg-secondary transition-colors"
                          >
                            — {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <Link
                    to="/admissions"
                    className="block w-full text-center px-4 py-2.5 rounded-md text-sm font-semibold gradient-navy text-white"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
