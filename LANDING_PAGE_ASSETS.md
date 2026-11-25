# Landing Page – Everything Currently Used

Measured by scrolling the whole page on a phone (390×844) and a desktop (1440×900): every file listed here is
downloaded, and nothing else in `public/` is. Total ≈ 25 MB per visit. Refer to items by number (e.g. "change 9").

## A. Page flow (scroll order)
1. Statue scene (engine) – "Jesus Youth Global." hero, Christ statue on the mountain
2. Clouds roll in over the statue → dove scene (`public/dove-scene.html`, shown by `components/3d/DoveSkyOverlay.tsx`)
3. Dove descends from the cloud and rests above Jesus in the river
4. Camera comes down to the river; a waterline rises into the underwater scene
5. Underwater scene (engine) – the Six Pillars bubbles, stones, big fish, "Go into all the world." ending

## B. Code
6. `public/build/js-25cd474e.js` – WebGL engine (statue + underwater scenes), loaded by `components/3d/WebGLEngineLoader.tsx`
7. `public/build/meshopt_decoder.module.js` – decoder for the compressed statue model
8. `public/build/style-70bb85ec.css`, `public/build/jquery.min.js` – engine stylesheet and its jQuery dependency
9. `public/basis/` – decoder for the `.ktx2` textures
10. Dove scene libraries – three.js r170 from unpkg (`three.module.min.js`, GLTFLoader, Water, post-processing)

## C. Models (`public/webgl/models/`)
11. `jar.glb` – the Christ statue (lossless meshopt compression)
12. `mountain.glb` – the mountain under the statue
13. `baptism/jesus-rigged.glb` – Jesus in the river (dove scene)
14. `baptism/white-dove-rig.glb` – the dove (dove scene)
15. `floor0.glb`, `floor1.glb`, `floor2.glb`, `stonefloor.glb` – sea floor
16. `icelandic-boulder.glb`, `pillar.glb`, `wall.glb`, `arches.glb` – underwater rocks, standing stones, walls, arch
17. `fishbig.glb` – the big fish

## D. Textures (`public/webgl/textures/`)
18. Statue: `jar/stone_diffuse_cgtrader.webp`, `jar/jar_Normal_cgtrader.jpg`, `jar/stone_matcap.png`, `jar/gold_alpha3.png`, `jar/shadow_clean.png`, `mountain/*`, `space-v11.hdr` (reflections)
19. Statue backdrop: `spaceCubeMap/px.jpg`, `nx.jpg`, `pz.jpg`, `py.ktx2`
20. Dove scene: `envMap/*` (reflections), `cloud-01.png` (clouds), `waternormals.jpg` (river)
21. Underwater: `floor/*`, `underwaterBoulder/*`, `underwaterPillar/*`, `underwaterRockWall/*`, `underwaterArches/*`, `underwaterStoneFloor/*`, `bigFish/*`, `bubbleSeaweed/*` (inside the pillar bubbles), `waternormals.ktx2` (surface from below)
22. Shared: `matcaps/*`, `noise.ktx2`, `noiseTexture.ktx2`, `gradient-noise.ktx2` (light rays), `smoke.ktx2`, `dust.jpg`

## E. Fonts (`public/fonts/`)
23. Fracktif, Manrope, Mauren (`.woff2`; the `.woff` files are fallbacks for old browsers)

## Risk
The engine (6) and several models and textures (11, 12, 15–17, 18–22) come from Organimo's commercial site.
Using their compiled code and assets is a copyright/licensing risk. Plan: keep the scene structure (A) and
replace them with original statue, river and underwater assets.
