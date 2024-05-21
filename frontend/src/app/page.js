import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg">This is where you can showcase your work.</p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard 
              title="Project One" 
              description="This is a brief description of Project One." 
              link="#" 
            />
            <ProjectCard 
              title="Project Two" 
              description="This is a brief description of Project Two." 
              link="#" 
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
