import Image from "next/image";

export default function TeamProfile({
  name,
  role,
  bio,
  photo,
}: {
  name: string;
  role: string;
  bio: string;
  photo: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-on-dark transition-colors hover:border-sunlit">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={photo}
          alt={`${name}, ${role} at SwimNest`}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-7">
        <h3 className="font-display text-md text-foam uppercase">{name}</h3>
        <p className="mt-1 text-2xs font-bold tracking-[0.1em] text-sunlit uppercase">{role}</p>
        <p className="mt-3 text-sm font-light text-foam/75">{bio}</p>
      </div>
    </div>
  );
}
