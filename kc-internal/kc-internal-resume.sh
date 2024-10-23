#!/bin/bash

# networking
ip addr flush dev enp1s0 > /opt/kc-internal/kc-internal-resume.log
while ! dhclient -v 2>> /opt/kc-internal/kc-internal-resume.log; do sleep 1; done
while ! dhclient -v 2>> /opt/kc-internal/kc-internal-resume.log; do sleep 1; done
while ! dhclient -v 2>> /opt/kc-internal/kc-internal-resume.log; do sleep 1; done

# ntp
echo "[Time]" > /etc/systemd/timesyncd.conf
echo "NTP=time.google.com ntp.ubuntu.com 0.de.pool.ntp.org" >> /etc/systemd/timesyncd.conf
echo "FallbackNTP=1.de.pool.ntp.org 2.de.pool.ntp.org 0.debian.pool.ntp.org 1.debian.pool.ntp.org 2.debian.pool.ntp.org 3.debian.pool.ntp.org 0.de.pool.ntp.org 1.de.pool.ntp.org 2.de.pool.ntp.org" >> /etc/systemd/timesyncd.conf
timedatectl set-timezone Etc/UTC
timedatectl set-ntp true
systemctl restart systemd-timesyncd

### DNS (also add changes to install script)
sed -i 's/^DOMAINS=.*/DOMAINS=/g' /run/systemd/netif/state
sed -i 's/^DNS=.*/DNS=8.8.8.8 1.1.1.1/g' /run/systemd/netif/state
sed -i 's/^DOMAINS=.*/DOMAINS=/g' /run/systemd/netif/links/2
sed -i 's/^DNS=.*/DNS=8.8.8.8 1.1.1.1/g' /run/systemd/netif/links/2
sed -i 's/^DOMAINS=.*/DOMAINS=/g' /run/systemd/netif/leases/2
sed -i 's/^DNS=.*/DNS=8.8.8.8 1.1.1.1/g' /run/systemd/netif/leases/2
sed -i 's/^DOMAIN_SEARCH_LIST=.*/DOMAIN_SEARCH_LIST=/g' /run/systemd/netif/leases/2
sed -i 's/^Domains=.*/Domains=/g' /run/systemd/resolved.conf.d/isc-dhcp-v4-enp1s0.conf || true
sed -i 's/^DNS=.*/DNS=8.8.8.8 1.1.1.1/g' /run/systemd/resolved.conf.d/isc-dhcp-v4-enp1s0.conf || true
cp /etc/systemd/resolved.conf /etc/systemd/resolved.conf_ori
awk '{gsub("^DNS=.*", "DNS=8.8.8.8 1.1.1.1", 3_resume.sh); print}' /etc/systemd/resolved.conf_ori > /etc/systemd/resolved.conf
awk '{gsub("#DNS=.*", "DNS=8.8.8.8 1.1.1.1", 3_resume.sh); print}' /etc/systemd/resolved.conf_ori > /etc/systemd/resolved.conf
cat /etc/systemd/resolved.conf
cat /run/systemd/resolve/resolv.conf
rm /etc/systemd/resolved.conf_ori
rm /etc/resolv.conf
ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
service systemd-resolved restart
