# Dashboard Maker Bakcend
O Dashboard Maker Bakcend é um serviço Backend que alimenta o Dashboard Maker (link no tópico 1). Por questões de organização e escalabilidade, o projeto Dashboard Maker possui dois backends: um responsável por lidar com os dados do cliente (no caso, de dados de restaurantes) e outro responsável por lidar com os dados do Dashboard Maker (como os dashboards criados)

## 1- Sobre
Site: https://restaurant-manager-frontend-k6uu.vercel.app/
Outros repositórios do projeto:
- https://github.com/GuiOSousa/RestaurantManagerFrontend
- https://github.com/GuiOSousa/RestaurantManagerBackend

## 2- Tecnologias Utilizadas
- Typescript
- MongoDB

## 3- Estrutura Principal
A estrutura do projeto segue o padrão Repository, com uma camada adicional de Environment

### 3.1- Controllers
Responsáveis pelas requisições HTTP.

### 3.2- Services
Responsáveis pela aplicação das regras de negócio.

### 3.3 - Repositories
Responsáveis pela comunicação com o banco de dados.

### 3.4- Environment
Facade que garante o acesso a todas as classes do padrão Repository em qualquer ponto do código.