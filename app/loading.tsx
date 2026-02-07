import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f9f5df] py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="h-10 w-56 rounded-full bg-[#d3d1b0]/40" />
          <div className="mt-6 space-y-3">
            <div className="h-6 w-full rounded-full bg-[#d3d1b0]/30" />
            <div className="h-6 w-11/12 rounded-full bg-[#d3d1b0]/30" />
            <div className="h-6 w-10/12 rounded-full bg-[#d3d1b0]/30" />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="aspect-4/5 w-full rounded-3xl bg-[#d3d1b0]/25" />
            <div className="aspect-4/5 w-full rounded-3xl bg-[#d3d1b0]/25" />
          </div>
        </div>
      </Container>
    </div>
  );
}

