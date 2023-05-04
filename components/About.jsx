import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="py-8 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am currently pursuing my B.E. in Computer Engineering from IOE,
            Tribhuwan University. I am actively working on projects involving
            Artificial Intelligence Research and Development. I have some
            experience in developing front-end software using ReactJS and NextJS
            as well.
          </p>
          <p className="py-2 text-gray-600">
            I started projects on Machine Learning in 2018, learning the basics
            of computer visions and supervised learning algorithms. Since then,
            I have actively tried expanding my knowledge in this area. I enjoy
            mathematical and statistical aspects of Machine Learning and Deep
            Learning apart from the idea itself.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="../public/assets/about.jpg"
            className="rounded-xl text-center items-center justify-center"
            alt="&#13;&#13;&#10;Hello! I am Sankalpa."
            width="250"
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
