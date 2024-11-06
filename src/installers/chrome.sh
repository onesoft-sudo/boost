#!/bin/sh

chrome_deb_url=https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
chrome_rpm_url=https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm

if command -v apt-get >/dev/null; then
    wget -O /tmp/chrome.deb $chrome_deb_url
    dpkg -i /tmp/chrome.deb
    rm -f /tmp/chrome.deb
elif command -v yum >/dev/null; then
    wget -O /tmp/chrome.rpm $chrome_rpm_url
    rpm -i /tmp/chrome.rpm
    rm -f /tmp/chrome.rpm
else
    # shellcheck disable=SC2154
    echo "$me: No supported package manager found" >&2
    exit 1
fi