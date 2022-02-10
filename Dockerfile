FROM node:lts-alpine3.15

ARG USER=node
ARG USER_UID=$USER_UID
ARG USER_GID=$USER_GID

### NODE ###
RUN npm install -g npm
RUN npm update -g
RUN npm i -g create-react-app

### SETUP CURRENT USER ###  
RUN chpasswd ${USER}
USER ${USER_UID}:${USER_GID}
WORKDIR /home/node

# set app serving to permissive / assigned
ENV HOST=0.0.0.0

CMD yarn start
