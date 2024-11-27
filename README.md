<div align="center">
  
https://github.com/user-attachments/assets/5639aa18-8c21-4a0b-b977-85af3493a91f
  
</div>


[Video de demostração em src/assets/pix_com_cartao.mp4](src/assets/pix_com_cartao.mp4)


# Transferência de pix com cartão

O aplicativo consiste no desenvolvimento de telas e chamadas a API fictícias simulando o fluxo de transferência Pix utilizando o cartão de crédito como forma de pagamento.

### Como funciona?

Basta acessar o app e simular uma transferência selecionando umas das três formas de pagamento disponíveis: saldo da conta; cartão Visa; cartão Master.

## Stacks

O aplicativo foi construído em react native cli.

- Possui como framework de estilos Styled-component.
- Para as animações de loading, foram utilizados Lottie Files, renderizados via lottie-react-native
- Para conexão com a api, foi utilizada a lib Axios
- Para cacheamento das requisições, foi utilizado o React Query e Mutation
- Para criação dos ícones vetoriais, foi utilizado a lib react-native-svg
- Para as animações gestuais, RN Gesture Handler

## Qualidade do código
Pensando na escalabilidade, foi utilizados as abordagens abaixo para a qualidade e padronização do código, commits e automações ligadas a fluxos git.

- Para padronização de código, ESLint e Prettier
- Para padronização de commits, Commitlint e Commitizen
- Para automações ligadas a fluxos git e acionação de verificação dos lints, Husky 
  - Ao realizar um commit, é verificado as regras de ESLint nos arquivos e o commit é feito por uma interface no terminal - caso feito manualmente, é verificado sua estrutura.
  - Ao realizar um push, são rodados os testes da aplicação, só permitindo o push se todos os testes passarem.
- Foi feito o setup para os testes e um teste checando o render do arquivo App.tsx, como exemplo.


## Ambiente
#### Maquinas Mac
- É necessário cocoapods 1.15.0 (suporte `visionos`) ou superior - por estar utilizando a versão mais recente das bibliotecas;
- É necessário XCode atualizado. Recomendo versão 15.4 ou superior, meu ambiente local - pelo mesmo motivo acima.

#### Maquinas windows ou Linux
- [Configuração padrão](https://reactnative.dev/docs/set-up-your-environment?os=windows&platform=android) de desenvolvimento android

## Como executar?

- Rode `yarn install` para instalar as depêndencias
- Rode `yarn start`
- Para android, rode `yarn android`
- Para ios, rode `yarn install:ios` e `yarn ios`

