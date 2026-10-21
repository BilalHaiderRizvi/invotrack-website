# invotrack.in

Marketing website for InvoTrack. It is plain HTML/CSS/JS with no build step and is hosted on GitHub Pages.

## Before going live: fill in `assets/js/config.js`

Every price and contact detail on the site comes from this one file:

| Field | What to put |
|---|---|
| `businessName`, `businessAddress` | Registered business name and full address. These appear in the Privacy Policy, Terms and footer. |
| `supportEmail` | An inbox you actually check. Google Play reviewers may email it. |
| `whatsappNumber` | Country code + number, digits only, e.g. `919876543210` |
| `plans[].price` | Rupees, whole numbers. `0` shows "Contact us for pricing". |
| `gstNote` | "Prices exclusive of GST" or "inclusive". |
| `playStoreUrl` | Leave `""` until the app is live. The button then shows "Coming soon". |
| `jurisdictionCity`, `grievanceOfficer` | Used in the Terms and Privacy Policy. |

Also review the legal pages (`privacy/`, `terms/`, `delete-account/`) yourself, and with a professional if you can. In particular:
- **Privacy, section 5:** if the app uses Firebase Analytics, Crashlytics, Google Sign-In or any other SDK, add it there.
- **Terms, section 3:** confirm the refund policy wording.

## Deploy

```bash
cd invotrack-website
git init && git add . && git commit -m "InvoTrack website"
git branch -M main
git remote add origin https://github.com/<username>/invotrack-website.git
git push -u origin main
```

Then, on GitHub:
1. Go to **Settings → Pages**, set Source to **Deploy from a branch**, and choose Branch `main`, folder `/ (root)`.
2. Set the **Custom domain** to `invotrack.in`. The `CNAME` file already contains it.
3. Once the DNS check passes, tick **Enforce HTTPS**.

On GoDaddy, go to **DNS** for invotrack.in:
- Remove the existing `@` A record (Parked) and any `@` forwarding.
- Add 4 **A** records for `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Set the **CNAME** for `www` to `<username>.github.io`.

## After it's live

- Add `https://invotrack.in/privacy/` as the Privacy Policy URL in Play Console.
- Add `https://invotrack.in/delete-account/` under Play Console → App content → Data safety → Delete account URL.
- Submit `https://invotrack.in/sitemap.xml` in Google Search Console.

## Structure

```
index.html              Home: hero, features, screens, how it works, pricing, FAQ, contact
privacy/                Privacy Policy
terms/                  Terms of Service
delete-account/         Account deletion (required by Google Play)
404.html                GitHub Pages not-found page
assets/js/config.js     ← prices & contact details
assets/js/main.js       Fills config into pages, mobile menu
assets/css/style.css    All styles
assets/img/             Logo, icons, screenshots, social preview image
```
