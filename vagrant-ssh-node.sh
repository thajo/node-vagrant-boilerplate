#!/bin/bash

# SSH into a Vagrant VM, forwarding ports in a way that allows node within Vagrant to be debugged by a debugger
# or IDE in the host operating system. Don't know why, but Vagrantfile port forwarding does not work.
# (https://groups.google.com/forum/#!topic/vagrant-up/RzPooJ0dp6Q)

/usr/bin/vagrant ssh-config > $TMPDIR/vagrant-ssh-config
ssh -F $TMPDIR/vagrant-ssh-config -L 5858:127.0.0.1:5858 -L 3000:127.0.0.1:8080 default
rm $TMPDIR/vagrant-ssh-config