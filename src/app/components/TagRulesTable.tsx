import { tagInteractionRules, impactLabels, confidenceLabels } from "../data/ingredients";

export function TagRulesTable() {
  return (
    <div className="rounded-xl border border-border bg-secondary/20 p-5">
      <h2 className="text-base font-semibold mb-1 flex items-center gap-2">
        <span>📋</span> Tag Interaction Rules
      </h2>
      <p className="text-xs text-muted-foreground mb-4">
        These are the rules the engine uses to detect interactions. When two ingredients have matching tags, the rule activates.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left py-2 pr-3 font-semibold">Tag 1</th>
              <th className="text-left py-2 pr-3 font-semibold">Tag 2</th>
              <th className="text-left py-2 pr-3 font-semibold">Effect</th>
              <th className="text-left py-2 pr-3 font-semibold">Score</th>
              <th className="text-left py-2 pr-3 font-semibold">Impact</th>
              <th className="text-left py-2 pr-3 font-semibold">Evidence</th>
              <th className="text-left py-2 font-semibold">Example</th>
            </tr>
          </thead>
          <tbody>
            {tagInteractionRules.map((rule, i) => {
              const impactInfo = impactLabels[rule.impactSize];
              const confidenceInfo = confidenceLabels[rule.confidence];
              const isBoost = rule.type === "boost";
              return (
                <tr key={i} className="border-b border-border/50 hover:bg-white/5">
                  <td className="py-2 pr-3">
                    <code className="bg-secondary/60 px-1.5 py-0.5 rounded text-primary/80">{rule.tag1}</code>
                  </td>
                  <td className="py-2 pr-3">
                    <code className="bg-secondary/60 px-1.5 py-0.5 rounded text-primary/80">{rule.tag2}</code>
                  </td>
                  <td className="py-2 pr-3 text-foreground">{isBoost ? "↑" : "↓"} {rule.effect.split(",")[0]}</td>
                  <td className="py-2 pr-3">
                    <span className={`px-1.5 py-0.5 rounded-full font-bold ${isBoost ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                      {rule.scoreEffect > 0 ? `+${rule.scoreEffect}` : rule.scoreEffect}
                    </span>
                  </td>
                  <td className="py-2 pr-3">
                    <span className="px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: impactInfo.color }}>
                      {impactInfo.label.split(" ")[0]}
                    </span>
                  </td>
                  <td className="py-2 pr-3">
                    <span className={`px-1.5 py-0.5 rounded-full ${rule.confidence === "strong" ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"}`}>
                      {confidenceInfo.label.split(" ")[0]}
                    </span>
                  </td>
                  <td className="py-2 text-muted-foreground italic">{rule.examplePair}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-background/30 border border-border/50 text-xs text-muted-foreground italic">
        <strong className="text-foreground not-italic">How to read this:</strong> When the engine finds two ingredients where one has Tag 1 and
        the other has Tag 2, it applies the effect and adjusts the score accordingly.
      </div>
    </div>
  );
}
