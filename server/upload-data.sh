
rm -rf ./.import
rm ./$1.zip
pushd $1
if command -v zip; then
    zip -r ../$1.zip *
else
    7za a ../$1.zip *
fi
popd

DEBUG="*" graphcool import --source $1.zip