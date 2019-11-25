package com.zuehlke.fullstack.webflux_sample.usecase.external_system;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/external-system")
public class ExternalSystemController {

    private ExternalSystemUseCase externalSystemUseCase;

    public ExternalSystemController(ExternalSystemUseCase externalSystemUseCase) {
        this.externalSystemUseCase = externalSystemUseCase;
    }

    @GetMapping(path = "/local")
    public Mono<LocalSystemResponseDto> getLocal() {
        System.out.println("request " + Thread.currentThread().getName());

        return this.externalSystemUseCase.getLocal().doOnNext((item) -> {
            System.out.println("response " + Thread.currentThread().getName());
        });
    }

    @GetMapping(path = "/remote")
    public Mono<String> getRemote() {
        System.out.println("request " + Thread.currentThread().getName());

        return this.externalSystemUseCase.getRemote().doOnNext((item) -> {
            System.out.println("response " + Thread.currentThread().getName());
        });
    }
}
