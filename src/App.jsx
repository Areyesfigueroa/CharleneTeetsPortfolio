import Header from './components/Header'
import NavigationCard from './components/NavigationCard'
import PageLayout from './components/PageLayout'
import ProjectSection from './components/ProjectSection'

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
        />
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
