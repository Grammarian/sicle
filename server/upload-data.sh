#!/usr/bin/bash

rm ./new.zip
pushd out
7za a ../new.zip *
popd

graphcool import --source new.zip