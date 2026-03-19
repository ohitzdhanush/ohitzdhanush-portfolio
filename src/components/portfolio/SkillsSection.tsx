import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 70 },
      { name: "C / C++", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Spring Boot", level: 70 },
      { name: "Node.js / Express", level: 65 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "Tools & Soft Skills",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "CorelDRAW", level: 70 },
      { name: "Leadership", level: 85 },
      { name: "Technical Writing", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs font-mono text-primary">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(200,90%,65%)]"
      />
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-primary mb-5">{cat.title}</h3>
            {cat.skills.map((skill, si) => (
              <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + si * 0.08} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
