import Image from "next/image"
import { CalendarDays, Hammer } from "lucide-react"
import { projectsData } from "@/lib/projects-data"
import { notFound } from "next/navigation"

type ProjectDetailsProps = {
    params: Promise<{ urlName: string }>;
};
  
export default async function ProjectDetailsPage({ params }: ProjectDetailsProps) {
    // Await the params promise to get the actual value
    const { urlName } = await params;

    // Find the project details based on the urlName
    const projectDetails = projectsData.find((project) => project.urlName === urlName);

    if (!projectDetails) {
        console.log("project not found for urlName:", urlName);
        notFound()
    }

    return (
        <div className="bg-[#3E76DE]">
        <div className="container mx-auto px-4 py-8 max-w-4xl px-30 m-5 bg-white">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">{projectDetails.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                <Hammer className="h-4 w-4" />
                <span>{projectDetails.techUsed}</span>
                </div>
            </header>

            <div>
            <div className="space-y-6 w-full flex flex-col items-center justify-center gap-[15px]">
                <div className="flex justify-center md:justify-start">
                    <div className="relative h-[200px] w-[400px] overflow-hidden rounded-lg border bg-[#2B57A8]">
                    <Image
                        src={projectDetails.imageUrl || "/placeholder.svg"}
                        alt={`${projectDetails.name} related image`}
                        fill
                        className="object-contain p-2"
                    />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-3 flex justify-center">Project Description</h2>
                    <p className="text-muted-foreground w-[80%]">{projectDetails.description}</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-semibold flex justify-center">Time Developed</h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                        {projectDetails.startDate} - {projectDetails.endDate}
                    </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}