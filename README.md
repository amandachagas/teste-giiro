# GIIRO - Seleção para desenvolvedor

Este projeto é um protótipo de aplicação web que usa mapas através da biblioteca [Leaflet](http://leafletjs.com/). O protótipo está incompleto; cabe a você implementar algumas funcionalidades que ficaram faltando.

## Primeiros passos

Para rodar a aplicação básica será necessário conhecimento, ou familiaridade, com comandos básicos do `GIT` e `bash`.

Utilizamos o arquivo `Makefile` para simplificar um conjunto de comandos para ajudá-lo na interação o docker, até então não será necessário alterá-lo, mas fique a vontade a futucar o quanto quiser.

Clone este projeto para sua máquina usando o Git.

O projeto foi testado com o Python 3.5.3. As bibliotecas necessárias para rodar a aplicação estão especificadas no arquivo `requirements.txt`, por utilizarmos o `docker` você não precisa instalar o ambiente python na sua máquina.

Você deverá ter instalado em sua máquina tanto o **docker-ce** quanto o **docker-compose** além do **nodejs** e **npm**. Caso não tenha instalado siga os seguintes tutoriais:
- [Tutorial de instalação Docker CE em sistemas Linux, Windows e MacOS](https://docs.docker.com/install/#supported-platforms)
- [Tutorial de instalação Docker Compose em sistemas Linux, Windows e MacOS](https://docs.docker.com/compose/install/)
- [Download Nodejs e npm](https://nodejs.org/en/download/)

Primeiramente você deverá instalar as dependências:
``` bash
make install
```

(Se não funcionar, tente `sudo make install`)

Em seguida você construirá o container Docker utilizando o comando (este comando pode demorar, depende principalmente da velocidade da sua internet):
``` bash
sudo make build
```

Por fim, se tudo ocorrer corretamente, inicie a aplicação com o comando:
``` bash
sudo make run
```

Utiliza um dos 2 métodos, descritos abaixo, para aplicar as migrações necessárias para rodar a aplicação básica.

Método 1:

Utilize o seguinte comando para acessar o container em tempo de execução e realizar as migrações do banco de dados necessárias:

```bash
sudo make access-container
```

Dentro do container, aplique as migrações:

```bash
python giiro/manage.py migrate
exit #sair do terminal bash do container
```

Método 2:

```bash
docker exec -it testegiiro_web_1 python giiro/manage.py migrate
```

Para acessar a aplicação, abra o navegador no endereço <http://localhost:8000/>

## Funcionalidades

- A aplicação exibe um mapa e permite ao usuário inserir (ao clicar no mapa) e mover marcadores (arrastando o marcador), que representam pontos de interesse.
- Para remover um marcador, clique sobre o mesmo e então um pop-up será aberto com um botão para apagar o marcador.

**obs1**: inicialmente não há marcador cadastrado no mapa.
**obs2**: os marcadores não são persistidos na base de dados, ou seja, após recarregar a página os mesmos sumirão.

## Tarefa

As funcionalidades a seguir são muito importantes, mas não foram implementadas ainda. Sua tarefa é implementá-las.

- O mapa deve mostrar por padrão a cidade de Salvador, em uma escala que permita ver as principais vias da cidade.
- Se o usuário mover um marcador e atualizar a página, o marcador deve ficar na última posição para o qual foi movido.
- Se o usuário remover um marcador, ele deverá ser removido do mapa e do disco.
- Os marcadores devem ser persistidos em disco, de forma que a sua posição não se perca quando o servidor web é reinicializado.
    - Se for usar um banco de dados relacional, use o SQLite.
- O mapa deve ocupar todo o espaço disponível no navegador (altura e largura).


## Orientações

- Não divulgue seu código-fonte para ninguém além de mim.
- Se usar algum trecho de código da web (ex.: StackOverflow), cite a fonte nos comentários do seu programa.
- Programe como se você estivesse trabalhando em um projeto real, atentando para a qualidade (dica - os arquivos com as configurações de inspeção de qualidade já estão inclusos na aplicação. Para os arquivos .py utilize o padrão **pep8**).
- Não é permitido utilizar outras versões do Django se não as especificadas no arquivo `requirements.txt`. Também não é permitido utilizar outras versões do Leaflet se não a **0.7.7**.
- Caso utilize alguma outra ferramenta que precise de instalação/configuração extra, modifique o arquivo `Makefile`, porém os comandos mencionados anteriormente devem ser persistidos.


## Bônus

- Salvar a última posição e zoom que o usuário deixou antes de fechar a página, dando a impressão que ele continuou o uso da ferramenta mesmo após ter fechado a aplicação. 

## Referências e materiais de apoio

- <https://docs.djangoproject.com/en/2.0/>
- <https://leafletjs.com/reference-0.7.7.html>
- <https://leafletjs.com/examples.html>

## Entrega

Envie seu código de uma das seguintes duas formas:

- Preferencialmente, crie um repositório privado no GitLab ou no BitBucket e compartilhe comigo (usuário: `rodrigorgs`).
- Se não for possível, envie o código em um arquivo .zip para o meu e-mail.

Envie um e-mail para mim informando os dias e horários preferenciais para uma entrevista.

## Prazo

Você tem até o dia 4 de julho para enviar o seu programa.
