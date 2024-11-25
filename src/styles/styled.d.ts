import type light from './theme/light';

type Theme = typeof light;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
