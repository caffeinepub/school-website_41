import { SCHOOL_INFO } from "@/data/schoolData";
import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sun,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "sunriseacademy";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="gradient-navy text-white">
      {/* Section divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <div className="font-bold text-lg font-display">
                  {SCHOOL_INFO.name}
                </div>
                <div className="text-xs text-white/60">
                  {SCHOOL_INFO.tagline}
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Shaping tomorrow's leaders through academic excellence, character
              development, and holistic education since {SCHOOL_INFO.founded}.
            </p>
            <div className="flex gap-3">
              {[
                {
                  Icon: Facebook,
                  href: SCHOOL_INFO.socialMedia.facebook,
                  label: "Facebook",
                },
                {
                  Icon: Twitter,
                  href: SCHOOL_INFO.socialMedia.twitter,
                  label: "Twitter",
                },
                {
                  Icon: Instagram,
                  href: SCHOOL_INFO.socialMedia.instagram,
                  label: "Instagram",
                },
                {
                  Icon: Youtube,
                  href: SCHOOL_INFO.socialMedia.youtube,
                  label: "YouTube",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-yellow-500/30 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links – Academics */}
          <div>
            <h4 className="font-semibold text-yellow-400 mb-4 text-sm uppercase tracking-wider">
              Academics
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Curriculum Overview", path: "/academics" },
                { label: "Academic Calendar", path: "/academics#calendar" },
                { label: "Examination Schedule", path: "/academics#exams" },
                { label: "Results & Achievements", path: "/academics#results" },
                { label: "Faculty & Staff", path: "/faculty" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/70 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links – Admissions & About */}
          <div>
            <h4 className="font-semibold text-yellow-400 mb-4 text-sm uppercase tracking-wider">
              Admissions
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "How to Apply", path: "/admissions#process" },
                { label: "Fee Structure", path: "/admissions#fees" },
                {
                  label: "Eligibility Criteria",
                  path: "/admissions#eligibility",
                },
                { label: "Required Documents", path: "/admissions#documents" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/70 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-yellow-400 mb-3 text-sm uppercase tracking-wider">
              About
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Our History", path: "/about#history" },
                { label: "Mission & Vision", path: "/about#mission" },
                { label: "Principal's Message", path: "/about#principal" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/70 hover:text-yellow-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-yellow-400 mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-yellow-400" />
                {SCHOOL_INFO.address}
              </li>
              <li>
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex gap-3 text-sm text-white/70 hover:text-yellow-400 transition-colors"
                >
                  <Phone
                    size={15}
                    className="mt-0.5 shrink-0 text-yellow-400"
                  />
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="flex gap-3 text-sm text-white/70 hover:text-yellow-400 transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-yellow-400" />
                  {SCHOOL_INFO.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Clock size={15} className="mt-0.5 shrink-0 text-yellow-400" />
                {SCHOOL_INFO.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <span>© {year} Sunrise Academy. All rights reserved.</span>
          <span>
            Built with ♥ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
