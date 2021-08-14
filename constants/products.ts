export type Product = {
  id: number;
  name: string;
  value: number;
  inStock?: boolean;
};
export enum Groups {
  aro13 = 13,
  aro14 = 14,
  aro15 = 15,
  aro16 = 16,
  aro17 = 17,
}

export type Products = {
  group: Groups;
  products: Product[];
};
export const products: Products[] = [
  {
    group: Groups.aro13,
    products: [
      {
        id: 1,
        name: "Pneu 165/70/13",
        value: 255.45,
        inStock: true,
      },
      {
        id: 2,
        name: "Pneu 175/70/13",
        value: 255.45,
      },
    ],
  },
  {
    group: Groups.aro14,
    products: [
      {
        id: 3,
        name: "Pneu 175/65/14",
        value: 258.5,
      },
      {
        id: 4,
        name: "Pneu 175/70/14",
        value: 258.5,
      },
      {
        id: 5,
        name: "Pneu 175/70/14 ATR",
        value: 267.15,
      },
      {
        id: 6,
        name: "Pneu 185/60/14",
        value: 258.5,
      },
      {
        id: 7,
        name: "Pneu 185/65/14",
        value: 258.5,
      },
      {
        id: 8,
        name: "Pneu 185/70/14",
        value: 273.65,
      },
      {
        id: 9,
        name: "Pneu 185/ R",
        value: 341.25,
      },
    ],
  },
  {
    group: Groups.aro15,
    products: [
      {
        id: 10,
        name: "Pneu 185/60/15",
        value: 258.5,
      },
      {
        id: 11,
        name: "Pneu 185/65/15",
        value: 258.5,
      },
      {
        id: 12,
        name: "Pneu 195/50/15",
        value: 257.15,
      },
      {
        id: 13,
        name: "Pneu 195/55/15",
        value: 258.5,
      },
      {
        id: 14,
        name: "Pneu 195/60/15",
        value: 258.5,
      },
      {
        id: 15,
        name: "Pneu 195/65/15",
        value: 280.15,
      },
      {
        id: 16,
        name: "Pneu 205/60/15",
        value: 265.85,
      },
      {
        id: 17,
        name: "Pneu 205/60/15 ATR",
        value: 265.85,
      },
      {
        id: 18,
        name: "Pneu 205/65/15",
        value: 290.5,
      },
      {
        id: 19,
        name: "Pneu 205/70/15",
        value: 326.95,
      },
      {
        id: 20,
        name: "Pneu 205/70/15 C",
        value: 391.5,
      },
      {
        id: 21,
        name: "Pneu 235/75/15",
        value: 572.5,
      },
    ],
  },
  {
    group: Groups.aro16,
    products: [
      {
        id: 22,
        name: "Pneu 205/55/16",
        value: 258.5,
      },
      {
        id: 23,
        name: "Pneu 205/60/16",
        value: 275.65,
      },
      {
        id: 24,
        name: "Pneu 205/75/16",
        value: 398.45,
      },
      {
        id: 25,
        name: "Pneu 215/65/16",
        value: 281.45,
      },
      {
        id: 26,
        name: "Pneu 235/60/16",
        value: 320.45,
      },
      {
        id: 27,
        name: "Pneu 235/70/16",
        value: 493.35,
      },
      {
        id: 28,
        name: "Pneu 265/70/16",
        value: 498.5,
      },
    ],
  },
  {
    group: Groups.aro17,
    products: [
      {
        id: 29,
        name: "Pneu 215/45/17",
        value: 336.5,
      },
      {
        id: 30,
        name: "Pneu 225/45/17",
        value: 345.15,
      },
      {
        id: 31,
        name: "Pneu 265/65/17",
        value: 511.55,
      },
    ],
  },
];
