import Header from './components/Header'
import PageLayout from './components/PageLayout'

export default function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <p className="text-lg mb-6">
          Here are some of my recent projects. I have experience in 3D modeling, animation, and game development.
        </p>
        {/* Add project cards or links here */}
      </PageLayout>
    </>
  )
}
