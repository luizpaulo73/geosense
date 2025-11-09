#  🌎 GeoSense - Front-End

## Integrantes

- **Nome:** Enzo G. Marsola  
  **RM:** 556310 - 2TDSPK

- **Nome:** Luiz Paulo F. Fernandes  
  **RM:** 555497 - 2TDSPF
  
- **Nome:** Rafael de Souza Pinto  
  **RM:** 555130 - 2TDSPY

### Link do Design: [Figma](https://www.figma.com/design/bUCpf1dUyL4ZcRE0DPgTPP/Geosense?node-id=0-1&t=C2KvD3WNGqhd849p-1)

## Link do APK [Link](https://expo.dev/accounts/luizpaulo73/projects/geosense/builds/facac853-09e5-4108-98c7-5f07c4c2215b)

## QR Code (apk)

![APK](./data/apkLink.png)

## Descrição do Projeto

#### &nbsp;&nbsp;&nbsp;&nbsp;O GeoSense é um aplicativo mobile desenvolvido com Expo e React Native para auxiliar na gestão inteligente de pátios de motos. A solução oferece registro e localização em tempo real, alocação automática com base em visão computacional e monitoramento completo via mapa interativo, tudo de forma simples e intuitiva. Voltado para mecânicos e gestores, o app permite identificar problemas nas motos, encontrar vagas automaticamente e manter total visibilidade do pátio — direto da palma da mão.

## Como Rodar o Projeto Localmente

## ⚙️ Pré-requisitos

- Node.js
- Expo CLI
- Emulador Android/iOS ou aplicativo **Expo Go**

## 🚀 Instalação -> API

**Se preferir testar sem a API, selecione 'Login - API offline' para entrar no sistema.**

1. Clone o repositório:
   
   ```bash
   git clone https://github.com/MarsoL4/geosense-api.git
   ```

2. Acesse o diretório:

   ```bash
   cd geosense-api
   cd GeoSense-API
   ```

4. Adicione as credenciais da Oracle no appsettings.json:
   
   ```json
   {
      "Logging": {
         "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
         }
      },
      "AllowedHosts": "*",
      "ConnectionStrings": {
         "Oracle": "Data Source=oracle.fiap.com.br:1521/ORCL;User ID=rmxxxxx;Password=xxxxx;"
      }
   }
   ```

5. Inicie o projeto:
   
   ```bash
   dotnet run
   ```

## 🚀 Instalação -> Aplicativo

1. Clone o repositório:
   
   ```bash
   git clone https://github.com/luizpaulo73/geosense.git
   ```

2. Acesse o diretório:

   ```bash
   cd geosense
   ```

4. Instale as dependências:
   
   ```bash
   npm install
   ```

5. Inicie o projeto:
   
   ```bash
   npm start
   ```

6. Inicie a API mock em um terminal separado

   ```bash
   npm run api
   ```

7.  Escaneie o QR Code com o app Expo Go no celular ou rode no emulador.

## 📦 Tecnologias Utilizadas

- React Native

- Expo

- TypeScript
