#!/bin/sh

code_install_install_apt() {
    apt-get install wget gpg
    wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /tmp/packages.microsoft.gpg
    install -D -o root -g root -m 644 /tmp/packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
    echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | tee /etc/apt/sources.list.d/vscode.list > /dev/null
    rm -f /tmp/packages.microsoft.gpg
    apt install apt-transport-https
    apt update
    apt install code
}

code_install_import_yum() {
    rpm --import https://packages.microsoft.com/keys/microsoft.asc
    printf "%s" "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" | tee /etc/yum.repos.d/vscode.repo > /dev/null
}

code_install_install_yum() {
    import_yum
    yum check-update
    yum install code
}

code_install_install_dnf() {
    import_yum
    dnf check-update
    dnf install code
}

if [ -x "$(command -v apt-get)" ]; then
    code_install_install_apt
elif [ -x "$(command -v yum)" ]; then
    code_install_install_yum
elif [ -x "$(command -v dnf)" ]; then
    code_install_install_dnf
else
    # shellcheck disable=SC2154
    echo "$me: No supported package manager found to install: code" >&2
    exit 1
fi