type Colors = {
  blue: string;
  red: string;
  green: string;
  yellow: string;
}

type DarkColors = {
  'true': Colors;
  'false': Colors;
}

export const COLORS: DarkColors = {
  'true': {
    'red': '#7B0A0A',
    'green': '#175744',
    'blue': '#291A82',
    'yellow': '#936409',
  },
  'false': {
    'red': '#DB2C2C',
    'green': '#5CB69B',
    'blue': '#5A7DD6',
    'yellow': '#DCC655',
  }
}
