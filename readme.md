
# Some Notes
## Starting a Webserver 
python3 -m http.server 9000
- this server is also acessable from internal network

- server needs to be ssl secured
- 1. create a ssl key:
  -     openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem 
- 2. wrap the http.server
 
