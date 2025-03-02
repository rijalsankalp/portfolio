import Head from "next/head";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sankalpa | Computer Science student</title>
        <meta
          name="description"
          content="I&#39;m a Computer Science student. Project and reserach experience in ML/AI and software development."
        />
      </Head>
      <Navbar />
      <Main />
      <About />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Skills />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Projects />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
    </div>
  );
}
