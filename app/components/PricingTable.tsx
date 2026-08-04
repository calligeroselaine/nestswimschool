import type { PricingRow } from "@/lib/data/programs";

export default function PricingTable({
  rows,
  note,
}: {
  rows: PricingRow[];
  note?: string;
}) {
  if (rows.length === 0) {
    return (
      <div className="rounded-2xl border border-line-on-light bg-foam-dim p-6 text-sm text-ink/70">
        {note ?? "Pricing on enquiry — get in touch for current rates."}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line-on-light bg-foam-dim">
      <table className="w-full border-collapse text-left">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line-on-light last:border-b-0">
              <td className="px-6 py-4 text-sm text-ink/80">{row.label}</td>
              <td className="px-6 py-4 text-right text-sm font-normal text-ink tabular-nums">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && <p className="border-t border-line-on-light px-6 py-4 text-xs text-ink/60">{note}</p>}
    </div>
  );
}
