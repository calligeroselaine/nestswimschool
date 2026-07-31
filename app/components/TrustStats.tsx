import Reveal from "./Reveal";

const stats = [
  { num: "16+", label: "Years of coaching experience, led by our head coach Irina" },
  { num: "4", label: "Locations across Terrey Hills, Brookvale & the Northern Beaches" },
  { num: "5", label: "Programs, from first splashes to open-water Ocean Skills" },
  { num: "1:1", label: "Private & small-group lessons, matched to every learner" },
];

export default function TrustStats() {
  return (
    <section className="bg-foam">
      <Reveal className="mx-auto grid max-w-[1180px] grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-14">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l border-line-on-light pl-5 text-left">
            <span className="font-display text-[clamp(2rem,3.6vw,2.9rem)] leading-none text-aqua tabular-nums">
              {stat.num}
            </span>
            <span className="mt-2 block max-w-[20ch] text-xs text-ink/65">{stat.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
