<p align="center">
  <img src="./.github/logo.png" alt="poster">
</p>

# Automação de testes Web com cypress em JS (log in no BugBank)

## Preparação 📍
1. Primeiramente, clone este projeto com opção HTTPS ou SSH.
2. O projeto foi desenvolvido em cima da versão 22 do Node.js, logo, certifique-se de estar com esta versão em seu SO ou instale-a pelo diretório 'node' (caso utilize Windows). Para linux, consulte o respectivo procedimento de acordo com a distribuição utilizada.
3. Como gerenciador de pacotes, utilizei o yarn, então após a instalação do Node.js 22, execute seu CMD como Admin e rode o comando: _corepack enable_ 
 (Isso o ativará em seu SO, caso solicite confirmação, aceite com a opção correspondente).

## Configuração 🏁
4. Com o diretório do projeto aberto no CMD, execute: _yarn install_ (para baixar a node_modules) 

 E depois: _yarn cypress open_ (para configurar o cypress pela 1º vez), feche a janela que se abrirá depois de carregada.

## Execução ⚡
5. Confira a massa de teste que deseja ser utilizada (por padrão, está definido dados usados pela automação no projeto 'teste2-qa'), no arquivo fixtures/users.json 

   Para executar de forma assistida: _yarn cy:debug:digite-chrome-ou-firefox_
   
   Para executar em modo headless: _yarn cy:run:digite-chrome-ou-firefox_

OBS: No diretório screenshots/login.cy.js/resultado haverá evidências de execução. Toda a codificação do projeto foi comentada para fácil compreensão e documentação (exceto arquivos gerados automaticamente). 

## Extra ➕
6. O projeto também foi desenvolvido para executar os testes via Docker (com Electron), para isso:

* Confira se o Docker foi instalado e se está em execução
* Abra o prompt neste diretório e rode:
   - _docker build -t front-end_ .
* Após concluir o passo 2, execute este comando:
   - _docker run front-end_ .
* Os testes serão iniciados em headless no contêiner criado.


Enjoy it!