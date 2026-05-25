import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationCard from "./components/NavigationCard";
import PageLayout from "./components/PageLayout";
import ProjectSection from "./components/ProjectSection";
import CarouselSection from "./components/CarouselSection";
import ImageCarousel from "./components/ImageCarousel";
import { projectSections } from "./data/projectData";
import { imageGalleries } from "./data/imageData";

export default function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <div className="hidden md:flex flex-row gap-4">
          {projectSections.map((section) => (
            <NavigationCard
              key={section.id}
              backgroundImage={section.backgroundImage}
              href={`#${section.id}`}
            >
              {section.navLabel}
            </NavigationCard>
          ))}
        </div>

        {projectSections.map((section, i) => (
          <ProjectSection
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            muted={i % 2 !== 0}
          >
            <CarouselSection videos={section.videos} title={section.carouselTitle} />
          </ProjectSection>
        ))}

        <ProjectSection
          id="graphic-design"
          title="Graphic Design"
          description="A selection of graphic design work spanning branding, concept art, and typography."
          muted={projectSections.length % 2 !== 0}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {imageGalleries.map((gallery) => (
              <div key={gallery.title} className="max-w-[445px]">
                <ImageCarousel images={gallery.images} title={gallery.title} />
              </div>
            ))}
          </div>
        </ProjectSection>
      </PageLayout>
      <Footer />
    </>
  );
}
