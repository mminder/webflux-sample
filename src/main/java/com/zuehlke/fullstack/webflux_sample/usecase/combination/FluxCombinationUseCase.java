package com.zuehlke.fullstack.webflux_sample.usecase.combination;

import reactor.core.publisher.Flux;

import java.time.Duration;

public class FluxCombinationUseCase {

    public Flux<String> fancyUseCaseWithCalculations() {
        return combineStreams(getMockStream(2000), getMockStream(5000));
    }

    public Flux<String> combineStreams(Flux<String> streamA, Flux<String> streamB) {
        return Flux.combineLatest(streamA, streamB, (objA, objB) -> {
            return "streamA: " + objA + " streamB: " + objB;
        });
    }

    private Flux<String> getMockStream(int intervalMillis) {
        Flux<Long> interval = Flux.interval(Duration.ofMillis(intervalMillis));
        return interval.map(Object::toString);
    }

}
