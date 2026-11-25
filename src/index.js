const PRODUCTS = [
  {
    id: "kids-reading",
    name: "Kids Reading Adventure Tracker",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop",
    description: "Track reading progress, set goals, and keep kids excited about books. Includes reading logs, book review pages, reward charts, and goal trackers.",
    includes: ["Reading log pages", "Book review sheets", "Goal setting worksheets", "Reward charts", "Parent tips"]
  },
  {
    id: "emergency-prep",
    name: "Emergency Preparedness & Family Safety Planner",
    price: 19.00,
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop",
    description: "Be ready before you need to be. Complete family emergency plan with contact lists, evacuation routes, supply checklists, and important document trackers.",
    includes: ["Family emergency plan", "Contact & medical info sheets", "Supply & go-bag checklists", "Evacuation route planner", "Document inventory pages"]
  },
  {
    id: "home-inventory-warranty",
    name: "Home Inventory & Warranty Tracker",
    price: 19.00,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop",
    description: "Know what you own and when warranties expire. Simple inventory sheets plus warranty tracking so you never miss a claim window.",
    includes: ["Room-by-room inventory sheets", "Warranty tracker", "Purchase & serial number log", "Photo reference pages", "Annual review checklist"]
  },
  {
    id: "home-inventory-insurance",
    name: "Home Inventory & Insurance Tracker",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop",
    description: "Protect what matters. Inventory list paired with insurance policy summary sheets so you’re ready if you ever need to file a claim.",
    includes: ["Home inventory checklist", "Insurance policy summary", "Valuables log", "Receipt storage pages", "Claim prep checklist"]
  },
  {
    id: "personal-docs",
    name: "Personal Documents & Emergency Contacts Organizer",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop",
    description: "One place for the documents and numbers you need in an emergency. Keep everything organized and easy to grab.",
    includes: ["Emergency contact list", "Important documents checklist", "Medical & insurance info sheets", "Password & account log", "Family medical history page"]
  },
  {
    id: "family-fun",
    name: "Family Fun on a Budget",
    price: 19.00,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop",
    description: "Fun doesn’t have to be expensive. Ideas, checklists, and trackers for free and low-cost family activities.",
    includes: ["Free activity idea list", "Budget planner", "Outing checklists", "Memory pages", "Seasonal fun calendar"]
  },
  {
    id: "vehicle-garage",
    name: "Vehicle & Garage Organizer Kit",
    price: 19.00,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop",
    description: "Keep registration, insurance, maintenance, and garage supplies organized.",
    includes: ["Vehicle info & registration log", "Maintenance tracker", "Insurance summary", "Garage inventory", "Checklist pages"]
  },
  {
    id: "realtor-open-house",
    name: "Realtor Open House & Yard Sign Kit",
    price: 19.00,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop",
    description: "Everything a realtor needs for open houses and yard signs. Checklists plus editable sign templates.",
    includes: ["Open house checklist", "Buyer packet outline", "Follow-up tracker", "Editable yard sign templates", "Marketing checklist"]
  }
];

const BUNDLES = [
  { name: "Better Life Bundle", price: 49, kits: 5 },
  { name: "Business Success Bundle", price: 49, kits: 5 },
  { name: "Car & Home Bundle", price: 49, kits: 5 },
  { name: "Independent Living Bundle", price: 49, kits: 5 },
  { name: "Online Business & AI Bundle", price: 49, kits: 5 },
  { name: "Smart Living Bundle", price: 49, kits: 5 }
];

function htmlPage(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} – BrightLaunch</title>
<style>
* { box-sizing: border-box; }
body { font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif; margin: 0; background: #f7f8fa; color: #1a1a1a; }
header { background: #fff; padding: 18px 28px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 10; }
.logo { font-size: 1.6rem; font-weight: 800; color: #f59e0b; letter-spacing: -0.5px; }
nav a { margin-left: 24px; text-decoration: none; color: #374151; font-weight: 500; }
nav a:hover { color: #f59e0b; }
.banner { background: linear-gradient(90deg, #3b82f6, #2563eb); color: white; text-align: center; padding: 14px 16px; font-weight: 600; font-size: 0.95rem; }
.container { max-width: 1120px; margin: 0 auto; padding: 32px 24px; }
h1 { font-size: 2rem; margin: 0 0 24px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 28px; }
.card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); transition: transform 0.15s ease, box-shadow 0.15s ease; }
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
.card img { width: 100%; height: 220px; object-fit: cover; }
.card-body { padding: 18px; }
.card h3 { margin: 0 0 8px; font-size: 1.1rem; line-height: 1.3; }
.price { font-size: 1.3rem; font-weight: 700; color: #059669; margin: 8px 0; }
.btn { display: inline-block; background: #f59e0b; color: white; padding: 11px 22px; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.15s; }
.btn:hover { background: #d97706; }
footer { text-align: center; padding: 40px 20px; color: #6b7280; font-size: 0.9rem; background: #fff; border-top: 1px solid #e5e7eb; margin-top: 40px; }
ul { padding-left: 20px; }
li { margin: 6px 0; }
</style>
</head>
<body>
<header>
  <div class="logo">BrightLaunch</div>
  <nav>
    <a href="/">Shop</a>
    <a href="/bundles">Bundles</a>
    <a href="/about">About</a>
  </nav>
</header>
<div class="banner">$49 Bundles, 5 kits each: Better Life • Business Success • Car & Home • Independent Living • Online Business & AI • Smart Living</div>
${body}
<footer>BrightLaunch Template Co. • Instant digital downloads • Print at home or any print shop</footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === "/" || path === "/shop") {
      const cards = PRODUCTS.map(p => `
        <div class="card">
          <img src="${p.image}" alt="${p.name}">
          <div class="card-body">
            <h3>${p.name}</h3>
            <p class="price">$${p.price.toFixed(2)}</p>
            <a class="btn" href="/product/${p.id}">View Kit</a>
          </div>
        </div>
      `).join("");
      return new Response(htmlPage("Shop", `<div class="container"><h1>Practical Printable Kits</h1><div class="grid">${cards}</div></div>`), {
        headers: { "Content-Type": "text/html" }
      });
    }

    if (path.startsWith("/product/")) {
      const id = path.split("/")[2];
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return new Response("Not found", { status: 404 });
      const body = `
        <div class="container">
          <img src="${p.image}" alt="${p.name}" style="max-width: 400px; border-radius: 12px; margin-bottom: 20px;">
          <h1>${p.name}</h1>
          <p class="price">$${p.price.toFixed(2)}</p>
          <p>${p.description}</p>
          <h3>What’s included:</h3>
          <ul>${p.includes.map(i => `<li>${i}</li>`).join("")}</ul>
          <a class="btn" href="https://payhip.com/BrightLaunchTemplateCo" style="margin-top: 16px;">Buy on Payhip</a>
          <p style="margin-top: 24px;"><a href="/">← Back to shop</a></p>
        </div>`;
      return new Response(htmlPage(p.name, body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/bundles") {
      const cards = BUNDLES.map(b => `
        <div class="card">
          <div class="card-body">
            <h3>${b.name}</h3>
            <p>${b.kits} kits included</p>
            <p class="price">$${b.price}</p>
            <a class="btn" href="https://payhip.com/BrightLaunchTemplateCo">Get Bundle</a>
          </div>
        </div>
      `).join("");
      return new Response(htmlPage("Bundles", `<div class="container"><h1>$49 Bundles</h1><p>Each bundle contains 5 practical kits. Instant download.</p><div class="grid">${cards}</div></div>`), {
        headers: { "Content-Type": "text/html" }
      });
    }

    if (path === "/about") {
      return new Response(htmlPage("About", `
        <div class="container">
          <h1>About BrightLaunch</h1>
          <p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers, and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at. You get clear guides, real worksheets, and editable files you can fill in on your computer or print as many times as you need.</p>
          <p>Every product is an instant digital download in standard US Letter size.</p>
        </div>`), { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
