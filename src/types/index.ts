export interface PlantList {
  id: number;
  imgSrc?: string;
  name: string;
  detailName: string;
  period: number[];
  info: {
    native: string;
    light: string;
    temp: number[];
    humidity: number[];
    water: number;
  };
}
