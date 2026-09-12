import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import HeroSection from "@/components/landing/HeroSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });
  } catch {
    projects = [];
  }

  return (
    <main className="w-full bg-white text-[#111111]">
      {/* 00 Index Hero - Client Component */}
      <HeroSection projects={projects} />

      {/* 01 About Section */}
      <AboutSection />

      {/* 02 Repository Showcase */}
      <section
        id="projects"
        className="scroll-mt-12 border-b border-neutral-200"
      >
        <ProjectShowcase projects={projects} />
      </section>

      {/* 03 Experience Section */}
      <ExperienceSection />

      {/* 03 Contact Section - Client Component */}
      <ContactSection />

      {/* 04 Footer & System Telemetry - Client Component */}
      <Footer />
    </main>
  );
}
