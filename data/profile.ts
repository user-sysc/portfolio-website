import type { ProfileType } from "@/types";

export const profileData: ProfileType = {
  fullName: "Tu Nombre",
  headline: "Tu título profesional aquí",
  shortBio: "Una breve descripción sobre ti y lo que haces.",
  email: "tu@email.com",
  location: "Tu Ciudad, País",
  fullBio: `Este es tu bio completo. Puedes escribir aquí sobre tu experiencia, tus habilidades y lo que te apasiona.`,
  resumeURL: "/resume.pdf",
  og: "/og.png",
  profileImage: {
    image: "/profile.jpg",
    lqip: "",
    alt: "Tu nombre",
  },
  usage: `Aquí puedes listar las herramientas y tecnologías que usas.`,
};
