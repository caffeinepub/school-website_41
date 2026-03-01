import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { NEWS_ITEMS, UPCOMING_EVENTS } from "@/data/schoolData";
import { Calendar, Clock, Tag } from "lucide-react";
import { motion } from "motion/react";

const newsIconMap: Record<string, string> = {
  trophy: "🏆",
  computer: "💻",
  flask: "🔬",
  award: "🥇",
  globe: "🌍",
};

const categoryColors: Record<string, string> = {
  Achievement: "bg-yellow-100 text-yellow-700",
  Facilities: "bg-blue-100 text-blue-700",
  Event: "bg-purple-100 text-purple-700",
  Academic: "bg-indigo-100 text-indigo-700",
  Sports: "bg-green-100 text-green-700",
  International: "bg-rose-100 text-rose-700",
};

const eventCategoryColors: Record<string, string> = {
  Meeting: "bg-blue-500",
  Sports: "bg-green-600",
  Cultural: "bg-purple-600",
  Academic: "bg-amber-600",
};

export default function News() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="gradient-navy py-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-yellow-500/20 text-yellow-300 mb-4">
              News & Events
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              School News & Events
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              Stay informed about the latest happenings, achievements, and
              upcoming events at Sunrise Academy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === LATEST NEWS === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="School News"
            title="Latest Headlines"
            subtitle="Celebrating achievements, innovations, and milestones from our vibrant school community."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_ITEMS.map((news, i) => (
              <motion.article
                key={news.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className="bg-white rounded-xl border border-border overflow-hidden hover-lift group"
              >
                {/* Image / Icon Banner */}
                <div className="h-48 gradient-navy flex items-center justify-center text-5xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="relative z-10 text-5xl">
                    {newsIconMap[news.image] || "📰"}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${categoryColors[news.category] || "bg-gray-100 text-gray-700"}`}
                    >
                      {news.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={11} />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground leading-snug mb-3 group-hover:text-school-navy transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* === UPCOMING EVENTS === */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Calendar"
            title="Upcoming Events"
            subtitle="Don't miss these exciting events. Mark your calendars and stay engaged with school life."
          />

          <div className="grid md:grid-cols-2 gap-5">
            {UPCOMING_EVENTS.map((event, i) => {
              const bgColor =
                eventCategoryColors[event.category] || "bg-gray-600";
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl border border-border p-5 flex gap-5 hover-lift"
                >
                  {/* Date badge */}
                  <div
                    className={`${bgColor} rounded-xl p-3 text-white text-center min-w-16 shrink-0`}
                  >
                    <div className="text-xs font-medium opacity-80">
                      {event.date.split(",")[0].split(" ").slice(0, 1).join("")}
                    </div>
                    <div className="text-xl font-bold font-display leading-none">
                      {event.date.replace(/–\d+/g, "").match(/\d+/)?.[0] || ""}
                    </div>
                    <div className="text-xs opacity-80 mt-0.5">
                      {event.date.split(",")[1]?.trim() || "2025"}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium text-white ${bgColor}`}
                      >
                        {event.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-sm leading-snug mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag size={11} />
                        {event.venue}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === PAST EVENTS === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Archives"
            title="Past Events Highlights"
            subtitle="Reliving the memorable moments that have defined Sunrise Academy's vibrant community."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Annual Day 2024 — A Night to Remember",
                date: "March 30, 2024",
                emoji: "🎭",
                desc: "700+ attendees witnessed breathtaking performances by 250 students across music, dance, and drama.",
              },
              {
                title: "National Robotics Championship 2024",
                date: "February 18, 2024",
                emoji: "🤖",
                desc: "Our Grade 10 team won first place, beating 120 teams from 22 states.",
              },
              {
                title: "Sports Day 2024 — Blue House Champions",
                date: "January 20, 2024",
                emoji: "🏃",
                desc: "Blue House won the Inter-House Athletics Championship with 18 gold medals.",
              },
              {
                title: "Science Expo 2024 — 200 Projects Showcased",
                date: "December 15, 2023",
                emoji: "🔬",
                desc: "Students presented innovative solutions to real-world problems to an audience of industry experts.",
              },
              {
                title: "Literary Fest 2023 — Words & Worlds",
                date: "October 14, 2023",
                emoji: "📚",
                desc: "Award-winning author Ms. Rachel Hughes was the keynote speaker at our annual literary festival.",
              },
              {
                title: "International Culture Day 2023",
                date: "November 25, 2023",
                emoji: "🌍",
                desc: "Celebrating 28 nationalities represented in our student body with food, dance, and art.",
              },
            ].map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-secondary/40 rounded-xl p-5 hover-lift"
              >
                <div className="text-3xl mb-3">{event.emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    <Calendar size={10} className="mr-1" />
                    {event.date}
                  </Badge>
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
