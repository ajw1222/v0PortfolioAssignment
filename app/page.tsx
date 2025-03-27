"use client"

import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function Home() {
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

  // Next.js public folder is automatically mapped to "/", so no need for ../public/.....
  const technologies = [
    { name: "React", image: "/react-icon.png?height=100&width=100" },
    { name: "Docker", image: "/docker-icon.png?height=100&width=100" },
    { name: "Python", image: "/python-icon.png?height=100&width=100" },
    { name: "Git", image: "/git-icon.png?height=100&width=100" },
    { name: "Java", image: "/java-icon.png?height=100&width=100" },
  ]

  return (
    <main>
      <div
        ref={parallaxRef}
        className="h-[65vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/para-bg.jpg?height=1080&width=1920')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-xl">Annie Houston's</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-xl">Portfolio Website</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col gap-[40px]">
        <section>
          <h2 className="text-4xl font-bold mb-6 text-[#2B57A8]">Technologies</h2>
          <p className="text-muted-foreground text-[20px]">Here is a list of technologies & languages I am familiar with.</p>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {technologies.map((tech, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center p-6 relative">
                      <Image src={tech.image || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                    </div>
                    <p className="text-center font-bold mt-2 text-[25px]">{tech.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <div className="flex flex-col md:flex-row gap-8 border-t-5 pt-10">
          <section className="flex-1">
            <Link href="/projects" className="group inline-flex items-center">
              <h2 className="text-4xl text-[#2B57A8] font-bold mb-6 group-hover:text-[#3E76DE] transition-colors">Projects</h2>
              <ArrowRight className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-muted-foreground text-[20px] mb-5">Explore my portfolio of projects and see what I've been working on.</p>
          </section>

          <section className="flex-1">
            <Link href="/jobs" className="group inline-flex items-center">
              <h2 className="text-4xl text-[#2B57A8] font-bold mb-6 group-hover:text-[#3E76DE] transition-colors">Jobs</h2>
              <ArrowRight className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-muted-foreground text-[20px] mb-5">Check out my professional experience and past positions.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
