package com.zuehlke.fullstack.webflux_sample.usecase;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class SampleUseCase {


    public Mono<String> getExternalSystemData() {
        WebClient client = WebClient.create("https://httpstat.us");
        return client
                .get()
                .uri("/200?sleep=5000")
                .retrieve()
                .bodyToMono(String.class);
    }

}
