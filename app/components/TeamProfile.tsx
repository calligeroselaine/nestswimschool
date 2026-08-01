import Image from "next/image";
import ExpandableBio from "./ExpandableBio";

export default function TeamProfile({
  name,
  role,
  bio,
  fullBio,
  photo,
}: {
  name: string;
  role: string;
  bio: string;
  fullBio: string[];
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
        <ExpandableBio bio={bio} fullBio={fullBio} name={name.split(" ")[0]} />
      </div>
    </div>
  );
}
