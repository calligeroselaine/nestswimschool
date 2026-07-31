import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { team } from "@/lib/data/team";

export default function Team() {
  return (
    <section id="team" className="bg-depth">
      <div className="mx-auto max-w-[1180px] px-5 py-[clamp(4.5rem,9vw,7.5rem)] md:px-14">
        <Reveal>
          <SectionHeading
            eyebrow="Meet the coaches"
            title="Taught by people who love this."
            description="A small, experienced team who know every swimmer by name — not a rotating roster of casual staff."
            light
          />
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-line-on-dark p-7 transition-colors hover:border-sunlit"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-aqua font-display text-lg text-foam">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-display text-md text-foam uppercase">{member.name}</h3>
              <p className="mt-1 text-2xs font-bold tracking-[0.1em] text-sunlit uppercase">
                {member.role}
              </p>
              <p className="mt-3 text-sm font-light text-foam/75">{member.bio}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
