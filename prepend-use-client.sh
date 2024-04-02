#!/usr/bin/env bash

# TODO yeah maybe let's make something more robust and futur proof
files=("kazama-defi-toasts.js" "kazama-defi-toasts.esm.mjs" "inject-style.js" "inject-style.esm.mjs")

for f in ${files[*]}; do
 echo -e "'use client';\n$(cat ./dist/${f})" > ./dist/${f}
done
