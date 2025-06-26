#Step 1 FROM (Every docker starts with From)

FROM node:18

# Goes to the app directory (Basically telling docker that run it from /app)
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything into docker container
COPY . .

# Set port enviroment variable
ENV PORT=5173
# Expose port to access
EXPOSE 5173

# Run the app
CMD ["npm", "run", "dev", "--", "--host"]