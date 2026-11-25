const PRODUCTS = [
  {
    id: "kids-reading",
    name: "Kids Reading Adventure Tracker",
    price: 12.99,
    image: "https://placehold.co/600x600/4A90D9/white?text=Kids+Reading",
    description: "Track reading progress, set goals, and keep kids excited about books. Includes reading logs, book review pages, reward charts, and goal trackers.",
    includes: ["Reading log pages", "Book review sheets", "Goal setting worksheets", "Reward charts", "Parent tips"]
  },
  {
    id: "emergency-prep",
    name: "Emergency Preparedness & Family Safety Planner",
    price: 19.00,
    image: "https://placehold.co/600x600/E74C3C/white?text=Emergency+Prep",
    description: "Be ready before you need to be. Complete family emergency plan with contact lists, evacuation routes, supply checklists, and important document trackers.",
    includes: ["Family emergency plan", "Contact & medical info sheets", "Supply & go-bag checklists", "Evacuation route planner", "Document inventory pages"]
  },
  {
    id: "home-inventory-warranty",
    name: "Home Inventory & Warranty Tracker",
    price: 19.00,
    image: "https://placehold.co/600x600/2ECC71/white?text=Warranty+Tracker",
    description: "Know what you own and when warranties expire. Simple inventory sheets plus warranty tracking so you never miss a claim window.",
    includes: ["Room-by-room inventory sheets", "Warranty tracker", "Purchase & serial number log", "Photo reference pages", "Annual review checklist"]
  },
  {
    id: "home-inventory-insurance",
    name: "Home Inventory & Insurance Tracker",
    price: 12.99,
    image: "https://placehold.co/600x600/3498DB/white?text=Insurance+Tracker",
    description: "Protect what matters. Inventory list paired with insurance policy summary sheets so you’re ready if you ever need to file a claim.",
    includes: ["Home inventory checklist", "Insurance policy summary", "Valuables log", "Receipt storage pages", "Claim prep checklist"]
  },
  {
    id: "personal-docs",
    name: "Personal Documents & Emergency Contacts Organizer",
    price: 12.99,
    image: "https://placehold.co/600x600/95A5A6/white?text=Documents",
    description: "One place for the documents and numbers you need in an emergency. Keep everything organized and easy to grab.",
    includes: ["Emergency contact list", "Important documents checklist", "Medical & insurance info sheets", "Password & account log", "Family medical history page"]
  },
  {
    id: "family-fun",
    name: "Family Fun on a Budget",
    price: 19.00,
    image: "https://placehold.co/600x600/F39C12/white?text=Family+Fun",
    description: "Fun doesn’t have to be expensive. Ideas, checklists, and trackers for free and low-cost family activities.",
    includes: ["Free activity idea list", "Budget planner", "Outing checklists", "Memory pages", "Seasonal fun calendar"]
  },
  {
    id: "vehicle-garage",
    name: "Vehicle & Garage Organizer Kit",
    price: 19.00,
    image: "https://placehold.co/600x600/34495E/white?text=Vehicle+Kit",
    description: "Keep registration, insurance, maintenance, and garage supplies organized.",
    includes: ["Vehicle info & registration log", "Maintenance tracker", "Insurance summary", "Garage inventory", "Checklist pages"]
  },
  {
    id: "realtor-open-house",
    name: "Realtor Open House & Yard Sign Kit",
    price: 19.00,
    image: "https://placehold.co/600x600/1ABC9C/white?text=Realtor+Kit",
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
body { font-family: system-ui, -apple-system, sans-serif; margin: 0; background: #f8f9fa; color: #222; }
header { background: #fff; padding: 16px 24px; border-bottom: 1px solid #eee; display: flex; align-items: center; justify-content: space-between; }
.logo { font-size: 1.5rem; font-weight: 700; color: #f39c12; }
nav a { margin-left: 20px; text-decoration: none; color: #333; }
.banner { background: #4a90d9; color: white; text-align: center; padding: 12px; font-weight: 600; }
.container { max-width: 1100px; margin: 0 auto; padding: 24px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 24px; }
.card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.card img { width: 100%; height: 200px; object-fit: cover; }
.card-body { padding: 16px; }
.price { font-size: 1.25rem; font-weight: 700; color: #27ae60; }
.btn { display: inline-block; background: #f39c12; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; }
footer { text-align: center; padding: 32px; color: #666; font-size: 0.9rem; }
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
          <h1>${p.name}</h1>
          <p class="price">$${p.price.toFixed(2)}</p>
          <p>${p.description}</p>
          <h3>What’s included:</h3>
          <ul>${p.includes.map(i => `<li>${i}</li>`).join("")}</ul>
          <a class="btn" href="https://payhip.com/BrightLaunchTemplateCo">Buy on Payhip</a>
          <p><a href="/">← Back to shop</a></p>
        </div>`;
      return new Response(htmlPage(p.name, body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/bundles") {
      const cards = BUNDLES.map(b => `
        <div class="card">
          <div class="card-body">
            <h3>${b.name}</h3>
            <p>${b.kits} kits</p>
            <p class="price">$${b.price}</p>
            <a class="btn" href="https://payhip.com/BrightLaunchTemplateCo">Get Bundle</a>
          </div>
        </div>
      `).join("");
      return new Response(htmlPage("Bundles", `<div class="container"><h1>$49 Bundles</h1><div class="grid">${cards}</div></div>`), {
        headers: { "Content-Type": "text/html" }
      });
    }

    if (path === "/about") {
      return new Response(htmlPage("About", `
        <div class="container">
          <h1>About BrightLaunch</h1>
          <p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers, and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at. You get clear guides, real worksheets, and editable files you can fill in on your computer or print as many times as you need.</p>
        </div>`), { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
