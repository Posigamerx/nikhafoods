# Nikha Foods — React + Vite Website

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css
│   └── Footer.jsx / .module.css
├── pages/
│   ├── Home.jsx / .module.css
│   ├── Products.jsx / .module.css
│   ├── Services.jsx / .module.css
│   ├── About.jsx / .module.css
│   └── Contact.jsx / .module.css
└── data/
    └── products.js   ← Edit products here
```

## 🎨 Brand Colors
- Deep Blue: #0A2B6E
- Mid Blue:  #1A4DB8
- Gold:      #F5A623

## 📦 Adding Products
Edit `src/data/products.js` — add an object with:
`id, name, category, emoji, tagline, description, sizes[], tags[], variants[], color, border`

## 📝 Update Contact Info
Edit `src/pages/Contact.jsx` — replace phone, email, and address with your real details.
