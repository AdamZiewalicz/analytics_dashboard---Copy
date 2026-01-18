FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json first (allows caching)
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy the rest of the source code
COPY . .

# Start the development server
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
