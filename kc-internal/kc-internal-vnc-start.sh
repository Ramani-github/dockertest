vncserver -localhost no -SecurityTypes None --I-KNOW-THIS-IS-INSECURE
websockify -D --web=/usr/share/novnc 40201 localhost:5901
mkdir -p /root/Desktop
cp /opt/kc-internal/Desktop/* /root/Desktop/ || true
chmod a+x /root/Desktop/* || true
