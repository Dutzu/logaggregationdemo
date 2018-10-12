# EFK Stack Demo

The purpose is to demonstrate how fluentd can be used to gather log messages from docker containers and then to feed them into an aggregation solution (FlouentD + Elastic Search) and then to vizualize the data.

The HAProxy will do health check calls each seccond to each of the nodejs instances it load balances, and it will do a GET on /health which will trigger some log messages to be produced. For the sake of variety a random artificial latency is also introduced in the nodejs apps response.

## Before you start

You must make sure you increase the max map count for Elasticsearch to start properly.
`sudo sysctl -w vm.max_map_count=262144`