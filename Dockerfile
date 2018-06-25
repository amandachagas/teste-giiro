FROM python:3.5.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apt-get update -y
RUN apt-get install -y libgeos-c1
RUN apt-get update -y --fix-missing
RUN apt-get install -y libproj-dev libfreexl-dev libgdal-dev gdal-bin

COPY requirements.txt /usr/src/app/
RUN pip install -r requirements.txt

COPY ./giiro /usr/src/app/giiro
