package com.zuehlke.fullstack.webflux_sample.usecase;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/sample")
public class SampleController {

    private SampleUseCase sampleUseCase;

    public SampleController(SampleUseCase sampleUseCase) {
        this.sampleUseCase = sampleUseCase;
    }

    @GetMapping(path = "/hello")
    public String getCockpitMVC() {
        return "Hello";
    }

    @GetMapping(path = "/long", produces = MediaType.APPLICATION_STREAM_JSON_VALUE)
    public Mono<String> getLongRequest() {
        System.out.println("request " + Thread.currentThread().getName());

        return this.sampleUseCase.getExternalSystemData().doOnNext((item) -> {
            System.out.println("response " + Thread.currentThread().getName());
        });
    }
}
