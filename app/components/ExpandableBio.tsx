"use client";

import { useState } from "react";

export default function ExpandableBio({
  bio,
  fullBio,
  name,
}: {
  bio: string;
  fullBio: string[];
  name: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-3">
      {expanded ? (
        <div className="space-y-3">
          {fullBio.map((paragraph, i) => (
            <p key={i} className="text-sm font-light text-foam/75">
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-sm font-light text-foam/75">{bio}</p>
      )}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-2 text-2xs font-bold tracking-[0.05em] text-sunlit uppercase underline decoration-sunlit/40 underline-offset-4 transition-colors hover:decoration-sunlit"
      >
        {expanded ? `Show less about ${name}` : `Read more about ${name}`}
      </button>
    </div>
  );
}
