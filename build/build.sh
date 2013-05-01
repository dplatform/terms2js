#!/usr/bin/env bash
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
# 
#   http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
#
# This script need:
#  npm install -g sax
#  npm install -g uglify-js
# gzip, node and npm
#

ARGV="$@"

REFDATA="$1"
OUTPUT_DIR="$2"
TEMP_DIR="tmp"

set -e
SCRIPTPATH=$( cd $(dirname $0) ; pwd -P )

CURL=`which curl`

if [ "x$REFDATA" = "x" ] ; then 
  REFDATA="http://www.ebu.ch/metadata/cs/EBU_cs_p.zip"
fi

if [ "x$OUTPUT_DIR" = "x" ] ; then 
  OUTPUT_DIR="../refdata/"
fi

if ! [ -d "$OUTPUT_DIR" ]; then
  mkdir -p $OUTPUT_DIR
fi

cd "$SCRIPTPATH"

echo "Generating Reference Data & Classification Schemes from '${REFDATA}' in ${OUTPUT_DIR}:"

if [ -d "$REFDATA" ]; then

  for i in $REFDATA/*.xml ; do

    echo "\nProcessing $i:\n"
    node ./terms2js $i ${OUTPUT_DIR}

  done

elif [ -f "$REFDATA" ]; then

    FILE_TYPE=`file -b --mime-type ${REFDATA}`

    if [ $FILE_TYPE == "application/xml" ]; then

      echo "\nProcessing $REFDATA:\n"
      node ./terms2js $REFDATA ${OUTPUT_DIR}

    elif [ $FILE_TYPE == "application/zip" ]; then

      unzip -d $TEMP_DIR -u $REFDATA > /dev/null

      for i in $TEMP_DIR/*.xml ; do
        echo "\nProcessing $i:\n"
        node ./terms2js $i ${OUTPUT_DIR}
      done

      rm -rf $TEMP_DIR

    fi

elif ! [ -f "$REFDATA" ]; then

  $CURL -s $REFDATA > refdata.zip
  unzip -d $TEMP_DIR -u refdata.zip > /dev/null
  rm refdata.zip

  for i in $TEMP_DIR/*.xml ; do
    echo "\nProcessing $i:\n"
    node ./terms2js $i ${OUTPUT_DIR}
  done

  rm -rf $TEMP_DIR

fi

touch ${OUTPUT_DIR}/*/*

echo "\nAll done\n"

read -p "Press ENTER to test vocabulary files" KEY
node ../test/node-example.js

