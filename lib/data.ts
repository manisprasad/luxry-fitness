/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LUXURY FITNESS PUNJABI BAGH — CONTENT & BUSINESS CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit this file to update business details, services, pictures, testimonials
 * or SEO data. No UI components need to be touched for copy changes.
 *
 * NOTE ON UNVERIFIED DATA
 * Some fields below are intentionally empty. Do NOT invent phone numbers,
 * emails, social handles, founding years or member counts. Fill the TODOs
 * below with real values and the site will render them.
 */

export const siteUrl = "https://luxuryfitnesspunjabibagh.com"; // TODO: replace with the real deployed domain.

export const gym = {
  name: "Luxury Fitness Punjabi Bagh",
  shortName: "Luxury Fitness",
  tagline: "Train Harder. Live Stronger.",
  area: "West Punjabi Bagh",
  city: "New Delhi",
  state: "Delhi",
  country: "India",
  streetAddress: "Vashisht Kumar Gulla Marg",
  fullAddress:
    "Vashisht Kumar Gulla Marg, West Punjabi Bagh, Punjabi Bagh, New Delhi, Delhi 110026, India",
  plusCode: "M4CH+93 Delhi",
  phone: "+91 88266 99658",
  phoneHref: "tel:+918826699658",
  // TODO: add the real business email address when the owner supplies one.
  email: "",
  // Google rating from the gym's public Google Maps listing.
  googleRating: {
    rating: 4.6,
    count: 100,
    sourceUrl: "https://www.google.com/maps?cid=18192233285614910268",
  },
  // Verified amenities from the Google Maps listing.
  amenities: ["Restroom", "NFC Mobile Payments"],
  // Primary Google Maps reference — GET DIRECTIONS link (real place).
  googleMapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Luxury+Fitness+Punjabi+Bagh%2C+Vashisht+Kumar+Gulla+Marg%2C+Punjabi+Bagh%2C+Delhi",
  // Real embedded map provided by the gym owner.
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.627659212339!2d77.1277022!3d28.6708654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a2dd2aa253%3A0xfc77cbc9641d3b3c!2sLuxury%20Fitness%20Punjabi%20Bagh!5e0!3m2!1sen!2sin!4v1789890788205!5m2!1sen!2sin",
  // Verified social profiles.
  instagram: "https://www.instagram.com/luxury_fitness_punjabi_bagh/",
  facebook: "https://www.facebook.com/luxuryakhadapunjabibagh/",
  youtube: "",
};

/** Generic-purpose photo slots → point to real photos in /public/photos. */
export const photos = {
  /** Hero / signature gym shot (brightest available image). */
  hero: {
    src: "/photos/img-7.webp",
    alt: "Inside Luxury Fitness Punjabi Bagh gym floor",
    width: 547,
    height: 327,
  },
  heroSecondary: {
    src: "/photos/img-1.webp",
    alt: "Gym interior at Luxury Fitness Punjabi Bagh",
    width: 547,
    height: 327,
  },
  motivation: {
    src: "/photos/img-4.webp",
    alt: "Training area at Luxury Fitness Punjabi Bagh",
    width: 547,
    height: 327,
  },
  aboutMain: {
    src: "/photos/img-6.webp",
    alt: "Gym floor inside Luxury Fitness Punjabi Bagh",
    width: 547,
    height: 327,
  },
  logo: {
    src: "/photos/logo.webp",
    alt: "Luxury Fitness Punjabi Bagh logo",
    width: 150,
    height: 150,
  },
} as const;

/**
 * All gym photos used throughout the site.
 * TODO: review each file and update `label`/`alt` to match what each photo
 * actually shows (each image is a screenshot of the gym, mapped in
 * scripts/optimize-images.py).
 */
export const galleryImages: {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}[] = [
  {
    src: "/photos/img-7.webp",
    alt: "Gym floor signage at Luxury Fitness Punjabi Bagh",
    label: "Gym Floor",
    width: 547,
    height: 327,
  },
  {
    src: "/photos/img-1.webp",
    alt: "Training floor inside Luxury Fitness Punjabi Bagh",
    label: "Training Floor",
    width: 547,
    height: 327,
  },
  {
    src: "/photos/img-2.webp",
    alt: "Strength equipment at Luxury Fitness Punjabi Bagh",
    label: "Strength Zone",
    width: 547,
    height: 327,
  },
  {
    src: "/photos/img-3.webp",
    alt: "Workout machines at Luxury Fitness Punjabi Bagh",
    label: "Workout Machines",
    width: 548,
    height: 329,
  },
  {
    src: "/photos/img-4.webp",
    alt: "Cardio equipment at Luxury Fitness Punjabi Bagh",
    label: "Cardio Area",
    width: 547,
    height: 304,
  },
  {
    src: "/photos/img-5.webp",
    alt: "Training space at Luxury Fitness Punjabi Bagh",
    label: "Training Space",
    width: 547,
    height: 327,
  },
  {
    src: "/photos/img-6.webp",
    alt: "Gym interior at Luxury Fitness Punjabi Bagh",
    label: "Gym Interior",
    width: 544,
    height: 330,
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  audience: string;
}

/** Services offered (editable). Only generic, unverifiable-to-avoid claims. */
export const services: Service[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    description:
      "Structured strength work built around free weights, machines and progressive overload — a solid foundation for any goal.",
    audience: "For anyone serious about building muscle and raw strength.",
  },
  {
    id: "cardio",
    title: "Cardio Training",
    description:
      "Endurance-focused sessions to build stamina, burn energy and improve overall conditioning.",
    audience: "For those improving heart health, stamina and recovery.",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description:
      "One-on-one coaching with a plan built around your body, your schedule and your goal.",
    audience: "For beginners needing guidance or lifters chasing a specific target.",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    description:
      "Movement-based training that builds strength you actually use in daily life.",
    audience: "For anyone wanting strong, mobile, practical fitness.",
  },
  {
    id: "weight-management",
    title: "Weight Management",
    description:
      "A structured approach to fat loss or lean gain — combining training, habits and consistency.",
    audience: "For members looking to transform their body composition.",
  },
  {
    id: "general-fitness",
    title: "General Fitness",
    description:
      "Balanced full-body training designed to keep you fit, active and energised.",
    audience: "For anyone who wants to stay consistently healthy.",
  },
];

export const serviceIcons: Record<string, "dumbbell" | "heartPulse" | "userCheck" | "zap" | "scale" | "flame"> = {
  "strength-training": "dumbbell",
  cardio: "heartPulse",
  "personal-training": "userCheck",
  "functional-training": "zap",
  "weight-management": "scale",
  "general-fitness": "flame",
};

/** Non-numeric value props used instead of unverifiable member stats. */
export const valueProps: {
  number: string;
  title: string;
  description: string;
  icon: "dumbbell" | "target" | "users" | "star";
}[] = [
  {
    number: "01",
    title: "Modern Equipment",
    description:
      "A well-kept floor with the machines and free weights serious training demands.",
    icon: "dumbbell",
  },
  {
    number: "02",
    title: "Training Focused",
    description:
      "An atmosphere built around showing up, working hard and staying consistent.",
    icon: "target",
  },
  {
    number: "03",
    title: "Fitness Community",
    description:
      "Train alongside people with the same goal — the version of yourself you're building.",
    icon: "users",
  },
  {
    number: "04",
    title: "Premium Experience",
    description:
      "A clean, professional space designed to make every session feel worth it.",
    icon: "star",
  },
];

export const whyUs: {
  title: string;
  description: string;
}[] = [
  {
    title: "A premium workout environment",
    description:
      "A clean, well-maintained floor where you can concentrate on the work.",
  },
  {
    title: "Equipment for real training",
    description:
      "Machines, racks and free weights covering every major movement.",
  },
  {
    title: "A focused, disciplined atmosphere",
    description:
      "No distractions. Just training, consistency and progress.",
  },
  {
    title: "A fitness-minded community",
    description:
      "The right people around you make showing up easier.",
  },
  {
    title: "Right in Punjabi Bagh",
    description:
      "A local training destination, easy to reach from West and Central Delhi.",
  },
  {
    title: "A supportive space",
    description:
      "Space to start where you are and grow at your own pace.",
  },
];

export const philosophy: {
  title: string;
  description: string;
}[] = [
  {
    title: "Consistency",
    description:
      "Results are not built in single heroic sessions. They are built by showing up, again and again.",
  },
  {
    title: "Discipline",
    description:
      "Motivation fades. Discipline is the system that keeps you training when motivation doesn't show up.",
  },
  {
    title: "Strength",
    description:
      "Physical strength builds the confidence and mental toughness that carries into every other part of life.",
  },
  {
    title: "Health",
    description:
      "Training is a long-term investment in energy, mobility and the days ahead.",
  },
  {
    title: "Progress",
    description:
      "Compete with who you were yesterday. Small, measurable progress compounds into transformation.",
  },
];

/**
 * Reviews / testimonials.
 * ─────────────────────────────────────────────────────────────────────────────
 * Real, published reviews copied from the gym's public Google Maps listing.
 * Add more in the shape of `Testimonial` below as the owner supplies them.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "This is hands down one of the best gyms I've trained at. The equipment is modern, well-maintained, and covers everything from heavy lifting to functional training. The trainers are knowledgeable, approachable, and genuinely invested in your progress.",
    name: "Mohak",
    role: "Google Review",
  },
  {
    quote:
      "The gym is very vast and the trainer especially Mr. Aayush is the best trainer whole in Punjabi Bagh. If you want to change your picture then do come to Luxury Fitness Punjabi Bagh.",
    name: "Siddharth Goel",
    role: "Google Review",
  },
  {
    quote:
      "The gym has high-end equipment and premium facilities. People appreciate the spacious workout areas, modern machines and clean environment. The trainers are really supportive and the staff nice and kind. The gym fee is affordable.",
    name: "Nirvaan Soundh",
    role: "Google Review",
  },
];

export function getFacilities(): {
  src: string;
  label: string;
  alt: string;
  width: number;
  height: number;
}[] {
  return [
    {
      src: galleryImages[0].src,
      label: "Gym Floor",
      alt: galleryImages[0].alt,
      width: galleryImages[0].width,
      height: galleryImages[0].height,
    },
    {
      src: galleryImages[4].src,
      label: "Cardio Area",
      alt: galleryImages[4].alt,
      width: galleryImages[4].width,
      height: galleryImages[4].height,
    },
    {
      src: galleryImages[2].src,
      label: "Strength Equipment",
      alt: galleryImages[2].alt,
      width: galleryImages[2].width,
      height: galleryImages[2].height,
    },
    {
      src: galleryImages[3].src,
      label: "Training Space",
      alt: galleryImages[3].alt,
      width: galleryImages[3].width,
      height: galleryImages[3].height,
    },
  ];
}

export const story = {
  intro:
    "Luxury Fitness Punjabi Bagh is a premium training destination in the heart of West Delhi — built for people who want more from their workout than just showing up.",
  body: [
    "The gym is designed for serious, focused training. Clean lines, a well-equipped floor and an atmosphere that rewards consistency over shortcuts.",
    "Whether you're stepping into a gym for the first time or chasing a new personal record, this is a place built to help you get stronger — at your own pace.",
    "Located in Punjabi Bagh, New Delhi, it's a neighbourhood training hub for everyone who believes the work happens in the gym and the results happen everywhere else. Plan your visit, or book a free trial and see the floor for yourself.",
  ],
  heroIntro:
    "A premium training space in Punjabi Bagh, New Delhi — built around serious equipment, a focused atmosphere, and people who show up.",
};

/** Free trial form options. */
export const fitnessGoals = [
  "Weight Loss",
  "Muscle Gain",
  "Strength",
  "General Fitness",
  "Personal Training",
  "Other",
] as const;

export const trialTimeSlots = [
  "Morning (Before 12 PM)",
  "Afternoon (12 PM – 5 PM)",
  "Evening (5 PM – 9 PM)",
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const seoDefaults = {
  title: "Luxury Fitness Punjabi Bagh | Premium Gym in New Delhi",
  description:
    "Luxury Fitness Punjabi Bagh. Explore our gym, fitness services, facilities and book your free trial.",
  keywords: [
    "gym Punjabi Bagh",
    "Luxury Fitness Punjabi Bagh",
    "gym New Delhi",
    "personal training Punjabi Bagh",
    "free gym trial Delhi",
  ],
};