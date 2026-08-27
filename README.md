# dogxi.me

Static personal site. No build step.

## Project Images

Recommended size: `1200 x 630`.

Website screenshots:

```text
assets/projects/web/01-blog.webp
assets/projects/web/02-face.webp
assets/projects/web/03-resume.webp
assets/projects/web/04-im-template.webp
assets/projects/web/05-ami.webp
assets/projects/web/06-zzuli.webp
assets/projects/web/07-kivi.webp
assets/projects/web/08-dxc.webp
assets/projects/web/09-algo.webp
assets/projects/web/10-qface.webp
assets/projects/web/11-qingbot.webp
```

OSS images use GitHub OpenGraph previews:

```text
assets/projects/oss/01-iface.webp
assets/projects/oss/02-r2-image.webp
assets/projects/oss/03-ami.webp
assets/projects/oss/04-60s-web.webp
assets/projects/oss/05-bark-bark.webp
assets/projects/oss/06-webark-im-template.webp
assets/projects/oss/07-astro-doge.webp
```

Use `.webp` for project images.

## Homepage sync

Repo stats on the homepage are refreshed from GitHub through `scripts/update-homepage.mjs`.
Any `.project-stars` counter with `data-repo="owner/name"` will be updated in place.

The scheduled GitHub Action runs weekly, and you can also trigger it manually from the Actions tab.
