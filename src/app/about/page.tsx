import bjj from "@/assets/bjj.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { H3 } from "@/components/ui/H3";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Anumolu Charan and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Charan Anumolu and I am working as a software developer
          in RRS Solutions. 
          {/* I started programming in 2020, at the age of 18, and
          since then I have created hundreds of tutorials on my YouTube channel{" "} */}
          {/* <a
            href="https://www.youtube.com/codinginflow"
            className="text-primary hover:underline"
          >
            Coding in Flow
          </a> */}
          
        </p>
        <p>
          Always curious and eager to learn, I love exploring new ideas and technologies, sharing my discoveries along the way.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        
          
          <ul className="list-inside list-disc">
            <li><strong>Programming Languages</strong> : Java,Python</li>
            <li><strong>Frontend Technologies</strong> : HTML,CSS and Javascript</li>
            <li><strong>Backend Technologies</strong> : Spring Boot</li>
            <li><strong>Database</strong> : Mongodb</li>
            <li><strong>AI Based frameworks</strong> : RASA,Langchain</li>
            <li><strong>LLMs</strong> : OpenAI</li>
            <li><strong>Vector Databases</strong> : Chroma</li>

          </ul>
        
        
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Work Expierence</H2>
        <p>

        As a Java Developer at RRS Solutions, I played a key role in building IENT, a pioneering Low Code/No Code platform for business automation. 

          {/* In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "} */}
        </p>
        <h3>Key Contributions</h3>
        <ul className="list-inside list-disc">
          <li>
            Spearheaded backend development tasks, implementing robust Java code to support the platform&apos;s functionality. 
          </li>
          <li>
          Collaborated with frontend developers, QA teams, and product managers in an agile development environment to ensure seamless integration of
            features and a user-friendly experience
          </li>
          <li>
          Actively participated in code reviews, contributed to the enhancement ofcoding standards, and stayed abreast of emerging technologies to
            incorporate best practices in the development process.
          </li>

          </ul>
          <p>I also played a pivotal role in implementing AI chatbots for our company&apos;s product line. </p>
          <h3>Key Contributions</h3>
        <ul className="list-inside list-disc">
          <li>
          Led the implementation of diverse AI chatbots – SOP generators, Appgenerators, and Document Answering bots – using RASA, LangChain, and
          OpenAI technologies 
          </li>
          <li>
          Guided the entire development lifecycle, ensuring smooth integration of AI
            chatbots for improved operational efficiency and user experience across
            projects.
          </li>
          <li>
          Designed and optimized SOP generators, automating the creation of Standard Operating Procedures and enhancing organizational workflows.
          </li>
          <li>Contributed to the development of an App generator, showcasing a knack for innovative solutions and enabling rapid application development</li>
          <li>
          Implemented a document answering bot, leveraging advanced AI techniques to streamline information retrieval processes, resulting in
          increased productivity and enhanced user access to critical documentation.
          </li>

          </ul>

        {/* <ul className="list-inside list-disc">
          <li>
            <a
              href="https://smartdiary.co"
              className="text-primary hover:underline"
            >
              SmartDiary.co
            </a>{" "}
            - An AI-powered journaling app
          </li>
          <li>
            <Link
              href="https://books-ai.app"
              className="text-primary hover:underline"
            >
              Books-AI.app
            </Link>{" "}
            - An AI book recommendation app
          </li>
        </ul> */}
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Education</H2>
        <p>
          <strong>B.Tech CSE (2019-2023)</strong><br />
        Nalla Narsimha Reddy Education Society&apos;s Group of Institutions <br />
        CGPA : 7.0
        </p>
        <p>
          <strong>Intermediate (2017-2019)</strong><br />
          Krishnaveni Junior College <br />
          Percentage : 94

        </p>
        <p>
          <strong>SSC (2017)</strong><br />
          Sri Raga High School <br />
        GPA : 8.8
        </p>
        
        
      </section>
      <section className="space-y-3">
        <H2>Social Links</H2>
        <li>
            <a
              href="https://www.linkedin.com/in/charan-anumolu-00998a221/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
            
          </li>
          <li>
            <a
              href="https://github.com/charananumolu"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            
          </li>
      </section>

    </section>
  );
}
