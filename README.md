# GIIRO - Seleção para desenvolvedor

Este projeto é um protótipo de aplicação web que usa mapas através da biblioteca [Leaflet](http://leafletjs.com/). O protótipo está incompleto; cabe a você implementar algumas funcionalidades que ficaram faltando.

## Primeiros passos

Baixe este projeto para sua máquina usando o Git.

O projeto foi testado com o Python 3.5.3. As bibliotecas necessárias para rodar a aplicação estão especificadas no arquivo `requirements.txt`.

Para instalar as dependências necessárias utilize o comando:
```bash
$ make install
```

Para rodar o servidor web com a aplicação, execute o comando:
```bash
$ make run
```

## Funcionalidades

- A aplicação exibe um mapa e permite ao usuário inserir e mover marcadores, que representam pontos de interesse.
- Para remover um marcador, clique sobre o mesmo e então um pop-up deverá ser aberto com um botão "Apagar".
- Se a página for atualizada, a quantidade de marcadores é preservada assim como a sua posição.


## Tarefa

As funcionalidades a seguir são muito importantes, mas não foram implementadas ainda. Sua tarefa é implementá-las.

- O mapa deve mostrar por padrão a cidade de Salvador, em uma escala que permita ver as principais vias da cidade.
- Se o usuário mover um marcador e atualizar a página, o marcador deve ficar na última posição para o qual foi movido.
- Se o usuário remover um marcador, ele deverá ser removido do mapa e do banco.
- Os marcadores devem ser persistidos em disco, de forma que a sua posição não se perca quando o servidor web é reinicializado.
    - Se for usar um banco de dados relacional, use o SQLite.
- O mapa deve ocupar todo o espaço disponível no navegador (altura e largura).


## Orientações

- Não divulgue seu código-fonte para ninguém além de mim.
- Se usar algum trecho de código da web (ex.: StackOverflow), cite a fonte nos comentários do seu programa.
- Programe como se você estivesse trabalhando em um projeto real, atentando para a qualidade (dica - os arquivos com as configurações de inspeção de qualidade já estão inclusos na aplicação. Para os arquivos .py utilize o padrão **pep8**).
- Não é permitido utilizar outras versões do Django se não as especificadas no arquivo `requiremets.txt`. Também não é permitido utilizar outras versões do Leaflet se não a **0.7.7**.
- Caso utilize alguma outra ferramenta que precise de instalação/configuração extra, modifique o arquivo `Makefile`.


## Bônus

- Salvar a útlima posição e zoom que o usuário deixou antes de fechar a página, dando a impressão que ele continuou o uso da ferramenta mesmo após ter fechado a aplicação. 

## Referências e materiais de apoio

- https://docs.djangoproject.com/en/2.0/
- https://leafletjs.com/reference-0.7.7.html
- https://leafletjs.com/examples.html

## Entrega

Envie seu código de uma das seguintes duas formas:

- Preferencialmente, crie um repositório privado no GitLab ou no BitBucket e compartilhe comigo (usuário: `rodrigorgs`).
- Se não for possível, envie o código em um arquivo .zip para o meu e-mail.

Envie um e-mail para mim informando os dias e horários preferenciais para uma entrevista.

## Prazo

Você tem até o dia #### para enviar o seu programa.
