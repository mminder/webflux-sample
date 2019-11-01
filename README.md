# webflux-sample

This sample project serves as a starting point to try the various features of spring webflux.

## Usage
1. build 
    ```bash 
    ./gradlew build
    ```
2. Import in IntelliJ & run WebfluxSampleMainApplication
4. test REST Api using browser
5. run parallel REST calls using 
    ```bash 
    node client/client-script.js
    ```
6. observe spring logs in IntelliJ

## "Local" External System
You can use a simple local external system by running 
```bash
node ./external-system/server.js
```
It exposes a delayed REST Api under http://localhost:3000/200?sleep=3000 where you can specify how long the sleep time should by with the "sleep" GET Param


## "Remote" External System
Be aware that certain REST endpoints call https://httpstat.us as a external system. 

If you are producing many requests during your tests, e.g. using a load testing tool like Gatling, please use a local external system or a service which specifically allows such load testing.
