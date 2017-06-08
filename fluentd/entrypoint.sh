#!/bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' #No Color

if [  ${FLUENTD_CONF} -lt 2 ]; then
  echo -e "${RED}Fluentd configuration not found!${NC} Must specify what configuration to load via ${GREEN}FLUENTD_CONF${NC}";
  exit 1;
else
  echo "====================================================="
  echo -e "Starting fluentd with config found at ${GREEN}$FLUENTD_CONF${NC}"
  echo "====================================================="
  exec fluentd -c /fluentd/etc/$FLUENTD_CONF -p /fluentd/plugins $FLUENTD_OPT;
fi