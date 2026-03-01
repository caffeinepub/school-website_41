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
import {
  PARENT_NOTICES,
  PT_MEETINGS,
  SCHOOL_RULES,
  TRANSPORT_ROUTES,
} from "@/data/schoolData";
import {
  AlertTriangle,
  Bell,
  BookOpen,
  Bus,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const noticeCategoryColors: Record<string, string> = {
  Finance: "bg-purple-100 text-purple-700",
  Meeting: "bg-blue-100 text-blue-700",
  Health: "bg-green-100 text-green-700",
  General: "bg-gray-100 text-gray-700",
  Activities: "bg-orange-100 text-orange-700",
  Academic: "bg-indigo-100 text-indigo-700",
  Transport: "bg-yellow-100 text-yellow-700",
};

function AccordionItem({
  category,
  rules,
}: { category: string; rules: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-secondary/30 transition-colors text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-school-navy">{category}</span>
        <ChevronDown
          size={18}
          className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-2 bg-secondary/20 space-y-2">
          {rules.map((rule, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static rule list with no reordering
            <div key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-yellow-500 font-bold mt-0.5 shrink-0">
                {i + 1}.
              </span>
              {rule}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Parents() {
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
              Parents Portal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              Parents Corner
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              Everything you need to stay connected, informed, and engaged with
              your child's school journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === NOTICES === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Notices"
            title="Important Notices for Parents"
            subtitle="Stay up to date with the latest school communications and important announcements."
          />

          <div className="space-y-3">
            {PARENT_NOTICES.map((notice, i) => (
              <motion.div
                key={notice.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-xl p-5 border border-border flex gap-4 items-start hover:shadow-sm transition-shadow"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${notice.urgent ? "bg-red-100" : "bg-blue-100"}`}
                >
                  {notice.urgent ? (
                    <AlertTriangle size={16} className="text-red-500" />
                  ) : (
                    <Bell size={16} className="text-blue-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm">
                    {notice.title}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${noticeCategoryColors[notice.category] || "bg-gray-100 text-gray-700"}`}
                    >
                      {notice.category}
                    </span>
                    {notice.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        Urgent
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {notice.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === PT MEETINGS === */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Schedule"
            title="Parent-Teacher Meeting Schedule"
            subtitle="We believe in strong parent-teacher partnerships. The following meetings are scheduled for the current academic year."
          />

          <div className="rounded-xl overflow-hidden border border-border">
            <Table>
              <TableHeader>
                <TableRow className="gradient-navy">
                  <TableHead className="text-white">Date</TableHead>
                  <TableHead className="text-white">Time</TableHead>
                  <TableHead className="text-white">Section</TableHead>
                  <TableHead className="text-white">Venue</TableHead>
                  <TableHead className="text-white">Mode</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PT_MEETINGS.map((meeting, i) => (
                  <TableRow
                    key={meeting.date}
                    className={i % 2 === 0 ? "bg-white" : "bg-secondary/20"}
                  >
                    <TableCell className="font-medium whitespace-nowrap">
                      {meeting.date}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                      {meeting.time}
                    </TableCell>
                    <TableCell className="font-medium text-sm">
                      {meeting.section}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {meeting.venue}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${meeting.mode === "Online" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                      >
                        {meeting.mode}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* === SCHOOL RULES === */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            tag="Guidelines"
            title="School Rules & Expectations"
            subtitle="Clear guidelines that help maintain a safe, respectful, and productive learning environment for all."
          />

          <div className="space-y-3">
            {SCHOOL_RULES.map((section, i) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem
                  category={section.category}
                  rules={section.rules}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <div className="flex gap-3 items-start">
              <BookOpen className="text-yellow-600 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-semibold text-yellow-800 text-sm mb-1">
                  Complete Student Handbook
                </p>
                <p className="text-yellow-700 text-xs">
                  The full Student & Parent Handbook is available at the school
                  office and will be emailed to all enrolled families at the
                  start of the academic year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === TRANSPORT === */}
      <section className="py-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Transport"
            title="School Bus Routes"
            subtitle="Safe, reliable, and GPS-tracked school transport serving major areas of the city."
            light
          />

          <div className="rounded-xl overflow-hidden border border-white/20">
            <Table>
              <TableHeader>
                <TableRow className="bg-white/10">
                  <TableHead className="text-white font-semibold">
                    Route
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Areas Covered
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Morning Pickup
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Afternoon Drop
                  </TableHead>
                  <TableHead className="text-white font-semibold">
                    Capacity
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TRANSPORT_ROUTES.map((route, i) => (
                  <TableRow
                    key={route.routeNo}
                    className={i % 2 === 0 ? "bg-white/5" : "bg-white/10"}
                  >
                    <TableCell className="font-bold text-yellow-400">
                      {route.routeNo}
                    </TableCell>
                    <TableCell className="text-white/80 text-sm">
                      {route.area}
                    </TableCell>
                    <TableCell className="text-white/80 text-sm">
                      {route.departure}
                    </TableCell>
                    <TableCell className="text-white/80 text-sm">
                      {route.return}
                    </TableCell>
                    <TableCell className="text-white/80 text-sm">
                      {route.seats} seats
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Bus size={15} className="text-yellow-400" /> All buses are
              GPS-tracked and monitored
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-yellow-400" /> Bus transport
              fee: $1,200/year (optional)
            </span>
            <span className="flex items-center gap-2">
              <Bell size={15} className="text-yellow-400" /> Contact transport
              office for route queries: ext. 204
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
