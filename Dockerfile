FROM node:lts-alpine3.15

ARG USER=node
ARG USER_UID=$USER_UID
ARG USER_GID=$USER_GID

### SETUP CURRENT USER ###  
RUN chpasswd ${USER}
USER ${USER_UID}:${USER_GID}
WORKDIR /home/node

