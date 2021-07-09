export type Film = {
  filmName: string;
  releaseDate: ReleaseDate;
  addDate: number;
  watched: boolean;
  released: boolean;
};
export type ReleaseDate = {
  day?: number;
  month?: number;
  year?: number;
  quarter?: Quarter;
};
export enum Quarter {
  Q1 = 1,
  Q2 = 2,
  Q3 = 3,
  Q4 = 4,
}
