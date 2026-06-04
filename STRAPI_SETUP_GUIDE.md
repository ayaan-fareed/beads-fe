# Strapi API Setup Guide

Your React app is successfully connecting to Strapi, but the Product endpoints are returning 404. Follow these steps to fix it:

## 🔧 Quick Fix Steps

### 1. Check Product Collection Type
1. Go to `http://localhost:1337/admin`
2. Navigate to **Content-Type Builder** on the left sidebar
3. Verify you have a **Product** collection type (not single type)
4. If it doesn't exist, create it with these fields:
   - `name` (Text)
   - `description` (Rich Text or Text)
   - `price` (Number)
   - `category` (Text)
   - `icon` (Text, optional)
   - `badge` (Text, optional)

### 2. Publish Content
1. Go to **Content Manager** → **Product**
2. Create at least one product entry
3. Click **Publish** on each product (draft entries won't show in API)

### 3. Configure API Permissions
1. Go to **Settings** → **Roles** → **Public**
2. Under **Permissions**, find **Product**
3. Enable these actions:
   - ✅ **find** (to get all products)
   - ✅ **findOne** (to get single product)
4. Click **Save**

### 4. Check API Token
Your current token is configured correctly. If issues persist:
1. Go to **Settings** → **API Tokens**
2. Verify the token has **Product** permissions
3. Regenerate if needed

## 🧪 Test the API

After completing the steps, test these URLs in your browser:

```
http://localhost:1337/api/products
http://localhost:1337/api/products?populate=*
```

Both should return JSON data with your products.

## 📱 Verify in React App

1. Open your React app
2. Go to the Shop page
3. Check the API Status component - it should show "Connected!"
4. Console should show ✅ success messages

## 🚨 Troubleshooting

**Still getting 404?**
- Make sure Product is a **Collection Type**, not Single Type
- Verify products are **Published** (not just saved as draft)
- Check **Public role** has API permissions
- Restart Strapi server after changes

**API Token Issues?**
- Regenerate the token in Strapi admin
- Update the `.env` file with new token
- Restart React development server

**Product not showing in Permissions?**
This happens when the content type isn't properly registered. Try these fixes:

1. **Restart Strapi Server**
   ```bash
   # In your Strapi project directory
   npm run develop
   # or
   yarn develop
   ```

2. **Clear Strapi Cache**
   ```bash
   # Delete .tmp folder in Strapi project
   rm -rf .tmp
   # Restart server
   ```

3. **Check Content-Type Settings**
   - Go to Content-Type Builder → Product
   - Make sure "Advanced Settings" → "Plugin Options" → "Content Manager" is set to "Visible"
   - Make sure "Plugin Options" → "Content Type Builder" is set to "Visible"

4. **Verify API Route is Enabled**
   - In Product content-type settings, ensure API is enabled
   - Check that "draft and publish" is configured correctly

5. **Recreate Content Type**
   If all else fails:
   - Delete the Product content type
   - Restart Strapi server
   - Recreate Product content type with same fields
   - Add entries again
   - Check permissions again

## 📊 Expected Result

Once working, you should see:
```json
{
  "data": [
    {
      "id": 1,
      "name": "Your Product Name",
      "description": "Product description",
      "price": 999,
      "category": "Necklace",
      "icon": "📿",
      "badge": "hot"
    }
  ]
}
```

Your React app will automatically use this data instead of mock products!
