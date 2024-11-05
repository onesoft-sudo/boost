#!/bin/sh

firefox_install_install_apt() {
    if [ ! -e  /etc/apt/keyrings ]; then
        install -d -m 0755 /etc/apt/keyrings
    fi

    wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null
    gpg -n -q --import --import-options import-show /etc/apt/keyrings/packages.mozilla.org.asc | awk '/pub/{getline; gsub(/^ +| +$/,""); if($0 == "35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3") print "\nThe key fingerprint matches ("$0").\n"; else print "\nVerification failed: the fingerprint ("$0") does not match the expected one.\n"}'
    echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null
    echo '
    Package: *
    Pin: origin packages.mozilla.org
    Pin-Priority: 1000
    ' | tee /etc/apt/preferences.d/mozilla 
    apt-get update && apt-get install -y firefox
}

firefox_install_install_yum() {
    yum check-update
    yum install -y firefox
}

firefox_install_install_dnf() {
    dnf check-update
    dnf install -y firefox
}

if [ -x "$(command -v apt-get)" ]; then
    firefox_install_install_apt
elif [ -x "$(command -v yum)" ]; then
    firefox_install_install_yum
elif [ -x "$(command -v dnf)" ]; then
    firefox_install_install_dnf
else
    # shellcheck disable=SC2154
    echo "$me: No supported package manager found to install: firefox" >&2
    exit 1
fi