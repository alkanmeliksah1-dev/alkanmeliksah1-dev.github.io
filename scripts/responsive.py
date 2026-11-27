# Her görsel için 480/960/1600 px webp + 1200 px jpg yedek üretir, ölçüleri src/images.json'a yazar.
import json, os, sys
from PIL import Image
SRC, OUT, MAN = sys.argv[1], sys.argv[2], sys.argv[3]
os.makedirs(OUT, exist_ok=True)
for f in os.listdir(OUT): os.remove(os.path.join(OUT, f))
BG = {'night-wide','reading-wide','bg-score','bg-drawing','bg-curtain','bg-rehearse','bg-rehearsal','bg-eic'}
man = {}
import numpy as np
def grade(im):
    # Arka planlar için sitenin tonunu (CSS: grayscale(1) sepia(.22) contrast(1.06)) dosyaya işler;
    # tarayıcı her karede filtre hesaplamak zorunda kalmaz, kaydırma akıcı olur.
    a = np.asarray(im).astype(np.float32) / 255
    g = a @ np.array([0.2126, 0.7152, 0.0722], np.float32)
    k = 0.22
    M = np.array([[0.393 + 0.607 * (1 - k), 0.769 - 0.769 * (1 - k), 0.189 - 0.189 * (1 - k)],
                  [0.349 - 0.349 * (1 - k), 0.686 + 0.314 * (1 - k), 0.168 - 0.168 * (1 - k)],
                  [0.272 - 0.272 * (1 - k), 0.534 - 0.534 * (1 - k), 0.131 + 0.869 * (1 - k)]], np.float32)
    rgb = np.repeat(g[..., None], 3, axis=2) @ M.T
    rgb = (rgb - 0.5) * 1.06 + 0.5
    return Image.fromarray(np.clip(rgb * 255 + 0.5, 0, 255).astype(np.uint8))
for f in sorted(os.listdir(SRC)):
    if not f.endswith('.jpg'): continue
    name = f[:-4]; im = Image.open(os.path.join(SRC, f)).convert('RGB')
    if name in BG: im = grade(im)
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
