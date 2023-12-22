FROM node:alpine

# set the working directory inside the container
WORKDIR /app

# copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

RUN yarn install

# copy all files from the current directory to the container
COPY . .

# expose the necessary port
EXPOSE 3000

# command to start your app
CMD ["yarn", "dev"]
