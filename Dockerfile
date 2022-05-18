FROM        --platform=$TARGETOS/$TARGETARCH node:17-bullseye-slim

LABEL       author="FokusDotId" maintainer="40955113+FokusDotId@users.noreply.github.com"

RUN         apt update \
            && apt -y install ffmpeg imagemagick iproute2 git sqlite3 libsqlite3-dev python3 python3-dev ca-certificates dnsutils tzdata zip tar curl build-essential libtool \
            gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
            libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
            libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
            libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
            ca-certificates fonts-liberation libnss3 lsb-release xdg-utils wget neofetch sudo tesseract-ocr chromium touch \
	        && curl -s https://install.speedtest.net/app/cli/install.deb.sh | bash && apt -y install speedtest \
	        && speedtest --accept-license \
            && npm -g install npm@latest \
            && useradd -m -d /home/container container


USER        container
ENV         USER=container HOME=/home/container
WORKDIR     /home/container

COPY        ./entrypoint.sh /entrypoint.sh

RUN         npm install -g nodemon

COPY        package.json .

RUN	     npm install

COPY        ./entrypoint.sh /entrypoint.sh

CMD         [ "/bin/bash", "/entrypoint.sh" ]

COPY        . .

CMD         nodemon -x "node index.js || touch main.js" -e  "js, html, sh, py"
