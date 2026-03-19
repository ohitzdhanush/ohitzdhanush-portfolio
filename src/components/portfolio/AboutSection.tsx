import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Target, GraduationCap } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "CGPA 8/10", desc: "B.E. CSE" },
  { icon: Code2, label: "Full Stack", desc: "Java Training" },
  { icon: Target, label: "Goal", desc: "Team Lead at Zoho" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-8 md:p-10"
      >
        <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-8">
          I am a Computer Science and Engineering student with a CGPA of 8/10 and a strong foundation in software development. 
          I am currently undergoing a 5-month Java Full Stack training at Besant Technologies, Bangalore (Feb 2026 – Jun 2026), 
          where I am building real-world skills in backend and frontend development. My career goal is to grow into a Team Lead 
          or Senior Developer role in leading IT companies like Zoho.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <h.icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{h.label}</p>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
