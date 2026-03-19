import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-4 border-primary/40 glow-border mb-4">
              <img src={profilePhoto} alt="Dhanush Kumar" className="w-full h-full object-cover object-top" />
            </div>
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              Java Full Stack Developer
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
            <span className="text-foreground">MR. M. </span>
            <span className="text-gradient glow-text">DHANUSH KUMAR</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
            Java Full Stack Developer &nbsp;|&nbsp; B.E. CSE &nbsp;|&nbsp; Future Team Lead
          </p>

          <p className="text-base md:text-lg text-primary/80 font-mono mb-10 italic">
            Engineering Logic. Designing Impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border font-semibold gap-2"
            >
              <a href="#projects">
                <FolderOpen size={18} />
                View Projects
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold gap-2"
            >
              <a href="/Dhanush_Kumar_Resume.docx" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary font-semibold gap-2"
            >
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
