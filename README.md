# GendChain Block Explorer

The web application for exploring the GendChain blockchain.


## Local installation
The instructions for installing the block explorer locally or on a virtual private server.

### Requirements
NodeJS - NPM - MongoDB

Download [Nodejs and npm](https://docs.npmjs.com/getting-started/installing-node "Nodejs install") if you don't have them

### Installation

Cloning the repo (dev-branch)

`git clone https://github.com/Proof-of-Maturity-Trustworthiness/GendChain-Explorer`

### Configuration

After cloning the repo, there is couple of important files that need to be updated with the new environment variables:
`server/main.go` , `/grabber/main.go`

In order to make the explorer browse the data of the GendChain network, the RPC URL and MongoDB connection settings must be changed :

The GendChain RPC URL : 139.99.135.78:8546

If mongo is running on docker container then the connection string must be the default gateway : 0.0.0.0:27017, otherwise if it's running locally on a server it should be : 127.0.0.1:27017

The server will start the back-end on port : 8080 and the grabber will seed the mongodb database with block data.

Back-end has a redirection functionnality that will allow a client app to be running at port : 8080.



### Build

To run a local environment, you'll need to build the internal toolsets `grabber` and `server` whose binary files you will run as below.

To create these binaries and install dependencies, use the Makefile and view it for internals and other options:

`make build`

This will generate `server` and `grabber` files that can be executed.

### Running 

1) seed local Mongo database with `grabber` (./grabber/grabber)
```sh
> grabber help
NAME:
   grabber - Grabber populates a mongo database with explorer data.

USAGE:
   grabber [global options] command [command options] [arguments...]

VERSION:
   0.0.0

COMMANDS:
     help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --rpc-url value, -u value         rpc api url (default: "https://rpc.gochain.io")
   --mongo-url value, -m value       mongo connection url (default: "127.0.0.1:27017")
   --mongo-dbname value, --db value  mongo database name (default: "blocks")
   --log value, -l value             loglevel debug/info/warn/fatal (default: "info")
   --start-from value, -s value      refill from this block (default: 0)
   --help, -h                        show help
   --version, -v                     print the version
```

2) run `server` (./server/server) (point to the same database name that you selected for seeding)
```sh
> server help
NAME:
   server - Server serves the explorer web interface, backed by a mongo database.

USAGE:
   server [global options] command [command options] [arguments...]

VERSION:
   0.0.0

COMMANDS:
     help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --rpc-url value, -u value         rpc api url (default: "https://rpc.gochain.io")
   --mongo-url value, -m value       mongo connection url (default: "127.0.0.1:27017")
   --mongo-dbname value, --db value  mongo database name (default: "blocks")
   --log value, -l value             loglevel debug/info/warn/fatal, default is Info (default: "info")
   --dist value, -d value            folder that should be served (default: "../dist/explorer/")
   --recaptcha value, -r value       secret key for google recaptcha v3
   --help, -h                        show help
   --version, -v                     print the version
```

3) launch the web application

`cd frontend && npm start`

## Docker

Run:

`docker build -t gendchain-explorer:latest .`

`docker-compose up -d`

The explorer will be accessible via: http://localhost:8080