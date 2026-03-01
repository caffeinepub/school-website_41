import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { DEPARTMENTS } from "@/data/schoolData";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const avatarColors = [
  "from-blue-600 to-blue-800",
  "from-indigo-600 to-indigo-800",
  "from-emerald-600 to-emerald-800",
  "from-amber-600 to-amber-800",
  "from-purple-600 to-purple-800",
  "from-rose-600 to-rose-800",
  "from-cyan-600 to-cyan-800",
  "from-orange-600 to-orange-800",
];

export default function Faculty() {
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              Faculty & Staff
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              Meet the dedicated professionals who inspire, guide, and support
              our students every day.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Faculty Stats */}
      <div className="bg-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "85+", label: "Total Faculty" },
              { value: "12", label: "Ph.D. Holders" },
              { value: "6", label: "Departments" },
              { value: "15+", label: "Avg. Experience" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-navy-dark font-display">
                  {value}
                </div>
                <div className="text-navy-dark/70 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === DEPARTMENTS === */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {DEPARTMENTS.map((dept, deptIdx) => (
            <section key={dept.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-0.5 w-8 bg-yellow-500" />
                  <h2 className="text-2xl font-bold text-school-navy font-display">
                    {dept.name}
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm ml-12">
                  Department Head:{" "}
                  <span className="font-semibold text-foreground">
                    {dept.head}
                  </span>
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {dept.teachers.map((teacher, tIdx) => {
                  const isHead = teacher.name === dept.head;
                  const colorClass =
                    avatarColors[(deptIdx * 4 + tIdx) % avatarColors.length];
                  return (
                    <motion.div
                      key={teacher.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: tIdx * 0.08 }}
                      className={`bg-white rounded-xl p-6 border hover-lift text-center ${
                        isHead
                          ? "border-yellow-400 shadow-yellow-100 shadow-md"
                          : "border-border"
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg`}
                      >
                        {teacher.initials}
                      </div>

                      {isHead && (
                        <div className="flex justify-center mb-3">
                          <Badge className="bg-yellow-500 text-navy-dark text-xs flex items-center gap-1">
                            <Star size={10} />
                            Dept. Head
                          </Badge>
                        </div>
                      )}

                      <h3 className="font-bold text-foreground text-sm mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-school-navy font-semibold text-xs mb-2">
                        {teacher.subject}
                      </p>
                      <p className="text-muted-foreground text-xs mb-3">
                        {teacher.qualification}
                      </p>
                      <div className="bg-secondary/50 rounded-lg px-3 py-1.5 inline-block">
                        <span className="text-xs text-muted-foreground">
                          {teacher.experience} years exp.
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* === JOIN US CTA === */}
      <section className="py-16 bg-secondary/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader
            tag="Careers"
            title="Join Our Team"
            subtitle="We are always looking for passionate educators who share our commitment to student success. Open positions are listed on our careers page."
          />
          <a
            href="mailto:careers@sunriseacademy.edu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-navy text-white font-bold hover:opacity-90 transition-opacity"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}
