import Image from "next/image";

function Photo() {
  return (
    <div className="relative w-[200px] md:w-[380px] aspect-[380/420] overflow-hidden rounded-sm">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/kaiane.jpeg`}
        alt="Kaiane"
        fill
        className="object-cover object-top"
        priority
      />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-soft-canvas px-6 md:px-20 pt-14 md:pt-[72px] pb-[80px]">
      {/* Section header */}
      <div className="mb-[38px] w-full h-px bg-deep-mind/12" />

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-x-24 gap-y-10 items-start">
        {/* Left — heading + bio */}
        <div>
          <h2 className="font-heading font-bold text-[40px] md:text-[64px] leading-none text-deep-mind">
            About
          </h2>

          {/* Photo — mobile only, between heading and bio */}
          <div className="md:hidden mt-8 mb-8 flex justify-center">
            <Photo />
          </div>

          <div className="mt-8 md:mt-10 space-y-5 font-body text-[14px] md:text-[16px] leading-[1.7] text-deep-mind/80 max-w-[640px]">
            <p>
              Technology excites my mind. I love a challenge that puts my problem-solving
              to work. From everyday software to IoT, these tech puzzles make my eyes
              sparkle.
            </p>
            <p>
              As a software engineer, I don&apos;t just build systems that hold up under
              real constraints: I map, architect, and scale them to keep working under
              pressure.
            </p>
            <p>
              AI is a big part of that: I not only train and build it, but I&apos;m an
              engineer who extracts the best out of it. I set the direction, review the
              output, and use AI where it actually helps me move faster.
            </p>
            <p>Take a look around, it&apos;s a pleasure to have you here.</p>
          </div>
        </div>

        {/* Right — photo (desktop only) */}
        <div className="hidden md:block mt-1">
          <Photo />
        </div>
      </div>
    </section>
  );
}
