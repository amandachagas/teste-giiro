SHELL := /bin/bash

MKFILE_PATH := $(abspath $(MAKEFILE_LIST))
VENV_DIR := $(dir $(MKFILE_PATH)).env

install:
	$(MAKE) check-venv
	$(MAKE) install-requirements
	$(MAKE) install-npm
	$(MAKE) install-bower-dependencies

run:
	$(MAKE) start-django-app

check-venv:
	@echo "Verificando existência de ambiente virtual:"

	@if [ ! -d $(VENV_DIR) ]; then \
		echo "Ambiente virtual não encontrado! Criando ambiente virtual:"; \
		$(MAKE) create-venv; \
	fi

create-venv:
	@echo "Criando ambiente virtual:"
	virtualenv -p python3 .env

install-requirements:
	@echo "Instalando requisitos:"
	source .env/bin/activate && pip install --no-cache-dir -r requirements.txt

install-npm:
	@echo "Instalando modulos Node:"
	npm install

install-bower-dependencies:
	@echo "Instalando dependências Bower:"
	cd giiro/mapa/static && bower install --allow-root

start-django-app:
	@echo "Iniciando aplicação Django:"
	source .env/bin/activate && python giiro/manage.py runserver
