#!/bin/bash
# Bash script
cat $2 | curl -sX POST -H "Content-Type: application/json" -d @- $1