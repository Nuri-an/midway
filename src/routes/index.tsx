import React, { useMemo, type ReactElement } from 'react';

import { Loading } from '@Loading/presentation';
import { Pix } from '@Pix/presentation';
import { createStackNavigator } from '@react-navigation/stack';

import { ChevronLeft } from '~/assets/svg';
import { ButtonShadow } from '~/components';
import { ITransferParamList } from '~/types';

import * as S from './styles';

const Stack = createStackNavigator<ITransferParamList>();

const Routes = (): ReactElement => {
  const Header = useMemo(
    () => (
      <S.Container>
        <ButtonShadow>
          <ChevronLeft />
        </ButtonShadow>
      </S.Container>
    ),
    [],
  );

  return (
    <Stack.Navigator screenOptions={{ header: () => Header }}>
      <Stack.Screen name="Pix" component={Pix} />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Routes;
