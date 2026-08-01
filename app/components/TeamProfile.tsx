export default function TeamProfile({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="rounded-2xl border border-line-on-dark p-7 transition-colors hover:border-sunlit">
      <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-aqua font-display text-lg text-foam">
        {name.charAt(0)}
      </div>
      <h3 className="font-display text-md text-foam uppercase">{name}</h3>
      <p className="mt-1 text-2xs font-bold tracking-[0.1em] text-sunlit uppercase">{role}</p>
      <p className="mt-3 text-sm font-light text-foam/75">{bio}</p>
    </div>
  );
}
