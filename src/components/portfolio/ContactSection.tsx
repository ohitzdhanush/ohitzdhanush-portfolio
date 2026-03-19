import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { z } from "zod";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const contactLinks = [
  { icon: Mail, label: "mdhanush961@gmail.com", href: "mailto:mdhanush961@gmail.com" },
  { icon: Phone, label: "+91 6374611394", href: "tel:+916374611394" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dhanush-kumar-m-a529002a2" },
  { icon: Github, label: "GitHub", href: "https://github.com/ohitzdhanush" },
];

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Please write a slightly longer message")
    .max(2000, "Message must be under 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;
type ContactField = keyof ContactForm;
type FieldErrors = Partial<Record<ContactField, string>>;

const emptyForm: ContactForm = { name: "", email: "", message: "" };

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>(emptyForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validateForm = (values: ContactForm): FieldErrors => {
    const result = contactSchema.safeParse(values);

    if (result.success) {
      return {};
    }

    const flattened = result.error.flatten().fieldErrors;

    return {
      name: flattened.name?.[0],
      email: flattened.email?.[0],
      message: flattened.message?.[0],
    };
  };

  const visibleErrors = useMemo(() => {
    return Object.fromEntries(
      Object.entries(fieldErrors).filter(([field]) => touched[field as ContactField])
    ) as FieldErrors;
  }, [fieldErrors, touched]);

  const handleFieldChange = (field: ContactField, value: string) => {
    const nextForm = { ...form, [field]: value };
    setForm(nextForm);
    setSubmitState(null);

    if (touched[field]) {
      const nextErrors = validateForm(nextForm);
      setFieldErrors(nextErrors);
    }
  };

  const handleFieldBlur = (field: ContactField) => {
    const nextTouched = { ...touched, [field]: true };
    setTouched(nextTouched);
    setFieldErrors(validateForm(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextTouched = { name: true, email: true, message: true };
    const nextErrors = validateForm(form);

    setTouched(nextTouched);
    setFieldErrors(nextErrors);
    setSubmitState(null);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState({
        type: "error",
        message: "Please fix the highlighted fields before sending.",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
      });

      if (error) throw error;

      setForm(emptyForm);
      setFieldErrors({});
      setTouched({});
      setSubmitState({
        type: "success",
        message: "Message sent successfully — I’ll get back to you soon.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Couldn’t send your message right now. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Get In Touch" subtitle="Feel free to reach out for collaborations or just a friendly hello!" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {contactLinks.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:glow-border transition-shadow duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <c.icon size={20} className="text-primary" />
                </div>
                <span className="text-foreground text-sm font-medium">{c.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 space-y-4"
            noValidate
          >
            {submitState && (
              <div
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                  submitState.type === "success"
                    ? "border-primary/30 bg-primary/10 text-foreground"
                    : "border-destructive/30 bg-destructive/10 text-destructive"
                }`}
                role="status"
                aria-live="polite"
              >
                {submitState.type === "success" ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                ) : (
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                )}
                <span>{submitState.message}</span>
              </div>
            )}

            <div className="space-y-2">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                onBlur={() => handleFieldBlur("name")}
                aria-invalid={Boolean(visibleErrors.name)}
                className={`bg-secondary/50 focus:border-primary ${
                  visibleErrors.name ? "border-destructive/70 focus:border-destructive" : "border-border/50"
                }`}
              />
              {visibleErrors.name && <p className="text-sm text-destructive">{visibleErrors.name}</p>}
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                onBlur={() => handleFieldBlur("email")}
                aria-invalid={Boolean(visibleErrors.email)}
                className={`bg-secondary/50 focus:border-primary ${
                  visibleErrors.email ? "border-destructive/70 focus:border-destructive" : "border-border/50"
                }`}
              />
              {visibleErrors.email && <p className="text-sm text-destructive">{visibleErrors.email}</p>}
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => handleFieldChange("message", e.target.value)}
                onBlur={() => handleFieldBlur("message")}
                rows={5}
                aria-invalid={Boolean(visibleErrors.message)}
                className={`resize-none bg-secondary/50 focus:border-primary ${
                  visibleErrors.message ? "border-destructive/70 focus:border-destructive" : "border-border/50"
                }`}
              />
              <div className="flex items-center justify-between gap-3 text-sm">
                <div>
                  {visibleErrors.message ? (
                    <p className="text-destructive">{visibleErrors.message}</p>
                  ) : (
                    <p className="text-muted-foreground">Minimum 10 characters for a clearer message.</p>
                  )}
                </div>
                <span className="text-muted-foreground">{form.message.trim().length}/2000</span>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full gap-2 font-semibold"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending your message..." : "Send Message"}
            </Button>

            <p className="text-center text-sm text-muted-foreground" aria-live="polite">
              {loading ? "Please wait while your message is being delivered." : "I usually reply as soon as possible."}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
