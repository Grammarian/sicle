
rm -rf ./.import
if [-e ./$1.zip]; then
    rm ./$1.zip
fi
pushd $1
if command -v zip; then
    zip -r ../$1.zip *
else
    7za a ../$1.zip *
fi
popd

DGB="" # DEBUG="*"
$DBG graphcool import --source $1.zip