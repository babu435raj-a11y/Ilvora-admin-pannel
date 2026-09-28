import { getStore } from "@netlify/blobs";

const store = getStore({ name: "ilvora-site-content", region: "ap-southeast-1" });

const defaults = {
  services: [
    { id: "hospitals", title: "Hospitals & Clinics", description: "Patient-centred clinical environments designed to bring trusted care closer to communities.", image: "assets/services-hospitals-clinics.jpeg", offerings: [] },
    { id: "pharmacy", title: "Pharmacy", description: "Trusted medicines and responsible pharmacy services supporting safer, more convenient care.", image: "assets/services-pharmacy.jpeg", offerings: [] },
    { id: "laboratory", title: "Health Laboratory", description: "Accurate diagnostic insights that help clinicians and patients make informed decisions.", image: "assets/services-health-laboratory.jpeg", offerings: [] }
  ],
  careers: { vacancies: [] },
  gallery: [],
  opportunity: { projects: [] },
  company: { legalName: "ILVORA Healthcare Private Limited", registrationNumber: "To be updated", cin: "To be updated", gstin: "To be updated", registeredOffice: "Kerala, India" }
};

export default async () => {
  const saved = await store.get("content", { type: "json" });
  return Response.json(saved ? { ...defaults, ...saved } : defaults, { headers: { "Cache-Control": "no-store" } });
};
