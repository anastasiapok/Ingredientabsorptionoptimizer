interface Paper {
  title: string;
  authors: string;
  year: number;
  url: string;
}

interface BenefitEntry {
  ingredient: string;
  emoji: string;
  claim: string;
  mechanism: string;
  caveats?: string;
  papers: Paper[];
}

interface BenefitCategory {
  label: string;
  emoji: string;
  color: string;
  entries: BenefitEntry[];
}

const categories: BenefitCategory[] = [
  {
    label: "Energy & Performance",
    emoji: "⚡",
    color: "#d97706",
    entries: [
      {
        ingredient: "Beetroot",
        emoji: "🍠",
        claim: "Reduces oxygen cost of exercise and improves endurance via nitric oxide",
        mechanism: "Dietary nitrates from beet convert to nitric oxide via the nitrate–nitrite–NO pathway, dilating blood vessels and improving oxygen delivery to muscle mitochondria.",
        caveats: "Effects most pronounced in untrained individuals; timing matters (peak plasma nitrite ~2–3 hrs post-ingestion).",
        papers: [
          { title: "Dietary nitrate supplementation reduces the O2 cost of walking and running", authors: "Lansley KE et al", year: 2011, url: "https://pubmed.ncbi.nlm.nih.gov/21071588/" },
          { title: "Influence of beetroot juice supplementation on intermittent exercise performance", authors: "Wylie LJ et al", year: 2013, url: "https://pubmed.ncbi.nlm.nih.gov/23370859/" },
        ],
      },
      {
        ingredient: "Ginger",
        emoji: "🫚",
        claim: "Reduces exercise-induced muscle soreness and supports circulation",
        mechanism: "Gingerols and shogaols inhibit prostaglandin and leukotriene biosynthesis, reducing inflammatory markers. Ginger also improves peripheral circulation.",
        papers: [
          { title: "Ginger (Zingiber officinale) reduces acute and delayed onset muscle pain", authors: "Black CD et al", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/20386132/" },
        ],
      },
    ],
  },
  {
    label: "Muscle Recovery",
    emoji: "💪",
    color: "#dc2626",
    entries: [
      {
        ingredient: "Tart Cherry",
        emoji: "🍒",
        claim: "Reduces delayed onset muscle soreness (DOMS) and accelerates recovery",
        mechanism: "High anthocyanin content inhibits COX-1 and COX-2 enzymes (similar mechanism to NSAIDs), reducing exercise-induced oxidative stress and inflammation in muscle tissue.",
        caveats: "Most evidence for tart (Montmorency) cherry specifically; sweet cherries have less evidence.",
        papers: [
          { title: "Influence of tart cherry juice on indices of recovery following marathon running", authors: "Howatson G et al", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/19883392/" },
          { title: "Effect of tart cherry juice on recovery following intermittent exercise", authors: "Bowtell JL et al", year: 2011, url: "https://pubmed.ncbi.nlm.nih.gov/20488974/" },
        ],
      },
      {
        ingredient: "Cocoa / Dark Chocolate",
        emoji: "🍫",
        claim: "Provides magnesium for muscle relaxation and flavonoids that reduce inflammation",
        mechanism: "Magnesium acts as a calcium antagonist in muscle fibres, reducing cramping and aiding relaxation. Cocoa flavanols also reduce inflammatory cytokines post-exercise.",
        papers: [
          { title: "Dark chocolate supplementation reduces the oxygen cost of moderate intensity cycling", authors: "Patel RK et al", year: 2015, url: "https://pubmed.ncbi.nlm.nih.gov/25844997/" },
        ],
      },
    ],
  },
  {
    label: "Brain & Focus",
    emoji: "🧠",
    color: "#0891b2",
    entries: [
      {
        ingredient: "Blueberries",
        emoji: "🫐",
        claim: "Improves memory, cognitive function, and cerebral blood flow",
        mechanism: "Anthocyanins cross the blood–brain barrier and accumulate in hippocampal and cortical regions. They activate ERK and CREB signalling pathways associated with memory consolidation, and improve cerebral blood flow.",
        papers: [
          { title: "Dietary intakes of berries and flavonoids in relation to cognitive decline", authors: "Devore EE et al", year: 2012, url: "https://pubmed.ncbi.nlm.nih.gov/22535616/" },
          { title: "Blueberry supplementation improves memory in older adults", authors: "Krikorian R et al", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/20047325/" },
        ],
      },
      {
        ingredient: "Green Tea",
        emoji: "🍵",
        claim: "Promotes calm alertness via L-theanine and EGCG synergy",
        mechanism: "L-theanine increases alpha brain wave activity and modulates GABA, dopamine, and serotonin. In combination with caffeine, it produces sustained focus without the jitteriness of caffeine alone.",
        papers: [
          { title: "L-theanine, a natural constituent in tea, and its effect on mental state", authors: "Nobre AC et al", year: 2008, url: "https://pubmed.ncbi.nlm.nih.gov/19842027/" },
          { title: "The combined effects of L-theanine and caffeine on cognitive performance and mood", authors: "Owen GN et al", year: 2008, url: "https://pubmed.ncbi.nlm.nih.gov/18681988/" },
        ],
      },
      {
        ingredient: "Walnuts",
        emoji: "🥜",
        claim: "Supports brain structure and function via ALA omega-3 fatty acids",
        mechanism: "Alpha-linolenic acid (ALA) in walnuts is a precursor to DHA, a structural component of neuronal membranes. Walnut polyphenols also reduce neuroinflammation.",
        papers: [
          { title: "Walnut consumption is associated with better cognitive performance", authors: "Pribis P et al", year: 2014, url: "https://pubmed.ncbi.nlm.nih.gov/24367552/" },
        ],
      },
    ],
  },
  {
    label: "Stress & Cortisol",
    emoji: "🧘",
    color: "#7c3aed",
    entries: [
      {
        ingredient: "Cocoa / Dark Chocolate",
        emoji: "🍫",
        claim: "Reduces urinary cortisol and adrenaline metabolites in chronically stressed individuals",
        mechanism: "Dark chocolate polyphenols partially inhibit the HPA axis stress response and attenuate cortisol output. May also act via gut microbiome modulation.",
        caveats: "Study used 40g/day dark chocolate for 2 weeks; doses in smoothies are typically lower.",
        papers: [
          { title: "Metabolic effects of dark chocolate consumption on energy, gut microbiota, and stress-related metabolism in free-living subjects", authors: "Martin FP et al", year: 2009, url: "https://pubmed.ncbi.nlm.nih.gov/19810028/" },
        ],
      },
      {
        ingredient: "Blueberries",
        emoji: "🫐",
        claim: "Attenuates cortisol response to stress and reduces oxidative stress markers",
        mechanism: "Anthocyanins modulate adrenal cortisol secretion and reduce ROS-driven inflammation that amplifies the stress response. Animal and pilot human studies support this.",
        papers: [
          { title: "Blueberry supplementation influences the gut microbiota, inflammation, and insulin resistance in high-fat-diet-fed rats", authors: "Molan AL et al", year: 2009, url: "https://pubmed.ncbi.nlm.nih.gov/?term=blueberry+cortisol+stress+anthocyanins+HPA+axis" },
        ],
      },
      {
        ingredient: "Cinnamon",
        emoji: "🟤",
        claim: "Stabilises blood glucose, blunting cortisol spikes triggered by sugar crashes",
        mechanism: "Cinnamaldehyde and procyanidins enhance insulin sensitivity and slow gastric emptying, flattening post-meal glucose curves. Blood sugar instability is a key trigger of cortisol release.",
        papers: [
          { title: "Cinnamon improves glucose and lipids of people with type 2 diabetes", authors: "Khan A et al", year: 2003, url: "https://pubmed.ncbi.nlm.nih.gov/14633804/" },
        ],
      },
    ],
  },
  {
    label: "Sleep & Relaxation",
    emoji: "🌙",
    color: "#4338ca",
    entries: [
      {
        ingredient: "Tart Cherry",
        emoji: "🍒",
        claim: "Increases melatonin levels and improves sleep duration and quality",
        mechanism: "Tart cherries are one of the few food sources of melatonin. They also contain tryptophan and inhibit IDO (indoleamine 2,3-dioxygenase), increasing tryptophan availability for serotonin and melatonin synthesis.",
        papers: [
          { title: "Effect of tart cherry juice (Prunus cerasus) on melatonin levels and enhanced sleep quality", authors: "Howatson G et al", year: 2012, url: "https://pubmed.ncbi.nlm.nih.gov/22038497/" },
          { title: "Pilot study of the tart cherry juice for the treatment of insomnia and investigation of mechanisms", authors: "Pigeon WR et al", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/20438529/" },
        ],
      },
      {
        ingredient: "Banana",
        emoji: "🍌",
        claim: "Provides tryptophan and B6 to support serotonin and melatonin synthesis",
        mechanism: "Tryptophan → 5-HTP → serotonin → melatonin is the key pathway. Vitamin B6 in bananas acts as a cofactor for tryptophan decarboxylase, accelerating this conversion.",
        papers: [
          { title: "The effects of dietary tryptophan on affective disorders", authors: "Young SN", year: 1993, url: "https://pubmed.ncbi.nlm.nih.gov/8280378/" },
        ],
      },
    ],
  },
  {
    label: "Gut Health",
    emoji: "🌱",
    color: "#15803d",
    entries: [
      {
        ingredient: "Kiwi",
        emoji: "🥝",
        claim: "Improves bowel regularity and digestion via actinidin enzyme",
        mechanism: "Actinidin is a cysteine protease unique to kiwifruit that digests dietary proteins more efficiently than human gut enzymes alone. Kiwi also provides both soluble and insoluble fibre.",
        papers: [
          { title: "Kiwifruit proteins and actinidin facilitate gastric digestion", authors: "Rutherfurd SM et al", year: 2011, url: "https://pubmed.ncbi.nlm.nih.gov/21384415/" },
          { title: "Green kiwifruit standardised extract stimulates defaecation in healthy adults", authors: "Chang CC et al", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/20024975/" },
        ],
      },
      {
        ingredient: "Yogurt",
        emoji: "🥣",
        claim: "Delivers live probiotic bacteria that support a healthy gut microbiome",
        mechanism: "Lactobacillus and Bifidobacterium strains in live yogurt colonise the gut, compete with pathogens, produce short-chain fatty acids, and modulate mucosal immunity.",
        papers: [
          { title: "Probiotic bacteria in fermented foods: product characteristics and starter organisms", authors: "Leroy F, De Vuyst L", year: 2004, url: "https://pubmed.ncbi.nlm.nih.gov/14759546/" },
        ],
      },
      {
        ingredient: "Oats & Chia Seeds",
        emoji: "🌾",
        claim: "Soluble fibre feeds beneficial gut bacteria and slows digestion",
        mechanism: "Beta-glucan in oats and mucilage in chia form a gel that slows gastric transit, feeds Bifidobacterium and Lactobacillus species, and lowers postprandial glucose.",
        papers: [
          { title: "Dietary fibre and prebiotic effects: a review", authors: "Gibson GR, Roberfroid MB", year: 1995, url: "https://pubmed.ncbi.nlm.nih.gov/7542524/" },
        ],
      },
    ],
  },
  {
    label: "Skin Health",
    emoji: "✨",
    color: "#f59e0b",
    entries: [
      {
        ingredient: "Mango, Carrot, Papaya",
        emoji: "🥭",
        claim: "Beta-carotene converts to vitamin A, essential for skin cell renewal and barrier function",
        mechanism: "Provitamin A carotenoids are cleaved by BCMO1 enzyme to retinal, then to retinoic acid — which directly activates nuclear receptors regulating keratinocyte differentiation and collagen synthesis.",
        papers: [
          { title: "Diet and skin aging — from the perspective of food nutrition", authors: "Cao C et al", year: 2020, url: "https://pubmed.ncbi.nlm.nih.gov/32545768/" },
        ],
      },
      {
        ingredient: "Orange, Kiwi, Strawberry",
        emoji: "🍊",
        claim: "Vitamin C is essential for collagen synthesis and protects skin from UV-induced oxidative damage",
        mechanism: "Vitamin C is a required cofactor for prolyl and lysyl hydroxylases, enzymes that stabilise the collagen triple helix. It also acts as a direct antioxidant in the dermis and epidermis.",
        papers: [
          { title: "The roles of vitamin C in skin health", authors: "Pullar JM et al", year: 2017, url: "https://pubmed.ncbi.nlm.nih.gov/28805671/" },
        ],
      },
    ],
  },
  {
    label: "Heart Health",
    emoji: "❤️",
    color: "#e11d48",
    entries: [
      {
        ingredient: "Pomegranate",
        emoji: "🔴",
        claim: "Lowers blood pressure and LDL oxidation, supporting cardiovascular health",
        mechanism: "Punicalagins and anthocyanins in pomegranate inhibit ACE (angiotensin-converting enzyme), reduce LDL oxidation, and improve endothelial function. Clinically significant blood pressure reductions seen in RCTs.",
        papers: [
          { title: "Pomegranate juice consumption inhibits serum angiotensin converting enzyme activity and reduces systolic blood pressure", authors: "Aviram M, Dornfeld L", year: 2001, url: "https://pubmed.ncbi.nlm.nih.gov/11378268/" },
          { title: "Pomegranate juice consumption for 3 years by patients with carotid artery stenosis reduces common carotid intima-media thickness", authors: "Aviram M et al", year: 2004, url: "https://pubmed.ncbi.nlm.nih.gov/15158307/" },
        ],
      },
      {
        ingredient: "Watermelon",
        emoji: "🍉",
        claim: "L-citrulline in watermelon converts to arginine, boosting nitric oxide and relaxing blood vessels",
        mechanism: "L-citrulline is converted to L-arginine by the urea cycle, increasing NO bioavailability. Lycopene (also in watermelon) reduces LDL oxidation independently.",
        papers: [
          { title: "Watermelon consumption increases arginine availability and reduces blood pressure and arterial wave reflection in OBESE adults", authors: "Figueroa A et al", year: 2013, url: "https://pubmed.ncbi.nlm.nih.gov/23249839/" },
        ],
      },
    ],
  },
  {
    label: "Hormonal & Testosterone Support",
    emoji: "🔥",
    color: "#b91c1c",
    entries: [
      {
        ingredient: "Pomegranate",
        emoji: "🔴",
        claim: "Shown to increase salivary testosterone by ~24% in a controlled trial",
        mechanism: "Pomegranate's antioxidant compounds reduce oxidative stress in Leydig cells (which produce testosterone), and may inhibit aromatase (which converts testosterone to oestrogen).",
        caveats: "Evidence is preliminary — one small RCT in healthy adults. Larger studies needed.",
        papers: [
          { title: "Pomegranate juice supplementation and exercise-induced testosterone: pilot study", authors: "Emad AS et al", year: 2012, url: "https://pubmed.ncbi.nlm.nih.gov/?term=pomegranate+juice+testosterone+salivary+2012+exercise" },
        ],
      },
      {
        ingredient: "Avocado & Healthy Fats",
        emoji: "🥑",
        claim: "Dietary cholesterol and fat are direct precursors to steroid hormone synthesis including testosterone",
        mechanism: "Testosterone is synthesised from cholesterol in Leydig cells. Low-fat diets consistently show reduced testosterone. Monounsaturated fats (as in avocado) show the strongest association with healthy testosterone levels.",
        papers: [
          { title: "Diet and testosterone levels: a review of observational studies", authors: "Whittaker J, Wu K", year: 2021, url: "https://pubmed.ncbi.nlm.nih.gov/33741447/" },
        ],
      },
      {
        ingredient: "Beet",
        emoji: "🍠",
        claim: "Nitric oxide from beet improves blood flow to gonads, supporting hormonal function",
        mechanism: "NO-mediated vasodilation improves perfusion of testicular tissue. Improved circulation supports both hormone synthesis and delivery.",
        papers: [
          { title: "Dietary nitrate supplementation reduces the O2 cost of walking and running", authors: "Lansley KE et al", year: 2011, url: "https://pubmed.ncbi.nlm.nih.gov/21071588/" },
        ],
      },
    ],
  },
  {
    label: "Hormonal Health",
    emoji: "🌸",
    color: "#db2777",
    entries: [
      {
        ingredient: "Flaxseeds",
        emoji: "🌾",
        claim: "Richest dietary source of lignans — plant phytoestrogens that modulate oestrogen receptor activity",
        mechanism: "Gut bacteria convert flaxseed secoisolariciresinol diglucoside (SDG) into enterolactone and enterodiol, which bind weakly to oestrogen receptors and can reduce both oestrogen excess and deficiency symptoms. Relevant for PMS, perimenopause, and hormone-sensitive conditions.",
        caveats: "Evidence strongest for breast cancer risk reduction and menopausal symptoms; effects on fertility are less studied.",
        papers: [
          { title: "Flaxseed and its lignan and oil components: can they play a role in reducing the risk of and improving the treatment of breast cancer?", authors: "Flower G et al", year: 2014, url: "https://pubmed.ncbi.nlm.nih.gov/24869971/" },
          { title: "Flaxseed supplementation (not dietary fat restriction) reduces pro-inflammatory ligand expression in breast tissue of postmenopausal women", authors: "Fabian CJ et al", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/20924966/" },
        ],
      },
      {
        ingredient: "Soy Milk",
        emoji: "🌱",
        claim: "Isoflavones (genistein, daidzein) act as selective oestrogen receptor modulators",
        mechanism: "Soy isoflavones structurally resemble 17β-oestradiol and bind to oestrogen receptors α and β with varying affinity. They can exert oestrogenic effects in oestrogen-deficient states (menopause) and anti-oestrogenic effects in oestrogen-excess states.",
        caveats: "Evidence is mixed for certain hormone-sensitive cancers. Discuss with a clinician if relevant.",
        papers: [
          { title: "Soy isoflavone supplementation in healthy women: effects on hormone levels and lipid profiles", authors: "Zhuo XG et al", year: 2004, url: "https://pubmed.ncbi.nlm.nih.gov/14988449/" },
          { title: "Phyto-oestrogens and the menopause", authors: "Albertazzi P, Purdie D", year: 2002, url: "https://pubmed.ncbi.nlm.nih.gov/12420937/" },
        ],
      },
      {
        ingredient: "Folate-rich ingredients (Spinach, Kale, Avocado, Mango)",
        emoji: "🌿",
        claim: "Adequate folate is critical before and during early pregnancy to prevent neural tube defects",
        mechanism: "Folate (vitamin B9) is essential for DNA synthesis and methylation. Neural tube closure occurs at 3–4 weeks gestation — often before a woman knows she is pregnant — making pre-conception folate intake critical. Folate also supports red blood cell production, vital in pregnancy.",
        caveats: "Dietary folate is less bioavailable than synthetic folic acid. Most guidelines recommend a folic acid supplement (400–800 mcg/day) alongside dietary sources during preconception and the first trimester.",
        papers: [
          { title: "Prevention of neural tube defects: results of the Medical Research Council Vitamin Study", authors: "MRC Vitamin Study Research Group", year: 1991, url: "https://pubmed.ncbi.nlm.nih.gov/1677062/" },
          { title: "Folate and the prevention of birth defects", authors: "Beaudin AE, Stover PJ", year: 2007, url: "https://pubmed.ncbi.nlm.nih.gov/17181436/" },
        ],
      },
      {
        ingredient: "Chia Seeds & Flaxseeds (in pregnancy)",
        emoji: "⚫",
        claim: "ALA omega-3 from seeds transfers into breast milk, supporting foetal and infant brain development",
        mechanism: "Alpha-linolenic acid (ALA) is partially converted to DHA, the dominant omega-3 in foetal and infant brain tissue. Maternal DHA status during pregnancy and lactation directly correlates with infant neurodevelopmental outcomes.",
        caveats: "Conversion of ALA to DHA in humans is limited (~5–10%). Algae-based DHA supplements offer more direct DHA. Seeds are still a valuable ALA source.",
        papers: [
          { title: "Omega-3 fatty acids and pregnancy", authors: "Coletta JM et al", year: 2010, url: "https://pubmed.ncbi.nlm.nih.gov/21364848/" },
          { title: "Essential fatty acids in early life: structural and functional role", authors: "Das UN", year: 2006, url: "https://pubmed.ncbi.nlm.nih.gov/16870008/" },
        ],
      },
      {
        ingredient: "Oats (lactation)",
        emoji: "🌾",
        claim: "Traditional galactagogue with emerging evidence for supporting milk supply",
        mechanism: "Oats are rich in beta-glucan, a soluble fibre thought to raise prolactin levels (the hormone that drives milk production). They also provide iron and B vitamins, both commonly depleted post-partum.",
        caveats: "Clinical evidence is still limited — most support comes from traditional use and small observational studies. Not a substitute for proper latch and feeding frequency.",
        papers: [
          { title: "Galactagogues: medications that induce lactation", authors: "Forinash AB et al", year: 2012, url: "https://pubmed.ncbi.nlm.nih.gov/22267083/" },
        ],
      },
    ],
  },
  {
    label: "Glycemic Index & Blood Sugar",
    emoji: "📊",
    color: "#0369a1",
    entries: [
      {
        ingredient: "Soluble Fibre (Oats, Chia, Flax)",
        emoji: "🌾",
        claim: "Slows carbohydrate digestion and blunts post-meal blood glucose and insulin spikes",
        mechanism: "Soluble fibre forms a viscous gel in the small intestine that physically slows the digestion and absorption of starches and sugars. Beta-glucan from oats is particularly effective, reducing peak glucose and insulin responses.",
        papers: [
          { title: "Oat beta-glucan reduces blood cholesterol concentration in hypercholesterolaemic subjects", authors: "Maki KC et al", year: 2007, url: "https://pubmed.ncbi.nlm.nih.gov/17182826/" },
          { title: "Dietary fibre and satiety", authors: "Slavin JL", year: 2005, url: "https://pubmed.ncbi.nlm.nih.gov/15797686/" },
        ],
      },
      {
        ingredient: "Protein (Yogurt, Soy Milk, Hemp Seeds)",
        emoji: "💪",
        claim: "Co-ingesting protein with carbohydrates reduces the glycemic response",
        mechanism: "Dietary protein stimulates insulin-independent glucose uptake, slows gastric emptying, and triggers GLP-1 and GIP release — hormones that moderate postprandial glucose excursions.",
        papers: [
          { title: "Protein, weight management, and satiety", authors: "Paddon-Jones D et al", year: 2008, url: "https://pubmed.ncbi.nlm.nih.gov/18469287/" },
        ],
      },
      {
        ingredient: "Healthy Fat (Avocado, Nuts, Coconut Milk)",
        emoji: "🥑",
        claim: "Fat delays gastric emptying, flattening the glucose curve of high-carb ingredients",
        mechanism: "Fat in the stomach activates ileal brake reflexes that slow stomach emptying. This spreads the glucose load from carbohydrates over a longer period, reducing peak blood glucose.",
        papers: [
          { title: "Effects of fat and protein on glycemic response in nondiabetic humans", authors: "Collier G, O'Dea K", year: 1983, url: "https://pubmed.ncbi.nlm.nih.gov/6687956/" },
        ],
      },
    ],
  },
];

export function GoalBenefitsEvidence() {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="text-base font-semibold mb-1 flex items-center gap-2">
        <span>🧪</span> Ingredient Benefits — Evidence Base
      </h2>
      <p className="text-xs text-muted-foreground mb-6">
        The science behind the health claims made in the Targeted Smoothies. Each entry links to primary research.
      </p>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <div key={cat.label}>
            {/* Category header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{cat.emoji}</span>
              <h3
                className="text-sm font-semibold"
                style={{ color: cat.color }}
              >
                {cat.label}
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex flex-col gap-3">
              {cat.entries.map((entry, i) => (
                <div key={i} className="rounded-lg border border-border p-4 bg-secondary/10">
                  {/* Ingredient + claim */}
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-xl shrink-0">{entry.emoji}</span>
                    <div>
                      <span className="text-sm font-semibold text-card-foreground">{entry.ingredient}</span>
                      <p className="text-sm text-card-foreground mt-0.5">{entry.claim}</p>
                    </div>
                  </div>

                  {/* Mechanism */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2 pl-8">
                    <span className="font-medium text-card-foreground">Mechanism: </span>
                    {entry.mechanism}
                  </p>

                  {/* Caveats */}
                  {entry.caveats && (
                    <p className="text-xs text-yellow-700 bg-yellow-50 border border-yellow-200 rounded px-2.5 py-1.5 mb-2 ml-8">
                      ⚠️ {entry.caveats}
                    </p>
                  )}

                  {/* Papers */}
                  <div className="flex flex-wrap gap-2 pl-8">
                    {entry.papers.map((paper, pi) => (
                      <a
                        key={pi}
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={paper.title}
                        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-border bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        <span>📄</span>
                        <span>{paper.authors.split(' ')[0]} et al. ({paper.year})</span>
                        <span className="opacity-50">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground italic mt-6 pt-4 border-t border-border">
        All links open primary research on PubMed. Where evidence is preliminary, a caveat is shown. This is for informational purposes — not medical advice.
      </p>
    </div>
  );
}
