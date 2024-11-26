import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const Close = (): React.JSX.Element => {
  const { colors } = useTheme();

  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Path
        d="M1 1L13 13"
        stroke={colors.primaryDark}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Close;
