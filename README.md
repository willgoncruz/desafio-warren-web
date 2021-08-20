# Desafio Warren Web

Link da aplicação online: https://willgoncruz.github.io/desafio-warren-web/

## Dependências do projeto
- Node >= v13.14.0
- Npm >= 6.14.4

## Primeira configuração
Execute o comando abaixo para configurar o ambiente de desenvolvimento localmente.

```make setup```

## Ambiente de desenvolvimeto
Execute o comando abaixo para subir o ambiente de desenvolvimento local.

```make run```

## Testes unitários
Execute o comando abaixo para visualizar os testes unitários.

```make test```

## Testes de tela
Foi utilizada a ferramenta `cypress` para criação dos testes de tela.
Para executá-los, aplique o comando abaixo.

```make screen-test```

## Deploy
O deploy está configurado automaticamente como uma Github Action.
Para mais informações, procure o arquivo `.github/workflows/build-deploy.yml`, na secção `jobs -> deploy`.