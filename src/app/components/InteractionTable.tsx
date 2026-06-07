interface Paper {
  title: string;
  authors: string;
  year: number;
  url: string;
}

interface InteractionData {
  interaction: string;
  mechanism: string;
  effect: string;
  examples: string;
  evidence: "Strong" | "Moderate" | "Weak-Moderate";
  impact: "Large" | "Medium" | "Small";
  papers: Paper[];
}

const interactionData: InteractionData[] = [
  {
    interaction: "Vitamin C + Non-heme Iron",
    mechanism: "Vitamin C reduces Fe³⁺ to absorbable Fe²⁺ and forms a soluble chelate",
    effect: "↑ Iron absorption up to 3×",
    examples: "Orange + spinach, strawberries + kale",
    evidence: "Strong",
    impact: "Large",
    papers: [
      { title: "The role of vitamin C in iron absorption", authors: "Hallberg L, Brune M, Rossander L", year: 1989, url: "https://pubmed.ncbi.nlm.nih.gov/2507689/" },
      { title: "Iron bioavailability and dietary reference values", authors: "Hurrell R, Egli I", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/20200263/" },
    ],
  },
  {
    interaction: "Fat + Fat-soluble vitamins (A, D, E, K)",
    mechanism: "Lipids enable micelle formation in the small intestine, required for fat-soluble vitamin uptake",
    effect: "↑ Vitamin absorption",
    examples: "Coconut milk + carrot, peanut butter + kale",
    evidence: "Strong",
    impact: "Large",
    papers: [
      { title: "Carotenoid bioavailability is higher from salads ingested with full-fat than with fat-reduced salad dressings", authors: "Brown MJ et al", year: 2004, url: "https://pubmed.ncbi.nlm.nih.gov/15277160/" },
      { title: "Amount of fat in the diet affects bioavailability of lutein esters but not of α-carotene, β-carotene, and vitamin E", authors: "Roodenburg AJ et al", year: 2000, url: "https://pubmed.ncbi.nlm.nih.gov/10799382/" },
    ],
  },
  {
    interaction: "Fat + Lycopene",
    mechanism: "Fat enhances carotenoid micelle formation in digestion, improving lycopene solubility",
    effect: "↑ Lycopene absorption",
    examples: "Avocado + tomato, coconut oil + watermelon",
    evidence: "Strong",
    impact: "Large",
    papers: [
      { title: "Increases in plasma lycopene concentration after consumption of tomatoes cooked with olive oil", authors: "Fielding JM et al", year: 2005, url: "https://pubmed.ncbi.nlm.nih.gov/15927929/" },
      { title: "Avocado consumption enhances human postprandial provitamin A absorption from a novel high-β-carotene tomato sauce", authors: "Unlu NZ et al", year: 2005, url: "https://pubmed.ncbi.nlm.nih.gov/15735074/" },
    ],
  },
  {
    interaction: "Calcium + Iron",
    mechanism: "Calcium competes with iron for shared intestinal transporters (DMT1)",
    effect: "↓ Iron absorption",
    examples: "Milk + spinach, yogurt + kale",
    evidence: "Moderate",
    impact: "Medium",
    papers: [
      { title: "Calcium: effect of different amounts on nonheme- and heme-iron absorption in humans", authors: "Hallberg L et al", year: 1991, url: "https://pubmed.ncbi.nlm.nih.gov/1984334/" },
      { title: "Calcium and iron absorption — mechanisms and public health relevance", authors: "Lönnerdal B", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/21462112/" },
    ],
  },
  {
    interaction: "Banana enzyme + Berry flavonoids",
    mechanism: "Polyphenol oxidase in banana oxidises anthocyanins and flavonoids on contact",
    effect: "↓ Some antioxidant availability",
    examples: "Banana + blueberries, apple + strawberries",
    evidence: "Moderate",
    impact: "Small",
    papers: [
      { title: "Polyphenol oxidase: characterization, function and role in wounded plant storage organs", authors: "Mayer AM", year: 2006, url: "https://pubmed.ncbi.nlm.nih.gov/16828127/" },
    ],
  },
  {
    interaction: "Phytates + Minerals",
    mechanism: "Phytic acid (inositol hexaphosphate) forms insoluble complexes with iron and zinc",
    effect: "↓ Zinc, iron, magnesium absorption",
    examples: "Chia seeds + spinach, flax seeds + almonds",
    evidence: "Moderate",
    impact: "Small",
    papers: [
      { title: "Iron bioavailability and dietary reference values", authors: "Hurrell R, Egli I", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/20200263/" },
      { title: "Bioavailability of minerals in legumes", authors: "Sandberg AS", year: 2002, url: "https://pubmed.ncbi.nlm.nih.gov/12088525/" },
    ],
  },
  {
    interaction: "Oxalates + Calcium",
    mechanism: "Oxalic acid binds calcium to form insoluble calcium oxalate crystals in the gut",
    effect: "↓ Calcium absorption",
    examples: "Spinach + milk",
    evidence: "Moderate",
    impact: "Small",
    papers: [
      { title: "Calcium absorbability from spinach", authors: "Heaney RP, Weaver CM, Recker RR", year: 1988, url: "https://pubmed.ncbi.nlm.nih.gov/3354491/" },
    ],
  },
  {
    interaction: "Protein + Carotenoids",
    mechanism: "Dietary protein supports chylomicron synthesis, improving carotenoid transport from gut to bloodstream",
    effect: "↑ Beta-carotene uptake",
    examples: "Yogurt + carrot, protein powder + mango",
    evidence: "Moderate",
    impact: "Medium",
    papers: [
      { title: "Factors affecting the bioavailability of carotenoids in humans: physico-chemical and physiological aspects", authors: "Borel P et al", year: 2005, url: "https://pubmed.ncbi.nlm.nih.gov/15980925/" },
    ],
  },
];

const evidenceBadge = (evidence: string) => {
  if (evidence === "Strong") return "bg-green-100 text-green-800";
  if (evidence === "Moderate") return "bg-yellow-100 text-yellow-800";
  return "bg-secondary text-muted-foreground";
};

const impactBadge = (impact: string) => {
  if (impact === "Large") return "bg-blue-100 text-blue-800";
  if (impact === "Medium") return "bg-orange-100 text-orange-800";
  return "bg-secondary text-muted-foreground";
};

export function InteractionTable() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="text-base font-semibold mb-1 flex items-center gap-2">
        <span>🔬</span> Science Behind the Interactions
      </h2>
      <p className="text-xs text-muted-foreground mb-5">
        Evidence-based nutrient interactions with links to the primary research.
      </p>

      <div className="flex flex-col gap-4">
        {interactionData.map((row, i) => (
          <div key={i} className="rounded-lg border border-border p-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-sm font-semibold text-card-foreground">{row.interaction}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${evidenceBadge(row.evidence)}`}>
                {row.evidence} evidence
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${impactBadge(row.impact)}`}>
                {row.impact} impact
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-1">{row.mechanism}</p>
            <p className="text-xs font-medium text-card-foreground mb-2">{row.effect}</p>
            <p className="text-xs text-muted-foreground italic mb-3">e.g. {row.examples}</p>

            {/* Paper links */}
            <div className="flex flex-wrap gap-2">
              {row.papers.map((paper, pi) => (
                <a
                  key={pi}
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-border bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  title={paper.title}
                >
                  <span>📄</span>
                  <span>{paper.authors.split(',')[0]} et al. ({paper.year})</span>
                  <span className="opacity-50">↗</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 p-3 rounded-lg bg-secondary/30 border border-border/50 text-xs text-muted-foreground space-y-1 italic">
        <p>
          <strong className="not-italic">Evidence:</strong>{" "}
          <strong className="text-green-700 not-italic">Strong</strong> = multiple RCTs and meta-analyses.{" "}
          <strong className="text-yellow-700 not-italic">Moderate</strong> = good evidence, context-dependent.
        </p>
        <p>
          <strong className="not-italic">Impact:</strong>{" "}
          <strong className="text-blue-700 not-italic">Large</strong> = nutritionally significant.{" "}
          <strong className="text-orange-700 not-italic">Medium</strong> = moderate effect.{" "}
          Small = minor, generally not a concern.
        </p>
      </div>
    </div>
  );
}
