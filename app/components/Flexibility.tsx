import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const points = [
  {
    num: "01",
    title: "Hybrid pool + ocean training",
    body: "We blend pool fundamentals with open-water skills, so swimmers build real confidence in the conditions they'll actually swim in.",
  },
  {
    num: "02",
    title: "Built for every season",
    body: "Lessons move with the weather — private pools through summer, indoor heated pools through winter — so training never has to stop.",
  },
  {
    num: "03",
    title: "Not locked to one plan",
    body: "Swimmers can move between our locations and programs as skills, schedules and goals change — the plan adjusts to them, not the other way around.",
  },
];

export default function Flexibility() {
  return (
    <Section tone="ink">
      <Reveal>
        <SectionHeading
          eyebrow="The SwimNest Difference"
          title="Flexible by design."
          description="Swimmers aren't locked to one pool or one program. We build a plan around your child, then adjust it as they grow, the seasons change, or the goal shifts."
          light
        />
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {points.map((point) => (
          <div key={point.num} className="border-l border-line-on-dark pl-5">
            <span className="font-display text-md text-sunlit tabular-nums">{point.num}</span>
            <h3 className="mt-2 mb-2 font-display text-lg leading-none text-balance text-foam uppercase">
              {point.title}
            </h3>
            <p className="max-w-[32ch] text-sm font-light text-foam/78">{point.body}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
