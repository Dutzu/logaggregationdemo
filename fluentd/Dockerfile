FROM ruby:2.3.3

# for log storage (maybe shared with host)
RUN mkdir -p /fluentd/log
# configuration/plugins path (default: copied from .)
RUN mkdir -p /fluentd/etc
RUN mkdir -p /fluentd/plugins

RUN gem install fluentd -v 0.12.31

RUN ["mkdir", "-p", "/fluentd/certs"]
RUN ["gem", "install","fluent-plugin-secure-forward:0.4.3","fluent-plugin-grok-parser:1.0.0","fluent-plugin-parser:0.6.1","fluent-plugin-rewrite-tag-filter:1.5.5", "fluent-plugin-elasticsearch:1.9.5", "fluent-plugin-docker-metrics:0.0.2", "--no-rdoc", "--no-ri"]
COPY * /fluentd/etc/

ENV FLUENTD_OPT=""
ENV FLUENTD_CONF="fluent.conf"

EXPOSE 24224

ENTRYPOINT ["/fluentd/etc/entrypoint.sh"]