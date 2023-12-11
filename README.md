# react-sparkly-text

## Docker setup

1. Run this command to build the image on your local machine and start the container. You only need to run this command the first time, and whenever you make changes to docker-compose.yml.

`docker-compose up --build --no-recreate -d`

<br />

2. From the second time, we can use

`docker-compose up -d`

<br />

3. Now our container is up and you should be able to test it using the following command.

`docker-compose ps`

<br />

4. Just to clarify, we have a running container, but not the installed or running react app. For that, we need to log into the container and then execute the commands.

`docker exec -it vite_docker sh`

<br />

5. We have entered the container and now need to run the commands to install the Node packages and start the app.

`yarn install && yarn dev`
