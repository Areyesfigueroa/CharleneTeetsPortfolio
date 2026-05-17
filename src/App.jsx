import Header from './components/Header'
import NavigationCard from './components/NavigationCard'
import PageLayout from './components/PageLayout'
import ProjectSection from './components/ProjectSection'
import CarouselSection from './components/CarouselSection'

const environmentVideos = [
  {
    title: 'Forest Demo',
    description: 'A walkthrough of the forest environment showcasing lighting, foliage density, and atmospheric effects.',
    youtubeId: 'abc123',
    thumbnailImg: 'https://picsum.photos/320/180',
    duration: '2:34',
  },
  {
    title: 'Cave System Flythrough',
    description: 'Real-time flythrough of a procedurally generated cave system built in Unreal Engine 5.',
    youtubeId: 'def456',
    thumbnailImg: 'https://picsum.photos/320/180',
    duration: '1:12',
  },
  {
    title: 'Desert Biome',
    description: 'Desert environment with dynamic wind, sand particle simulation, and distant heat haze.',
    youtubeId: 'ghi789',
    thumbnailImg: 'https://picsum.photos/320/180',
    duration: '3:05',
  },
]

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
        />
        <ProjectSection
          id="drone-work"
          title="Drone Work Low Poly"
          description="Low poly drone footage and aerial assets crafted for stylized projects."
        />
        <ProjectSection
          id="marketing-material"
          title="Marketing Material"
          description="3D renders and visuals produced for marketing and promotional use."
        />
      </PageLayout>
    </>
  )
}
