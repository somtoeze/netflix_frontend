# Stage 1: Build the React app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build


# Stage 2: Serve the app (lightweight)
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy only the build folder from builder stage
COPY --from=builder /app/build ./build

# Expose port
EXPOSE 3000

# Run the app
CMD ["serve", "-s", "build", "-l", "3000"]
