# Use the official Node.js v20.14.0 image as the base image
FROM node:20.14.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Expose the specific port the app runs on
EXPOSE 5173

# Start the Vite application in preview mode
CMD ["npm", "run", "preview", "--", "--port", "5173"]
