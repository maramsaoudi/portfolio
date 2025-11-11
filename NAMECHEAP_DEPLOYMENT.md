# Namecheap Deployment Guide

## 🚀 Your Portfolio is Ready to Deploy!

The project has been built successfully. The `dist` folder contains all the files ready for deployment.

---

## 📋 Pre-Deployment Checklist

✅ Project built successfully (`dist` folder created)
✅ `.htaccess` file created for React Router support
✅ PHP contact form included (`send-email.php`)
✅ All assets optimized and bundled

---

## 🌐 Deploying to Namecheap (cPanel)

### Step 1: Access cPanel
1. Log in to your Namecheap account
2. Go to **Hosting List** → **Manage** for your hosting
3. Click on **cPanel**

### Step 2: Upload Files via File Manager

#### Option A: Using File Manager (Recommended)
1. In cPanel, open **File Manager**
2. Navigate to `public_html` folder (or your domain's root folder)
3. **Delete** any existing files (index.html, etc.) if this is a fresh install
4. Click **Upload** button
5. Upload ALL files from your `dist` folder:
   - `index.html`
   - `assets` folder (contains CSS and JS)
   - `send-email.php`
   - `.htaccess`
   - Any images from `public` folder

**Important**: Make sure the `.htaccess` file is uploaded (it might be hidden)

#### Option B: Using FTP (FileZilla)
1. Download **FileZilla** if you don't have it
2. Get FTP credentials from cPanel:
   - Host: Your domain or server IP
   - Username: From cPanel → FTP Accounts
   - Password: Your FTP password
   - Port: 21
3. Connect to your server
4. Navigate to `public_html` on the remote side
5. Upload all files from the `dist` folder

### Step 3: Configure PHP Email (Important!)

1. In File Manager, find `send-email.php` in `public_html`
2. Right-click → **Edit**
3. Update line 37 with your email:
   ```php
   $to = 'sameh.kouki.dev@gmail.com'; // Change to your email
   ```
4. Save the file

### Step 4: Set File Permissions

1. Right-click on `send-email.php` → **Permissions**
2. Set permissions to `644` (readable by everyone, writable by owner)
3. Click **Change Permissions**

### Step 5: Test Your Website

1. Visit your domain: `https://yourdomain.com`
2. Test all navigation links
3. Test the contact form
4. Check project detail pages
5. Test the community involvement page

---

## 📂 Folder Structure After Upload

```
public_html/
├── index.html
├── .htaccess
├── send-email.php
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── assets/images/
    └── jci/
        └── (your community photos)
```

---

## 🔧 Troubleshooting

### Problem: White screen or "Page Not Found"
**Solution**: 
- Ensure `.htaccess` file is uploaded
- Check Apache mod_rewrite is enabled (usually enabled by default on Namecheap)

### Problem: CSS/JS not loading
**Solution**:
- Check the `assets` folder is uploaded correctly
- Verify file paths are correct
- Clear browser cache (Ctrl+F5)

### Problem: Contact form not working
**Solution**:
1. Verify `send-email.php` is uploaded
2. Check email address is updated in the file
3. Test PHP is working by creating `info.php`:
   ```php
   <?php phpinfo(); ?>
   ```
   Upload and visit `yourdomain.com/info.php` (delete after testing)

### Problem: Images not showing
**Solution**:
- Upload the `assets/images/jci/` folder with all photos
- Check image paths in the code

### Problem: React Router pages (like /project/p1) show 404
**Solution**:
- Ensure `.htaccess` file exists in `public_html`
- Contact Namecheap support to enable mod_rewrite if needed

---

## 🔐 SSL Certificate (HTTPS)

Namecheap provides free SSL certificates:

1. In cPanel → **SSL/TLS Status**
2. Enable **AutoSSL** for your domain
3. Wait 5-10 minutes for certificate to be installed
4. Your site will be accessible via `https://`

---

## 📧 Email Configuration (Optional Advanced)

For better email delivery, consider:

### Option 1: Use Namecheap Email
- Already included with hosting
- Configure SMTP in `send-email.php`

### Option 2: Use External Email Service (Recommended)
- **SendGrid** (free 100 emails/day): https://sendgrid.com
- **Mailgun** (free 5,000 emails/month): https://www.mailgun.com
- **EmailJS** (client-side): https://www.emailjs.com

Update `send-email.php` to use SMTP or replace with service API.

---

## 🎯 Post-Deployment Checklist

After deployment, verify:
- ✅ Homepage loads correctly
- ✅ Dark/Light theme toggle works
- ✅ All navigation sections work (About, Skills, Projects, etc.)
- ✅ Project detail pages load (click "View Details" on projects)
- ✅ Community involvement page works
- ✅ Contact form submits successfully
- ✅ GitHub links open correctly
- ✅ Chess.com profile link works
- ✅ Images in community gallery display
- ✅ Responsive design works on mobile

---

## 🔄 Updating Your Portfolio

When you make changes:

1. Make your edits in the source code
2. Run `npm run build` to create new `dist` folder
3. Upload new files to `public_html` (overwrite existing)
4. Clear browser cache to see changes

---

## 📱 Custom Domain Setup

If you bought a domain from Namecheap:

1. Domain is usually auto-connected to hosting
2. If not, in cPanel → **Domains** → **Addon Domains**
3. Add your domain
4. Point to `public_html` folder

---

## 🆘 Need Help?

### Namecheap Support
- Live Chat: Available 24/7
- Knowledge Base: https://www.namecheap.com/support/knowledgebase/
- Support Ticket: From your account dashboard

### Common Namecheap cPanel Locations
- **File Manager**: Files section
- **PHP Version**: Software section → Select PHP Version
- **Email Accounts**: Email section
- **SSL/TLS**: Security section

---

## 🎉 Congratulations!

Your portfolio is now live on Namecheap! 

**Your website features:**
- ✨ Modern React-based portfolio
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🚀 Project showcase with details pages
- 🤝 Community involvement page with photo gallery
- 📧 Working contact form with PHP backend
- 🏆 Director of the Year 2023 highlight
- ♟️ Chess.com profile integration
- 🔗 All GitHub repositories linked

---

## 📊 Next Steps (Optional)

1. **Analytics**: Add Google Analytics to track visitors
2. **SEO**: Update meta tags for better search rankings
3. **Performance**: Enable Cloudflare CDN (free)
4. **Backup**: Set up automatic backups in cPanel
5. **Monitor**: Set up uptime monitoring

---

## 💡 Pro Tips

- Keep source code updated on GitHub
- Take regular backups before major changes
- Test contact form after deployment
- Monitor email deliverability
- Update projects as you complete new ones
- Add new JCI photos to the gallery regularly

---

**Need any help with the deployment? Let me know!** 🚀
