import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "College Fine Management System",
    description:
      "A responsive web-based system to maintain student fine records, generate reports, and ensure transparency within the college administration.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Simple Banking System in C",
    description:
      "Console-based banking application implementing account creation, deposit, withdrawal, and file handling for persistent data storage.",
    tech: ["C", "File Handling"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <SectionHeading title="Projects" subtitle="Things I've built" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass rounded-2xl p-6 group hover:glow-border transition-shadow duration-500"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary/10 gap-2"
            >
              <ExternalLink size={14} />
              View Project
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
