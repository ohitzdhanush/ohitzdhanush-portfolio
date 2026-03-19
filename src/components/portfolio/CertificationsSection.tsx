import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";

const certs = [
  { title: "Introduction to Python", issuer: "Edvanta" },
  { title: "CorelDRAW Graphic Design", issuer: "Arena" },
  { title: "C Programming", issuer: "Bharathidasan University" },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading title="Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="glass rounded-2xl p-6 text-center hover:glow-border transition-shadow duration-500"
          >
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Award size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.issuer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
