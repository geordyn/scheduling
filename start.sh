#!/usr/bin/env bash

# creates db directory in project root
mkdir db

# runs mongod using local dir, sends to the background
# (no journal to keep local db dir small)
mongod --dbpath=db/ --fork --nojournal --syslog

# starts the server, sends to background
nohup node server &

# starts nw.js
nohup node index &

