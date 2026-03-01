import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ADMISSION_STEPS, FEE_STRUCTURE } from "@/data/schoolData";
import { useActor } from "@/hooks/useActor";
import { useSubmitAdmissionForm } from "@/hooks/useQueries";
import { CheckCircle2, ClipboardCheck, FileText, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const GRADES = [
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
];

const REQUIRED_DOCS = [
  "Birth Certificate (original + photocopy)",
  "Previous school's Transfer Certificate (TC)",
  "Previous 2 years' academic report cards",
  "Aadhar Card / Passport (for identity proof)",
  "4 recent passport-size photographs (colored)",
  "Proof of residence (utility bill or lease agreement)",
  "Medical fitness certificate from a registered doctor",
  "Caste/Category certificate (if applicable)",
];

const ELIGIBILITY = [
  {
    grades: "Kindergarten – Grade 2",
    criteria:
      "Age 4–8 years. Admission based on informal interaction and school readiness assessment.",
  },
  {
    grades: "Grade 3 – Grade 5",
    criteria:
      "Age 8–12 years. Must appear for entrance test in English, Mathematics, and Environmental Science.",
  },
  {
    grades: "Grade 6 – Grade 8",
    criteria:
      "Age 11–15 years. Entrance test in English, Mathematics, Science, and Social Studies.",
  },
  {
    grades: "Grade 9 – Grade 10",
    criteria:
      "Based on Grade 8 marks and interview. Science entrance test required.",
  },
  {
    grades: "Grade 11 – Grade 12",
    criteria:
      "Based on Grade 10 board marks (min. 65% for Science stream). Stream allocation by merit.",
  },
];

export default function Admissions() {
  const { actor } = useActor();
  const submitAdmission = useSubmitAdmissionForm();

  const [form, setForm] = useState({
    studentName: "",
    gradeApplyingFor: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.gradeApplyingFor) {
      toast.error("Please select a grade");
      return;
    }
    if (!actor) {
      toast.error("Unable to connect to server. Please try again.");
      return;
    }
    try {
      await submitAdmission.mutateAsync({ actor, ...form });
      toast.success(
        "Application submitted! We will contact you within 2 business days.",
      );
      setForm({
        studentName: "",
        gradeApplyingFor: "",
        parentName: "",
        parentEmail: "",
        parentPhone: "",
        message: "",
      });
    } catch {
      toast.error(
        "Submission failed. Please try again or contact us directly.",
      );
    }
  };

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
              Admissions
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              Join Sunrise Academy
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              Admissions open for Academic Year 2025–26. Begin your child's
              journey towards excellence today.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === ADMISSION PROCESS === */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="How to Apply"
            title="Admission Process"
            subtitle="Follow these six simple steps to secure your child's place at Sunrise Academy."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADMISSION_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-border hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 gradient-navy rounded-bl-3xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {step.step}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <ClipboardCheck className="text-yellow-600" size={18} />
                </div>
                <h3 className="font-bold text-school-navy text-lg font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === ELIGIBILITY === */}
      <section id="eligibility" className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            tag="Criteria"
            title="Eligibility Requirements"
            subtitle="Age and academic eligibility criteria for admission to various grade groups."
          />
          <div className="space-y-3">
            {ELIGIBILITY.map((item, i) => (
              <motion.div
                key={item.grades}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-xl p-5 flex gap-4 items-start border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2.5 shrink-0" />
                <div>
                  <span className="font-bold text-school-navy">
                    {item.grades}:
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    {item.criteria}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === REQUIRED DOCUMENTS === */}
      <section id="documents" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                tag="Documents"
                title="Required Documents"
                subtitle="Please prepare the following documents before submitting the application."
                centered={false}
              />
              <div className="space-y-3">
                {REQUIRED_DOCS.map((doc, i) => (
                  <motion.div
                    key={doc}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle2
                      className="text-green-500 shrink-0 mt-0.5"
                      size={18}
                    />
                    <p className="text-muted-foreground text-sm">{doc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fee Structure */}
            <div id="fees">
              <SectionHeader
                tag="Fees"
                title="Fee Structure 2025–26"
                centered={false}
              />
              <div className="rounded-xl overflow-hidden border border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="gradient-navy">
                      <TableHead className="text-white">Category</TableHead>
                      <TableHead className="text-white">
                        Applicable For
                      </TableHead>
                      <TableHead className="text-white text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {FEE_STRUCTURE.map((fee, i) => (
                      <TableRow
                        key={fee.category}
                        className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}
                      >
                        <TableCell className="font-medium text-sm">
                          {fee.category}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-xs">
                          {fee.grades}
                        </TableCell>
                        <TableCell className="text-right font-bold text-school-navy text-sm">
                          {fee.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-xs text-muted-foreground mt-3 flex gap-2">
                <FileText size={13} className="shrink-0 mt-0.5" />
                Fees are payable in 2 instalments. Sibling discount of 10%
                available. Contact admissions office for scholarship details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === ADMISSION FORM === */}
      <section id="form" className="py-20 gradient-navy">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader
            tag="Apply Now"
            title="Admission Inquiry Form"
            subtitle="Fill out the form below and our admissions team will get in touch with you within 2 business days."
            light
          />

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-2xl space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  placeholder="Full name of student"
                  value={form.studentName}
                  onChange={(e) => handleChange("studentName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="grade">Grade Applying For *</Label>
                <Select
                  value={form.gradeApplyingFor}
                  onValueChange={(v) => handleChange("gradeApplyingFor", v)}
                >
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {GRADES.map((g) => (
                      <SelectItem key={g} value={g}>
                        {g}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="parentName">Parent / Guardian Name *</Label>
              <Input
                id="parentName"
                placeholder="Full name of parent or guardian"
                value={form.parentName}
                onChange={(e) => handleChange("parentName", e.target.value)}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="parentEmail">Parent Email *</Label>
                <Input
                  id="parentEmail"
                  type="email"
                  placeholder="parent@email.com"
                  value={form.parentEmail}
                  onChange={(e) => handleChange("parentEmail", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="parentPhone">Parent Phone *</Label>
                <Input
                  id="parentPhone"
                  type="tel"
                  placeholder="+1-555-000-0000"
                  value={form.parentPhone}
                  onChange={(e) => handleChange("parentPhone", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Any specific questions or additional information..."
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
              />
            </div>

            <Button
              type="submit"
              disabled={submitAdmission.isPending}
              className="w-full gradient-navy text-white font-bold py-3 h-auto text-base"
            >
              {submitAdmission.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Application...
                </>
              ) : (
                "Submit Admission Inquiry"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By submitting this form, you agree to our privacy policy. We will
              contact you within 2 business days.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
