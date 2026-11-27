# Her görsel için 480/960/1600 px webp + 1200 px jpg yedek üretir, ölçüleri src/images.json'a yazar.
import json, os, sys
from PIL import Image
SRC, OUT, MAN = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(OUT, exist_ok=True)
for f in os.listdir(OUT): os.remove(os.path.join(OUT, f))
BG = {'night-wide','reading-wide','standing','bg-mahzen','bg-sy17','bg-cello','bg-rehearsal','bg-eic'}
man = {}
for f in sorted(os.listdir(SRC)):
    if not f.endswith('.jpg'): continue
    name = f[:-4]; im = Image.open(os.path.join(SRC, f)).convert('RGB')
    cap = 6400 if name in BG else 2400
    widths = sorted({w for w in (480, 960, 1600, 2400, 3200, 4000, 4800, 6400) if w < im.width and w <= cap} | {min(im.width, cap)})
    for w in widths:
        r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS) if w < im.width else im
        r.save(f'{OUT}/{name}-{w}.webp', 'WEBP', quality=(84 if name in BG else 76), method=6)
    fb = min(1200, im.width); r = im.resize((fb, round(im.height * fb / im.width)), Image.LANCZOS)
    r.save(f'{OUT}/{name}.jpg', 'JPEG', quality=80, optimize=True, progressive=True)
    man[name] = {'w': im.width, 'h': im.height, 'widths': widths}
json.dump(man, open(MAN, 'w'), indent=0)
print(len(man), 'images')
