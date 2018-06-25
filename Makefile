SHELL := /bin/bash

# Docker-compose
BASE_FILE=docker-compose.yml

install:
	$(MAKE) install-bower
	$(MAKE) install-bower-dependencies

build:
	docker-compose -f $(BASE_FILE) build;

run:
	docker-compose -f $(BASE_FILE) up -d;

access-container:
	docker exec -it testegiiro_web_1 bash;	

install-bower:
	@echo "Instalando modulos Node:"
	npm install -g bower

install-bower-dependencies:
	@echo "Instalando dependências Bower:"
	cd giiro/mapa/static && bower install --allow-root
