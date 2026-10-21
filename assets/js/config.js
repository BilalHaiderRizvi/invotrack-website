/*
 * ============================================================
 *  InvoTrack website — EDIT THIS FILE ONLY for prices & contact
 * ============================================================
 *  Every price, phone number, email and business detail on the
 *  site (home page AND legal pages) is filled in from here.
 *  Leave a value as "" to hide that item.
 */
window.INVOTRACK_CONFIG = {
  // ---- Business (shown in footer, Privacy Policy, Terms) ----
  businessName: "InvoTrack",    
  businessAddress: "E-68, Okhla Vihar, New Delhi",    
  supportEmail: "support@invotrack.in",               
  whatsappNumber: "917827189107",                    

  // ---- Google Play (leave "" until the app is live) ----
  playStoreUrl: "",

  // ---- Pricing (₹, whole numbers). A price of 0 shows "Contact us". ----
  gstNote: "Prices exclusive of GST",                 // TODO: or "Prices inclusive of GST"
  plans: [
    { id: "monthly",   name: "Monthly",   price: 300, period: "/month",    note: "Billed every month" },
    { id: "quarterly", name: "Quarterly", price: 800, period: "/3 months", note: "Billed every 3 months" },
    { id: "yearly",    name: "Yearly",    price: 2500, period: "/year",     note: "Best value", featured: true }
  ],

  // ---- Legal ----
  jurisdictionCity: "New Delhi",    // TODO: city whose courts handle disputes
  grievanceOfficer: "John Doe",    // TODO: required under India's DPDP / IT Rules
  policyUpdated: "21 October 2026"
};
