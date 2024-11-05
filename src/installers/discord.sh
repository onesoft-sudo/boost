#!/bin/sh

discord_install_url="https://discord.com/api/download?platform=linux&format=deb"

discord_install_install_apt() {
    wget -O /tmp/discord.deb "$discord_install_url"
    apt-get install -y /tmp/discord.deb
    rm -f /tmp/discord.deb
}

if [ -x "$(command -v apt-get)" ]; then
    discord_install_install_apt
else
    # shellcheck disable=SC2154
    echo "$me: No supported package manager found to install: discord" >&2
    exit 1
fi