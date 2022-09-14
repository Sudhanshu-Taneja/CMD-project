# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build
# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . /app/
# Install all the dependencies
RUN npm cache clean --force
RUN npm install -g npm@latest
RUN npm add @angular/fire

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/cmd_fe /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
#fire for nginx
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]
