import { createFileRoute, Link } from "@tanstack/react-router";
import profileAsset from "@/assets/profile.jpg.asset.json";
import sccmbfLogo from "@/assets/sccmbf-logo.jpg.asset.json";
import hmisLogo from "@/assets/hmis-logo.png.asset.json";
import sonoclimLogo from "@/assets/sonoclim-logo.png.asset.json";
import icarLogo from "@/assets/icar-logo.png.asset.json";
import kiolexLogo from "@/assets/kiolex-logo.png.asset.json";
import kelatecLogo from "@/assets/kelatec-logo.png.asset.json";
import meublatexLogo from "@/assets/meublatex-logo.png.asset.json";
import kelatecImg from "@/assets/exp-kelatec.jpg";
import liftingTableAsset from "@/assets/lifting-table.png.asset.json";
import kelatecVideo from "@/assets/kelatec-line-3d.mp4.asset.json";
import trappeVideo from "@/assets/trappe-pneumatique.mp4.asset.json";
import trappePoster from "@/assets/trappe-pneumatique-poster.jpg.asset.json";
import ecarteurVideo from "@/assets/ecarteur-pneumatique.mp4.asset.json";
import ecarteurPoster from "@/assets/ecarteur-pneumatique-poster.jpg.asset.json";
import presseVideo from "@/assets/presse-pneumatique.mp4.asset.json";
import pressePoster from "@/assets/presse-pneumatique-poster.jpg.asset.json";
import petProject from "@/assets/pet-project.jpg.asset.json";
import pet3dPrint from "@/assets/pet-3dprint.jpg.asset.json";
import posageAssembly from "@/assets/posage-assembly.png.asset.json";
import posageKinematic from "@/assets/posage-kinematic.mp4.asset.json";
import cvAsset from "@/assets/sami-mezrigui-cv.pdf.asset.json";
import { useTheme } from "@/hooks/useTheme";
import { Mail, Linkedin, Phone, ArrowUpRight, Moon, Sun, FileDown } from "lucide-react";

export const Route = createFileRoute("/fr")({
  component: FrPage,
});

const experiences = [
  {
    title: "Ingénieur en Fluides",
    company: "Sonoclim — Sfax, Tunisie",
    period: "01/2026 – Présent",
    tags: "Ingénierie des Fluides · CVC · Dimensionnement Hydraulique & Aéraulique · Régulation Thermique",
    image: sonoclimLogo.url,
    bullets: [
      "Conception et modélisation de réseaux de fluides complexes (CVC, plomberie, extraction de fumée) à l'aide de CAO mécanique.",
      "Réalisation de dimensionnements et calculs complets pour les systèmes de tuyauterie, conduits d'air, débits et pertes de charge.",
      "Intégration de systèmes d'automatisation industrielle, de régulation thermique (BMS/BAMS) et de tableaux de commande.",
      "Supervision technique sur site, coordination des équipes et assurance de la conformité des installations.",
    ],
  },
  {
    title: "Projet de Fin d'Études Master & Responsable du Bureau d'Études R&D",
    company: "Kelatec Innovation — Akouda, Sousse, Tunisie (4 mois)",
    period: "02/2025 – 06/2025",
    tags: "Automatisation Industrielle · CAO Mécanique · Pneumatique · Gestion de Projet",
    image: kelatecLogo.url,
    bullets: [
      "Direction du bureau d'études technique pour les machines spéciales (presse hydraulique générique, trappe à deux positions, écarteur pneumatique).",
      "Réalisation de modélisation CAO mécanique dans SolidWorks pour une ligne de découpe et sciage de profilés automatisée à mouvement par crémaillère.",
      "Étude et intégration des circuits de puissance, du serrage pneumatique, d'une station de poinçonnage et programmation de la logique de commande à l'aide de servomoteurs.",
    ],
  },
  {
    title: "Stage Technicien",
    company: "Kiolex — Akouda, Sousse, Tunisie (1 mois)",
    period: "08/2024 – 09/2024",
    tags: "Fraisage CNC · Intégration CAO/FAO · Programmation · Contrôle Qualité",
    image: kiolexLogo.url,
    bullets: [
      "Formation pratique intensive en opérations de fraisage CNC et réglage des paramètres de coupe.",
      "Intégration et traitement complet de modèles 3D de la conception à la FAO à l'aide de Mastercam et SolidWorks.",
      "Optimisation des processus d'usinage pour réduire les temps de cycle et maintien d'un contrôle qualité rigoureux.",
    ],
  },
  {
    title: "Stage Ouvrier",
    company: "HMIS — Akouda (1 mois)",
    period: "07/2024 – 08/2024",
    tags: "Fabrication Mécanique · Métallurgie · Machines-Outils · Tournage",
    image: hmisLogo.url,
    bullets: [
      "Immersion dans les processus fondamentaux de production mécanique et métallurgique.",
      "Supervision des opérations pratiques sur des machines-outils conventionnelles (fraisage et tournage).",
      "Application des techniques de contrôle qualité dans un environnement industriel.",
    ],
  },
  {
    title: "Projet de Fin d'Études Licence",
    company: "ICAR — Sousse (3 mois)",
    period: "02/2022 – 05/2022",
    tags: "Modélisation CAO · Sélection des Matériaux · Résistance des Matériaux · Gestion de Projet",
    image: icarLogo.url,
    bullets: [
      "Réalisation complète de l'étude et de la conception mécanique d'une table élévatrice pour moteurs de véhicules.",
      "Réalisation de l'analyse des besoins fonctionnels, des calculs de dimensionnement et de la sélection des matériaux.",
      "Gestion de la modélisation CAO 3D, de la supervision de fabrication et des essais de validation des performances.",
    ],
  },
  {
    title: "Stage Technicien",
    company: "SCCMBF — Hammam Sousse (1 mois)",
    period: "01/2021 – 02/2021",
    tags: "Maintenance Mécanique · Découpe Laser · Usinage · Chaudronnerie",
    image: sccmbfLogo.url,
    bullets: [
      "Diagnostic technique et maintenance corrective sur les tours, fraiseuses, découpeuses laser et à bois.",
      "Fabrication de composants mécaniques sur mesure (arbres de transmission, supports mécaniques).",
      "Participation à l'assemblage et à la fabrication de structures métalliques pour semi-remorques.",
    ],
  },
  {
    title: "Stage Ouvrier",
    company: "Meublatex — Akouda, Sousse (1 mois)",
    period: "01/2020 – 02/2020",
    tags: "Machines de Production · Pompes à Eau · Maintenance Préventive",
    image: meublatexLogo.url,
    bullets: [
      "Fabrication de pièces mécaniques de base et contribution à la construction de semi-remorques.",
      "Entretien courant et maintenance générale des pompes à eau, fraiseuses et équipements de découpe du bois.",
    ],
  },
];

const skills = [
  "SolidWorks", "AutoCAD", "Mastercam", "Fraisage CNC", "CAO/FAO",
  "Conception CVC", "Dimensionnement Hydraulique", "Dimensionnement Aéraulique", "Réseaux de Tuyauterie",
  "Automatisation Industrielle", "Pneumatique", "Servomoteurs", "BMS / BAMS",
  "Régulation Thermique", "Résistance des Matériaux", "Métallurgie",
  "Gestion de Projet", "Supervision Technique", "Contrôle Qualité",
];

function FrPage() {
  const { theme, toggle, mounted } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
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
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center" style={{ color: "var(--hero-foreground)" }}>
          <div className="absolute top-4 right-4 z-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary-foreground/20 px-4 py-2 text-sm font-medium text-foreground backdrop-blur transition hover:bg-primary-foreground/30 border border-primary-foreground/30"
            >
              EN
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Sami MEZRIGUI
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Ingénieur Électromécanique
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base">
            <a href="#about" className="hover:opacity-75 transition">À propos</a>
            <a href="#experience" className="hover:opacity-75 transition">Expérience</a>
            <a href="#projects" className="hover:opacity-75 transition">Projets</a>
            <a href="#skills" className="hover:opacity-75 transition">Compétences</a>
            <a href="#contact" className="hover:opacity-75 transition">Contact</a>
          </nav>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={toggle}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-primary-foreground/30 border border-primary-foreground/30"
              aria-label="Basculer le mode sombre"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              {mounted && theme === "dark" ? "Mode Clair" : "Mode Sombre"}
            </button>
            <a
              href={cvAsset.url}
              download="Sami-Mezrigui-CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground/80 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-primary-foreground"
            >
              <FileDown className="h-4 w-4" /> Télécharger le CV
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-20 space-y-24">
        {/* About */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">À propos de moi</h2>
          <div className="grid gap-8 md:grid-cols-[240px_1fr] items-start">
            <div
              className="aspect-square rounded-2xl overflow-hidden bg-muted"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={profileAsset.url}
                alt="Portrait de Sami Mezrigui"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Ingénieur électromécanique dynamique avec une expérience avérée dans la conception
              et l'optimisation de solutions innovantes. Passionné par l'exploitation de la
              technologie pour améliorer l'efficacité et les performances des systèmes complexes —
              des réseaux de fluides et de la conception CVC à l'automatisation industrielle et la
              CAO mécanique.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt the scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Expérience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <article
                key={i}
                className="grid gap-6 md:grid-cols-[240px_1fr] items-start rounded-2xl bg-card p-6 border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {exp.image ? (
                  <div className `/div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
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
          <h2 className="text-3xl font-bold tracking-tight mb-8">Projets</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              image={liftingTableAsset.url}
              title="Table Élévatrice pour Moteurs de Véhicules"
              tags={["SolidWorks", "CAO", "Résistance des Matériaux"]}
              description="Étude et conception mécanique complète d'une table élévatrice — calculs de dimensionnement, sélection des matériaux, modélisation CAO 3D et essais de validation."
            />
            <ProjectCard
              image={kelatecImg}
              video={kelatecVideo.url}
              title="Presse Hydraulique et Ligne de Découpe Automatisée"
              tags={["SolidWorks", "Pneumatique", "Servomoteurs"]}
              description="Conception de machines spéciales incluant une presse hydraulique générique et une ligne de découpe de profilés automatisée avec mouvement par crémaillère et logique de commande programmée."
            />
            <ProjectCard
              image={trappePoster.url}
              video={trappeVideo.url}
              title="Trappe à Deux Positions — Commande Pneumatique"
              tags={["SolidWorks", "Pneumatique", "Conception Mécanique"]}
              description="Conception et modélisation 3D d'une trappe à deux positions actionnée par commande pneumatique — étude cinématique, dimensionnement du vérin et simulation du mouvement de la séquence ouverture/fermeture."
            />
            <ProjectCard
              image={ecarteurPoster.url}
              video={ecarteurVideo.url}
              title="Module Écarteur Pneumatique Compact"
              tags={["SolidWorks", "Pneumatique", "IHM", "Sécurité"]}
              description="Conception, dimensionnement et fabrication d'un module écarteur pneumatique compact, réglable et sûr pour une machine industrielle spéciale — assemblage 3D complet et simulation cinématique dans SolidWorks, armoire de commande avec IHM LCD, boutons-poussoirs et potentiomètre rotatif, vérin double effet avec traitement d'air FRL et électrovannes, plus boucles de sécurité avec arrêt d'urgence. Validé en tant que prototype fonctionnel avec haute précision et répétabilité."
            />
            <ProjectCard
              image={pressePoster.url}
              video={presseVideo.url}
              title="Machine de Pression de Précision avec Plateau Coulissant"
              tags={["SolidWorks", "Pneumatique", "IHM", "Guidage Linéaire", "FRL"]}
              description="Conception, dimensionnement et fabrication d'une machine de pression de précision compacte avec plateau coulissant manuel pour un chargement sécurisé, guidage de la tête de presse à double colonne, guidage du plateau sur rail linéaire, IHM intégrée et unité FRL latérale — validée en tant que prototype fonctionnel en atelier."
            />
            <ProjectCard
              image={posageAssembly.url}
              video={posageKinematic.url}
              title="Posage sur Mesure pour Carte Électronique (PCB) pour Presse Générique"
              tags={["SolidWorks", "Usinage de Polymère", "Outil de Précision", "Assemblage PCB", "Kelatec Innovation"]}
              description="Développé en collaboration avec Kelatec Innovation — conception d'un posage sur mesure pour une carte électronique (PCB), intégré dans une presse générique. Le principal défi résidait dans les fortes contraintes dimensionnelles : la matrice en polymère jaune épouse parfaitement la géométrie complexe et irrégulière des composants de la carte (hauteurs variables, connecteurs, bobinages) tout en garantissant un maintien rigide, un alignement ultra-précis sous la presse et une protection optimale du PCB contre les contraintes mécaniques lors de l'assemblage."
            />
            <ProjectCard
              image={petProject.url}
              secondaryImage={pet3dPrint.url}
              title="Machine de Recyclage PET et d'Extrusion de Filament 3D"
              tags={["Impression 3D", "Arduino", "C/C++", "Recyclage PET", "Contrôle Thermique", "Éco-conception"]}
              description="Prototype fonctionnel éco-conçu qui transforme des bouteilles plastiques PET usagées en filament de haute qualité pour l'impression 3D — luttant contre le gaspillage plastique tout en produisant une matière première abordable pour la fabrication additive. La structure mécanique a été entièrement imprimée en 3D (tambour, engrenages, supports, boîtier d'extrudeur) et assemblée sur une base en bois avec un moteur pas à pas NEMA 17 (17HS4401) entraînant la bobine d'enroulement, un bloc chauffant aluminium V6 J-head avec une cartouche Reprap 24 V 40 W, une sonde de température PT100 et un ventilateur de refroidissement DC 12 V. Un Arduino Uno associé à un CNC Shield V3 et un firmware C/C++ personnalisé assure la régulation thermique de haute précision du bloc chauffant, le contrôle fluide du moteur pas à pas pour une vitesse d'enroulement constante et un diamètre de filament régulier, avec un écran LCD 1602 I²C affichant la température d'extrusion en temps réel."
            />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Compétences</h2>
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
            className="relative overflow-hidden rounded-2xl p-8 md:p-10 text-primary-foreground"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
          >
            {/* Decorative stars */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {[
                { top: "8%", left: "6%", size: 10, delay: "0s" },
                { top: "18%", left: "88%", size: 14, delay: "0.4s" },
                { top: "35%", left: "42%", size: 8, delay: "0.8s" },
                { top: "62%", left: "12%", size: 12, delay: "1.2s" },
                { top: "78%", left: "70%", size: 10, delay: "0.6s" },
                { top: "48%", left: "92%", size: 8, delay: "1.6s" },
                { top: "88%", left: "30%", size: 14, delay: "0.2s" },
                { top: "12%", left: "55%", size: 8, delay: "1.4s" },
              ].map((s, i) => (
                <svg
                  key={i}
                  className="absolute animate-pulse text-primary-foreground/70"
                  style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l2.6 6.9L22 10l-5.5 4.3L18.2 22 12 17.8 5.8 22l1.7-7.7L2 10l7.4-1.1L12 2z" />
                </svg>
              ))}
            </div>

            <p className="text-lg md:text-xl">
              Discutons de votre prochain projet d'ingénierie.
            </p>
            <div className="relative mt-6 flex flex-col gap-3 items-start">
              <a
                href="mailto:sami.mezrigui@polytechnicien.tn"
                className="inline-flex items-center gap-2 rounded-full bg-foreground/90 px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground"
              >
                <Mail className="h-4 w-4" /> sami.mezrigui@polytechnicien.tn
              </a>
              <a
                href="tel:+21695052148"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <Phone className="h-4 w-4" /> +216 95 052 148
              </a>
              <a
                href="https://www.linkedin.com/in/sami-mezrigui-747427304"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <Linkedin className="h-4 w-4" /> Sami Mezrigui
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sami Mezrigui — Ingénieur Électromécanique
      </footer>
    </div>
  );
}

function ProjectCard({
  image,
  secondaryImage,
  video,
  title,
  description,
  tags,
}: {
  image: string;
  secondaryImage?: string;
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
        ) : secondaryImage ? (
          <div className="grid grid-cols-2 h-full w-full">
            <img
              src={image}
              alt={`${title} — conception SolidWorks`}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <img
              src={secondaryImage}
              alt={`${title} — cinématique et schéma de procédé`}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
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
