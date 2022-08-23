FROM node:14-alpine
WORKDIR /tuanm/api/blog
COPY . ./
ENV PORT=6969
EXPOSE ${PORT}
ENTRYPOINT ["npm", "start"]