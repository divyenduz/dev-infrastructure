# Introduction

This repository helps in setting up various databases and infrastructure components locally via docker.

# Requirements

Install docker and docker-compose for your respective OS. The docker server must be running.

# Start a database

Let us suppose that you want to start mysql. Simply, go into that directory and run

```
docker-compose up -d
```

If you want to turn it off, run

```
docker-compose down
```

The login credentials are in the respective `docker-compose.yml` file. When a user name is not mentioned, it is usually `root`.

# References

- https://awesome-docker-compose.com/apps

# Contributing

Please feel free to raise a pull request to improve the readme/configuration files of this repository.
