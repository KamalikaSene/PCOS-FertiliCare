# Define base image
FROM node:latest

# Define work directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 4000

# Run the app
CMD ["nest", "start"]