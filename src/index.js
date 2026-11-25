const LOGO_URL = "https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1k7qku2q51n0v1c5o1v5bpf216hah.png";

const PRODUCTS = [
  { id: "kids-reading", name: "Kids Reading Adventure Tracker", price: 12.99, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop", description: "Make reading fun and track progress with logs, rewards, and goal sheets." },
  { id: "emergency-prep", name: "Emergency Preparedness & Family Safety Planner", price: 19.00, image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop", description: "Contact lists, evacuation plans, and supply checklists for your family." },
  { id: "home-warranty", name: "Home Inventory & Warranty Tracker", price: 19.00, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop", description: "Track what you own and never miss a warranty claim." },
  { id: "home-insurance", name: "Home Inventory & Insurance Tracker", price: 12.99, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", description: "Inventory plus insurance summary sheets ready for claims." },
  { id: "budget-planner", name: "Household Budget & Bill Payment Planner", price: 12.99, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop", description: "Simple monthly budget and bill tracker." },
  { id: "personal-docs", name: "Personal Documents & Emergency Contacts Organizer", price: 12.99, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop", description: "Keep important documents and emergency numbers together." },
  { id: "meal-system", name: "Weekly Meal & Grocery System", price: 12.99, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=600&fit=crop", description: "Plan meals and grocery lists in one system." },
  { id: "family-fun", name: "Family Fun on a Budget", price: 19.00, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop", description: "Free and low-cost activity ideas plus outing checklists." },
  { id: "pet-training", name: "Pet Training & New Pet Owner", price: 19.00, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop", description: "Training logs and new-owner guides for dogs and cats." },
  { id: "gardening", name: "Ultimate Home Gardening Kit", price: 24.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop", description: "Planting calendars and garden planning sheets." }
];

function htmlPage(title, body) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} | BrightLaunch</title>
<meta name="description" content="Practical printable kits for everyday life. Instant digital downloads.">
<style>
* { box-sizing: border-box; }
body { font-family: system-ui, sans-serif; margin: 0; background: #f7f8fa; color: #1a1a1a; }
header { background: #fff; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e5e7eb; }
.logo { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 1.5rem; color: #f59e0b; }
.logo img { height: 56px; }
nav a { margin-left: 18px; text-decoration: none; color: #374151; font-weight: 500; }
.banner { background: #2563eb; color: white; text-align: center; padding: 12px; font-weight: 600; }
.container { max-width: 1120px; margin: 0 auto; padding: 32px 24px; }
.mission { background: #fffbeb; padding: 24px; border-radius: 12px; margin-bottom: 32px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 24px; }
.card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
.card img { width: 100%; height: 200px; object-fit: cover; }
.price { color: #059669; font-weight: 700; font-size: 1.25rem; }
.btn { background: #f59e0b; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; }
</style>
</head>
<body>
<header>
  <div class="logo"><img src="${LOGO_URL}" alt="BrightLaunch Logo">BrightLaunch</div>
  <nav>
    <a href="/">Shop</a>
    <a href="/bundles">Bundles</a>
    <a href="/articles">Articles</a>
    <a href="/reviews">Reviews</a>
    <a href="/about">About</a>
  </nav>
</header>
<div class="banner">Instant Digital Downloads • Print at Home • Practical Kits for Real Life</div>
${body}
<footer style="text-align:center;padding:32px;color:#6b7280;">BrightLaunch Template Co.</footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/shop") {
      const cards = PRODUCTS.map(p => `
        <div class="card">
          <img src="${p.image}" alt="${p.name}">
          <div style="padding:16px">
            <h3>${p.name}</h3>
            <p class="price">$${p.price}</p>
            <a class="btn" href="/product/${p.id}">View Kit</a>
          </div>
        </div>
      `).join("");
      const body = `<div class="container">
        <div class="mission">
          <h2>Our Mission</h2>
          <p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at.</p>
        </div>
        <h1>Practical Printable Kits</h1>
        <div class="grid">${cards}</div>
      </div>`;
      return new Response(htmlPage("Shop", body), { headers: { "Content-Type": "text/html" } });
    }
    return new Response("Page not found", { status: 404 });
  }
};
