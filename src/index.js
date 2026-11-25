export default {
  async fetch() {
    const products = [
      { id: "kids-reading", name: "Kids Reading Adventure Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop" },
      { id: "emergency-prep", name: "Emergency Preparedness & Family Safety Planner", price: 19.00, img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop" },
      { id: "home-warranty", name: "Home Inventory & Warranty Tracker", price: 19.00, img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop" },
      { id: "home-insurance", name: "Home Inventory & Insurance Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop" },
      { id: "budget-planner", name: "Household Budget & Bill Payment Planner", price: 12.99, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop" },
      { id: "personal-docs", name: "Personal Documents & Emergency Contacts Organizer", price: 12.99, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop" },
      { id: "home-maintenance", name: "Seasonal Home Maintenance & Repair Log", price: 12.99, img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop" },
      { id: "meal-system", name: "Weekly Meal & Grocery System", price: 12.99, img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=600&fit=crop" },
      { id: "retirement-hobbies", name: "Retirement Hobbies & Travel", price: 19.00, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop" },
      { id: "photo-kit", name: "Digital Photography & Smartphone Photos", price: 19.00, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop" },
      { id: "pet-training", name: "Pet Training & New Pet Owner", price: 19.00, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop" },
      { id: "family-fun", name: "Family Fun on a Budget", price: 19.00, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop" },
      { id: "time-management", name: "Time Management & Productivity", price: 19.00, img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=600&fit=crop" },
      { id: "small-biz-marketing", name: "Small Business Marketing", price: 19.00, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop" },
      { id: "online-store", name: "Starting an Online Store", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop" },
      { id: "ai-tools", name: "AI Tools for Beginners", price: 19.00, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop" },
      { id: "homebuyer", name: "First-Time Homebuyer Kit", price: 19.00, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop" },
      { id: "wedding-budget", name: "Wedding Planning on a Budget", price: 19.00, img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop" },
      { id: "declutter", name: "Home Organization & Decluttering", price: 19.00, img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop" },
      { id: "budget-travel", name: "Budget Travel & Vacation Planning", price: 19.00, img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop" },
      { id: "meal-savings", name: "Meal Planning & Grocery Savings Kit", price: 19.00, img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=600&fit=crop" },
      { id: "first-apartment", name: "First Apartment & Moving Out Kit", price: 19.00, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=600&fit=crop" },
      { id: "cut-bills", name: "Save Money & Cut Household Bills Kit", price: 19.00, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop" },
      { id: "win-friends", name: "Win Friends & Build Positive Influence Kit", price: 19.00, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop" },
      { id: "job-search", name: "Job Search & Career Success Kit", price: 19.00, img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop" },
      { id: "income-growth", name: "Income Growth & Financial Goals Kit", price: 19.00, img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=600&fit=crop" },
      { id: "investing", name: "Investing Fundamentals Kit", price: 19.00, img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop" },
      { id: "retirement-planning", name: "Retirement Planning & Lifestyle Kit", price: 19.00, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop" },
      { id: "home-business", name: "Start a Home Business Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop" },
      { id: "make-friends", name: "Meet People & Make New Friends Kit", price: 19.00, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop" },
      { id: "wellbeing", name: "Positive Attitude & Everyday Wellbeing Kit", price: 19.00, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop" },
      { id: "college-prep", name: "College Prep & Success Kit", price: 19.00, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=600&fit=crop" },
      { id: "biz-startup", name: "Small Business Startup Planner", price: 19.00, img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop" },
      { id: "wedding-signs", name: "Wedding Welcome & Party Sign Kit", price: 19.00, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop" },
      { id: "yard-sale", name: "Yard Sale & Garage Sale Sign Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop" },
      { id: "moving", name: "Moving & Relocation Planner", price: 19.00, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop" },
      { id: "holiday", name: "Holiday & Christmas Planner Kit", price: 19.00, img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=600&fit=crop" },
      { id: "food-truck", name: "Food Truck & Vendor Menu Board Kit", price: 19.00, img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&h=600&fit=crop" },
      { id: "open-house", name: "Real Estate Open House Sign & Flyer Kit", price: 19.00, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop" },
      { id: "church", name: "Church Event Flyer & Bulletin Kit", price: 19.00, img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=600&fit=crop" },
      { id: "social-media", name: "Social Media Business Kit", price: 19.00, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop" },
      { id: "family-emergency", name: "Family Emergency Preparedness Kit", price: 19.00, img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop" },
      { id: "pet-care", name: "Complete Pet Care & Wellness Kit", price: 19.00, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop" },
      { id: "home-repair", name: "Home Maintenance & Repair Kit", price: 19.00, img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop" },
      { id: "diy-signs", name: "DIY Budget Signs Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop" },
      { id: "infant-care", name: "Infant Care & New Parent Kit", price: 19.00, img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop" },
      { id: "electric-car", name: "Electric Car Care & Maintenance Kit", price: 19.99, img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=600&fit=crop" },
      { id: "gas-car", name: "Gas Car Care & Maintenance Kit", price: 19.99, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop" },
      { id: "gardening", name: "Ultimate Home Gardening Kit", price: 24.99, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop" },
      { id: "grand-opening", name: "Grand Opening Marketing Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop" },
      { id: "independent-living", name: "Independent Living Starter Pack", price: 49.00, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop" },
      { id: "online-biz-ai", name: "Online Business & AI Success", price: 49.00, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop" },
      { id: "smart-living", name: "Smart Living & Money Saving", price: 49.00, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop" },
      { id: "better-life", name: "Better Life & Personal Success Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop" },
      { id: "business-success", name: "Business Success Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop" },
      { id: "car-home", name: "Car & Home Essentials Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop" }
    ];

    const cards = products.map(p => `
      <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.06)">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover">
        <div style="padding:14px">
          <h3 style="margin:0 0 6px;font-size:1rem;line-height:1.3">${p.name}</h3>
          <p style="color:#059669;font-weight:700;font-size:1.2rem;margin:6px 0">$${p.price}</p>
          <a href="https://payhip.com/BrightLaunchTemplateCo" style="background:#f59e0b;color:white;padding:8px 16px;border-radius:8px;text-decoration:none;font-weight:600;font-size:.9rem">View Kit</a>
        </div>
      </div>
    `).join("");

    const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BrightLaunch – Practical Printable Kits</title>
<meta name="description" content="Instant download printable kits, planners, checklists and trackers for families, homeowners and small businesses.">
<style>
body{font-family:system-ui,sans-serif;margin:0;background:#f7f8fa;color:#1a1a1a}
header{background:#fff;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #eee}
.logo{font-weight:800;font-size:1.6rem;color:#f59e0b}
nav a{margin-left:18px;text-decoration:none;color:#333;font-weight:500}
.banner{background:#2563eb;color:#fff;text-align:center;padding:12px;font-weight:600}
.container{max-width:1200px;margin:0 auto;padding:32px 20px}
.mission{background:#fffbeb;padding:24px;border-radius:12px;margin-bottom:32px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px}
</style>
</head>
<body>
<header>
  <div class="logo">BrightLaunch</div>
  <nav><a href="/">Shop</a><a href="/about">About</a></nav>
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
