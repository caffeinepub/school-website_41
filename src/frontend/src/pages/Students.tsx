import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  CLUBS_ACTIVITIES,
  CULTURAL_EVENTS,
  GALLERY_ITEMS,
  SPORTS,
  STUDENT_COUNCIL,
} from "@/data/schoolData";
import {
  BookOpen,
  Circle,
  Code2,
  Cpu,
  Crown,
  FlaskConical,
  Globe,
  GraduationCap,
  Leaf,
  MessageSquare,
  Music,
  Palette,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";

const clubIconMap: Record<string, React.ElementType> = {
  FlaskConical,
  MessageSquare,
  Crown,
  Music,
  Palette,
  Code2,
  Leaf,
};

const galleryIconMap: Record<string, React.ElementType> = {
  FlaskConical,
  Music,
  Trophy,
  Palette,
  Cpu,
  MessageSquare,
  Circle,
  BookOpen,
  Globe,
  GraduationCap,
  Code2,
  Leaf,
};

const councilColors = [
  "from-blue-600 to-blue-800",
  "from-purple-600 to-purple-800",
  "from-green-600 to-green-800",
  "from-amber-600 to-amber-800",
  "from-rose-600 to-rose-800",
  "from-indigo-600 to-indigo-800",
];

export default function Students() {
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
              Student Life
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              Life at Sunrise Academy
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              Beyond academics, we create a vibrant community where every
              student discovers their passion and develops lifelong skills.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === STUDENT LIFE === */}
      <section id="life" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                tag="Campus Life"
                title="A Day in the Life"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Sunrise Academy, school life is an adventure. From the moment
                students arrive to the sound of the assembly bell, to
                after-school practices and club meetings, every day is filled
                with opportunities to learn, grow, and connect.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our campus is designed to inspire — with modern classrooms, a
                well-stocked library, science labs, art studios, a 400-seat
                auditorium, and sports facilities that meet national standards.
                Students have everything they need to thrive.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "School Clubs", value: "15+" },
                  { label: "Sports Teams", value: "12+" },
                  { label: "Annual Events", value: "8+" },
                  { label: "Student Organizations", value: "6+" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-secondary/40 rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-school-navy font-display">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/assets/generated/school-events.dim_600x400.jpg"
                alt="Students at Annual Day"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* === CLUBS & ACTIVITIES === */}
      <section id="clubs" className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Extracurriculars"
            title="Clubs & Activities"
            subtitle="Over 15 clubs catering to diverse interests — from science and coding to arts and environmental activism."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLUBS_ACTIVITIES.map((club, i) => {
              const Icon = clubIconMap[club.icon] || BookOpen;
              return (
                <motion.div
                  key={club.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-xl p-6 border border-border hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="text-yellow-400" size={20} />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">
                    {club.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {club.description}
                  </p>
                  <span className="text-xs text-yellow-600 font-semibold">
                    {club.members} members
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === SPORTS === */}
      <section id="sports" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionHeader
                tag="Athletics"
                title="Sports Program"
                subtitle="Competitive sports build discipline, teamwork, and resilience. Our teams compete at district, state, and national levels."
                centered={false}
              />
              <div className="space-y-4">
                {SPORTS.map((sport, i) => (
                  <motion.div
                    key={sport.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-secondary/40 rounded-xl p-5 hover:bg-secondary transition-colors"
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <h3 className="font-bold text-school-navy flex items-center gap-2">
                        <Trophy size={16} className="text-yellow-500" />
                        {sport.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        Coach: {sport.coach}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {sport.achievements}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                <img
                  src="/assets/generated/school-sports.dim_600x400.jpg"
                  alt="School Sports Day"
                  className="w-full object-cover"
                />
              </div>
              {/* Cultural Events */}
              <h3 className="text-xl font-bold text-school-navy font-display mb-4">
                Cultural Events
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {CULTURAL_EVENTS.map((event, i) => (
                  <motion.div
                    key={event.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-secondary/40 rounded-xl p-4 hover-lift"
                  >
                    <Badge variant="outline" className="text-xs mb-2">
                      {event.month}
                    </Badge>
                    <h4 className="font-semibold text-sm text-foreground mb-1">
                      {event.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === STUDENT COUNCIL === */}
      <section className="py-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Leadership"
            title="Student Council 2024–25"
            subtitle="Elected student representatives who serve as the voice of the student body."
            light
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {STUDENT_COUNCIL.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${councilColors[i % councilColors.length]} flex items-center justify-center mx-auto mb-3 text-white font-bold`}
                >
                  {member.photo}
                </div>
                <div className="text-yellow-400 text-xs font-semibold uppercase tracking-wide mb-1">
                  {member.role}
                </div>
                <h3 className="text-white font-bold mb-1">{member.name}</h3>
                <p className="text-white/60 text-xs">{member.grade}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === GALLERY === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Gallery"
            title="Campus & Events Gallery"
            subtitle="A glimpse into the vibrant life at Sunrise Academy — from classrooms to competitions."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item, i) => {
              const Icon = galleryIconMap[item.icon] || BookOpen;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`aspect-square rounded-xl bg-gradient-to-br ${item.color} flex flex-col items-center justify-center gap-2 group hover:opacity-90 transition-opacity cursor-pointer`}
                >
                  <Icon
                    className="text-white/80 group-hover:scale-110 transition-transform"
                    size={28}
                  />
                  <span className="text-white text-xs font-medium text-center px-2">
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
