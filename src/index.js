export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    const products = [
      { id: "kids-reading", name: "Kids Reading Adventure Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop", desc: "Turn reading time into a fun adventure! Includes a Reading Log, Book Review Worksheets, New Words Tracker, Reading Goals Planner, Story Characters Tracker, and Reading Rewards Tracker. Perfect for parents, homeschool families, teachers, and young book lovers. Instant digital download — open the HTML workbook in your browser to print or save as a PDF." },
      { id: "emergency-prep", name: "Emergency Preparedness & Family Safety Planner", price: 19.00, img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop", desc: "Get your family ready before an emergency happens. Includes Emergency Contact List, Evacuation Plan Worksheet, Supply Checklist, Important Documents Tracker, Family Communication Plan, and Meeting Point Planner. Instant digital download." },
      { id: "home-warranty", name: "Home Inventory & Warranty Tracker", price: 19.00, img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop", desc: "Never lose track of what you own or miss a warranty claim. Includes Home Inventory List, Warranty Tracker, Purchase Date & Receipt Log, Appliance Maintenance Notes, and Insurance Claim Summary Sheet. Instant digital download." },
      { id: "home-insurance", name: "Home Inventory & Insurance Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", desc: "Complete inventory list plus insurance summary sheets so you're ready for any claim. Instant digital download." },
      { id: "budget-planner", name: "Household Budget & Bill Payment Planner", price: 12.99, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop", desc: "Simple monthly budget sheets and bill trackers to stay on top of your money. Instant digital download." },
      { id: "personal-docs", name: "Personal Documents & Emergency Contacts Organizer", price: 12.99, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop", desc: "Keep important documents, insurance info, and emergency contacts organized in one place. Instant digital download." },
      { id: "home-maintenance", name: "Seasonal Home Maintenance & Repair Log", price: 12.99, img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop", desc: "Seasonal checklists and a repair log so home maintenance never gets forgotten. Instant digital download." },
      { id: "meal-system", name: "Weekly Meal & Grocery System", price: 12.99, img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=600&fit=crop", desc: "Plan meals and build grocery lists in one simple weekly system. Instant digital download." },
      { id: "retirement-hobbies", name: "Retirement Hobbies & Travel", price: 19.00, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop", desc: "Ideas, planners, and checklists for hobbies and travel in retirement. Instant digital download." },
      { id: "photo-kit", name: "Digital Photography & Smartphone Photos", price: 19.00, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop", desc: "Tips, checklists, and trackers to take better photos with your phone or camera. Instant digital download." },
      { id: "pet-training", name: "Pet Training & New Pet Owner", price: 19.00, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop", desc: "Training logs, supply checklists, and new-owner guides for dogs and cats. Instant digital download." },
      { id: "family-fun", name: "Family Fun on a Budget", price: 19.00, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop", desc: "Free and low-cost activity ideas plus outing checklists for family fun. Instant digital download." },
      { id: "time-management", name: "Time Management & Productivity", price: 19.00, img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=600&fit=crop", desc: "Daily planners and focus tools to get more done with less stress. Instant digital download." },
      { id: "small-biz-marketing", name: "Small Business Marketing", price: 19.00, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop", desc: "Simple marketing checklists and content planners for small businesses. Instant digital download." },
      { id: "online-store", name: "Starting an Online Store", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: "Step-by-step planner and checklists for launching your first online shop. Instant digital download." },
      { id: "ai-tools", name: "AI Tools for Beginners", price: 19.00, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop", desc: "Beginner-friendly worksheets and guides for using AI tools effectively. Instant digital download." },
      { id: "homebuyer", name: "First-Time Homebuyer Kit", price: 19.00, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", desc: "Checklists and trackers for every step of the home-buying process. Instant digital download." },
      { id: "wedding-budget", name: "Wedding Planning on a Budget", price: 19.00, img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", desc: "Budget planner and checklists for a beautiful wedding without overspending. Instant digital download." },
      { id: "declutter", name: "Home Organization & Decluttering", price: 19.00, img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop", desc: "Room-by-room decluttering guides and organization systems. Instant digital download." },
      { id: "budget-travel", name: "Budget Travel & Vacation Planning", price: 19.00, img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop", desc: "Trip planners and money-saving checklists for affordable vacations. Instant digital download." },
      { id: "meal-savings", name: "Meal Planning & Grocery Savings Kit", price: 19.00, img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=600&fit=crop", desc: "Save money on groceries with meal plans, shopping lists, and trackers. Instant digital download." },
      { id: "first-apartment", name: "First Apartment & Moving Out Kit", price: 19.00, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=600&fit=crop", desc: "Checklists and planners for your first place and moving day. Instant digital download." },
      { id: "cut-bills", name: "Save Money & Cut Household Bills Kit", price: 19.00, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop", desc: "Trackers and tips to lower utility and household bills. Instant digital download." },
      { id: "win-friends", name: "Win Friends & Build Positive Influence Kit", price: 19.00, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop", desc: "Practical worksheets for building better relationships and positive influence. Instant digital download." },
      { id: "job-search", name: "Job Search & Career Success Kit", price: 19.00, img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop", desc: "Resume trackers, interview prep sheets, and job search planners. Instant digital download." },
      { id: "income-growth", name: "Income Growth & Financial Goals Kit", price: 19.00, img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=600&fit=crop", desc: "Goal-setting and income-tracking worksheets to grow your earnings. Instant digital download." },
      { id: "investing", name: "Investing Fundamentals Kit", price: 19.00, img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop", desc: "Beginner investing checklists and trackers. Instant digital download." },
      { id: "retirement-planning", name: "Retirement Planning & Lifestyle Kit", price: 19.00, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop", desc: "Retirement income and lifestyle planning worksheets. Instant digital download." },
      { id: "home-business", name: "Start a Home Business Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop", desc: "Step-by-step planner and checklists for starting a business from home. Instant digital download." },
      { id: "make-friends", name: "Meet People & Make New Friends Kit", price: 19.00, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop", desc: "Ideas and trackers for meeting new people and building friendships. Instant digital download." },
      { id: "wellbeing", name: "Positive Attitude & Everyday Wellbeing Kit", price: 19.00, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop", desc: "Daily wellbeing trackers and positive habit worksheets. Instant digital download." },
      { id: "college-prep", name: "College Prep & Success Kit", price: 19.00, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=600&fit=crop", desc: "Checklists and planners for college applications and student success. Instant digital download." },
      { id: "biz-startup", name: "Small Business Startup Planner", price: 19.00, img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop", desc: "Complete startup checklist and planning worksheets. Instant digital download." },
      { id: "wedding-signs", name: "Wedding Welcome & Party Sign Kit", price: 19.00, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", desc: "Editable sign templates for weddings and parties. Instant digital download." },
      { id: "yard-sale", name: "Yard Sale & Garage Sale Sign Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: "Ready-to-print yard sale signs and pricing tags. Instant digital download." },
      { id: "moving", name: "Moving & Relocation Planner", price: 19.00, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop", desc: "Complete moving checklist and box inventory system. Instant digital download." },
      { id: "holiday", name: "Holiday & Christmas Planner Kit", price: 19.00, img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=600&fit=crop", desc: "Holiday planning checklists, gift trackers, and meal plans. Instant digital download." },
      { id: "food-truck", name: "Food Truck & Vendor Menu Board Kit", price: 19.00, img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&h=600&fit=crop", desc: "Menu board templates and vendor checklists. Instant digital download." },
      { id: "open-house", name: "Real Estate Open House Sign & Flyer Kit", price: 19.00, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", desc: "Open house signs, flyers, and checklists for realtors. Instant digital download." },
      { id: "church", name: "Church Event Flyer & Bulletin Kit", price: 19.00, img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=600&fit=crop", desc: "Editable flyer and bulletin templates for church events. Instant digital download." },
      { id: "social-media", name: "Social Media Business Kit", price: 19.00, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop", desc: "Content calendars and posting checklists for small businesses. Instant digital download." },
      { id: "family-emergency", name: "Family Emergency Preparedness Kit", price: 19.00, img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop", desc: "Family emergency plans and supply checklists. Instant digital download." },
      { id: "pet-care", name: "Complete Pet Care & Wellness Kit", price: 19.00, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop", desc: "Health, feeding, and care trackers for pets. Instant digital download." },
      { id: "home-repair", name: "Home Maintenance & Repair Kit", price: 19.00, img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop", desc: "Maintenance schedules and repair log sheets. Instant digital download." },
      { id: "diy-signs", name: "DIY Budget Signs Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: "Simple editable sign templates for home and events. Instant digital download." },
      { id: "infant-care", name: "Infant Care & New Parent Kit", price: 19.00, img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop", desc: "New parent checklists, feeding logs, and care trackers. Instant digital download." },
      { id: "electric-car", name: "Electric Car Care & Maintenance Kit", price: 19.99, img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=600&fit=crop", desc: "Maintenance trackers and care checklists for electric vehicles. Instant digital download." },
      { id: "gas-car", name: "Gas Car Care & Maintenance Kit", price: 19.99, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop", desc: "Service logs and maintenance checklists for gas vehicles. Instant digital download." },
      { id: "gardening", name: "Ultimate Home Gardening Kit", price: 24.99, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop", desc: "Planting calendars, care trackers, and garden planning sheets. Instant digital download." },
      { id: "grand-opening", name: "Grand Opening Marketing Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: "Editable signs, flyers, and checklists for grand openings. Instant digital download." },
      { id: "independent-living", name: "Independent Living Starter Pack", price: 49.00, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop", desc: "Bundle of 5 practical kits for independent living. Instant digital download." },
      { id: "online-biz-ai", name: "Online Business & AI Success", price: 49.00, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop", desc: "Bundle of 5 kits for online business and AI tools. Instant digital download." },
      { id: "smart-living", name: "Smart Living & Money Saving", price: 49.00, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop", desc: "Bundle of 5 kits for smarter living and saving money. Instant digital download." },
      { id: "better-life", name: "Better Life & Personal Success Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop", desc: "Bundle of 5 kits for personal growth and better living. Instant digital download." },
      { id: "business-success", name: "Business Success Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop", desc: "Bundle of 5 kits for business growth. Instant digital download." },
      { id: "car-home", name: "Car & Home Essentials Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop", desc: "Bundle of 5 kits for car and home care. Instant digital download." }
    ];

    const card = p => `
      <div style="background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.06)">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover">
        <div style="padding:14px">
          <h3 style="margin:0 0 6px;font-size:1rem">${p.name}</h3>
          <p style="color:#059669;font-weight:700;font-size:1.2rem;margin:6px 0">$${p.price}</p>
          <a href="/product/${p.id}" style="background:#f59e0b;color:white;padding:8px 16px;border-radius:8px;text-decoration:none;font-weight:600">View Kit</a>
        </div>
      </div>`;

    const header = `
      <header style="background:#fff;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #eee">
        <div style="display:flex;align-items:center;gap:10px">
          <img src="https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1k7qku2q51n0v1c5o1v5bpf216hah.png" alt="BrightLaunch" style="height:48px">
          <span style="font-weight:800;font-size:1.6rem;color:#f59e0b">BrightLaunch</span>
        </div>
        <nav>
          <a href="/" style="margin-left:18px;text-decoration:none;color:#333">Shop</a>
          <a href="/bundles" style="margin-left:18px;text-decoration:none;color:#333">Bundles</a>
          <a href="/articles" style="margin-left:18px;text-decoration:none;color:#333">Articles</a>
          <a href="/reviews" style="margin-left:18px;text-decoration:none;color:#333">Reviews</a>
          <a href="/about" style="margin-left:18px;text-decoration:none;color:#333">About</a>
        </nav>
      </header>
      <div style="background:#2563eb;color:#fff;text-align:center;padding:12px;font-weight:600">Instant Digital Downloads • Print at Home • Practical Kits for Real Life</div>`;

    const footer = `
      <footer style="background:#fff;padding:32px 24px;text-align:center;color:#6b7280;border-top:1px solid #eee;margin-top:40px">
        <p><strong>BrightLaunch Template Co. / Signs OverNITE</strong></p>
        <p>Phone: 219.365.4088 • Text: 219.213.1379</p>
        <p>Email: info@signsovernite.com</p>
        <p style="margin-top:12px">
          <a href="https://signsovernite.com">Signs OverNITE</a> • 
          <a href="https://chromeautoshop.com">Chrome Auto Shop</a> • 
          <a href="https://prosportstickers.com">Pro Sports Stickers</a> • 
          <a href="https://thestickerboy.com">The Sticker Boy</a> • 
          <a href="https://chromeautoemblems.com">Chrome Auto Emblems</a>
        </p>
      </footer>`;

    const wrap = (title, body) => `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} – BrightLaunch</title></head><body style="margin:0;font-family:system-ui,sans-serif;background:#f7f8fa">${header}${body}${footer}</body></html>`;

    if (path === "/" || path === "/shop") {
      const body = `<div style="max-width:1200px;margin:0 auto;padding:32px 20px">
        <div style="background:#fffbeb;padding:24px;border-radius:12px;margin-bottom:32px">
          <h2>Our Mission</h2>
          <p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at.</p>
        </div>
        <h1>Practical Printable Kits</h1>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">${products.map(card).join("")}</div>
      </div>`;
      return new Response(wrap("Shop", body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/bundles") {
      const body = `<div style="max-width:1200px;margin:0 auto;padding:32px 20px">
        <h1>$49 Bundles</h1>
        <p>Each bundle includes 5 kits.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">${products.filter(p => p.price === 49).map(card).join("")}</div>
      </div>`;
      return new Response(wrap("Bundles", body), { headers: { "Content-Type": "text/html" } });
    }

    if (path.startsWith("/product/")) {
      const id = path.split("/")[2];
      const p = products.find(x => x.id === id);
      if (!p) return new Response("Not found", { status: 404 });
      const body = `<div style="max-width:800px;margin:0 auto;padding:32px 20px">
        <img src="${p.img}" alt="${p.name}" style="width:100%;max-height:400px;object-fit:cover;border-radius:12px">
        <h1>${p.name}</h1>
        <p style="font-size:1.5rem;color:#059669;font-weight:700">$${p.price}</p>
        <p>${p.desc}</p>
        <p style="background:#fffbeb;padding:16px;border-radius:8px">Instant digital download. Print at home or at any print shop.</p>
        <a href="#" style="background:#f59e0b;color:white;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;margin-top:16px">Buy Now</a>
      </div>`;
      return new Response(wrap(p.name, body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/articles") {
      const body = `<div style="max-width:900px;margin:0 auto;padding:32px 20px"><h1>Articles & Guides</h1>
        <div style="background:white;padding:20px;border-radius:12px;margin-bottom:16px"><h3>How to Get Kids to Love Reading</h3><p>Simple systems that turn reading into an adventure.</p></div>
        <div style="background:white;padding:20px;border-radius:12px;margin-bottom:16px"><h3>Family Emergency Prep Checklist</h3><p>What every household needs ready before an emergency.</p></div>
      </div>`;
      return new Response(wrap("Articles", body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/reviews") {
      const body = `<div style="max-width:900px;margin:0 auto;padding:32px 20px"><h1>Customer Reviews</h1>
        <div style="background:white;padding:20px;border-radius:12px;margin-bottom:16px"><p>★★★★★ “My kids actually ask to do their reading log now.” — Sarah M.</p></div>
        <div style="background:white;padding:20px;border-radius:12px;margin-bottom:16px"><p>★★★★★ “Finally got our whole family on the same page.” — Mike T.</p></div>
      </div>`;
      return new Response(wrap("Reviews", body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/about") {
      const body = `<div style="max-width:900px;margin:0 auto;padding:32px 20px"><h1>About BrightLaunch</h1>
        <p>BrightLaunch makes practical printable kits for everyday life. Each kit is built to be used, not just looked at.</p>
      </div>`;
      return new Response(wrap("About", body), { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
