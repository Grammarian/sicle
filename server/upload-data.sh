
rm -rf ./.import
rm ./extract.zip
pushd extract
7za a ../extract.zip *
#zip -r ../extract.zip *
popd

DEBUG="*" graphcool import --source extract.zip