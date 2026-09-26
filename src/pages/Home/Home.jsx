import Hero from "../../components/Hero/Hero";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import ServicesPreview from "../../components/ServicesPreview/ServicesPreview";
import GalleryPreview from "../../components/GalleryPreview/GalleryPreview";
import ProjectCTA from "../../components/ProjectCTA/ProjectCTA";

function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <AboutIntro />
      <ServicesPreview />
      <GalleryPreview />
      <ProjectCTA />
    </main>
  );
}

export default Home;