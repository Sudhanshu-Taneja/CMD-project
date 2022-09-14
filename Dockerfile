# Stage 1: Compile and Build angular codebase
 
# Use official node image as the base image
FROM node:latest as build
 
# Set the working directory
WORKDIR /var/lib/jenkins/workspace/CMDPipeline/dist
 
# Add the source code to app
COPY ./ /root/cmd_project/cmd-project/src/app
# Install all the dependencies
RUN npm install
RUN npm add @angular/fire
 
# Generate the build of the application
RUN npm run build
RUN npm install -g @angular/cli@13.1.2
 
# Stage 2: Serve app with nginx server
 
# Use official nginx image as the base image
FROM nginx:latest
 
# Copy the build output to replace the default nginx contents.
COPY --from=build /var/lib/jenkins/workspace/CMDPipeline/dist/cmd_fe /usr/share/nginx/html
 
# Expose port 80
EXPOSE 80
