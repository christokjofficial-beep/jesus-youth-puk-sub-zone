# Landing Page – Everything Currently Used

Engine: prebuilt WebGL bundle `public/build/js-25cd474e.js`, injected by `components/3d/WebGLEngineLoader.tsx`.
Assets live in `public/webgl/`, `public/images/`, `public/video/`, `public/resources/`.
Refer to items by number (e.g. "change 9", "remove 31").

## A. Page scenes (scroll order, `app/page.tsx`)
1. Space scene (hero) – "A Missionary Movement of the Church", "Jesus Youth Global.", "Sent to 40+ nations", "scroll to enter the waters" button
2. Sky · Station 0 – "The Holy Spirit descends as a luminous dove."
3. Sky · Station 1 – "The Six Pillars of Jesus Youth Lifestyle."
4. Underwater · Station 0 – The Jordan Immersion
5. Underwater · Station 1 – Sacraments & Catholic lifestyle practices
6. Underwater · Station 2 – The Great Commission
7. Audio toggle – `resources/assets/audio/audio.mp3`
8. Footer – video `video/footer.m4v`

## B. 3D models (`public/webgl/models/`)
### Sacred / hero objects
9. `christ-redeemer.glb` – Christ statue
10. `logo.glb` – 3D logo
11. `pillar.glb`, `pillara2x.glb` – pillars
12. `arches.glb`, `wall.glb`, `step.glb`, `stonefloor.glb` – stone architecture
13. `jar.glb` – jar
14. `pill.glb`, `product-pill.glb` – pill / capsule
15. `orb.glb`, `orb-001.glb`, `orb-003.glb`, `orb-004.glb`, `pearl.glb` – glowing orbs, pearl

### Sky / land
16. `mountain.glb`, `rock-floating.glb`, `icelandic-boulder.glb` – mountain, rocks
17. `coralsky-001.glb` – sky coral shapes

### Underwater
18. `water.glb` – water surface
19. `floor0.glb`, `floor1.glb`, `floor2.glb` – sea floor
20. `coral0.glb`–`coral4.glb`, `coral-9.glb`, `coral1-001.glb` – corals
21. `seaweedgreen.glb`, `seaweedpink.glb` – seaweed
22. `seashell.glb`, `shell.glb` – shells
23. `fishbig.glb`, `fish-shoal.glb` – big fish, school of fish
24. `bubbles.glb`, `bubble-1.glb`, `smallbubblesfrompill.glb` – bubbles

## C. Textures, images, effects
25. Sky environment cube map – `webgl/textures/envMap/px|nx|py|ny|pz|nz.png`
26. Clouds – `webgl/textures/cloud-01.png`, `build/pink-clouds-2-*.png`, `build/pink-clouds-bg-*.png`
27. God rays – `images/godray.png`, `images/godray2.png`
28. Dust / noise – `webgl/textures/dust.jpg`, `noise.ktx2`, `noiseTexture.ktx2`, `gradient-noise.ktx2`
29. Matcaps (shiny finishes) – `webgl/textures/matcaps/*`, `jar/*`, `logo/*`, `pill/*`, `shell/pearl-matcap.ktx2`
30. Model textures – `bigFish/`, `fish-shoal/`, `corals/`, `coralSky/`, `seaweed/`, `bubbleSeaweed/`, `productBubbleSeaweed/`, `seashell/`, `shell/`, `floor/`, `mountain/`
31. Scroll image sequence – `images/sequence/`
32. Leftover product-site images – `images/product-affirm.jpg`, `pill-capture.png`, `vegan-icon.png`, `gluten-icon.png`, `gmo-icon.png`, `preservatives-icon.png`, `usa-icon.png`, `canada-icon.png`, `atlas.png`
33. Loose files in `public/` root – `statue_crop*.png`, `our_face_zoom*.png`, `face_wireframe*.png`, `head_tight_crop.png`, `feet_actual_crop.png`, `christ_stone_live.png`, `arch_texture.jpg`, `side_by_side_comparison.png`, `user_face_zoom.png` (work images, likely unused by the page)

## D. Engine / support files (`public/build/`)
34. `js-25cd474e.js` – main WebGL engine
35. `AffirmGui-*.js`, `GuiBase-*.js`, `ProductGui-*.js` – product UI modules
36. `jquery.min.js`, `style-70bb85ec.css`, `mark-*.png`
37. `public/basis/` – texture decoder for `.ktx2`

Sizes: models+textures ≈ 41 MB, video ≈ 14 MB, images ≈ 8 MB.

## Risk
The engine (34–35) and several assets (13, 14, 32) appear to come from Organimo's commercial site. Using their compiled code and models is a copyright/licensing risk. Plan: keep the scene structure (1–8), replace B–D with original baptism / dove / Jordan assets.

Descriptions are inferred from file names and section comments; the engine code was not inspected to confirm which files it actually loads.
