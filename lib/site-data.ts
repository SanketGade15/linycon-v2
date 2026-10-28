export type ProjectType = "highway" | "industrial" | "transit";
export interface Project {
  id: string;
  fullTitle: string;
  type: ProjectType;
  tag: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  scope: string;
}
export interface Solution {
  id: string;
  title: string;
  label: string;
  text: string;
  items: string[];
  iconPath: string;
}
export const defaultService = "Electrical & illumination solutions";

export const projects: Project[] = [
  {
    id: "gulabpura",
    fullTitle: "Six-Laning of Gulabpura–Chittorgarh Section, NH 79, Rajasthan",
    type: "highway",
    tag: "HIGHWAY & ILLUMINATION",
    title: "Gulabpura–Chittorgarh",
    location: "NH 79 · Rajasthan",
    image: "project-gulabpura.jpg",
    alt: "Night-time road and junction lighting from the Linycon company profile",
    scope:
      "Six-laning of the Gulabpura–Chittorgarh section of NH 79 in Rajasthan. Road, junction, toll plaza, booth, canopy and underpass lighting, along with toll plaza HT and LT works.",
  },
  {
    id: "kishangarh",
    fullTitle: "Six-Laning of Kishangarh–Gulabpura Section, NH 79, Rajasthan",
    type: "highway",
    tag: "HIGHWAY & ELECTRICAL",
    title: "Kishangarh–Gulabpura",
    location: "NH 79 · Rajasthan",
    image: "project-kishangarh.jpg",
    alt: "Illuminated underpass from the Linycon project profile",
    scope:
      "Six-laning of the Kishangarh–Gulabpura section of NH 79 in Rajasthan. Road, junction, toll plaza, booth, canopy and underpass lighting, along with toll plaza HT and LT works.",
  },
  {
    id: "warehouse",
    fullTitle: "Warehouse Electrical Works – Caterpillar India Private Limited",
    type: "industrial",
    tag: "INDUSTRIAL ELECTRIFICATION",
    title: "Caterpillar India warehouse",
    location: "Tiruvallur · Tamil Nadu",
    image: "project-warehouse.jpg",
    alt: "Warehouse interior from the Linycon company profile",
    scope:
      "Electrical works for the warehouse at Caterpillar India Private Limited in Tiruvallur, Tamil Nadu.",
  },
  {
    id: "wadpale",
    fullTitle: "Four-Laning of Wadpale–Boargaon Section, NH 66, Maharashtra",
    type: "highway",
    tag: "HIGHWAY & ILLUMINATION",
    title: "Wadpale–Boargaon",
    location: "NH 66 · Maharashtra",
    image: "project-wadpale.jpg",
    alt: "Highway lighting from the Linycon project profile",
    scope:
      "Four-laning of the Wadpale–Boargaon section of NH 66 in Maharashtra. Road, junction, toll plaza canopy and underpass lighting.",
  },
  {
    id: "solapur",
    fullTitle: "Four-Laning of Solapur–Bijapur Section, NH 13, Karnataka",
    type: "highway",
    tag: "HIGHWAY & ILLUMINATION",
    title: "Solapur–Bijapur",
    location: "NH 13 · Karnataka section",
    image: "project-solapur.jpg",
    alt: "Street lighting along the highway at night from the Linycon company profile",
    scope:
      "Four-laning of the Solapur–Bijapur section of NH 13, Karnataka section. Road, junction, toll plaza booth and underpass lighting.",
  },
  {
    id: "monorail",
    fullTitle: "CCTV Works – Wadala Depot & Mumbai Monorail Stations",
    type: "transit",
    tag: "TRANSIT & CCTV SYSTEMS",
    title: "Mumbai Monorail",
    location: "Wadala Depot & stations · Maharashtra",
    image: "project-monorail.jpg",
    alt: "Infrastructure equipment at the Mumbai monorail project from the Linycon company profile",
    scope:
      "CCTV works at Wadala Depot and all monorail stations in Mumbai, Maharashtra.",
  },
];

export const solutions: Solution[] = [
  {
    id: "indoor",
    title: "Indoor Electrification Works",
    label: "ELECTRIFICATION",
    text: "Electrical infrastructure and installation works for indoor environments.",
    items: [],
    iconPath:
      "M8 47V13h27v34M35 27h13v20M16 21h5m5 0h3M16 29h5m5 0h3M16 37h5m5 0h3M3 47h50",
  },
  {
    id: "power",
    title: "HT Work, Transformers & DG Sets",
    label: "POWER SYSTEMS",
    text: "High-tension electrical works involving transformers and diesel generator sets.",
    items: ["HT electrical works", "Transformers", "Diesel generator sets"],
    iconPath:
      "M10 20h36v27H10zM18 20V9m10 11V9m10 11V9M15 9h6m4 0h6m4 0h6M29 25l-7 11h8l-3 8m-12 3v4m26-4v4",
  },
  {
    id: "highway",
    title: "Highway & Street Lighting",
    label: "ROAD ILLUMINATION",
    text: "Illumination solutions for highways, roads and street infrastructure.",
    items: ["Highway and road lighting", "Street infrastructure illumination"],
    iconPath:
      "M28 48V12m0 6L12 9H5m23 9 16-9h7M7 9v7m42-7v7M17 48h22M10 28h8m20 0h8",
  },
  {
    id: "tunnel",
    title: "Tunnel & Underdeck Illumination",
    label: "TRANSPORT LIGHTING",
    text: "Lighting solutions for tunnels, underpasses and underdeck infrastructure.",
    items: [],
    iconPath:
      "M7 47V27a21 21 0 0 1 42 0v20M15 47V27a13 13 0 0 1 26 0v20M24 47l2-13m6 13-2-13M28 14v5M5 47h46",
  },
  {
    id: "stadium",
    title: "Stadium Lighting",
    label: "SPORTS ILLUMINATION",
    text: "Illumination for stadiums and sports facilities.",
    items: [],
    iconPath:
      "M8 47V18m40 29V18M3 9h10v9H3zm40 0h10v9H43zM15 43h26M20 47V33h16v14M7 29l8 4m34-4-8 4M23 9h10v7H23z",
  },
  {
    id: "toll",
    title: "Toll Plaza Illumination & Electrical Works",
    label: "TOLL INFRASTRUCTURE",
    text: "Lighting and electrical works for toll plazas, booths and canopies.",
    items: [
      "Toll plaza illumination",
      "Booth and canopy lighting",
      "Electrical works",
    ],
    iconPath:
      "M4 17h48L45 9H11zM9 17v29m38-29v29M17 46V29h8v17m7 0V29h8v17M4 46h48M28 17v7",
  },
  {
    id: "junction",
    title: "Illumination of Major Junctions",
    label: "JUNCTION LIGHTING",
    text: "Lighting solutions for major road junctions and infrastructure corridors.",
    items: [],
    iconPath:
      "M20 4v16H4m32-16v16h16M20 52V36H4m32 16V36h16M28 4v9m0 30v9M4 28h9m30 0h9M22 28h12",
  },
  {
    id: "systems",
    title: "CCTV & LV Systems",
    label: "CONNECTED SYSTEMS",
    text: "CCTV installation and low-voltage system works.",
    items: [],
    iconPath:
      "m9 13 31 9-5 14L4 27zM40 22l10-1-5 16-10-1M20 32v9h20v9M9 9l4-5m18 32-3 6",
  },
];
