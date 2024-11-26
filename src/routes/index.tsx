import React, { useMemo, type ReactElement } from 'react';

import { Pix } from '@Pix/presentation';
import { createStackNavigator } from '@react-navigation/stack';

import { ChevronLeft } from '~/assets/svg';

import * as S from './styles';

const Stack = createStackNavigator();

const Routes = (): ReactElement => {
  const Header = useMemo(
    () => (
      <S.Container>
        <S.ContainerHeaderLeft>
          <ChevronLeft />
        </S.ContainerHeaderLeft>
      </S.Container>
    ),
    [],
  );

  return (
    <Stack.Navigator screenOptions={{ header: () => Header }}>
      <Stack.Screen name="Pix" component={Pix} />
    </Stack.Navigator>
  );
};
export default Routes;
