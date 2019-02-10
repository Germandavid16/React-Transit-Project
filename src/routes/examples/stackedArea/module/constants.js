// @flow weak
import { shuffle } from 'd3-array';
import { color } from 'd3-color';

export const EXAMPLE_STORE_KEY = 'stacked-area';

export const VIEW = [500, 400];        // ViewBox: Width, Height
export const TRBL = [30, 30, 10, 40];  // Margins: Top, Right, Bottom, Left

export const COLORS = shuffle([
  '#12291F',
  '#3C564B',
  '#1E3129',
  '#091F16',
  '#02130C',
  '#121E26',
  '#3A4751',
  '#1E272E',
  '#0A151D',
  '#030C12',
  '#253517',
  '#5D704E',
  '#324027',
  '#19280C',
  '#0D1903',
]).map((d) => color(d).brighter());
