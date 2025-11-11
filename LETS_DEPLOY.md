# 🚀 LET'S DEPLOY YOUR PORTFOLIO!

## ✅ Ready to Upload: `portfolio-deploy.zip`

I've created a zip file with all your files ready for deployment!

---

## 📋 STEP-BY-STEP DEPLOYMENT PROCESS

### STEP 1: Access Namecheap cPanel (5 minutes)

1. Go to **https://www.namecheap.com**
2. Click **Sign In** (top right)
3. Enter your username and password
4. After login, click **Dashboard** or **Hosting List**
5. Find your hosting plan
6. Click the **Manage** button next to it
7. Scroll down and click **Go to cPanel** button
   - Or click **cPanel Login** link

✅ You should now be in cPanel dashboard

---

### STEP 2: Open File Manager (1 minute)

1. In cPanel, find the **FILES** section
2. Click **File Manager** icon
3. A new tab/window opens with File Manager
4. In the left sidebar, click on **public_html** folder
5. You should see the contents of public_html

**IMPORTANT**: If you see existing files (like index.html, .htaccess, etc.), you need to delete them first:
- Select all files (checkbox at top)
- Click **Delete** button
- Confirm deletion

---

### STEP 3: Upload Your Portfolio (5 minutes)

#### Option A: Upload ZIP File (RECOMMENDED - EASIER)

1. In File Manager, make sure you're in **public_html** folder
2. Click the **Upload** button (top menu)
3. Click **Select File** button
4. Navigate to: `C:\Users\Majid Kouki\OneDrive\Bureau\portfolio`
5. Select **portfolio-deploy.zip**
6. Click **Open** to upload
7. Wait for upload to complete (progress bar will show)
8. Click **Back to ..." to return to File Manager
9. Right-click on **portfolio-deploy.zip**
10. Select **Extract**
11. Click **Extract Files** button
12. After extraction, **DELETE** the zip file:
    - Select portfolio-deploy.zip
    - Click Delete
    - Confirm

#### Option B: Upload Individual Files (Alternative)

1. In File Manager, stay in **public_html** folder
2. Click **Upload** button
3. Open File Explorer on your computer
4. Navigate to: `C:\Users\Majid Kouki\OneDrive\Bureau\portfolio\dist`
5. Select ALL files and folders (Ctrl+A)
6. Drag them to the upload area in browser
7. Wait for all files to upload

---

### STEP 4: Verify Files (2 minutes)

In File Manager, check that **public_html** contains:

```
public_html/
├── ✅ index.html
├── ✅ .htaccess (may be hidden - enable "Show Hidden Files")
├── ✅ send-email.php
└── ✅ assets/ (folder)
```

**To show hidden files** (to see .htaccess):
- Click **Settings** button (top right in File Manager)
- Check "Show Hidden Files (dotfiles)"
- Click **Save**

---

### STEP 5: Configure Email Address (3 minutes)

**CRITICAL STEP** - Update your email in the contact form:

1. In File Manager, find **send-email.php**
2. Right-click on it
3. Select **Edit**
4. Click **Edit** button in the popup
5. Find line 37 (around middle of file):
   ```php
   $to = 'sameh.kouki.dev@gmail.com';
   ```
6. Change it to YOUR email:
   ```php
   $to = 'your-actual-email@example.com';
   ```
7. Click **Save Changes** button (top right)
8. Click **Close** to exit editor

---

### STEP 6: Set Permissions (1 minute)

1. In File Manager, find **send-email.php**
2. Right-click on it
3. Select **Permissions** (or **Change Permissions**)
4. Make sure these are checked:
   - Owner: Read ✅, Write ✅
   - Group: Read ✅
   - World: Read ✅
5. Permission number should be **644**
6. Click **Change Permissions**

---

### STEP 7: Enable SSL (Optional - 10 minutes)

Get free HTTPS certificate:

1. Go back to cPanel main page
2. Find **SECURITY** section
3. Click **SSL/TLS Status**
4. Find your domain in the list
5. Click **Run AutoSSL** or enable auto-SSL
6. Wait 5-10 minutes for certificate to install
7. Your site will be accessible via `https://yourdomain.com`

---

### STEP 8: Test Your Website! (5 minutes)

1. Open a new browser tab
2. Go to your domain: **http://yourdomain.com** or **https://yourdomain.com**
3. Your portfolio should load! 🎉

**Test these features:**
- ✅ Homepage loads with your name and photo
- ✅ Dark/Light mode toggle (moon/sun icon)
- ✅ Scroll through all sections
- ✅ Click on a project → "View Details" → Detail page opens
- ✅ Click "Community Involvement" → "Learn More" button
- ✅ Check photo gallery shows all JCI photos
- ✅ Fill contact form and submit
- ✅ Check your email for the message
- ✅ Click Chess hobby → Opens Chess.com profile
- ✅ Test on mobile (responsive design)

---

## 🎯 VERIFICATION CHECKLIST

After deployment, verify each:

**Homepage:**
- [ ] Hero section with your name and title
- [ ] Profile photo displays
- [ ] Theme toggle works (moon/sun icon)
- [ ] "View My Work" and "Download CV" buttons work

**Navigation:**
- [ ] About section
- [ ] Skills section (with filters working)
- [ ] Timeline section
- [ ] Projects section
- [ ] Community Involvement section
- [ ] Hobbies section
- [ ] Contact section

**Projects:**
- [ ] All 7 projects display
- [ ] Filters work (All/Professional/Academic)
- [ ] GitHub buttons work (on projects that have them)
- [ ] "View Details" opens project detail page
- [ ] Can navigate back from detail pages

**Community Page:**
- [ ] "Learn More" button works
- [ ] Director of the Year 2023 award shows
- [ ] All achievements display
- [ ] Leadership roles timeline
- [ ] Photo gallery shows all 14 images
- [ ] Gallery lightbox works (click image → full screen)

**Contact Form:**
- [ ] Can type in all fields
- [ ] Submit button works
- [ ] Shows success message
- [ ] Email received in your inbox

**Links:**
- [ ] GitHub profile links work
- [ ] LinkedIn link works
- [ ] Chess.com profile link works
- [ ] Email link works
- [ ] Phone link works

**Mobile:**
- [ ] Open on phone and test navigation
- [ ] Check all sections are readable
- [ ] Check images load

---

## 🐛 TROUBLESHOOTING

### Problem: Website shows blank/white page
**Fix:**
1. Check .htaccess file exists in public_html
2. In cPanel → Software → Select PHP Version → Make sure PHP 7.4+ is selected
3. Check browser console for errors (F12)

### Problem: "Page Not Found" when clicking project details
**Fix:**
1. Verify .htaccess file is in public_html
2. Check Settings → Show Hidden Files is enabled
3. Re-upload .htaccess from dist folder

### Problem: CSS/Design looks broken
**Fix:**
1. Verify `assets` folder uploaded completely
2. Check assets folder contains CSS and JS files
3. Clear browser cache (Ctrl + F5)
4. Check browser console for 404 errors

### Problem: Images not showing
**Fix:**
1. Check `assets/images/jci/` folder has all photos
2. Verify folder structure matches: assets/images/jci/
3. Check file names match exactly (case-sensitive)

### Problem: Contact form shows error or doesn't send
**Fix:**
1. Verify send-email.php is in public_html
2. Check you updated the email address in send-email.php
3. Verify permissions are 644
4. Test by creating test-email.php:
   ```php
   <?php
   mail('your-email@example.com', 'Test', 'Test message', 'From: test@test.com');
   echo 'Sent!';
   ?>
   ```
   Visit yourdomain.com/test-email.php

### Problem: Community photos not showing in gallery
**Fix:**
1. Check assets/images/jci/ folder has all 14 images
2. Verify image names match exactly (case-sensitive)
3. Check folder structure: public_html/assets/images/jci/

---

## 🎉 SUCCESS!

Once everything works, you have:

✅ Professional portfolio live on the internet!
✅ Project showcase with detailed pages
✅ Community involvement page with gallery
✅ Working contact form
✅ Responsive mobile design
✅ Dark/Light mode toggle
✅ All your GitHub projects linked
✅ Chess.com profile integration

**Your website is now accessible worldwide!**

Share it:
- LinkedIn profile
- Resume/CV
- Email signature  
- GitHub profile README
- Business cards

---

## 📞 Need Help?

**Namecheap Support:**
- **Live Chat**: Click chat icon in cPanel
- **Phone**: Listed in your account
- **Tickets**: Dashboard → Support → Submit Ticket

**Common Questions:**
- Can't log into cPanel? Reset password from Namecheap dashboard
- Don't see File Manager? Scroll down in cPanel
- Upload failed? Check file size limits (usually 50MB+)
- Email not working? Contact Namecheap to check PHP mail()

---

## 🚀 YOU'RE READY!

Follow the steps above and your portfolio will be live in about 20-30 minutes!

**Remember:**
1. Upload files to public_html
2. Update email in send-email.php
3. Test everything
4. Share your new portfolio!

Good luck! 🎊
