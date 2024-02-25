"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";

import Image from "next/image";
import profilePic from '../../public/profile.jpg'

export default function Example() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <center>
        <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              ./whoami
            </h2>
            <br />
            <br />
            {
            //<Image
            //  className="rounded-full"
            //  src={profilePic}
            //  alt="Profile Picture"
            //  width={250}
            //  height={250}
            //  />
            }
            <img className="rounded-full" src="/profile.jpg" alt="Profile Picture" width="250" height="250"></img>
            <br />
            <p className="mt-4 text-zinc-400 text-justify">
            <br />
            Hi, I am Mirko Renzelli, a Senior Penetration Tester with an insatiable hunger for knowledge and a deep-rooted passion for cybersecurity. My career is marked by extensive hands-on experience in identifying and exploiting security weaknesses across various IT ecosystems.
            <br /><br />
            My key competencies include:<br />
	            •	Employing and implementing cutting-edge offensive security tools and techniques to assess the resilience of systems and applications against real-world cyber threats.<br />
	            •	A profound understanding of attack surfaces and vectors, enabling me to diligently assess network infrastructures, web applications, and cloud environments for new vulnerabilities.<br />
	            •	Designing and developing automated security tools, significantly improving the efficiency of security testing methodologies.<br />
	            •	A continuous commitment to learning and research in cybersecurity, keeping me abreast of emerging threats and industry best practices.<br /><br />
            My background in Computer Engineering, combined with my field experience, gives me a comprehensive view of both the technical challenges and business implications in cybersecurity.<br />
            I am also deeply passionate about the world of AI and find it fascinating and intellectually stimulating.
              <br />
            </p>
          </div>
        </div>
      </center>
    </div>
  );
}
