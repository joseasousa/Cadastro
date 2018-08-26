![](https://dgivdslhqe3qo.cloudfront.net/careers/photos/23661/thumb_photo_1484531612.png)

# Objetivo
O objetivo deste desafio é criar um formulário de cadastro de usuário e uma listagem.

## Server

```sh
git clone https://github.com/joseasousa/Cadastro.git
cd readable/server
yarn
adonis migrate:run
adonis serve --dev
```

## App
```sh
git clone https://github.com/joseasousa/Cadastro.git
cd readable/client
yarn
yarn start
```

# Requisitos

## Geral
- A aplicação deve ser feita usando React, seguindo o layout das imagens anexadas
- Deve ser criado testes para todos componentes que você achar necessário (biblioteca fica a critério)
- Todos os dados da app devem ser salvos usando Redux

## Tela 1: Listagem de usuários - [Imagem 1](#image1)
- Deve ter uma mensagem quando não se tem nenhum usuário cadastrado ainda.
- A listagem deve ter ordenação, e a coluna `Created at` vem como padrão e mostrando os mais recentes primeiro.
- A data deve vir formatada no padrão Jan 1, 2018, 10:40
- Ao lado do nome do usuários, deve ser apresentada a imagem de perfil. Caso não tenha, mostra as duas iniciais do nome.

## Tela 2: Cadastro - Etapa 1 - [Imagem 2](#image2)
- Validação:
  - Todos os campos devem ter uma validação no front-end (biblioteca para trabalhar com formulários fica a critério)
  - Assim que tirar o foco do campo, deve rodar a validação e mostrar uma mensagem abaixo avisando o problema.
  - O campo e-mail deve ser validadado, name@domain por exemplo não deve passar
  - O campo senha e confirmar senha deve ser iguais
- Botão `Next step` vem desabilitado por padrão e só é habilitado quando todos os campos estiverem ok
- Ao clicar em `Next step` já deve salvar as informações (localStorage) para que não se perca nas outras etapas.

## Tela 3: Cadastro - Etapa 2 - [Imagem 3](#image3)
- Ao clicar no circulo, deve-se abrir uma caixa para selecionar imagem
- Imagem deve ser salva em Base64 e deve aparecer no circulo como background assim que carregada.
- Assim que imagem for carregado no circulo, o label `Click to upload your profile image` passa a ser `Click to Edit image`
- Botão `Back` deve voltar para etapa anterior com os dados já preenchidos
- Ao clicar em `Finish` deve redirecionar pra listagem de usuários


# Bonus
- Atenção para o layout
- Usar (quando necessário), features das novas versões do JS

# O que iremos avaliar
- Qualidade do código (semântico, legibilidade, modular, etc)
- Stack utilizada, nós usamos: React, Redux, Webpack (CSS fica a seu critério)
- Padrão do repositório criado: Readme, comandos de inicialização, build, testes.


------

## <a name="image1"></a>Imagem 1
<img src="https://cl.ly/3b0z142f123q/Users.png" width="800" />
<br><br><br>

## <a name="image2"></a>Imagem 2
<img src="https://cl.ly/0n1c1q1H1126/Register1.png" width="800" />
<br><br><br>
                                                                                                                            
## <a name="image3"></a>Imagem 3
<img src="https://cl.ly/2y3h1O0A0Y33/Register2.png" width="800" />
