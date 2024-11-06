#!/bin/sh

native_install tar

openjdk_url=https://download.java.net/java/GA/jdk23.0.1/c28985cbf10d4e648e4004050f8781aa/11/GPL/openjdk-23.0.1_linux-x64_bin.tar.gz
wget -qO- "$openjdk_url" | tar xz -C /opt/openjdk-23.0.1 --strip-components=1

if [ $? -ne 0 ]; then
    # shellcheck disable=SC2154
    echo "$me: Failed to install OpenJDK 23.0.1" >&2
    exit 1
fi

echo 'export JAVA_HOME=/opt/openjdk-23.0.1' >> /etc/profile
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> /etc/profile
