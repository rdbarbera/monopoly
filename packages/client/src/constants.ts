import { IPageMeta } from "./components/MetaTags";

export const siteUrl = "https://monopoly-money.nitratine.net";

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
      "Monopoly Money helps you manage your finances in a game of monopoly from the browser.",
    index: true
  },
  [routePaths.join]: {
    titlePrefix: "Unirse",
    description: "Join a Monopoly Money game",
    index: true
  },
  [routePaths.newGame]: {
    titlePrefix: "Nuevo Juego",
    description: "Create a new Monopoly Money game",
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
