import SectionHeader from "@/components/SectionHeader";
import { ACHIEVEMENTS, CORE_VALUES, MILESTONES } from "@/data/schoolData";
import {
  CheckCircle2,
  Heart,
  Lightbulb,
  Quote,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const valueIcons = { Star, Shield, Lightbulb, Heart };

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="gradient-navy py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-5 left-1/4 w-72 h-72 border border-white rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 border-2 border-yellow-400 rounded-full" />
        </div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-yellow-500/20 text-yellow-300 mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              Our Story & Heritage
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              25 years of nurturing excellence, shaping futures, and building a
              legacy of academic and personal achievement.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === SCHOOL HISTORY === */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                tag="Our History"
                title="25 Years of Shaping Leaders"
                subtitle="From humble beginnings to becoming a premier institution, our journey reflects our unwavering commitment to excellence."
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sunrise Academy was founded in 1999 by Dr. Eleanor Walsh with a
                vision to create a school that would not just educate students,
                but transform them into thoughtful, compassionate, and capable
                leaders. Starting with 120 students in a modest campus, we have
                grown into an institution of over 1,200 students.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our academic programs are globally benchmarked while remaining
                deeply rooted in values. From our first graduating batch in 2002
                to our record-breaking board results of 2024, every milestone
                has been a testament to the dedication of our students,
                teachers, and parents.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-4">
              {MILESTONES.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-5 items-start group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gradient-navy flex items-center justify-center text-white font-bold text-xs shrink-0 group-hover:scale-105 transition-transform">
                      {milestone.year}
                    </div>
                    {i < MILESTONES.length - 1 && (
                      <div className="w-0.5 h-8 bg-border mt-1" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-3">
                    {milestone.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section id="mission" className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Purpose"
            title="Mission & Vision"
            subtitle="Guided by a clear sense of purpose, everything we do at Sunrise Academy is aligned with these core commitments."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-t-4 border-yellow-500 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center mb-5">
                <Star className="text-yellow-400" size={22} />
              </div>
              <h3 className="text-2xl font-bold font-display text-school-navy mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a transformative educational experience that develops
                intellectual curiosity, moral character, and leadership skills —
                empowering every student to reach their highest potential and
                contribute meaningfully to society.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl p-8 border-t-4 border-school-navy hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center mb-5">
                <Lightbulb className="text-white" size={22} />
              </div>
              <h3 className="text-2xl font-bold font-display text-school-navy mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized globally as a beacon of educational excellence
                — a school where diverse talents flourish, where values are
                lived rather than merely taught, and where every graduate
                becomes a confident, ethical, and innovative citizen of the
                world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Values"
            title="What We Stand For"
            subtitle="These four pillars define who we are and guide every decision we make at Sunrise Academy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, i) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-secondary/40 hover:bg-secondary transition-colors hover-lift"
                >
                  <div
                    className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      value.color === "gold" ? "bg-yellow-100" : "gradient-navy"
                    }`}
                  >
                    <Icon
                      className={
                        value.color === "gold"
                          ? "text-yellow-600"
                          : "text-yellow-400"
                      }
                      size={26}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-school-navy mb-2 font-display">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === PRINCIPAL'S MESSAGE === */}
      <section id="principal" className="py-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="Leadership" title="Principal's Message" light />
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-40 h-40 rounded-2xl overflow-hidden mx-auto mb-4 border-4 border-yellow-500/40">
                <img
                  src="/assets/generated/principal-photo.dim_300x300.jpg"
                  alt="Principal Dr. James R. Whitmore"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-xl font-display">
                Dr. James R. Whitmore
              </h3>
              <p className="text-yellow-400 text-sm mt-1">
                Principal, Sunrise Academy
              </p>
              <p className="text-white/60 text-xs mt-1">
                Ph.D. Education, Stanford University
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <Quote className="text-yellow-400 mb-4" size={32} />
              <p className="text-white/90 leading-relaxed mb-4 text-lg italic font-display">
                "Education is not the filling of a pail, but the lighting of a
                fire."
              </p>
              <p className="text-white/75 leading-relaxed mb-4">
                Dear Students, Parents, and Friends of Sunrise Academy — it is
                with immense pride and humility that I welcome you to our
                beloved institution. For over two decades, Sunrise Academy has
                stood as a testament to what is possible when a community comes
                together with a shared purpose: the education and empowerment of
                every child.
              </p>
              <p className="text-white/75 leading-relaxed mb-4">
                Our academic results speak for themselves, but what truly makes
                Sunrise Academy exceptional is the character of our students. We
                have produced not just scholars, but leaders, artists, athletes,
                scientists, and compassionate human beings who are making a
                difference in the world.
              </p>
              <p className="text-white/75 leading-relaxed">
                As we continue to evolve and grow, our commitment remains
                unchanged: every child who walks through our gates deserves the
                best education, the best guidance, and every opportunity to
                shine. I look forward to partnering with you in this most
                important of journeys.
              </p>
              <p className="text-yellow-400 font-semibold mt-5">
                — Dr. James R. Whitmore
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === ACHIEVEMENTS === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Recognition"
            title="Awards & Achievements"
            subtitle="Our commitment to excellence has been recognized by leading educational and professional bodies."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl bg-secondary/40 hover:bg-secondary transition-colors hover-lift"
              >
                <CheckCircle2
                  className="text-yellow-500 shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {achievement.organization}
                  </p>
                  <span className="inline-block mt-1.5 text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
