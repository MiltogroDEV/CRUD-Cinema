# 🎬 Projeto Cinema API

## 📌 Descrição

Este projeto é uma API desenvolvida em **Spring Boot** e **PostgreSQL** para gerenciamento de filmes, salas, clientes, ingressos, sessões, dentre outros. A API permite a criação, edição, remoção e consulta de informações sobre todo o escopo citado.

## 🚀 Tecnologias Utilizadas

-   **Java 17**
-   **Spring Boot** (Spring Web, Spring Data JPA, Spring Security)
-   **PostgreSQL**
-   **Hibernate**
-   **Flyway** (Migração de Banco de Dados)

## 📌 Configuração do Banco de Dados

A API utiliza **PostgreSQL** como banco de dados. Certifique-se de que o PostgreSQL está instalado e configurado.

## 🚀 Como Executar

### 1️⃣ Clonar o Repositório do FronEnd

```bash
git clone https://github.com/MiltogroDEV/CRUD-Cinema/
```

### 2️⃣ Clonar o Repositório do BackEnd
```bash
git clone https://github.com/LairesPereira/cinema-bdii/
```
*Apenas colaboradores como você que está vendo, podem ter acesso a ambos os repositórios.*

### 3️⃣ Configuração do Banco de Dados e finalização
Primeiramente, na sua interface de Banco de Dados crie um banco chamado cinema;
Em **src/main/resources/application.properties altere** os dados :
``` properties
spring.datasource.url=jdbc:postgresql://localhost:5432/nomeDoBanco 
spring.datasource.username=seuUsername  
spring.datasource.password=suaSenha  
```

Após configurar corretamente, rode o arquivo **DemoApplication** em modo **Debug**.

Concluindo que fez todas as etapas corretamente, então no **FronEnd** execute o arquivo **index.html**.
Recomendo ultilizar a extensão *Live Server* do VS Code.

A API do BackEnd estará acessível em **`http://localhost:8080`**.

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
