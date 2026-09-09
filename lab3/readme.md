localhost-URL
127.0.0.1-IP address
ctrl+c-stop the server
every request from client has a pair of {request,response}
npm ===node package manager
## NODE PACKAGE MANAGER(NPM)
used to install ,run,uninstall any program/potoject and package
-npm intsall<packageName>
-npm unisntall </packageName>
to use npm ,the project must be npm project,
to create npm project we can use
-npm init -y
-it creates a package.json file automatically
package.json holds all the information related to intsall package from npm
- update package.json, set type = 'module'
- it also creates a foldrer  node_modules automatically 
-node_modiules holds the package / library fuiles
-generqlly we ignore the node_modules by.gitignore 


Nodemon - it restart the server automatically when file changes, to install
> npm i nodemon -D

Note: -D flag will install this package as developer dependency

- to execute any progress, update the package.json file then start the server as 
<b>npm run dev</b>

- start -> it will execute the app on deployement 
- dev -> it will start server in development phase (only for developer)

-res: it will return contents (json/html/plain) to the user/client

-req: it will retrive the information from client to the server

- server send also statusCodes to the client, that indicates the error/success message

## Status Codes
- 200 -> ok
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> forbidden
- 404 -> Not Found
- 500 -> Internal server error

## content type

- text/plain
- text/html
- application/json
- text/css

the content type and status code can be send back to clients by two ways

1. res.writeHead
2. res.setHeader
3. res.statusCode6

## response
1. res.writeHead
2. res.setHeader
3. res.statusCode


## send html file to client
1. html file
   -read html file using createReadStream
   -pipe it with res object

2. html content
   send any html tags/content by using
   res.end('<any html tag>)

## JSON (Java Script Object Notation)
- server returns data only not html contents
- because html contents will be written by content developer
- the data is in JSON format 
- JSON always stores data in key-value pair enclosed by {}
- array can be stored by []
- one pair of {} will represent one object and its properties will be separated by,
  ex- 
  
```
        { id:1,
        name:"mobile",2
        price:25000,
        rating:4.5,
        review:200
        }
        
      ```
