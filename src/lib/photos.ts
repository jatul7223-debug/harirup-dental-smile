import exterior from "@/assets/IMG_20260804_131802.jpg.asset.json";
import reception from "@/assets/IMG_20260804_131745.jpg.asset.json";
import waiting from "@/assets/IMG_20260804_131727.jpg.asset.json";
import opgRoom from "@/assets/IMG_20260804_131711.jpg.asset.json";
import entrance from "@/assets/IMG_20260804_131656.jpg.asset.json";
import treatmentRoom from "@/assets/IMG_20260804_131642.jpg.asset.json";
import xray from "@/assets/IMG_20260804_131633.jpg.asset.json";

export type ClinicPhoto = { url: string; alt: string };

export const clinicPhotos: ClinicPhoto[] = [
  { url: exterior.url, alt: "Exterior signboard of Harirup Dental Care multispeciality dental clinic in Manchar" },
  { url: treatmentRoom.url, alt: "Dental treatment room with dental chair, operating light and X-ray unit" },
  { url: reception.url, alt: "Reception counter of Harirup Dental Care with patients waiting" },
  { url: opgRoom.url, alt: "Dental OPG room with digital dental X-ray equipment" },
  { url: waiting.url, alt: "Waiting area of the clinic with seating and treatment information posters" },
  { url: xray.url, alt: "Digital panoramic dental X-ray displayed on a monitor at the clinic" },
  { url: entrance.url, alt: "Entrance and waiting lounge of Harirup Dental Care" },
];

export const heroPhoto = clinicPhotos[1];
export const clinicExteriorPhoto = clinicPhotos[0];
