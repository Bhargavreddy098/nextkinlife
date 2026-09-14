import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';

const STYLE =
  'premium abstract 3D render, deep charcoal ink background, translucent dark glass and brushed metal structures, glowing jade green accent lights, cinematic soft lighting, subtle depth of field, minimalist sophisticated enterprise technology aesthetic, ultra high quality, detailed, no text, no words, no letters, no logos, no watermark';

const IMAGES = [
  {
    name: 'hero-visual.png',
    size: '1344x768',
    prompt:
      'isometric layered software architecture made of stacked translucent dark glass platforms connected by thin glowing jade light beams, floating data nodes and small orbital rings, elegant negative space, ' +
      STYLE,
  },
  {
    name: 'work-ledger.png',
    size: '1344x768',
    prompt:
      'abstract financial technology platform, dark glass panels arranged in depth with thin streams of glowing green light flowing between them like transactions, fine grid floor reflection, ' +
      STYLE,
  },
  {
    name: 'work-atlas.png',
    size: '1344x768',
    prompt:
      'abstract logistics network visualization, glowing jade route lines connecting bright nodes across a dark minimal 3D topographic landscape with subtle elevation contours, small floating markers, ' +
      STYLE,
  },
  {
    name: 'work-helios.png',
    size: '1344x768',
    prompt:
      'abstract real-time analytics data platform, concentric translucent glass layers with particles of jade light cascading between them like a data waterfall, calm and precise composition, ' +
      STYLE,
  },
  {
    name: 'innovation-copilot.png',
    size: '1024x1024',
    prompt:
      'abstract AI reasoning core, a translucent dark glass sphere with intricate glowing jade neural filaments inside, thin orbital rings around it, floating on seamless dark background, ' +
      STYLE,
  },
  {
    name: 'innovation-docs.png',
    size: '1024x1024',
    prompt:
      'abstract intelligent document processing, floating translucent glass document sheets dissolving into structured streams of jade light particles, orderly and precise, dark seamless background, ' +
      STYLE,
  },
  {
    name: 'og-default.png',
    size: '1344x768',
    prompt:
      'wide cinematic abstract technology composition, layered dark glass architecture with a single bright jade light path crossing the frame, generous negative space on the left side, ' +
      STYLE,
  },
];

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const zai = await ZAI.create();

  for (const img of IMAGES) {
    const outPath = path.join(OUT_DIR, img.name);
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 50000) {
      console.log(`skip (exists): ${img.name}`);
      continue;
    }
    let ok = false;
    for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
      try {
        const res = await zai.images.generations.create({ prompt: img.prompt, size: img.size });
        const b64 = res?.data?.[0]?.base64;
        if (!b64) throw new Error('empty response');
        fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
        console.log(`ok: ${img.name} (${img.size})`);
        ok = true;
      } catch (e) {
        console.error(`attempt ${attempt} failed for ${img.name}: ${e.message}`);
        if (attempt < 3) await new Promise((r) => setTimeout(r, 1500 * attempt));
      }
    }
    if (!ok) console.error(`FAILED: ${img.name}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
