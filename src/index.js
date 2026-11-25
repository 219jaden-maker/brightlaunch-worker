const LOGO_URL = "https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1k7qku2q51n0v1c5o1v5bpf216hah.png";

const PRODUCTS = [
  { id: "kids-reading", name: "Kids Reading Adventure Tracker", price: 12.99, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop", description: "Make reading fun and track progress with logs, rewards, and goal sheets kids actually want to use." },
  { id: "emergency-prep", name: "Emergency Preparedness & Family Safety Planner", price: 19.00, image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop", description: "Get your family ready with contact lists, evacuation plans, and supply checklists." },
  { id: "home-warranty", name: "Home Inventory & Warranty Tracker", price: 19.00, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop", description: "Track what you own and never miss a warranty claim window." },
  { id: "home-insurance", name: "Home Inventory & Insurance Tracker", price: 12.99, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", description: "Inventory list plus insurance summary sheets so you're ready for any claim." },
  { id: "budget-planner", name: "Household Budget & Bill Payment Planner", price: 12.99, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop", description: "Simple monthly budget and bill tracker to stay on top of money." },
  { id: "personal-docs", name: "Personal Documents & Emergency Contacts Organizer", price: 12.99, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop", description: "Keep important documents and emergency numbers in one easy place." },
  { id: "home-maintenance", name: "Seasonal Home Maintenance & Repair Log", price: 12.99, image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop", description: "Seasonal checklists and repair log so nothing gets forgotten." },
  { id: "meal-system", name: "Weekly Meal & Grocery System", price: 12.99, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=600&fit=crop", description: "Plan meals and grocery lists in one simple weekly system." },
  { id: "retirement-hobbies", name: "Retirement Hobbies & Travel", price: 19.00, image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop", description: "Ideas, planners, and checklists for hobbies and travel in retirement." },
  { id: "photo-kit", name: "Digital Photography & Smartphone Photos", price: 19.00, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop", description: "Tips and trackers to take better photos with your phone or camera." },
  { id: "pet-training", name: "Pet Training & New Pet Owner", price: 19.00, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop", description: "Training logs, supply checklists, and new-owner guides for dogs and cats." },
  { id: "family-fun", name: "Family Fun on a Budget", price: 19.00, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop", description: "Free and low-cost activity ideas plus outing checklists." }
  // Continue with remaining products from your Payhip list as needed
];

const ARTICLES = [
  { slug: "how-to-get-kids-to-love-reading", title: "How to Get Kids to Love Reading (Without the Battle)", excerpt: "Simple systems that turn reading into an adventure instead of a chore.", date: "2026-11-20" },
  { slug: "emergency-prep-checklist-for-families", title: "The Complete Family Emergency Prep Checklist", excerpt: "What every household needs ready before an emergency hits.", date: "2026-11-18" },
  { slug: "save-money-on-groceries-this-month", title: "How to Cut Your Grocery Bill This Month", excerpt: "Practical meal planning tricks that actually work.", date: "2026-11-15" },
  { slug: "start-a-home-business-checklist", title: "Start a Home Business: The No-Fluff Checklist", excerpt: "The exact steps to go from idea to first sale.", date: "2026-11-10" }
];

const REVIEWS = [
  { name: "Sarah M.", product: "Kids Reading Adventure Tracker", text: "My kids actually ask to do their reading log now. The reward charts made a huge difference.", stars: 5 },
  { name: "Mike T.", product: "Emergency Preparedness Planner", text: "Finally got our whole family on the same page. Clear and easy to use.", stars: 5 },
  { name: "Jennifer L.", product: "Home Inventory & Warranty Tracker", text: "Saved me when I needed to file a claim. Everything was already organized.", stars: 5 },
  { name: "David R.", product: "Business Success Bundle", text: "The checklists kept me focused. Worth every penny.", stars: 5 }
];

function seoHead(title, description, keywords, canonical) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | BrightLaunch Template Co.</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<style>
* { box-sizing: border-box; }
body { font-family: system-ui, sans-serif; margin: 0; background: #f7f8fa; color: #1a1a1a; }
header { background: #fff; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 10; }
.logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 1.4rem; color: #f59e0b; }
.logo img { height: 48px; }
nav a { margin-left: 20px; text-decoration: none; color: #374151; font-weight: 500; }
.banner { background: linear-gradient(90deg,#3b82f6,#2563eb); color: white; text-align: center; padding: 12px; font-weight: 600; }
.container { max-width: 1120px; margin: 0 auto; padding: 32px 24px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 24px; }
.card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
.card img { width: 100%; height: 200px; object-fit: cover; }
.price { color: #059669; font-weight: 700; font-size: 1.25rem; }
.btn { background: #f59e0b; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; }
.mission { background: #fffbeb; padding: 24px; border-radius: 12px; margin: 24px 0; }
footer { text-align: center; padding: 32px; color: #6b7280; background: #fff; }
</style>
</head>
<body>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const base = "https://brightlaunch-worker.219jaden.workers.dev";

    const header = `<header><div class="logo"><img src="${LOGO_URL}" alt="BrightLaunch Logo – Sun, Arrow, Blue Mountains">BrightLaunch</div><nav><a href="/">Shop</a><a href="/bundles">Bundles</a><a href="/articles">Articles</a><a href="/reviews">Reviews</a><a href="/about">About</a></nav></header><div class="banner">Instant Digital Downloads • Print at Home • Practical Kits for Real Life</div>`;

    const footer = `<footer>BrightLaunch Template Co. • Practical printable kits for everyday life</footer></body></html>`;

    if (path === "/" || path === "/shop") {
      const cards = PRODUCTS.map(p => `<div class="card"><img src="${p.image}" alt="${p.name}"><div style="padding:16px"><h3>${p.name}</h3><p class="price">$${p.price}</p><a class="btn" href="/product/${p.id}">View Kit</a></div></div>`).join("");
      const body = `${header}<div class="container"><div class="mission"><h2>Our Mission</h2><p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at.</p></div><h1>Practical Printable Kits</h1><div class="grid">${cards}</div></div>${footer}`;
      return new Response(seoHead("Practical Printable Kits & Planners", "Instant download printable kits for families, homeowners and small businesses.", "printable kits, family planners, home organization, emergency prep", base + "/") + body, { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/articles") {
      const list = ARTICLES.map(a => `<div class="card"><div style="padding:16px"><h3><a href="/article/${a.slug}">${a.title}</a></h3><p>${a.excerpt}</p><small>${a.date}</small></div></div>`).join("");
      return new Response(seoHead("Helpful Articles & Guides", "Practical guides on family organization, home prep, and more.", "family organization tips, emergency preparedness", base + "/articles") + header + `<div class="container"><h1>Articles & Guides</h1><div class="grid">${list}</div></div>` + footer, { headers: { "Content-Type": "text/html" } });
    }

    if (path.startsWith("/article/")) {
      const slug = path.split("/")[2];
      const a = ARTICLES.find(x => x.slug === slug);
      if (!a) return new Response("Not found", { status: 404 });
      return new Response(seoHead(a.title, a.excerpt, "printable kits guides", base + path) + header + `<div class="container"><h1>${a.title}</h1><p>${a.excerpt}</p><p>Full article content with tips and links to related kits.</p><a class="btn" href="/">Shop related kits</a></div>` + footer, { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/reviews") {
      const list = REVIEWS.map(r => `<div class="card"><div style="padding:16px"><h3>${r.product}</h3><p>★★★★★ ${r.text}</p><small>— ${r.name}</small></div></div>`).join("");
      return new Response(seoHead("Customer Reviews", "Real reviews of BrightLaunch printable kits.", "customer reviews", base + "/reviews") + header + `<div class="container"><h1>What Customers Say</h1><div class="grid">${list}</div></div>` + footer, { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/about") {
      return new Response(seoHead("About BrightLaunch", "BrightLaunch makes practical printable kits for everyday life.", "about brightlaunch", base + "/about") + header + `<div class="container"><h1>About BrightLaunch</h1><div class="mission"><p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at.</p></div></div>` + footer, { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
