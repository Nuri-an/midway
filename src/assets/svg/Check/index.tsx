import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const Check = (): React.JSX.Element => {
  const { colors } = useTheme();

  return (
    <Svg width="22" height="17" viewBox="0 0 22 17" fill="none">
      <Path
        d="M3 8.33333L8.33333 13.6667L19 3"
        stroke={colors.white}
        strokeWidth="5.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Check;
