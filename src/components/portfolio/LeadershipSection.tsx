import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Users, Palette, Mic } from "lucide-react";

const achievements = [
  { icon: Mic, text: "Organized & coordinated the Trentech National-Level Symposium in the Dept. of CSE" },
  { icon: Users, text: "Worked as Event Coordinator at Trentech 2025 — organised the non-technical event \"Quiz\"" },
  { icon: Trophy, text: "Led a team of volunteers ensuring smooth execution of symposium activities" },
  { icon: Palette, text: "Designed professional posters, logos & promotional materials using CorelDRAW" },
];

const LeadershipSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="Leadership & Achievements" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 glass rounded-xl p-5"
          >
            <div className="p-3 rounded-lg bg-primary/10 shrink-0">
              <a.icon size={20} className="text-primary" />
            </div>
            <p className="text-foreground text-sm font-medium">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
