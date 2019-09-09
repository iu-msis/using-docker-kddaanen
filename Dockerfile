FROM php:7.3.8-apache

LABEL maintainer="Kaitlyn Daanen"

COPY public /srv/public

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
