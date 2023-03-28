export type Item = {
  form: 'circle' | 'square';
  color: 'red' | 'green' | 'blue' | 'yellow';
  dark: boolean;
}

export type Settings = {
  circle: boolean;
  square: boolean;
  red: boolean;
  green: boolean;
  blue: boolean;
  yellow: boolean;
  dark: boolean;
  light: boolean;
  columns: number;
}

export type FilterPayload = {
  parameter: FilterParameter;
  value: boolean;
}

export type FilterParameter = 'circle' | 'square' | 'red' | 'green' | 'blue' | 'yellow' | 'dark' | 'light';
