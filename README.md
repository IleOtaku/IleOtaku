# <div align="center">🎌 ÍléOtaku</div>

<div align="center">
<strong>Your Gateway to African & Global Manga Stories</strong>
</div>

<br>

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-active_development-orange?style=for-the-badge)
![Launch](https://img.shields.io/badge/launch-January_2025-brightgreen?style=for-the-badge)
![Tech](https://img.shields.io/badge/tech-next.js_14-tailwind_firebase-cyan?style=for-the-badge)

</div>

## 🌟 What is ÍléOtaku?

**ÍléOtaku** (pronounced *ee-lay-oh-tah-koo*) - where "Ílé" means **"Home"** in Yoruba - is building a next-generation manga platform that celebrates African storytelling while embracing global manga culture.

We're creating a space where readers discover amazing stories and creators get paid for their art.

## 🚀 Our Vision

> **"Building the most creator-friendly manga platform that bridges African storytelling with global manga culture."**

### For Readers 📚
- **Free Access**: Read thousands of manga, manhwa, and manhua
- **Premium Experience**: Ad-free reading, offline access, and exclusive features
- **Reward System**: Earn coins by reading, unlock premium perks
- **African Focus**: Discover stories that reflect diverse cultures and perspectives

### For Creators ✍️
- **Monetize Your Art**: Get paid when people read your work
- **Build Your Audience**: Grow your fanbase on our platform
- **Promotion Tools**: Boost your visibility with our promotion packages
- **Fair Compensation**: Transparent revenue sharing model

## 💰 Our Business Model

| Plan | Price | Features |
|------|-------|----------|
| **Free Tier** | $0 | Read with ads, earn coins, basic features |
| **Platinum** | $2/month | No ads, offline reading, customization, early access |
| **Creator** | Free to join | Earn from reads, promotion packages, analytics |

**Revenue Streams:**
- 💎 Platinum subscriptions
- 📺 Ad revenue from free users  
- 🪙 Coin purchases
- 📈 Creator promotion packages

## 🛠️ Technical Stack

```bash
Frontend:    Next.js 14, React 18, TypeScript, Tailwind CSS
Backend:     Node.js, Firebase (Auth, Firestore, Storage)
Database:    Firestore
Authentication: Firebase Authentication
Payments:    Stripe Integration
Hosting:     Vercel (Frontend) + Firebase (Backend)
UI Components: Shadcn/UI
```

## 📁 Project Structure

```
ílè-otaku/
├── app/
│   ├── (auth)/           # Auth group routes
│   ├── (dashboard)/      # Dashboard group routes  
│   ├── (creator)/        # Creator routes
│   ├── api/              # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # Shadcn components
│   ├── auth/             # Auth forms & modals
│   ├── manga/            # Manga cards, reader
│   ├── payment/          # Stripe components
│   └── layout/           # Header, footer, nav
├── lib/
│   ├── firebase.ts       # Firebase config
│   ├── stripe.ts         # Stripe config
│   ├── utils.ts          # Helper functions
│   └── validations.ts    # Form validations
├── public/
│   ├── images/
│   └── icons/
└── types/
    ├── user.ts
    ├── manga.ts
    └── payment.ts
```

## 🎯 Current Focus (January 2025 Launch)

### **🚀 PHASE 1: COMPLETE MVP (All Features)**

**Authentication & Users:**
- [ ] Email/Password + Google OAuth
- [ ] Role-based access (Reader/Creator/Admin)
- [ ] User profiles & preferences

**Manga Experience:**
- [ ] Manga browsing with search/filters
- [ ] Advanced chapter reader
- [ ] Reading progress tracking
- [ ] Bookmarking & library management

**Monetization:**
- [ ] Stripe subscriptions ($2/month Platinum)
- [ ] Google AdSense integration
- [ ] Coin reward system
- [ ] Coin purchase packages

**Creator Platform:**
- [ ] Manga upload with image processing
- [ ] Chapter management system
- [ ] Creator dashboard & analytics
- [ ] Earnings tracking

**User Experience:**
- [ ] Responsive design (mobile-first)
- [ ] Reading customization
- [ ] Notification system
- [ ] Achievement system

## 👥 Our Team

| Role | Lead | Focus Area |
|------|------|------------|
| **Founder & CEO** | Gold Isaac F. | Vision, Strategy, Business Ops, Project Manager |
| **Lead Developer** | Theodorio | Full-Stack Development & Architecture |
| **Assistant Lead Dev** | Segunmaru F. | Full-stack Development & Features |
| **Frontend Team** | Adebayo Fahd, Adeniyi Nathan | UI Implementation & Components |
| **Backend & Firebase** | Gold Isaac | Authentication & Database |
| **Design & UX** | Ruby | User Experience & Interface Design |
| **Social Media & Growth** | Onaho Philomel E., Alex Destiny | Community Building & Marketing |
| **Content & Testing** | Adeniyi Nathan | Quality Assurance & User Testing |

## 🔥 Why We're Different

| Traditional Platforms | ÍléOtaku |
|-----------------------|----------|
| ❌ Creator payouts are complicated | ✅ **Transparent** revenue sharing |
| ❌ One-size-fits-all approach | ✅ **Cultural relevance** in storytelling |
| ❌ Limited monetization options | ✅ **Multiple revenue streams** for creators |
| ❌ Western-centric focus | ✅ **African perspective** with global appeal |
| ❌ Basic reading experience | ✅ **Gamified rewards** & engagement |

## 📈 Development Timeline

### **January 2025 Launch - Complete MVP**
- **Week 1-2:** Project setup, authentication, landing page
- **Week 3-4:** Core reading experience, manga browsing
- **Week 5-6:** Monetization systems (Stripe, Ads, Coins)
- **Week 7-8:** Creator platform, polishing, testing

### **Post-Launch Roadmap**
- **Q1 2025:** Mobile app development, advanced analytics
- **Q2 2025:** Official licensing partnerships, AI recommendations
- **Q3 2025:** Global expansion, multilingual support
- **2026:** Anime adaptations, original content production

## 🎮 The ÍléOtaku Experience

```javascript
// For Readers
user.readChapter() → earnCoins(5) → unlockPremiumFeatures()

// For Creators  
creator.uploadWork() → getApproved() → users.read() → earnMoney()

// For Everyone
discoverStories() → connectWithCulture() → joinCommunity()
```

## 🚀 Getting Started for Developers

```bash
# Clone repository
git clone https://github.com/IleOtaku/IleOtaku.git
cd ile-otaku

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## 🌍 Join Our Mission

We're not just building another manga site - we're creating a **home** for stories that matter, a platform where creativity meets opportunity, and a community that celebrates diverse voices.

---

<div align="center">

**💫 Building the future of manga storytelling, one chapter at a time.**

*"Ílé" means home. Welcome to yours.* 🏠

<br>

[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)
[![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen?style=for-the-badge)](CONTRIBUTING.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue?style=for-the-badge)](https://github.com/IleOtaku/IleOtaku/pulls)

</div>

---

*© 2025 ÍléOtaku. "ÍléOtaku" and the platform concept are proprietary. All rights reserved.*