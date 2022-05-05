gcloud builds submit --tag grc.io/modular-magpie-348711/fluckbook-fontend --project=modular-magpie-348711

gcloud  run deploy fluckbook-fontend --image grc.io/modular-magpie-348711/fluckbook-fontend --platform managed --project=modular-magpie-348711 --allow-unauthenticated --region us-east1
