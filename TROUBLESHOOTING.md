# Contact Form Troubleshooting Guide

## Quick Test

After redeploying, test the API by visiting:
```
https://your-vercel-domain.vercel.app/api/contact
```

You should see a JSON response like:
```json
{
  "status": "API is working",
  "env": {
    "host": "Set",
    "port": "Set",
    "user": "Set",
    "pass": "Set"
  }
}
```

**If any show "Not set", your environment variables are not configured!**

## Common Issues

### 1. Environment Variables Not Set

**Check in Vercel Dashboard:**
1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Verify all 5 variables are added:
   - `SMTP_HOST` = smtp.hostinger.com
   - `SMTP_PORT` = 587
   - `SMTP_USER` = admin@thinklabkl.com
   - `SMTP_PASS` = your-password
   - `RECEIVER_EMAIL` = admin@thinklabkl.com

4. **Important:** After adding variables, you MUST redeploy!

### 2. Hostinger SMTP Authentication Failed

**Common causes:**
- Wrong password
- Hostinger requires app-specific password (if 2FA enabled)
- Hostinger blocks external connections for new accounts

**Solution:**
- Log in to Hostinger email directly to verify password works
- Try using an app-specific password
- Contact Hostinger support to allow external SMTP connections

### 3. TLS/SSL Issues

The API now uses `rejectUnauthorized: false` which should help with certificate issues.

### 4. Vercel Function Not Found

**Check:**
- Make sure the `api/contact.js` file exists in your repository root
- Ensure you're pushing to the correct branch
- Check Vercel deployment logs for build errors

## Debugging Steps

1. **Check browser console** (F12) for error details
2. **Check Vercel logs:**
   - Go to Vercel Dashboard → Your project → Functions tab
   - Look for `/api/contact` function
   - Check the logs for error messages

3. **Test with curl:**
```bash
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

## Need Help?

If you see a specific error message, please share it and I can help fix it!
