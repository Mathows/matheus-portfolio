import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CoursesSection from '@/components/CoursesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CoursesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
