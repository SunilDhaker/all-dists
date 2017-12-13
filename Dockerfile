FROM node:boron

MAINTAINER Sunil Dhaker <sunil@fretron.com>

COPY ./ /app/

#
RUN cd /app && npm install

# RUN npm install -g @angular/cli
# RUN cd /app/frontend && npm install
# RUN ng build --prod --aot --base-href=tracknet
# COPY /app/frontend/dist /app/public/tracknet
# RUN rm -rf /app/frontend

EXPOSE 5053



WORKDIR "/app"
CMD [ "sh"  , "-c" , "node /app/index.js" ]
