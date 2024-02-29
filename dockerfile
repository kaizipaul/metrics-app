# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port that the app will run on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
