import React, { useCallback, useMemo, type ReactElement } from 'react';

import { Platform } from 'react-native';

import { Loading } from '@Loading/presentation';
import { Pix } from '@Pix/presentation';
import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationProp,
} from '@react-navigation/stack';
import { Successful } from '@Successful/presentation';

import { ChevronLeft, Close } from '~/assets/svg';
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

  const HeaderRight = useCallback((props: Partial<StackHeaderProps>) => {
    return (
      <S.Container>
        <ButtonShadow onPress={() => props?.navigation?.navigate('Pix')}>
          <Close />
        </ButtonShadow>
      </S.Container>
    );
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerLeft: () => <></>,
        headerShadowVisible: false,
        presentation: 'card',
      }}
    >
      <Stack.Screen
        name="Pix"
        component={Pix}
        options={{
          headerLeft: () => Header,
        }}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{
          headerShown: false,
          presentation: Platform.OS === 'ios' ? 'transparentModal' : 'modal',
        }}
      />
      <Stack.Screen
        name="Successful"
        component={Successful}
        options={({
          navigation,
        }: {
          navigation: StackNavigationProp<ITransferParamList, 'Successful'>;
        }) => ({
          headerRight: () => HeaderRight({ navigation }),
          headerRightContainerStyle: { paddingRight: 16 },
        })}
      />
    </Stack.Navigator>
  );
};
export default Routes;
