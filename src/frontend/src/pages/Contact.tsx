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
import { Textarea } from "@/components/ui/textarea";
import { SCHOOL_INFO } from "@/data/schoolData";
import { useActor } from "@/hooks/useActor";
import { useSubmitContactForm } from "@/hooks/useQueries";
import { Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const SUBJECTS = [
  "General Inquiry",
  "Admission Information",
  "Academic Query",
  "Fee & Finance",
  "Transport",
  "Events & Activities",
  "Complaint / Grievance",
  "Other",
];

export default function Contact() {
  const { actor } = useActor();
  const submitContact = useSubmitContactForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.subject) {
      toast.error("Please select a subject");
      return;
    }
    if (!actor) {
      toast.error("Unable to connect to server. Please try again.");
      return;
    }
    try {
      await submitContact.mutateAsync({ actor, ...form });
      toast.success("Message sent! We'll respond within 1 business day.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try emailing us directly.");
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      label: "Our Address",
      value: SCHOOL_INFO.address,
      href: "https://maps.google.com",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: SCHOOL_INFO.phone,
      href: `tel:${SCHOOL_INFO.phone}`,
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Mail,
      label: "Email Address",
      value: SCHOOL_INFO.email,
      href: `mailto:${SCHOOL_INFO.email}`,
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: SCHOOL_INFO.hours,
      href: null,
      color: "bg-purple-50 text-purple-600",
    },
  ];

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-3">
              Get In Touch
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              We'd love to hear from you. Reach out for admissions, general
              inquiries, or any assistance you need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === CONTACT CARDS === */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactCards.map(
              ({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-border text-center hover-lift"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${color.split(" ")[0]} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={color.split(" ")[1]} size={22} />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2">
                    {label}
                  </h3>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-school-navy transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{value}</p>
                  )}
                </motion.div>
              ),
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-14">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                tag="Find Us"
                title="We're Easy to Find"
                centered={false}
              />
              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border bg-secondary/40 h-80 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-yellow-400" size={28} />
                  </div>
                  <h3 className="font-bold text-school-navy text-lg font-display mb-1">
                    Sunrise Academy
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {SCHOOL_INFO.address}
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 gradient-navy text-white text-sm rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Departments */}
              <div className="mt-8">
                <h3 className="font-bold text-school-navy mb-4">
                  Department Contacts
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      dept: "Admissions Office",
                      phone: "Ext. 101",
                      email: "admissions@sunriseacademy.edu",
                    },
                    {
                      dept: "Academic Affairs",
                      phone: "Ext. 102",
                      email: "academics@sunriseacademy.edu",
                    },
                    {
                      dept: "Finance & Fees",
                      phone: "Ext. 103",
                      email: "finance@sunriseacademy.edu",
                    },
                    {
                      dept: "Transport Office",
                      phone: "Ext. 204",
                      email: "transport@sunriseacademy.edu",
                    },
                  ].map(({ dept, phone, email }) => (
                    <div
                      key={dept}
                      className="flex flex-col sm:flex-row sm:justify-between bg-secondary/40 rounded-lg px-4 py-3 text-sm"
                    >
                      <span className="font-semibold text-foreground">
                        {dept}
                      </span>
                      <div className="flex gap-4 text-muted-foreground mt-1 sm:mt-0">
                        <span>{phone}</span>
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-school-navy transition-colors"
                        >
                          {email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <SectionHeader
                tag="Message Us"
                title="Send a Message"
                centered={false}
              />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1-555-000-0000"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={form.subject}
                    onValueChange={(v) => handleChange("subject", v)}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECTS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contactMessage">Message *</Label>
                  <Textarea
                    id="contactMessage"
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitContact.isPending}
                  className="w-full gradient-navy text-white font-bold py-3 h-auto text-base"
                >
                  {submitContact.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
