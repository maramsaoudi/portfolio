# ✅ Namecheap Deployment Checklist

## Files Ready in `dist` Folder

Your portfolio is built and ready! Here's what you have:

```
dist/
├── ✅ index.html (main file)
├── ✅ .htaccess (for routing)
├── ✅ send-email.php (contact form backend)
└── assets/
    ├── ✅ CSS bundle
    ├── ✅ JavaScript bundle
    ├── ✅ logo.svg
    ├── ✅ CV PDF
    └── images/
        ├── ✅ logo.png
        ├── ✅ me.jpg
        ├── ✅ cv.png
        ├── certifications/ ✅
        └── jci/ ✅ (all 14 community photos)
```

---

## 🚀 Quick Deployment Steps

### 1. Log into Namecheap cPanel
- Go to your Namecheap dashboard
- Click **Manage** next to your hosting
- Click **cPanel**

### 2. Upload Files
- Open **File Manager**
- Navigate to `public_html`
- Click **Upload**
- **Upload ALL files** from the `dist` folder
  - Drag and drop the entire contents
  - Or zip the `dist` folder and upload, then extract

### 3. Configure Email
- Find `send-email.php` in `public_html`
- Right-click → **Edit**
- Line 37: Change email to yours
  ```php
  $to = 'your-email@example.com';
  ```
- Save

### 4. Test!
- Visit your domain
- Test contact form
- Check all pages work

---

## 📂 What to Upload

Upload **EVERYTHING** inside the `dist` folder:
- ✅ `index.html`
- ✅ `.htaccess` (important for routing!)
- ✅ `send-email.php`
- ✅ `assets` folder (entire folder with all contents)

**Important**: Upload to `public_html` directory (not inside a subfolder)

---

## ⚠️ Common Mistakes to Avoid

❌ Uploading the entire `dist` folder (upload contents only)
❌ Forgetting `.htaccess` file (React routing won't work)
❌ Not updating email in `send-email.php`
❌ Wrong folder - must be `public_html`

✅ Upload contents of `dist` folder directly to `public_html`
✅ Include hidden `.htaccess` file
✅ Update email address
✅ Test after upload

---

## 🔍 After Upload, Your Structure Should Look Like:

```
public_html/
├── index.html          ← Main file
├── .htaccess           ← React Router support
├── send-email.php      ← Contact form
└── assets/             ← CSS, JS, Images
    ├── index-[hash].css
    ├── index-[hash].js
    ├── logo.svg
    ├── STAGE ETE - Ingenieur.pdf
    └── images/
        ├── logo.png
        ├── me.jpg
        ├── cv.png
        ├── certifications/
        └── jci/
            ├── Doy2023.jpg
            ├── j.jpg
            └── (12 more photos)
```

---

## 🎯 Testing Checklist

After deployment, test:
- [ ] Homepage loads
- [ ] Dark/light mode toggle works
- [ ] All sections visible (Hero, About, Skills, etc.)
- [ ] Project cards display
- [ ] "View Details" opens project pages
- [ ] Community involvement page works
- [ ] Photo gallery displays all images
- [ ] Contact form submits (check email received)
- [ ] GitHub links work
- [ ] Chess.com link works
- [ ] Mobile responsive (check on phone)

---

## 🆘 Quick Troubleshooting

**White screen?**
→ Check `.htaccess` is uploaded

**CSS not loading?**
→ Upload `assets` folder

**Contact form error?**
→ Update email in `send-email.php`

**Project pages 404?**
→ Verify `.htaccess` exists

**Images not showing?**
→ Check `assets/images` folder uploaded

---

## 📞 Need Help?

Namecheap Support:
- **Live Chat**: 24/7 available
- **Phone**: On your account page
- **Tickets**: Support section

---

## 🎉 You're Ready!

Everything is built and ready to deploy. Just upload and test! 

**Total files to upload**: ~50 files in the `dist` folder

Good luck with your deployment! 🚀
