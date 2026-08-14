// Images are bundled from src/assets/clinic so they work on any host
// (Lovable, GitHub Pages, Vercel, Netlify, self-hosted).
import exterior from "@/assets/clinic/IMG_20260804_131802.jpg";
import reception from "@/assets/clinic/IMG_20260804_131745.jpg";
import waiting from "@/assets/clinic/IMG_20260804_131727.jpg";
import opgRoom from "@/assets/clinic/IMG_20260804_131711.jpg";
import entrance from "@/assets/clinic/IMG_20260804_131656.jpg";
import treatmentRoom from "@/assets/clinic/IMG_20260804_131642.jpg";
import xray from "@/assets/clinic/IMG_20260804_131633.jpg";

export type ClinicPhoto = { url: string; alt: string };

export const clinicPhotos: ClinicPhoto[] = [
  { url: exterior, alt: "Exterior signboard of Harirup Dental Care multispeciality dental clinic in Manchar" },
  { url: treatmentRoom, alt: "Dental treatment room with dental chair, operating light and X-ray unit" },
  { url: reception, alt: "Reception counter of Harirup Dental Care with patients waiting" },
  { url: opgRoom, alt: "Dental OPG room with digital dental X-ray equipment" },
  { url: waiting, alt: "Waiting area of the clinic with seating and treatment information posters" },
  { url: xray, alt: "Digital panoramic dental X-ray displayed on a monitor at the clinic" },
  { url: entrance, alt: "Entrance and waiting lounge of Harirup Dental Care" },
];

export const heroPhoto = clinicPhotos[1];
export const clinicExteriorPhoto = clinicPhotos[0];
