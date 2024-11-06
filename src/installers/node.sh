#!/bin/sh

node_install_install_apt() {
    curl -sL https://deb.nodesource.com/setup_22.x | bash -
    apt-get install -y nodejs
}

node_install_install_yum() {
    curl -sL https://rpm.nodesource.com/setup_22.x | bash -
    yum install -y nodejs
}

node_install_install_dnf() {
    curl -sL https://rpm.nodesource.com/setup_22.x | bash -
    dnf install -y nodejs
}

node_install_install_pacman() {
    pacman -S --noconfirm nodejs npm
}

if command -v apt-get > /dev/null; then
    node_install_install_apt
elif command -v yum > /dev/null; then
    node_install_install_yum
elif command -v dnf > /dev/null; then
    node_install_install_dnf
elif command -v pacman > /dev/null
then
    node_install_install_pacman
else
    # shellcheck disable=SC2154
    echo "$me: No supported package manager found to install: nodejs" >&2
    exit 1
fi