"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { projectsData } from "@/lib/projects-data"

export default function Projects() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset
        parallaxRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main>
      <div
        ref={parallaxRef}
        className="h-[30vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/para-bg.jpg?height=1080&width=1920')",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-xl">Projects</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="flex flex-col items-center">
          <ul className="flex flex-col gap-[30px]">
            {projectsData.map((project) => (
              <li key={project.id}>
                <section className="flex flex-row items-center gap-[20px]">
                  <span className="w-0 h-0 border-t-15 border-b-15 border-l-20 border-transparent border-l-blue-500"></span>
                  <Link href={`/projects/${project.urlName}`} className="block p-4 border rounded-lg hover:bg-gray-100 transition-colors px-[50px]">
                    <h2 className="text-[30px]">{project.title}</h2>
                  </Link>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}