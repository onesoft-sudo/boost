#!/bin/sh

if command -v apt-get > /dev/null; then
    apt-get install -y gcc g++
elif command -v yum > /dev/null; then
    yum install -y gcc g++
elif command -v dnf > /dev/null; then
    dnf install -y gcc g++
else
    # shellcheck disable=SC2154
    echo "$me: No supported package manager found to install: gcc" >&2
    exit 1
fi