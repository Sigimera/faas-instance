# Finance as a Service - Instance

Finance as a Service instance that can be deployed to any cloud provider. It generates private keys via user provided passphrase and does not store critical data.


## Quickstart

    # Install dependencies locally
    $ npm install
    # Start the application on port 3000
    $ npm start
    # Go to http://localhost:3000

## Requirements

The following list is a preliminary and high level requirements list. Each
point will be extended in a more detailed way.

* All sensitive data never leaves the local machine. Only public data
  are transmitted over the wire, e.g. transaction information.
* With the help of the given passphrase a hierarchical deterministic wallet is
  generated (BIP32) and used bitcoin addresses are searched on-the-fly.
* Only temporary, encrypted data is stored in the browser (for caching
  purposes).
* The server delivers only the application and NEVER data of any form, nor
  does it accept any data from the clients.


## Used Libraries

* **AngularJS** for the one page client application.
* **NodeJS** for the server-side code that delivers the client application and
  that provides helper endpoints.
* **???** for the client-side bitcoin logic handling. (TODO)

## Screenshots

![Login Page](https://raw.githubusercontent.com/Sigimera/faas-instance/master/doc/screenshots/login_page.png)

## Warranty

This software is provided "as is" and without any express or implied
warranties, including, without limitation, the implied warranties of
merchantibility and fitness for a particular purpose.
