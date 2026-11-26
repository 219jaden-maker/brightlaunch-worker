export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    const products = [
      { id: "kids-reading", name: "Kids Reading Adventure Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop", desc: `Turn reading time into a fun adventure!
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
      { id: "kids-chores", name: "Kids Chore & Allowance Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop", desc: `Make chores and allowance simple and motivating for kids.
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
      { id: "emergency-prep", name: "Emergency Preparedness & Family Safety Planner", price: 19.00, img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop", desc: `Get your family ready before an emergency happens.
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
      { id: "home-warranty", name: "Home Inventory & Warranty Tracker", price: 19.00, img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=600&fit=crop", desc: `Never lose track of what you own or miss a warranty claim.
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
Digital product only. No physical item will be shipped.` },
      { id: "home-energy", name: "Home Energy Saving & Utility Tracker", price: 19.00, img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=600&fit=crop", desc: `Track energy use and find ways to lower your utility bills.
This kit helps you monitor electricity, gas, and water so you can spot savings.

What's included:
• Utility Bill Tracker
• Energy Saving Checklist
• Room-by-Room Audit Sheet
• Savings Goal Planner
• Monthly Review Page

Perfect for homeowners who want to reduce energy costs.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "senior-wellness", name: "Senior Daily Wellness & Medication Tracker", price: 19.00, img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop", desc: `A simple daily tracker for medications, appointments, and wellness for seniors.
Stay organized and share information easily with family or caregivers.

What's included:
• Medication Schedule
• Appointment Tracker
• Daily Wellness Log
• Doctor Visit Notes
• Emergency Contact Sheet

Perfect for seniors and caregivers.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "teen-savings", name: "Teen Job & College Savings Planner", price: 19.00, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=600&fit=crop", desc: `Help teens track jobs, income, and college savings in one place.
This planner builds money habits and keeps college goals visible.

What's included:
• Job & Income Tracker
• College Savings Goal Sheet
• Spending Log
• Scholarship Idea List
• Monthly Review Page

Perfect for teens and parents planning for college.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "home-insurance", name: "Home Inventory & Insurance Tracker", price: 12.99, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", desc: `Keep a complete record of your home and belongings for insurance claims.

What's included:
• Home Inventory List
• Insurance Summary Sheet
• Purchase Date Log
• Room-by-Room Checklist
• Claim Notes Page

Perfect for homeowners who want to be ready for any insurance claim.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "budget-planner", name: "Household Budget & Bill Payment Planner", price: 12.99, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop", desc: `Stay on top of your money with a simple monthly budget and bill tracker.

What's included:
• Monthly Budget Worksheet
• Bill Payment Tracker
• Income & Expense Log
• Savings Goal Sheet
• Monthly Review Page

Perfect for households that want a clear picture of their money.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "personal-docs", name: "Personal Documents & Emergency Contacts Organizer", price: 12.99, img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop", desc: `Keep important documents and emergency contacts organized in one place.

What's included:
• Important Documents List
• Emergency Contact Sheet
• Insurance Information Page
• Medical Info Tracker
• Password & Account Notes

Perfect for families who want critical information easy to find.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "home-maintenance", name: "Seasonal Home Maintenance & Repair Log", price: 12.99, img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop", desc: `Never forget seasonal home maintenance or repairs.

What's included:
• Seasonal Maintenance Checklists
• Repair Log
• Contractor Contact Sheet
• Appliance Service Tracker
• Annual Home Review Page

Perfect for homeowners who want to stay ahead of maintenance.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "meal-system", name: "Weekly Meal & Grocery System", price: 12.99, img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=600&fit=crop", desc: `Plan meals and build grocery lists in one simple weekly system.

What's included:
• Weekly Meal Planner
• Grocery List Template
• Recipe Notes Page
• Leftover Tracker
• Monthly Meal Overview

Perfect for families who want easier meal planning.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "retirement-hobbies", name: "Retirement Hobbies & Travel", price: 19.00, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop", desc: `Plan hobbies and travel in retirement with clear worksheets.

What's included:
• Hobby Idea List
• Travel Planning Checklist
• Budget for Activities
• Bucket List Tracker
• Monthly Activity Planner

Perfect for retirees who want to make the most of their time.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "photo-kit", name: "Digital Photography & Smartphone Photos", price: 19.00, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop", desc: `Take better photos with your phone or camera using simple checklists and trackers.

What's included:
• Photo Shot List
• Camera Settings Tracker
• Editing Checklist
• Portfolio Planner
• Project Ideas Page

Perfect for beginners who want better photos.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "pet-training", name: "Pet Training & New Pet Owner", price: 19.00, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop", desc: `Training logs and new-owner guides for dogs and cats.

What's included:
• Training Progress Log
• Supply Checklist
• Vet Visit Tracker
• Feeding Schedule
• Behavior Notes Page

Perfect for new pet owners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "family-fun", name: "Family Fun on a Budget", price: 19.00, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop", desc: `Free and low-cost activity ideas plus outing checklists for family fun.

What's included:
• Activity Idea List
• Outing Checklist
• Budget Tracker
• Memory Log
• Seasonal Fun Planner

Perfect for families who want fun without overspending.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "time-management", name: "Time Management & Productivity", price: 19.00, img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=600&fit=crop", desc: `Daily planners and focus tools to get more done with less stress.

What's included:
• Daily Planner
• Priority List
• Weekly Review
• Focus Session Tracker
• Goal Progress Sheet

Perfect for anyone who wants better time management.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "small-biz-marketing", name: "Small Business Marketing", price: 19.00, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop", desc: `Simple marketing checklists and content planners for small businesses.

What's included:
• Marketing Checklist
• Content Calendar
• Social Media Planner
• Campaign Tracker
• Review Request Template

Perfect for small business owners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "online-store", name: "Starting an Online Store", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: `Step-by-step planner and checklists for launching your first online shop.

What's included:
• Launch Checklist
• Product Listing Planner
• Pricing Worksheet
• Order Tracker
• Marketing Plan Page

Perfect for first-time online sellers.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "ai-tools", name: "AI Tools for Beginners", price: 19.00, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop", desc: `Beginner-friendly worksheets and guides for using AI tools effectively.

What's included:
• AI Tool Comparison Sheet
• Prompt Ideas List
• Project Tracker
• Learning Log
• Use Case Planner

Perfect for anyone new to AI tools.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "homebuyer", name: "First-Time Homebuyer Kit", price: 19.00, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", desc: `Checklists and trackers for every step of the home-buying process.

What's included:
• Home Search Checklist
• Offer Tracker
• Inspection Notes
• Closing Checklist
• Moving Timeline

Perfect for first-time homebuyers.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "wedding-budget", name: "Wedding Planning on a Budget", price: 19.00, img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", desc: `Budget planner and checklists for a beautiful wedding without overspending.

What's included:
• Wedding Budget Worksheet
• Vendor Tracker
• Guest List Planner
• Timeline Checklist
• DIY Ideas Page

Perfect for couples planning a wedding on a budget.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "declutter", name: "Home Organization & Decluttering", price: 19.00, img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop", desc: `Room-by-room decluttering guides and organization systems.

What's included:
• Room Declutter Checklist
• Donation Tracker
• Keep/Toss/Donate Sheets
• Storage Ideas Page
• Monthly Reset Planner

Perfect for anyone who wants a more organized home.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "budget-travel", name: "Budget Travel & Vacation Planning", price: 19.00, img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop", desc: `Trip planners and money-saving checklists for affordable vacations.

What's included:
• Trip Budget Worksheet
• Packing Checklist
• Itinerary Planner
• Savings Tracker
• Travel Notes Page

Perfect for travelers who want to save money.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "meal-savings", name: "Meal Planning & Grocery Savings Kit", price: 19.00, img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=600&fit=crop", desc: `Save money on groceries with meal plans, shopping lists, and trackers.

What's included:
• Weekly Meal Plan
• Grocery Savings Tracker
• Pantry Inventory
• Recipe Cost Calculator
• Monthly Review Sheet

Perfect for families looking to cut grocery costs.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "first-apartment", name: "First Apartment & Moving Out Kit", price: 19.00, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=600&fit=crop", desc: `Checklists and planners for your first place and moving day.

What's included:
• Moving Checklist
• Apartment Setup List
• Budget for First Month
• Utility Tracker
• Packing Inventory

Perfect for anyone moving into their first apartment.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "cut-bills", name: "Save Money & Cut Household Bills Kit", price: 19.00, img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop", desc: `Trackers and tips to lower utility and household bills.

What's included:
• Bill Comparison Sheet
• Savings Ideas Checklist
• Monthly Expense Tracker
• Negotiation Script Notes
• Annual Review Page

Perfect for households that want to lower their bills.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "win-friends", name: "Win Friends & Build Positive Influence Kit", price: 19.00, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop", desc: `Practical worksheets for building better relationships and positive influence.

What's included:
• Conversation Starters
• Relationship Tracker
• Positive Habit Log
• Networking Planner
• Reflection Page

Perfect for anyone who wants stronger relationships.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "job-search", name: "Job Search & Career Success Kit", price: 19.00, img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop", desc: `Resume trackers, interview prep sheets, and job search planners.

What's included:
• Job Application Tracker
• Interview Prep Worksheet
• Resume Checklist
• Follow-Up Log
• Career Goals Page

Perfect for job seekers.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "income-growth", name: "Income Growth & Financial Goals Kit", price: 19.00, img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=600&fit=crop", desc: `Goal-setting and income-tracking worksheets to grow your earnings.

What's included:
• Income Goal Worksheet
• Side Hustle Tracker
• Monthly Review
• Skill Building Log
• Progress Chart

Perfect for anyone focused on growing their income.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "investing", name: "Investing Fundamentals Kit", price: 19.00, img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=600&fit=crop", desc: `Beginner investing checklists and trackers.

What's included:
• Investment Basics Checklist
• Portfolio Tracker
• Risk Assessment Sheet
• Goal Planner
• Monthly Review

Perfect for new investors.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "retirement-planning", name: "Retirement Planning & Lifestyle Kit", price: 19.00, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop", desc: `Retirement income and lifestyle planning worksheets.

What's included:
• Retirement Income Planner
• Lifestyle Goals Sheet
• Expense Tracker
• Timeline Planner
• Review Page

Perfect for anyone planning for retirement.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "home-business", name: "Start a Home Business Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop", desc: `Step-by-step planner and checklists for starting a business from home.

What's included:
• Business Idea Worksheet
• Startup Checklist
• Budget Planner
• Marketing Plan
• Weekly Action Log

Perfect for anyone starting a home business.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "make-friends", name: "Meet People & Make New Friends Kit", price: 19.00, img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop", desc: `Ideas and trackers for meeting new people and building friendships.

What's included:
• Activity Ideas List
• Contact Tracker
• Conversation Notes
• Weekly Social Planner
• Reflection Page

Perfect for anyone looking to meet new people.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "wellbeing", name: "Positive Attitude & Everyday Wellbeing Kit", price: 19.00, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop", desc: `Daily wellbeing trackers and positive habit worksheets.

What's included:
• Daily Mood Tracker
• Gratitude Log
• Habit Builder
• Weekly Review
• Goal Sheet

Perfect for anyone focused on everyday wellbeing.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "college-prep", name: "College Prep & Success Kit", price: 19.00, img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=600&fit=crop", desc: `Checklists and planners for college applications and student success.

What's included:
• Application Checklist
• Scholarship Tracker
• Study Planner
• Campus Visit Notes
• Timeline Sheet

Perfect for students and parents preparing for college.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "biz-startup", name: "Small Business Startup Planner", price: 19.00, img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop", desc: `Complete startup checklist and planning worksheets.

What's included:
• Business Plan Outline
• Startup Checklist
• Budget Worksheet
• Marketing Plan
• Milestone Tracker

Perfect for new small business owners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "wedding-signs", name: "Wedding Welcome & Party Sign Kit", price: 19.00, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", desc: `Editable sign templates for weddings and parties.

What's included:
• Welcome Sign Templates
• Directional Sign Templates
• Table Number Signs
• Editable Text Files
• Print Instructions

Perfect for weddings and parties.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "yard-sale", name: "Yard Sale & Garage Sale Sign Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: `Ready-to-print yard sale signs and pricing tags.

What's included:
• Yard Sale Sign Templates
• Pricing Tag Sheets
• Directional Arrows
• Editable Text
• Print Instructions

Perfect for yard sales and garage sales.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "moving", name: "Moving & Relocation Planner", price: 19.00, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop", desc: `Complete moving checklist and box inventory system.

What's included:
• Moving Checklist
• Box Inventory Log
• Utility Transfer Tracker
• Timeline Planner
• Address Change List

Perfect for anyone moving.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "holiday", name: "Holiday & Christmas Planner Kit", price: 19.00, img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&h=600&fit=crop", desc: `Holiday planning checklists, gift trackers, and meal plans.

What's included:
• Gift Tracker
• Meal Planning Sheet
• Budget Worksheet
• Decorating Checklist
• Event Planner

Perfect for holiday planning.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "food-truck", name: "Food Truck & Vendor Menu Board Kit", price: 19.00, img: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600&h=600&fit=crop", desc: `Menu board templates and vendor checklists.

What's included:
• Menu Board Templates
• Vendor Checklist
• Pricing Sheet
• Editable Text
• Print Instructions

Perfect for food trucks and vendors.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "open-house", name: "Real Estate Open House Sign & Flyer Kit", price: 19.00, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop", desc: `Open house signs, flyers, and checklists for realtors.

What's included:
• Open House Sign Templates
• Flyer Templates
• Checklist
• Editable Text
• Print Instructions

Perfect for real estate open houses.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "church", name: "Church Event Flyer & Bulletin Kit", price: 19.00, img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600&h=600&fit=crop", desc: `Editable flyer and bulletin templates for church events.

What's included:
• Flyer Templates
• Bulletin Inserts
• Event Checklist
• Editable Text
• Print Instructions

Perfect for church events.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "social-media", name: "Social Media Business Kit", price: 19.00, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop", desc: `Content calendars and posting checklists for small businesses.

What's included:
• Content Calendar
• Posting Checklist
• Idea Generator
• Analytics Tracker
• Monthly Review

Perfect for small businesses using social media.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "family-emergency", name: "Family Emergency Preparedness Kit", price: 19.00, img: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=600&fit=crop", desc: `Family emergency plans and supply checklists.

What's included:
• Family Emergency Plan
• Supply Checklist
• Contact List
• Evacuation Notes
• Review Page

Perfect for families preparing for emergencies.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "pet-care", name: "Complete Pet Care & Wellness Kit", price: 19.00, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop", desc: `Health, feeding, and care trackers for pets.

What's included:
• Health Tracker
• Feeding Schedule
• Vet Visit Log
• Medication Tracker
• Care Checklist

Perfect for pet owners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "home-repair", name: "Home Maintenance & Repair Kit", price: 19.00, img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop", desc: `Maintenance schedules and repair log sheets.

What's included:
• Maintenance Schedule
• Repair Log
• Contractor Contacts
• Seasonal Checklist
• Notes Page

Perfect for homeowners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "diy-signs", name: "DIY Budget Signs Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: `Simple editable sign templates for home and events.

What's included:
• Sign Templates
• Editable Text
• Print Instructions
• Size Guide
• Idea List

Perfect for DIY signs.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "infant-care", name: "Infant Care & New Parent Kit", price: 19.00, img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop", desc: `New parent checklists, feeding logs, and care trackers.

What's included:
• Feeding Log
• Sleep Tracker
• Care Checklist
• Doctor Visit Notes
• Supply List

Perfect for new parents.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "electric-car", name: "Electric Car Care & Maintenance Kit", price: 19.99, img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=600&fit=crop", desc: `Maintenance trackers and care checklists for electric vehicles.

What's included:
• Maintenance Log
• Charging Tracker
• Service Checklist
• Tire & Brake Notes
• Annual Review

Perfect for electric car owners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "gas-car", name: "Gas Car Care & Maintenance Kit", price: 19.99, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop", desc: `Service logs and maintenance checklists for gas vehicles.

What's included:
• Service Log
• Oil Change Tracker
• Maintenance Checklist
• Tire Notes
• Annual Review

Perfect for gas car owners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "gardening", name: "Ultimate Home Gardening Kit", price: 24.99, img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop", desc: `Planting calendars, care trackers, and garden planning sheets.

What's included:
• Planting Calendar
• Garden Layout Planner
• Care Tracker
• Harvest Log
• Supply Checklist

Perfect for home gardeners.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "grand-opening", name: "Grand Opening Marketing Kit", price: 19.00, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop", desc: `Editable signs, flyers, and checklists for grand openings.

What's included:
• Sign Templates
• Flyer Templates
• Checklist
• Social Media Posts
• Print Instructions

Perfect for new business grand openings.
Instant digital download.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "independent-living", name: "Independent Living Starter Pack", price: 49.00, img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop", desc: `Bundle of 5 practical kits for independent living.

What's included:
• First Apartment & Moving Out Kit
• Household Budget & Bill Payment Planner
• Personal Documents & Emergency Contacts Organizer
• Home Maintenance & Repair Log
• Family Fun on a Budget

Perfect for anyone starting out on their own.
Instant digital download. Each kit is a printable workbook with companion files.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "online-biz-ai", name: "Online Business & AI Success", price: 49.00, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop", desc: `Bundle of 5 kits for online business and AI tools.

What's included:
• Starting an Online Store
• AI Tools for Beginners
• Small Business Marketing
• Social Media Business Kit
• Small Business Startup Planner

Perfect for anyone launching an online business.
Instant digital download. Each kit is a printable workbook with companion files.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "smart-living", name: "Smart Living & Money Saving", price: 49.00, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop", desc: `Bundle of 5 kits for smarter living and saving money.

What's included:
• Household Budget & Bill Payment Planner
• Save Money & Cut Household Bills Kit
• Meal Planning & Grocery Savings Kit
• Home Organization & Decluttering
• Time Management & Productivity

Perfect for households focused on saving money and getting organized.
Instant digital download. Each kit is a printable workbook with companion files.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "better-life", name: "Better Life & Personal Success Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop", desc: `Bundle of 5 kits for personal growth and better living.

What's included:
• Positive Attitude & Everyday Wellbeing Kit
• Win Friends & Build Positive Influence Kit
• Meet People & Make New Friends Kit
• Time Management & Productivity
• Income Growth & Financial Goals Kit

Perfect for anyone focused on personal growth.
Instant digital download. Each kit is a printable workbook with companion files.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "business-success", name: "Business Success Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop", desc: `Bundle of 5 kits for business growth.

What's included:
• Small Business Startup Planner
• Small Business Marketing
• Starting an Online Store
• Social Media Business Kit
• Grand Opening Marketing Kit

Perfect for small business owners.
Instant digital download. Each kit is a printable workbook with companion files.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` },
      { id: "car-home", name: "Car & Home Essentials Bundle", price: 49.00, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop", desc: `Bundle of 5 kits for car and home care.

What's included:
• Gas Car Care & Maintenance Kit
• Electric Car Care & Maintenance Kit
• Home Inventory & Warranty Tracker
• Seasonal Home Maintenance & Repair Log
• Ultimate Home Gardening Kit

Perfect for homeowners and car owners.
Instant digital download. Each kit is a printable workbook with companion files.
Created by BrightLaunch.
Digital product only. No physical item will be shipped.` }
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
        <div style="white-space:pre-line;line-height:1.6">${p.desc}</div>
        <p style="background:#fffbeb;padding:16px;border-radius:8px;margin-top:16px">Instant digital download. Print at home or at any print shop.</p>
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
      const body = `<div style="max-width:900px;margin:0 auto;padding:32px 20px">
        <h1>About BrightLaunch</h1>
        <p>BrightLaunch makes practical printable kits for everyday life: planners, checklists, trackers, and organizers for families, homeowners, and small businesses. Each kit is built to be used, not just looked at.</p>
        <p>We are the team behind a local sign business that has served customers for more than 50 years. Decades of making signs for shops, events, homes, and vehicles taught us what gets noticed and what gets results. That experience goes into every guide, checklist, and planner we make.</p>
        <p>Every product is an instant digital download in standard US Letter size, so you can print at home or at any print shop. Our kits include clear worksheets and companion files you can use on your computer or print as many times as you need.</p>
        <p>BrightLaunch is part of Signs OverNITE, a family-owned business based in Crown Point, Indiana, serving Northwest Indiana and the greater Chicagoland area.</p>
        <p><strong>Contact us:</strong><br>Phone: 219.365.4088<br>Text: 219.213.1379<br>Email: info@signsovernite.com</p>
      </div>`;
      return new Response(wrap("About", body), { headers: { "Content-Type": "text/html" } });
    }

    if (path === "/contact") {
      const body = `<div style="max-width:800px;margin:0 auto;padding:32px 20px">
        <h1>Contact Us</h1>
        <p>Have a question about a kit or need help with an order? Reach out and we’ll get back to you.</p>
        <div style="background:white;padding:24px;border-radius:12px;margin-top:20px">
          <p><strong>BrightLaunch Template Co. / Signs OverNITE</strong></p>
          <p>Phone: 219.365.4088</p>
          <p>Text: 219.213.1379</p>
          <p>Email: info@signsovernite.com</p>
          <p>Address: 8304 S Cline Ave, Crown Point, IN</p>
        </div>
        <p style="margin-top:20px">We typically respond within one business day.</p>
      </div>`;
      return new Response(wrap("Contact", body), { headers: { "Content-Type": "text/html" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
