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
};
