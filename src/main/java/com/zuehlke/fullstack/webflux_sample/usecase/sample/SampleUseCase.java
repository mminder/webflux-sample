package com.zuehlke.fullstack.webflux_sample.usecase.sample;

import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;

import java.time.Duration;

@Service
public class SampleUseCase {

    public Flux<String> getStream() {
        Flux<Long> interval = Flux.interval(Duration.ofMillis(1000));
        return interval.map(Object::toString);
    }
}
