export type Film = {
  filmName: string;
  releaseDate: ReleaseDate;
  addDate: Date;
  watched: boolean;
  released: boolean;
};
export type ReleaseDate = {
  day: number;
  month: number;
  year: number;
  quarter: Quarter;
};
export enum Quarter {
  Q1,
  Q2,
  Q3,
  Q4,
}
