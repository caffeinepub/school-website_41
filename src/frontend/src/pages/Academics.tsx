import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ACADEMIC_CALENDAR,
  EXAM_SCHEDULE,
  SUBJECTS_BY_GRADE,
} from "@/data/schoolData";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";

const examTypeColors: Record<string, string> = {
  Internal: "bg-blue-100 text-blue-700",
  Board: "bg-red-100 text-red-700",
};

export default function Academics() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="gradient-navy py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-5 right-1/3 w-72 h-72 border-2 border-yellow-400 rounded-full" />
        </div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-yellow-500/20 text-yellow-300 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              Academic Excellence
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              A rigorous, globally benchmarked curriculum that prepares students
              for the challenges and opportunities of the 21st century.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === CURRICULUM OVERVIEW === */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Curriculum"
            title="Our Educational Programs"
            subtitle="Structured learning pathways designed to meet each student's developmental needs across three distinct sections."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                level: "Primary",
                grades: "Grades 1–5",
                icon: BookOpen,
                color: "border-green-500",
                iconBg: "bg-green-50",
                iconColor: "text-green-600",
                desc: "Building strong foundations in literacy, numeracy, and creative thinking through play-based and discovery learning.",
                highlights: [
                  "Phonics & Reading",
                  "Numeracy Basics",
                  "Environmental Science",
                  "Art & Craft",
                  "Music & Movement",
                ],
              },
              {
                level: "Middle School",
                grades: "Grades 6–8",
                icon: ClipboardList,
                color: "border-blue-500",
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600",
                desc: "Deepening subject knowledge while fostering critical thinking, research skills, and collaborative learning.",
                highlights: [
                  "STEM Integration",
                  "Language Arts",
                  "Project-Based Learning",
                  "Digital Literacy",
                  "Social Sciences",
                ],
              },
              {
                level: "Secondary & Senior",
                grades: "Grades 9–12",
                icon: Trophy,
                color: "border-yellow-500",
                iconBg: "bg-yellow-50",
                iconColor: "text-yellow-600",
                desc: "Preparing students for board examinations and higher education with specialized streams and career guidance.",
                highlights: [
                  "Science Stream",
                  "Commerce Stream",
                  "Humanities",
                  "Board Exam Prep",
                  "College Counseling",
                ],
              },
            ].map(
              (
                {
                  level,
                  grades,
                  icon: Icon,
                  color,
                  iconBg,
                  iconColor,
                  desc,
                  highlights,
                },
                i,
              ) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white rounded-2xl p-7 border-t-4 ${color} shadow-sm hover-lift`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={iconColor} size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-school-navy font-display mb-1">
                    {level}
                  </h3>
                  <p className={`text-sm font-semibold mb-3 ${iconColor}`}>
                    {grades}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {desc}
                  </p>
                  <ul className="space-y-1.5">
                    {highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className={`${iconColor} mt-0.5 shrink-0`}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ),
            )}
          </div>

          {/* Subjects by Grade Table */}
          <h3 className="text-xl font-bold text-school-navy mb-5 font-display">
            Subjects Offered by Grade Level
          </h3>
          <div className="rounded-xl overflow-hidden border border-border">
            <Table>
              <TableHeader>
                <TableRow className="gradient-navy">
                  <TableHead className="text-white font-semibold">
                    Grade Group
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Subjects Offered
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SUBJECTS_BY_GRADE.map((row, i) => (
                  <TableRow
                    key={row.grades}
                    className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}
                  >
                    <TableCell className="font-semibold text-school-navy whitespace-nowrap">
                      Grades {row.grades}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1.5">
                        {row.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* === ACADEMIC CALENDAR & EXAMS === */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Schedule"
            title="Calendar & Examinations"
            subtitle="Plan ahead with our comprehensive academic calendar, term dates, and examination schedule."
          />

          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="calendar" className="flex items-center gap-2">
                <Calendar size={15} />
                Academic Calendar
              </TabsTrigger>
              <TabsTrigger
                value="exams"
                className="flex items-center gap-2"
                id="exams"
              >
                <ClipboardList size={15} />
                Examination Schedule
              </TabsTrigger>
            </TabsList>

            <TabsContent value="calendar">
              <div className="space-y-4" id="calendar">
                {ACADEMIC_CALENDAR.map((term, i) => (
                  <motion.div
                    key={term.term}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-xl p-5 border border-border"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                      <h3 className="font-bold text-school-navy text-lg font-display">
                        {term.term}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full">
                        {term.start} — {term.end}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {term.events.map((event) => (
                        <Badge
                          key={event}
                          variant="outline"
                          className="text-xs"
                        >
                          {event}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="exams">
              <div
                className="rounded-xl overflow-hidden border border-border"
                id="exams"
              >
                <Table>
                  <TableHeader>
                    <TableRow className="gradient-navy">
                      <TableHead className="text-white">Examination</TableHead>
                      <TableHead className="text-white">Classes</TableHead>
                      <TableHead className="text-white">Dates</TableHead>
                      <TableHead className="text-white">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {EXAM_SCHEDULE.map((exam, i) => (
                      <TableRow
                        key={exam.exam}
                        className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}
                      >
                        <TableCell className="font-medium">
                          {exam.exam}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {exam.grades}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {exam.startDate} – {exam.endDate}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${examTypeColors[exam.type]}`}
                          >
                            {exam.type}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* === RESULTS & ACHIEVEMENTS === */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Results"
            title="Academic Achievements"
            subtitle="Year after year, our students demonstrate outstanding performance in board examinations and competitive assessments."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                label: "Grade 12 Pass Rate",
                value: "100%",
                detail: "AY 2023–24",
              },
              {
                label: "Distinctions (Gr. 12)",
                value: "38",
                detail: "Students scored >90%",
              },
              {
                label: "Grade 10 Pass Rate",
                value: "99.2%",
                detail: "AY 2023–24",
              },
              {
                label: "State Rank Holders",
                value: "6",
                detail: "Top 100 in state",
              },
            ].map(({ label, value, detail }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/40 rounded-xl p-6 text-center hover-lift"
              >
                <div className="text-4xl font-bold text-school-navy font-display mb-1">
                  {value}
                </div>
                <div className="font-semibold text-foreground text-sm mb-1">
                  {label}
                </div>
                <div className="text-muted-foreground text-xs">{detail}</div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-school-navy font-display mb-5">
              Recent Academic Milestones
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Arjun Mehta ranked 3rd in the State for Grade 12 Science stream (2024)",
                "Sunrise Academy placed in Top 5 schools in the district for Grade 10 results (2024)",
                "First school in the region to achieve 100% pass rate three consecutive years (2022–24)",
                "Mei Lin Zhang won the National Mathematics Olympiad Gold Medal (2024)",
                "9 students selected for IIT-JEE Advanced Coaching Scholarship (2024)",
                "Drama Club student Sophie Williams received the State Young Writers Award (2023)",
              ].map((milestone, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: static list
                <div key={i} className="flex gap-3 items-start">
                  <Trophy
                    size={16}
                    className="text-yellow-500 mt-0.5 shrink-0"
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
