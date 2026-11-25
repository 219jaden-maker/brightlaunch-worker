const PRODUCTS = [
  { id: "kids-reading", name: "Kids Reading Adventure Tracker", price: 12.99, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop" },
  { id: "emergency-prep", name: "Emergency Preparedness & Family Safety Planner", price: 19.00, image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop" },
  { id: "home-warranty", name: "Home Inventory & Warranty Tracker", price: 19.00, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop" },
  { id: "home-insurance", name: "Home Inventory & Insurance Tracker", price: 12.99, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop" },
  { id: "budget-planner", name: "Household Budget & Bill Payment Planner", price: 12.99, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop" },
  { id: "personal-docs", name: "Personal Documents & Emergency Contacts Organizer", price: 12.99, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop" },
  { id: "meal-system", name: "Weekly Meal & Grocery System", price: 12.99, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=600&fit=crop" },
  { id: "family-fun", name: "Family Fun on a Budget", price: 19.00, image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop" },
  { id: "pet-training", name: "Pet Training & New Pet Owner", price: 19.00, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop" },
  { id: "gardening", name: "Ultimate Home Gardening Kit", price: 24.99, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop" },
  { id: "ai-tools", name: "AI Tools for Beginners", price: 19.00, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop" },
  { id: "homebuyer", name: "First-Time Homebuyer Kit", price: 19.00, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop" },
  { id: "wedding", name: "Wedding Planning on a Budget", price: 19.00, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop" },
  { id: "declutter", name: "Home Organization & Decluttering", price: 19.00, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" },
  { id: "travel", name: "Budget Travel & Vacation Planning", price: 19.00, image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop" },
  { id: "job-search", name: "Job Search & Career Success Kit", price: 19.00, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop" },
  { id: "investing", name: "Investing Fundamentals Kit", price: 19.00, image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop" },
  { id: "home-business", name: "Start a Home Business Kit", price: 19.00, image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop" },
  { id: "electric-car", name: "Electric Car Care & Maintenance Kit", price: 19.99, image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=600&fit=crop" },
  { id: "gas-car", name: "Gas Car Care & Maintenance Kit", price: 19.99, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop" }
];

export default {
  async fetch() {
    const cards = PRODUCTS.map(p => `
      <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.06)">
        <img src="${p.image}" alt="${p.name}" style="width:100%;height:200px;object-fit:cover">
        <div style="padding:16px">
          <h3 style="margin:0 0 8px">${p.name}</h3>
          <p style="color:#059669;font-weight:700;font-size:1.25rem;margin:8px 0">$${p.price}</p>
          <a href="/product/${p.id}" style="background:#f59e0b;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block">View Kit</a>
        </div>
      </div>
    `).join("");

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BrightLaunch – Practical Printable Kits</title>
<style>
body { font-family: system-ui, sans-serif; margin: 0; background: #f7f8fa; }
header { background: #fff; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e5e7eb; }
.logo { font-weight: 800; font-size: 1.6rem; color: #f59e0b; }
nav a { margin-left: 18px; text-decoration: none; color: #374151; }
.banner { background: #2563eb; color: white; text-align: center; padding: 12px; font-weight: 600; }
.container { max-width: 1120px; margin: 0 auto; padding: 32px 24px; }
.mission { background: #fffbeb; padding: 24px; border-radius: 12px; margin-bottom: 32px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 24px; }
</style>
</head>
<body>
<header>
  <div class="logo">BrightLaunch</div>
  <nav><a href="/">Shop</a><a href="/articles">Articles</a><a href="/reviews">Reviews</a><a href="/about">About</a></nav>
</header>
<div class="banner">Instant Digital Downloads • Print at Home • Practical Kits for Real Life</div>
<div class="container">
  <div class="mission">
    <h2>Our Mission</h2>
    <p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at.</p>
  </div>
  <h1>Practical Printable Kits</h1>
  <div class="grid">${cards}</div>
</div>
</body>
</html>`;
    return new Response(html, { headers: { "Content-Type": "text/html" } });
  }
};
