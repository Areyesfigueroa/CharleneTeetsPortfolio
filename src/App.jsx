import Header from './components/Header'
import NavigationCard from './components/NavigationCard'
import PageLayout from './components/PageLayout'

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

        {/* Placeholder sections — replace with real content components */}
        <section id="environment-art" className="py-16">Environment Art section</section>
        <section id="unreal-engine-demos" className="py-16">Unreal Engine Demos section</section>
        <section id="drone-work" className="py-16">Drone Work Low Poly section</section>
        <section id="marketing-material" className="py-16">Marketing Material section</section>
      </PageLayout>
    </>
  )
}
