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
  businessName: "[Your registered business name]",    // TODO
  businessAddress: "[Registered address, City, State, PIN]", // TODO
  supportEmail: "support@invotrack.in",               // TODO: an inbox you actually read
  whatsappNumber: "91XXXXXXXXXX",                     // TODO: country code + number, digits only

  // ---- Google Play (leave "" until the app is live) ----
  playStoreUrl: "",

  // ---- Pricing (₹, whole numbers). A price of 0 shows "Contact us". ----
  gstNote: "Prices exclusive of GST",                 // TODO: or "Prices inclusive of GST"
  plans: [
    { id: "monthly",  name: "Monthly",  price: 0, period: "/month",  note: "Billed every month" },
    { id: "yearly",   name: "Yearly",   price: 0, period: "/year",   note: "Best value", featured: true },
    { id: "lifetime", name: "Lifetime", price: 0, period: " once",   note: "Pay once, use forever" }
  ],

  // ---- Legal ----
  jurisdictionCity: "[City]",                         // TODO: city whose courts handle disputes
  grievanceOfficer: "[Name of grievance officer]",    // TODO: required under India's DPDP / IT Rules
  policyUpdated: "21 October 2026"
};
