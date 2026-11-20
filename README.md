# GTA 6 clip: the cop truck gets flipped

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/emasinves0-commits/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/emasinves0-commits/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for make.fun's [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) bounty.
[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The clip

A 20.5 second vertical Short (1080x1920) cut with ffmpeg by an AI agent from Rockstar's official
"Grand Theft Auto VI: An Extended Look" footage: during the Vice City getaway chase, the player shoots a pursuing
police truck and it is sent flipping through the street. The clip opens on the crash, runs the chase, and ends with
make.fun's pitch on screen: make clips like this with AI and earn money on make.fun.

- `clip.mp4`: the rendered clip.
- `UPLOAD.md`: the exact title, description and tags for the YouTube upload.
- `VIDEO.json`: the address of the public YouTube Short (a placeholder until it is uploaded).
- `main.ts`: copies `VIDEO.json` to the output directory (Node 22, standard library only).

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT
