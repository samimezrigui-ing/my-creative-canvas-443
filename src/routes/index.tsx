import { createFileRoute } from "@tanstack/react-router";
import profileAsset from "@/assets/profile.jpg.asset.json";
import sccmbfLogo from "@/assets/sccmbf-logo.jpg.asset.json";
import hmisLogo from "@/assets/hmis-logo.png.asset.json";
import sonoclimLogo from "@/assets/sonoclim-logo.png.asset.json";
import icarLogo from "@/assets/icar-logo.png.asset.json";
import kiolexLogo from "@/assets/kiolex-logo.png.asset.json";
import kelatecLogo from "@/assets/kelatec-logo.png.asset.json";
import meublatexLogo from "@/assets/meublatex-logo.png.asset.json";
import sonoclimImg from "@/assets/exp-sonoclim.jpg";
import kelatecImg from "@/assets/exp-kelatec.jpg";
import kiolexImg from "@/assets/exp-kiolex.jpg";
import liftingTableAsset from "@/assets/lifting-table.png.asset.json";
import kelatecVideo from "@/assets/kelatec-line-3d.mp4.asset.json";
import trappeVideo from "@/assets/trappe-pneumatique.mp4.asset.json";
import trappePoster from "@/assets/trappe-pneumatique-poster.jpg.asset.json";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const experiences = [
  {
    title: "Fluids Engineer",
    company: "Sonoclim — Sfax, Tunisia",
    period: "01/2026 – Present",
    tags: "Fluids Engineering · HVAC · Hydraulic & Aeraulic Sizing · Thermal Regulation",
    image: sonoclimLogo.url,
    bullets: [
      "Designed and modeled complex fluid networks (HVAC, plumbing, smoke extraction) using mechanical CAD.",
      "Performed comprehensive sizing and calculations for piping systems, air ducts, flow rates and pressure drops.",
      "Integrated industrial automation systems, thermal regulation (BMS/BAMS) and control panels.",
      "Provided on-site technical supervision, coordinated teams and ensured installation compliance.",
    ],
  },
  {
    title: "Master's Graduation Project & R&D Office Manager",
    company: "Kelatec Innovation — Akouda, Sousse, Tunisia (4 months)",
    period: "02/2025 – 06/2025",
    tags: "Industrial Automation · Mechanical CAD · Pneumatics · Project Management",
    image: kelatecLogo.url,
    bullets: [
      "Led the technical design office for special machinery (generic hydraulic press, two-position hatch, pneumatic spreader).",
      "Conducted mechanical CAD modeling in SolidWorks for an automated profile cutting and sawing line with rack-and-pinion movement.",
      "Studied and integrated power circuits, pneumatic clamping, a punching station, and programmed control logic using servomotors.",
    ],
  },
  {
    title: "Technician Internship",
    company: "Kiolex — Akouda, Sousse, Tunisia (1 month)",
    period: "08/2024 – 09/2024",
    tags: "CNC Milling · CAD/CAM Integration · Programming · Quality Control",
    image: kiolexLogo.url,
    bullets: [
      "Intensive practical training in CNC milling operations and cutting parameter adjustment.",
      "Integrated and fully processed 3D models from design to CAM using Mastercam and SolidWorks.",
      "Optimized machining processes to reduce cycle times and maintained rigorous quality control.",
    ],
  },
  {
    title: "Worker Internship",
    company: "HMIS — Akouda (1 month)",
    period: "07/2024 – 08/2024",
    tags: "Mechanical Manufacturing · Metallurgy · Machine Tools · Turning",
    image: hmisLogo.url,
    bullets: [
      "Immersed in foundational mechanical production and metallurgical processes.",
      "Supervised hands-on operations on conventional machine tools (milling and turning).",
      "Applied quality control techniques within an industrial environment.",
    ],
  },
  {
    title: "Bachelor's Graduation Project",
    company: "ICAR — Sousse (3 months)",
    period: "02/2022 – 05/2022",
    tags: "CAD Modeling · Material Selection · Mechanics of Materials · Project Management",
    image: icarLogo.url,
    bullets: [
      "Completed full study and mechanical design of a lifting table for vehicle engines.",
      "Conducted functional requirements analysis, sizing calculations and material selection.",
      "Managed 3D CAD modeling, manufacturing supervision and performance validation testing.",
    ],
  },
  {
    title: "Technician Internship",
    company: "SCCMBF — Hammam Sousse (1 month)",
    period: "01/2021 – 02/2021",
    tags: "Mechanical Maintenance · Laser Cutting · Machining · Boilermaking",
    image: sccmbfLogo.url,
    bullets: [
      "Technical diagnostics and corrective maintenance on lathes, milling machines, laser and wood cutters.",
      "Manufactured custom mechanical components (transmission shafts, mechanical supports).",
      "Participated in assembly and structural steel fabrication for truck trailers.",
    ],
  },
  {
    title: "Worker Internship",
    company: "Meublatex — Akouda, Sousse (1 month)",
    period: "01/2020 – 02/2020",
    tags: "Production Machinery · Water Pumps · Preventive Maintenance",
    image: meublatexLogo.url,
    bullets: [
      "Fabricated basic mechanical parts and contributed to trailer construction.",
      "Routine servicing and general maintenance on water pumps, milling machines and wood cutting equipment.",
    ],
  },
];

const skills = [
  "SolidWorks", "AutoCAD", "Mastercam", "CNC Milling", "CAD/CAM",
  "HVAC Design", "Hydraulic Sizing", "Aeraulic Sizing", "Piping Systems",
  "Industrial Automation", "Pneumatics", "Servomotors", "BMS / BAMS",
  "Thermal Regulation", "Mechanics of Materials", "Metallurgy",
  "Project Management", "Technical Supervision", "Quality Control",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(1 0 0 / 0.15), transparent 40%), radial-gradient(circle at 80% 70%, oklch(1 0 0 / 0.1), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Sami Mezrigui
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Electromechanical Engineer
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base">
            <a href="#about" className="hover:opacity-75 transition">About</a>
            <a href="#experience" className="hover:opacity-75 transition">Experience</a>
            <a href="#projects" className="hover:opacity-75 transition">Projects</a>
            <a href="#skills" className="hover:opacity-75 transition">Skills</a>
            <a href="#contact" className="hover:opacity-75 transition">Contact</a>
          </nav>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground/90 px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/sami-mezrigui-747427304"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-primary-foreground/20"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20 space-y-24">
        {/* About */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
          <div className="grid gap-8 md:grid-cols-[240px_1fr] items-start">
            <div
              className="aspect-square rounded-2xl overflow-hidden bg-muted"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={profileAsset.url}
                alt="Sami Mezrigui portrait"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Dynamic Electromechanical Engineer with proven experience in designing
              and optimizing innovative solutions. Passionate about leveraging
              technology to improve efficiency and performance in complex systems —
              from fluid networks and HVAC design to industrial automation and
              mechanical CAD.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <article
                key={i}
                className="grid gap-6 md:grid-cols-[240px_1fr] items-start rounded-2xl bg-card p-6 border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {exp.image ? (
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="aspect-[4/3] rounded-xl flex items-center justify-center text-3xl font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-hero)" }}
                  >
                    {exp.company.split(" ")[0].slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--primary)" }}>
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{exp.company}</span>{" "}
                    · {exp.period}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {exp.tags}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm md:text-base text-foreground/90">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ background: "var(--primary)" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              image={liftingTableAsset.url}
              title="Lifting Table for Vehicle Engines"
              tags={["SolidWorks", "CAD", "Mechanics of Materials"]}
              description="Full mechanical study and design of a lifting table — sizing calculations, material selection, 3D CAD modeling and validation testing."
            />
            <ProjectCard
              image={kelatecImg}
              video={kelatecVideo.url}
              title="Hydraulic Press & Automated Cutting Line"
              tags={["SolidWorks", "Pneumatics", "Servomotors"]}
              description="Special machinery design including a generic hydraulic press and an automated profile cutting line with rack-and-pinion motion and programmed control logic."
            />
            <ProjectCard
              image={trappePoster.url}
              video={trappeVideo.url}
              title="Two-Position Hatch — Pneumatic Control"
              tags={["SolidWorks", "Pneumatics", "Mechanical Design"]}
              description="Design and 3D modeling of a two-position hatch actuated by pneumatic control — kinematic study, cylinder sizing and motion simulation of the opening/closing sequence."
            />
            <ProjectCard
              image={sonoclimImg}
              title="HVAC & Fluids Networks Design"
              tags={["HVAC", "Piping", "BMS/BAMS"]}
              description="Modeling and sizing of complex fluid networks — HVAC ducts, plumbing and smoke extraction — with integrated thermal regulation and control panels."
            />
            <ProjectCard
              image={kiolexImg}
              title="CNC Milling — CAD to CAM Workflow"
              tags={["Mastercam", "SolidWorks", "CNC"]}
              description="End-to-end integration of 3D models from design to CAM, with cutting parameter optimization and rigorous quality control on finished parts."
            />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90 transition hover:border-[color:var(--primary)] hover:text-[color:var(--primary)]"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Contact</h2>
          <div
            className="rounded-2xl p-8 md:p-10 text-primary-foreground"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
          >
            <p className="text-lg md:text-xl">
              Let's discuss your next engineering project.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:sami.mezrigui@polytechnicien.tn"
                className="inline-flex items-center gap-2 rounded-full bg-foreground/90 px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground"
              >
                <Mail className="h-4 w-4" /> sami.mezrigui@polytechnicien.tn
              </a>
              <a
                href="https://www.linkedin.com/in/sami-mezrigui-747427304"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <Linkedin className="h-4 w-4" /> linkedin.com/in/sami-mezrigui
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sami Mezrigui — Electromechanical Engineer
      </footer>
    </div>
  );
}

function ProjectCard({
  image,
  video,
  title,
  description,
  tags,
}: {
  image: string;
  video?: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <article
      className="group overflow-hidden rounded-2xl bg-card border border-border transition hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {video ? (
          <video
            src={video}
            poster={image}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            width={1024}
            height={768}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold" style={{ color: "var(--primary)" }}>
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
