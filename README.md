# Nosso mini insta

## O que o usuario pode fazer 

- Fazer login
- Fazer cadastro
- Ver os dados do seu perfil
- Ver postagens de outras pessoas
    - Ver quantidades de curtidas numa postagem
    - Ver os comentarios em uma postagem
- Curtir postagens de outras pessoas
- Consegue comentar em postagens

## O que não será possivel fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem
- curtir um comentário
- Comentar em outros comentários

## Endpoints

### POST - Login

#### Dados enviados
- Username
- Senha

#### Dados retornados
- sucesso / erro
- token

#### Objetivos gerais
- Validar username e a senha
- Buscar o usuario no banco de dados
- Verificar se a senha informada está correta
- Gerar o token de autenticação
- Retornar os dados de usuarios eo token

---

### POST - cadastro

#### Dados enviados
-username
-senha

#### Dados retornados
- sucesso / erro

#### Objetivos gerais
- Validar username e a senha
- Verificar se o username já existe no banco de dados
- Criptografar a senha
- Cadastrar o usuario no banco
- Retornar sucesso ou erro
---

### GET - Perfil

#### Dados enviados
- token ( que terá id ou username)

#### Dados enviados
- URL da foto
- nome
- username
- site
- bio
- email
- telefone
- genero

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Retornar os dados do usuario

---

### PUT - Perfil

#### Dados enviados
- token ( que terá id ou username)
- URL da foto
- nome
- username
- site
- bio
- email
- telefone
- genero
- Senha

#### Dados retornados
- sucesso / erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Exigir ao menos um campo para atualizar
- Criptografar a senha se for informada
- Verificar se o email e username já existe no banco de dados somente se for informado
- Atualizar o registro do usuario no banco de dados
- Retornar sucesso ou erro

---

### GET - Postagens

#### Dados enviados
- Token
- offset

#### Dados retornados
- Postagens [] 
    - Id
    - Texto
    - Foi curtido por mim
    - usuarios
        - URL da foto
        - username
        - se é perfil oficial
     - Fotos [] 
     - Quantidade de curtidas
     - Comentarios [] 
         - Username
         - Texto
    - Data

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Retornar postagens de outras pessoas

---

### POST - Postagens

#### Dados enviados
- Token
- Texto
- Array com fotos

#### Dados retornados
- Sucesso ou erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Exigir que seja informado ao menos uma foto no array
- Cadastrar postagem para o usuario logado
- Cadastro das fotos da postagem
- Retornar sucesso ou erro

---

### POST - Curtir

#### Dados enviados
- Token ( Contém username ou id do usuario)
- id da postagem

#### Dados retornados
- Sucesso ou erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Buscar o cadastro da postagem com id informado
- Verificar se o usuario já curtiu a postagem
- Cadastrar curtida da postagem no banco de dados
- Retornar sucesso ou erro

---

### POST - Comentar

#### Dados enviados
- Token ( Contém username ou id do usuario)
- id da postagem
- Texto

#### Dados retornados
- Sucesso ou erro

#### Objetivos gerais
- Validar o token do usuario
- Buscar o cadastro do usuario com a informação do token
- Validar o texto
- Buscar a postagem pelo id informado
- Cadastrar comentario da postagem
- Retornar sucesso ou erro