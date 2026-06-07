import { Paper, Typography, Box, Divider } from '@mui/material';
import { Code } from '@mui/icons-material';

export function RuleEngineExplanation() {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Code /> How the Rule Engine Works
      </Typography>

      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        Each ingredient is tagged with nutrients. The engine detects interactions between ingredient tags
        and calculates a score based on evidence strength and impact size.
      </Typography>

      <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1, fontFamily: 'monospace', fontSize: '0.85rem', mb: 2 }}>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', mb: 1 }}>
          <strong>Example: Banana + Blueberries</strong>
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', color: 'text.secondary', fontSize: '0.8rem' }}>
          banana: [<span style={{ color: '#d32f2f' }}>polyphenol_oxidase</span>]<br />
          blueberry: [<span style={{ color: '#d32f2f' }}>anthocyanins</span>, flavonoids, vitamin_c]<br />
          <br />
          <strong>Rule matched:</strong><br />
          polyphenol_oxidase + anthocyanins → <span style={{ color: '#ed6c02' }}>inhibit</span><br />
          confidence: <span style={{ color: '#ed6c02' }}>moderate</span><br />
          impact: <span style={{ color: '#757575' }}>small</span><br />
          score: <span style={{ color: '#d32f2f' }}>-5</span>
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
        Example Smoothie Analysis:
      </Typography>

      <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1, mb: 2 }}>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
          <strong>Ingredients:</strong><br />
          🍌 Banana<br />
          🫐 Blueberries<br />
          🌿 Spinach<br />
          🥣 Yogurt
        </Typography>
      </Box>

      <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.85rem', mb: 1 }}>
          <strong>Detected Interactions:</strong>
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'text.secondary' }}>
          Banana + Blueberries (polyphenol oxidase) → <span style={{ color: '#d32f2f' }}>-5</span><br />
          <em style={{ fontSize: '0.75rem' }}>Small impact: enzyme may reduce some anthocyanins</em><br />
          <br />
          Yogurt + Spinach (calcium vs iron) → <span style={{ color: '#d32f2f' }}>-8</span><br />
          <em style={{ fontSize: '0.75rem' }}>Medium impact: calcium may reduce iron absorption</em><br />
          <br />
          Yogurt + Spinach (calcium vs oxalates) → <span style={{ color: '#d32f2f' }}>-4</span><br />
          <em style={{ fontSize: '0.75rem' }}>Small impact: oxalates may reduce calcium absorption</em>
        </Typography>
      </Box>

      <Box sx={{ p: 2, bgcolor: 'success.light', borderRadius: 1, mt: 2 }}>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.85rem', mb: 1 }}>
          <strong>Final Score:</strong>
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
          Base score: 50<br />
          -5 (banana + blueberries)<br />
          -8 (yogurt calcium + spinach iron)<br />
          -4 (spinach oxalates + yogurt calcium)<br />
          <strong>= 33</strong>
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ display: 'block', mt: 2, fontStyle: 'italic', color: 'text.secondary' }}>
        💡 Try adding orange to activate the <strong>vitamin_c + iron_nonheme</strong> rule for +12 points!
      </Typography>

      <Box sx={{ mt: 3, p: 2, bgcolor: 'info.light', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
          Why use tags instead of hardcoding ingredient pairs?
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
          The tag system is flexible and scalable. Instead of manually defining "orange + spinach" and
          "strawberry + spinach" separately, we just tag both orange and strawberry with
          <code style={{ bgcolor: 'rgba(0,0,0,0.1)', padding: '2px 6px', borderRadius: 3, marginLeft: 4, marginRight: 4 }}>
            vitamin_c
          </code>
          and spinach with
          <code style={{ bgcolor: 'rgba(0,0,0,0.1)', padding: '2px 6px', borderRadius: 3, marginLeft: 4, marginRight: 4 }}>
            iron_nonheme
          </code>
          . The engine automatically detects all vitamin C + iron combinations!
        </Typography>
      </Box>
    </Paper>
  );
}
