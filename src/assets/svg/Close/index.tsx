import React from 'react';

import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const Close = (): React.JSX.Element => {
  const { colors } = useTheme();

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_6082_681)">
        <Path
          d="M18 6L6 18"
          stroke={colors.primaryDark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6 6L18 18"
          stroke={colors.primaryDark}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_6082_681">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Close;
