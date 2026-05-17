import Header from './components/Header'
import NavigationCard from './components/NavigationCard'
import PageLayout from './components/PageLayout'
import ProjectSection from './components/ProjectSection'
import CarouselSection from './components/CarouselSection'
import ImageCarousel from './components/ImageCarousel'
import {
  environmentVideos,
  unrealDemoVideos,
  droneVideos,
  marketingVideos,
} from './data/videoData'
import { imageGalleries } from './data/imageData'

export default function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <div className='hidden md:flex flex-row gap-4'>
          <NavigationCard backgroundImage={'https://picsum.photos/233/411'} href="#environment-art">Environment Art</NavigationCard>
          <NavigationCard backgroundImage={'https://picsum.photos/233/411'} href="#unreal-engine-demos">Unreal Engine Demos</NavigationCard>
          <NavigationCard backgroundImage={'https://picsum.photos/233/411'} href="#drone-work">Drone Work Low Poly</NavigationCard>
          <NavigationCard backgroundImage={'https://picsum.photos/233/411'} href="#marketing-material">Marketing Material</NavigationCard>
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
      </PageLayout>
    </>
  )
}
