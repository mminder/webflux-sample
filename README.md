# webflux-sample

This sample project serves as a starting point to try the various features of spring webflux.

## Usage
1. Import in IntelliJ & run WebfluxSampleMainApplication
4. test REST Api using browser
5. run parallel REST calls using 
    ```bash 
    node node-client/client.js
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

## Tasks / Observations
1. Run Backend in IntelliJ
    1. Open browser, visit “http://localhost:8080/api/sample/hello” and “http://localhost:8080/api/sample/stream”
    2. Observe spring boot logs (request and onNext)
    3. Basics of the Java 9 Flow API: https://www.hascode.com/2018/01/reactive-streams-java-9-flow-api-rxjava-and-reactor-examples/#Reactor
2. Run local external system. The system simulates a delay given as GET Param.
    1. ```bash
            node ./external-system/server.js
        ```
    2. Open browser, visit “http://localhost:8080/api/external-system/local”
    3. Observe spring boot logs and also nodejs logs
3. Execute multiple concurrent requests against the spring boot backend
    1. ```bash
            Node ./node-client/client.js
        ```
         -> this will execute a small load test with concurrent requests for the external system use case
    2. Observe the spring boot logs and notice how the same threads (about 8) handle all the requests and then defer the response. The response is handled reactively (async) by the same 8 threads.
4. Check out Webflux testing (example provided in "FluxCombinationUseCaseTest")
