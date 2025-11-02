// App.tsx
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/header";
import Section from "./components/Section";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import ExperiencePage from "./components/Experience/ExperiencePage";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Header />
      <ScrollToHash />
      <Section id="hero">
        <Hero />
      </Section>
      <Section id="about" className="flex items-start justify-center">
        <About />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="projects" >
        <Projects/>
      </Section>
      <Section id="contact">
        <Contact/>
      </Section>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/experience/:id", element: <><ExperiencePage /></> },
]);

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="flex-1 overscroll-contain focus:outline-none lg:snap-y lg:snap-proximity lg:scroll-pt-16">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
