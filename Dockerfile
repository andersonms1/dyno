FROM node:11 as react-build

# # RUN yarn
# # RUN npm install react-router-dom
# # RUN npm install axios
# CMD ["npm", "start"]


# set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

WORKDIR /app
COPY . ./


# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install 
RUN npm install axios
RUN npm install react-router-dom
RUN npm install react-scripts -g 

# start app
CMD ["npm", "start"]

