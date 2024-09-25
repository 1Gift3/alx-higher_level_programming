#!/bin/bash
# Bash script
curl -sIX OPTIONS $1 | grep "Allow:" | cut -d ' ' -f 2-