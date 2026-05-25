import Header from "./components/Header";
import NavigationCard from "./components/NavigationCard";
import PageLayout from "./components/PageLayout";
import ProjectSection from "./components/ProjectSection";
import CarouselSection from "./components/CarouselSection";
import ImageCarousel from "./components/ImageCarousel";
import {
  environmentVideos,
  unrealDemoVideos,
  droneVideos,
  marketingVideos,
  intelDroneVideos,
} from "./data/videoData";
import { imageGalleries } from "./data/imageData";

export default function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <div className="hidden md:flex flex-row gap-4">
          <NavigationCard
            backgroundImage={"https://picsum.photos/233/411"}
            href="#environment-art"
          >
            Environment Art
          </NavigationCard>
          <NavigationCard
            backgroundImage={"https://picsum.photos/233/411"}
            href="#unreal-engine-demos"
          >
            Unreal Engine Demos
          </NavigationCard>
          <NavigationCard
            backgroundImage={"https://picsum.photos/233/411"}
            href="#drone-work"
          >
            Drone Work Low Poly
          </NavigationCard>
          <NavigationCard
            backgroundImage={"https://picsum.photos/233/411"}
            href="#marketing-material"
          >
            Marketing Material
          </NavigationCard>
        </div>
        <ProjectSection
          id="environment-art"
          title="Environment Art"
          description="A collection of environment art created for games and interactive experiences."
        >
          <CarouselSection videos={environmentVideos} title="Environments" />
        </ProjectSection>
        <ProjectSection
          id="unreal-engine-demos"
          title="Unreal Engine Demos"
          description="Real-time demos and interactive scenes built in Unreal Engine."
          muted
        >
          <CarouselSection videos={unrealDemoVideos} title="UE5 Demos" />
        </ProjectSection>
        <ProjectSection
          id="drone-work"
          title="Drone Work Low Poly"
          description="Low poly drone footage and aerial assets crafted for stylized projects."
        >
          <CarouselSection videos={droneVideos} title="Drone Footage" />
        </ProjectSection>
        <ProjectSection
          id="marketing-material"
          title="Marketing Material"
          description="3D renders and visuals produced for marketing and promotional use."
          muted
        >
          <CarouselSection videos={marketingVideos} title="Marketing" />
        </ProjectSection>
        <ProjectSection
          id="graphic-design"
          title="Graphic Design"
          description="A selection of graphic design work spanning branding, concept art, and typography."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {imageGalleries.map((gallery) => (
              <div key={gallery.title} className="max-w-[445px]">
                <ImageCarousel images={gallery.images} title={gallery.title} />
              </div>
            ))}
          </div>
        </ProjectSection>
        <ProjectSection
          id="intel-drone-light-show"
          title="INTEL - DRONE  LIGHT  SHOW  ANIMATOR - Low  Poly  Modeling"
          description="Lead and design 3D animations by utilizing a large, unrestricted environment that showcases the power of Intel drone light show technology for tier-one customers. Designed over 21 successful animations for tier-one customer events, including companies such as; Amazon, Netflix, Disney Malaysia, and the Taiwan Government, resulting to return customers and high visibility for the end client’s product release, logo reveals, or events.
Implemented low-poly modeling in Maya, animated dynamic mesh movements, and executed technological requirements with Pflow in 3dsmax to translate concept art into 3D vertex focused elements. Demonstrated reliable and effective communication globally across different cultures and customers by building quality relationships and trust to satisfy/surpass their original goals and expectations."
          muted
        >
          <CarouselSection videos={intelDroneVideos} title="Drone Light Show" />
        </ProjectSection>
      </PageLayout>
    </>
  );
}
