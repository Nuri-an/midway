import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const ChevronLeft = (): React.JSX.Element => {
  const { colors } = useTheme();

  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M7 1L1 7L7 13"
        stroke={colors.primaryDark}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ChevronLeft;
