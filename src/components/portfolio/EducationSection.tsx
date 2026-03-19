import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="Education & Training" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col md:flex-row md:justify-end mb-12"
        >
          <div className="md:w-1/2 md:pr-12 ml-16 md:ml-0">
            <div className="glass rounded-2xl p-6 glow-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <span className="text-sm font-mono text-primary">2022 – 2026</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">B.E. Computer Science & Engineering</h3>
              <p className="text-muted-foreground text-sm mb-2">
                M.P. Nachimuthu M. Jaganathan Engineering College, Chennimalai, Erode
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                CGPA: 8/10
              </span>
            </div>
          </div>
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />
        </motion.div>

        {/* Training */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex flex-col md:flex-row mb-12"
        >
          <div className="md:w-1/2 md:ml-auto md:pl-12 ml-16 md:ml-auto">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <span className="text-sm font-mono text-primary">Feb 2026 – Jun 2026 (Ongoing)</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">Java Full Stack Trainee</h3>
              <p className="text-muted-foreground text-sm mb-3">Besant Technologies, Bangalore</p>
              <p className="text-foreground/80 text-sm mb-3">
                Hands-on training in building full stack web applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "MySQL", "JavaScript", "React", "HTML", "CSS"].map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full bg-primary/60 border-4 border-background -translate-x-1/2 z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default EducationSection;
