FROM node:21-slim
RUN npm i -g pnpm
WORKDIR /app/src
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
EXPOSE 8080
CMD [ "pnpm", "start" ]