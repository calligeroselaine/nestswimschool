import Button from "./components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center bg-ink px-5 pt-24 pb-16 text-center">
      <p className="mb-4 flex items-center gap-[0.6em] text-2xs font-bold tracking-[0.16em] text-sunlit uppercase before:h-px before:w-7 before:bg-current before:opacity-60">
        404
      </p>
      <h1 className="max-w-[16ch] font-display text-2xl leading-[0.98] text-foam text-balance uppercase">
        Looks like you&rsquo;ve drifted off course.
      </h1>
      <p className="mt-4 max-w-[42ch] text-md font-light text-foam/75">
        We couldn&rsquo;t find that page. Let&rsquo;s get you back to dry land.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/#programs" variant="outline">
          View Programs
        </Button>
      </div>
    </div>
  );
}
