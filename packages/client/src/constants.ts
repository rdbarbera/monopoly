import { IPageMeta } from "./components/MetaTags";

export const siteUrl = "https://monopoly-vale.nitratine.net";

export const bankName = "🏦 Banco";
export const freeParkingName = "🚗 Free Parking";

export const routePaths = {
  home: "/",
  join: "/join",
  newGame: "/new-game",
  funds: "/funds",
  bank: "/bank",
  history: "/history",
  settings: "/settings",
  help: "/help"
};

export const pageMeta: Record<string, IPageMeta> = {
  [routePaths.home]: {
    titlePrefix: "",
    description:
      "Monopoly Digital - Maneje las finanzas en su banco digital.",
    index: true
  },
  [routePaths.join]: {
    titlePrefix: "Unirse",
    description: "Unirse a un juego existente",
    index: true
  },
  [routePaths.newGame]: {
    titlePrefix: "Nuevo Juego",
    description: "Crear un nuevo juego",
    index: true
  },
  [routePaths.funds]: {
    titlePrefix: "Manejar Fondos",
    index: false
  },
  [routePaths.bank]: {
    titlePrefix: "Banco",
    index: false
  },
  [routePaths.history]: {
    titlePrefix: "Historial",
    index: false
  },
  [routePaths.settings]: {
    titlePrefix: "Configuracion",
    index: false
  },
  [routePaths.help]: {
    titlePrefix: "Ayuda",
    index: false
  }
};
