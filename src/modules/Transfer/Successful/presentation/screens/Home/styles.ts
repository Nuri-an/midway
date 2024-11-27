import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
})``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 24px;
  line-height: 28px;
  width: 70%;
`;

export const Content = styled.View`
  row-gap: 16px;
  align-items: center;
`;

export const IconContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px;
  border-radius: 200px;
  align-items: center;
  justify-content: center;
`;

export const IconBorder = styled.View`
  border-width: 5.33px;
  border-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 200px;
  height: 64px;
  width: 64px;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.MontserratMedium};
  font-size: 16px;
  line-height: 20px;
`;

export const RecipientUser = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ContentInfo = styled.View`
  row-gap: 8px;
  align-items: center;
`;

export const TextInfo = styled.Text`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.MontserratBold};
  font-size: 20px;
  line-height: 28px;
`;
