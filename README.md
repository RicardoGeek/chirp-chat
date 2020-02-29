# chirp-chat

A simple webchat based on websockets over mqtt using vernemq.

When you enter the main page it generates a name and announce your entry to the room.

## Dependencies

Vernemq must me running

To setup vernemq simpy run the following commands

```sh
$> docker pull erlio/docker-vernemq
$> docker run \
    -e "DOCKER_VERNEMQ_ALLOW_ANONYMOUS=on" \
    -e "DOCKER_VERNEMQ_ACCEPT_EULA=yes" \
    -p 8888:8888 \
    -p 1883:1883 \
    -p 4369:4369 \
    -p 8080:8080 \
    -p 8883:8883 \
    --name vernemq -d erlio/docker-vernemq 
```

## Running on production
Simply edit the host line in the custom.js host variable, and put the correct host.