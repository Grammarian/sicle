
rm ./new.zip
pushd new
#7za a ../new.zip *
zip -r ../new.zip *
popd

graphcool import --source new.zip