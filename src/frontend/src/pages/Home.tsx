import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { NEWS_ITEMS, STATS, UPCOMING_EVENTS } from "@/data/schoolData";
import { useAllAnnouncements } from "@/hooks/useQueries";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  GraduationCap,
  Megaphone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { AnnouncementCategory } from "../backend.d";

const statIcons = { Users, GraduationCap, Award, TrendingUp };

const categoryColors: Record<AnnouncementCategory | string, string> = {
  [AnnouncementCategory.academic]: "bg-blue-100 text-blue-700",
  [AnnouncementCategory.event]: "bg-green-100 text-green-700",
  [AnnouncementCategory.urgent]: "bg-red-100 text-red-700",
  [AnnouncementCategory.general]: "bg-gray-100 text-gray-700",
};

const newsIconMap: Record<string, string> = {
  trophy: "🏆",
  computer: "💻",
  flask: "🔬",
  award: "🥇",
  globe: "🌍",
};

const eventCategoryColors: Record<string, string> = {
  Meeting: "bg-blue-100 text-blue-700",
  Sports: "bg-green-100 text-green-700",
  Cultural: "bg-purple-100 text-purple-700",
  Academic: "bg-amber-100 text-amber-700",
};

export default function Home() {
  const { data: announcements, isLoading } = useAllAnnouncements();

  const displayAnnouncements =
    announcements && announcements.length > 0
      ? announcements
      : [
          {
            id: BigInt(1),
            title:
              "Term 3 begins February 3 – All students must report by 8:00 AM",
            category: AnnouncementCategory.academic,
            date: BigInt(Date.now()),
            content: "",
          },
          {
            id: BigInt(2),
            title:
              "Annual Day Cultural Show – March 28, 2025 at 5:00 PM in Main Auditorium",
            category: AnnouncementCategory.event,
            date: BigInt(Date.now()),
            content: "",
          },
          {
            id: BigInt(3),
            title:
              "URGENT: School closed on Feb 24 due to teachers' professional development day",
            category: AnnouncementCategory.urgent,
            date: BigInt(Date.now()),
            content: "",
          },
          {
            id: BigInt(4),
            title:
              "Congratulations! Sunrise Academy wins National Robotics Championship 2025",
            category: AnnouncementCategory.general,
            date: BigInt(Date.now()),
            content: "",
          },
        ];

  return (
    <div className="min-h-screen">
      {/* === HERO === */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/school-hero.dim_1200x600.jpg')",
          }}
        />
        <div className="absolute inset-0 gradient-navy-gold opacity-85" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute top-20 left-20 w-44 h-44 border border-white rounded-full" />
          <div className="absolute bottom-20 right-10 w-80 h-80 border-2 border-yellow-400 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-6">
              <Star size={14} className="text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">
                Established 1999 — 25 Years of Excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-tight mb-4">
              Sunrise <span className="text-yellow-400">Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-display italic mb-6">
              Shaping Tomorrow's Leaders
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
              A premier institution committed to nurturing academic excellence,
              strong character, and lifelong curiosity in every student we
              serve.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-navy-dark font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Apply Now <ChevronRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white/40 hover:border-white text-white font-semibold transition-all hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => {
              const Icon = statIcons[stat.icon as keyof typeof statIcons];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-yellow-400" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-white font-display">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* === ANNOUNCEMENTS TICKER === */}
      <section className="bg-yellow-500 py-3 overflow-hidden">
        <div className="flex items-center gap-4 max-w-full">
          <div className="shrink-0 flex items-center gap-2 bg-navy-dark px-4 py-1 text-white text-sm font-bold uppercase tracking-wider">
            <Megaphone size={15} />
            <span>Notice</span>
          </div>
          <div className="overflow-hidden flex-1 relative">
            <div className="flex gap-16 whitespace-nowrap announcement-scroll">
              {[
                ...displayAnnouncements.map((a, i) => ({
                  ...a,
                  _dupKey: `a-${i}`,
                })),
                ...displayAnnouncements.map((a, i) => ({
                  ...a,
                  _dupKey: `b-${i}`,
                })),
              ].map((ann) => (
                <span
                  key={ann._dupKey}
                  className="text-navy-dark font-semibold text-sm"
                >
                  📌 {ann.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === WELCOME MESSAGE === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-yellow-100 text-yellow-700 mb-3">
                Welcome
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-school-navy leading-tight mb-5">
                A Place Where Every Child <em>Thrives</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Sunrise Academy, we believe that every child is uniquely
                gifted. For over 25 years, we have been dedicated to providing a
                nurturing environment where students develop academic
                excellence, strong character, and the confidence to pursue their
                dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our holistic approach to education goes beyond textbooks — we
                prepare students for life through sports, arts, community
                service, and leadership opportunities that shape well-rounded
                individuals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-school-navy font-semibold hover:gap-3 transition-all"
                >
                  <span>Our Story</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/faculty"
                  className="inline-flex items-center gap-2 text-school-navy font-semibold hover:gap-3 transition-all"
                >
                  <span>Meet Our Faculty</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: BookOpen,
                  title: "Academic Programs",
                  desc: "Comprehensive curriculum from Grade 1 to 12",
                  color: "bg-blue-50 text-blue-700",
                },
                {
                  icon: Award,
                  title: "25+ Awards",
                  desc: "National and regional recognitions since 1999",
                  color: "bg-yellow-50 text-yellow-700",
                },
                {
                  icon: Users,
                  title: "Vibrant Community",
                  desc: "1,200+ students from diverse backgrounds",
                  color: "bg-green-50 text-green-700",
                },
                {
                  icon: TrendingUp,
                  title: "98% Pass Rate",
                  desc: "Consistent top results in board examinations",
                  color: "bg-purple-50 text-purple-700",
                },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className={`rounded-xl p-5 ${color.split(" ")[0]} hover-lift`}
                >
                  <Icon className={`mb-3 ${color.split(" ")[1]}`} size={24} />
                  <h3 className="font-bold text-foreground mb-1 text-sm">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* === ANNOUNCEMENTS BOARD === */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Notice Board"
            title="Latest Announcements"
            subtitle="Stay updated with the latest news and important notices from Sunrise Academy."
          />

          <div className="grid md:grid-cols-2 gap-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: skeleton loader
                  <Skeleton key={i} className="h-20 rounded-xl" />
                ))
              : displayAnnouncements.slice(0, 6).map((ann, i) => (
                  <motion.div
                    key={String(ann.id)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-xl p-5 flex gap-4 items-start hover:shadow-md transition-shadow border border-border"
                  >
                    <div className="w-9 h-9 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Bell size={16} className="text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm leading-relaxed">
                        {ann.title}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[ann.category] || "bg-gray-100 text-gray-700"}`}
                        >
                          {ann.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock size={10} />
                          {new Date(
                            Number(ann.date) / 1_000_000,
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* === NEWS HIGHLIGHTS === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <SectionHeader
              tag="School News"
              title="Latest Highlights"
              centered={false}
            />
            <Link
              to="/news"
              className="shrink-0 inline-flex items-center gap-2 text-school-navy font-semibold hover:gap-3 transition-all text-sm"
            >
              View All News <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {NEWS_ITEMS.slice(0, 3).map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-border hover-lift group"
              >
                <div className="h-44 gradient-navy flex items-center justify-center text-5xl">
                  {newsIconMap[item.image] || "📰"}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground leading-snug mb-2 group-hover:text-school-navy transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* === UPCOMING EVENTS === */}
      <section className="py-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Events"
            title="Upcoming Events"
            subtitle="Mark your calendars for these exciting upcoming events at Sunrise Academy."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {UPCOMING_EVENTS.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${eventCategoryColors[event.category] || "bg-white/20 text-white"}`}
                  >
                    {event.category}
                  </span>
                  <span className="text-yellow-400 text-xs flex items-center gap-1">
                    <Clock size={11} />
                    {event.time}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2 leading-snug">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <Calendar size={12} />
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.venue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA BANNER === */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark font-display mb-3">
              Begin Your Journey at Sunrise Academy
            </h2>
            <p className="text-navy-dark/70 mb-8 max-w-xl mx-auto">
              Admissions are now open for the 2025–26 academic year. Limited
              seats available across all grades.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/admissions"
                className="px-6 py-3 bg-navy-dark text-white font-bold rounded-lg hover:bg-navy transition-colors"
              >
                Apply for Admission
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-navy-dark font-bold rounded-lg hover:bg-white/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
