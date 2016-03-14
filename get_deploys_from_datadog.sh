#!/bin/sh
# Make sure you replace the API and/or APP key below
# with the ones for your account

# Note: this end point only accepts form-encoded requests.
currenttime=$(date +%s)
currenttime2=$(date -v-1d +%s)
curl -G -H "Content-type: application/json" \
    -d "start=${currenttime2}" \
    -d "end=${currenttime}" \
    -d "api_key=82801e77ae17f4ce744b5af0a94efa34" \
    -d "application_key=248b87023e7b5294bdc77220c8e0be7d0198dacc" \
    -d "sources=newrelic" \
    'https://app.datadoghq.com/api/v1/events'