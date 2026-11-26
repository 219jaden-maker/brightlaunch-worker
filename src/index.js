export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    const products = [
      { id: "kids-reading", name: "Kids Reading Adventure Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop", buy: "https://www.paypal.com/ncp/payment/PLB-JH6SZ682P7GM", desc: `Turn reading time into a fun adventure!
The Kids Reading Adventure Tracker helps young readers stay organized, discover new words, celebrate completed books, and build positive reading habits.

What's included:
• Reading Log
• Book Review Worksheets
• New Words Tracker
• Reading Goals Planner
• Story Characters Tracker
• Reading Rewards Tracker

Your digital download includes:
• A printable six-section workbook
• Six companion CSV templates for digital tracking
• Simple instructions to get started

Perfect for parents, homeschool families, teachers, and young book lovers.
Instant digital download. Open the HTML workbook in your browser to print or save as a PDF. Use the CSV templates in a compatible spreadsheet program.
Created by GiggleSprout Learning, a BrightLaunch brand.
Digital product only. No physical item will be shipped.` },
      { id: "kids-chores", name: "Kids Chore & Allowance Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop", buy: "https://www.paypal.com/ncp/payment/PLB-HC3SJY36TQAL", desc: `Make chores and allowance simple and motivating for kids.
This tracker helps kids see their responsibilities and rewards in one place.

What's included:
• Weekly Chore Chart
• Allowance Tracker
• Reward Chart
• Responsibility Checklist
• Parent Notes Page

Perfect for parents who want a clear chore and allowance system.
Instant digital download.
Created by GiggleSprout Learning, a BrightLaunch brand.
Digital product only. No physical item will be shipped.` },
      { id: "emergency-prep", name: "Emergency Preparedness & Family Safety Planner", price: 19.00, img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop", buy: "#", desc: `Get your family ready before an emergency happens.
This planner helps you organize contacts, evacuation plans, supply lists, and important documents so everyone knows what to do.

What's included:
• Emergency Contact List
• Evacuation Plan Worksheet
• Supply Checklist
• Important Documents Tracker
• Family Communication Plan
• Meeting Point Planner

Perfect for families, homeowners, and anyone who wants a clear emergency plan.
Instant digital download. Print at home or use digitally.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "home-warranty", name: "Home Inventory & Warranty Tracker", price: 19.00, img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop", buy: "#", desc: `Never lose track of what you own or miss a warranty claim.
This tracker helps you list appliances, furniture, electronics, and warranties in one organized place.

What's included:
• Home Inventory List
• Warranty Tracker
• Purchase Date & Receipt Log
• Appliance Maintenance Notes
• Insurance Claim Summary Sheet

Perfect for homeowners and anyone who wants to stay prepared for insurance claims.
Instant digital download. Print or use in a spreadsheet.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` }
      // ... (remaining products keep buy: "#" until their links are created)
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
        <img src="https://payhip.com/cdn-cgi/image/format=auto/https://pe56d.s3.amazonaws.com/o_1k7qku2q51n0v1c5o1v5bpf216hah.png" alt="BrightLaunch" style="height:52px">
        <nav>
          <a href="/" style="margin-left:18px;text-decoration:none;color:#333">Shop</a>
          <a href="/bundles" style="margin-left:18px;text-decoration:none;color:#333">Bundles</a>
          <a href="/articles" style="margin-left:18px;text-decoration:none;color:#333">Articles</a>
          <a href="/reviews" style="margin-left:18px;text-decoration:none;color:#333">Reviews</a>
          <a href="/about" style="margin-left:18px;text-decoration:none;color:#333">About</a>
          <a href="/contact" style="margin-left:18px;text-decoration:none;color:#333">Contact</a>
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

    if (path.startsWith("/product/")) {
      const id = path.split("/")[2];
      const p = products.find(x => x.id === id);
      if (!p) return new Response("Not found", { status: 404 });
      const body = `<div style="max-width:800px;margin:0 auto;padding:32px 20px">
        <img src="${p.img}" alt="${p.name}" style="width:100%;max-height:400px;object-fit:cover;border-radius:12px">
        <h1>${p.name}</h1>
        <p style="font-size:1.5rem;color:#059669;font-weight:700">$${p.price}</p>
        <div style="white-space:pre-line;line-height:1.6">${p.desc}</div>
        <p style="background:#fffbeb;padding:16px;border-radius:8px;margin-top:16px">Instant digital download. Print at home or at any print shop.</p>
        <a href="${p.buy}" style="background:#f59e0b;color:white;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;margin-top:16px">Buy Now with PayPal</a>
      </div>`;
      return new Response(wrap(p.name, body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/thank-you") {
      const body = `<div style="max-width:800px;margin:0 auto;padding:32px 20px;text-align:center">
        <h1>Thank You!</h1>
        <p>Your order is confirmed. Check your email for the download link from PayPal.</p>
        <p>If you have any questions, contact us at 219.365.4088 or info@signsovernite.com.</p>
        <a href="/" style="background:#f59e0b;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block;margin-top:16px">Back to Shop</a>
      </div>`;
      return new Response(wrap("Thank You", body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/about") {
      const body = `<div style="max-width:900px;margin:0 auto;padding:32px 20px">
        <h1>About BrightLaunch</h1>
        <p>BrightLaunch makes practical printable kits for everyday life. Each kit is built to be used, not just looked at.</p>
        <p>BrightLaunch is part of Signs OverNITE, a family-owned business based in Crown Point, Indiana.</p>
        <p><strong>Contact us:</strong><br>Phone: 219.365.4088<br>Text: 219.213.1379<br>Email: info@signsovernite.com</p>
      </div>`;
      return new Response(wrap("About", body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/contact") {
      const body = `<div style="max-width:800px;margin:0 auto;padding:32px 20px">
        <h1>Contact Us</h1>
        <p>Phone: 219.365.4088 • Text: 219.213.1379<br>Email: info@signsovernite.com<br>Address: 8304 S Cline Ave, Crown Point, IN</p>
      </div>`;
      return new Response(wrap("Contact", body), { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
