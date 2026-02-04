import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function About() {
  return (
    <>
      <section className="min-h-[calc(100vh-5rem)] flex justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
          <div className="flex flex-col flex-2/3 gap-12">
            <h6>Developer</h6>
            <span>
              <h1 className="text-5xl font-bold font-bungee">Hi There, I'm</h1>
              <h1 className="text-5xl font-bold text-blue-500 font-bungee">
                Nikunj Chauhan
              </h1>
            </span>
            <p>
              I am a highly motivated and detail-oriented Computer Science &
              Engineering student at the National Institute of Technology,
              Agartala. As a pre-final year undergraduate, I am actively seeking
              opportunities to leverage my skills in full-stack web development
              and AI/Machine Learning. Duous learning and a comriven by a
              passion for continmitment to excellence, I am eager to collaborate
              with forward-thinking teams to build innovative technology
              solutions.
            </p>
            <span className="flex gap-2">
              <a href="https://www.linkedin.com/in/nkca122/" target="main">
                <Button
                  variant={"default"}
                  className="rounded-none text-sm font-bold"
                >
                  Hire me
                </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1cfFMCs5w4jjjGXUdfE6aHhMCvksvj1aJ/view?usp=sharing"
                target="main"
              >
                <Button
                  variant={"secondary"}
                  className="rounded-none text-sm font-bold"
                >
                  My Resume
                </Button>
              </a>
            </span>
          </div>

          <div className="flex flex-1/3 justify-center items-end">
            <div
              className="relative bg-center bg-cover"
              
            >
              <Image
                src={"/logo.jpg"}
                priority={true}
                width={687}
                height={462}
                alt="UX"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
