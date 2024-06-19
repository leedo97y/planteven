export interface PlantList {
  id: number;
  imgSrc: string;
  name: string;
  detailName: string;
  onDate: number[];
  info: PlantInfoDetail;
}

export interface PlantInfoDetail {
  native: string;
  light: string;
  temp: number[];
  humidity: number[];
  repotting: string[];
  watering: number[];
  fertilizer: "HIGH" | "MEDIUM" | "LOW";
  desc: string[];
}

// climber
// creeper
// tree
// epiphyte
// fern
