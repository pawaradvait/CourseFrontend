# Stage 1: Build the Angular app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

# COPY --from=build /app/dist/<your-angular-project-name> /usr/share/nginx/html

# Optional: If you have a custom Nginx configuration, include it here
# COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/course-frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
