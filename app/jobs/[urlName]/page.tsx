import Image from "next/image"
import { CalendarDays, Building2 } from "lucide-react"
import { jobsData } from "@/lib/jobs-data"
import { notFound } from "next/navigation"

type JobDetailsProps = {
    params: Promise<{ urlName: string }>;
};
  
export default async function JobDetailsPage({ params }: JobDetailsProps) {
  // Await the params promise to get the actual value
  const { urlName } = await params;

  // Find the job details based on the urlName
  const jobDetails = jobsData.find((job) => job.urlName === urlName);

  if (!jobDetails) {
      console.log("job not found for urlName:", urlName);
      notFound()
  }

  return (
    <div className="bg-[#3E76DE]">
        <div className="container mx-auto px-4 py-8 max-w-4xl px-30 m-5 bg-white">
        <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">{jobDetails.name}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span>{jobDetails.company}</span>
            </div>
        </header>

        <div>
            <div className="space-y-6 w-full flex flex-col items-center justify-center gap-[15px]">
            <div className="flex justify-center md:justify-start">
                <div className="relative h-[200px] w-[400px] overflow-hidden rounded-lg border bg-[#2B57A8]">
                <Image
                    src={jobDetails.logoUrl || "/placeholder.svg"}
                    alt={`${jobDetails.company} logo`}
                    fill
                    className="object-contain p-2"
                />
                </div>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold flex justify-center">Employment Period</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>
                    {jobDetails.startDate} - {jobDetails.endDate}
                </span>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-3 flex justify-center">Job Description</h2>
                <p className="text-muted-foreground w-[80%]">{jobDetails.description}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}