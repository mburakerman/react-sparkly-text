# Use node:alpine as base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all files from the current directory to the container
COPY . .

# Expose the necessary port
EXPOSE 3000

# Command to start your app
CMD ["yarn", "dev"]
