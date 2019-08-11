## how to run ads server
`docker-compose up` 
should build and start an _ads_server_ container and a mysql contiainer with schema.

### send a `POST` requests to `/ad` to add new ad
`curl localhost:3000/ad -d '{"role":"a", "description":"r3"}' -H "Content-Type: application/json"`

## known issues
server panics when it can't connect to mysql (should retry in future version)