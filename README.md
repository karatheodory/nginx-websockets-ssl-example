# NginX Proxy for WebSockets Over HTTPS

In this example a simple Node.js server is created based on Express, which serves static content from the `public` folder, has one REST API function and reports server memory stats over WebSockets.

The goal is to provide a fully functional NginX config for HTTPS connection along with the example of Node.js server, which contains both WebSockets and REST API on one URL.

# I want to generate my own self~ish~-signed certificates!

To create the certificates in repo I have used the following command:

```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./nginx.key -out ./nginx.crt
```

# Run It

* Install [Ngnix](http://nginx.org) & [Node.js 4+](https://nodejs.org/)
* Install dependencies: `npm install`
* Put the certificates from this repo to the proper place or fix paths to certificates in `nginx.conf` to point to the files from this repo (or other valid certificates)
* Put contents of the `nginx.conf` to the `/etc/nginx/sites-available/default` config.
* Run the example server: `npm start`. It will be started on port 8001 by default.
* Run Nginx: `sudo nginx`.
* Now you should be able to open [localhost](https://localhost) and see your server stats pulse.

# License

Everything here is got from NginX official documentation and StackOverflow answers, except the Node.js server itself which is got from the [Node js WS](https://github.com/websockets/ws) library examples.
