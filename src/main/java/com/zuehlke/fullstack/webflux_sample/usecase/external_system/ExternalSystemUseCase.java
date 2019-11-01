package com.zuehlke.fullstack.webflux_sample.usecase.external_system;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class ExternalSystemUseCase {

    public Mono<String> getLocal() {
        WebClient client = WebClient.create("http://localhost:3000");
        return client
                .get()
                .uri("/200?sleep=5000")
                .retrieve()
                .bodyToMono(String.class);
    }

    public Mono<String> getRemote() {
        WebClient client = WebClient.create("https://httpstat.us");
        return client
                .get()
                .uri("/200?sleep=5000")
                .retrieve()
                .bodyToMono(String.class);
    }

}
