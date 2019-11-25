package com.zuehlke.fullstack.webflux_sample.usecase.combination;

import org.junit.Test;
import reactor.test.StepVerifier;
import reactor.test.publisher.TestPublisher;

public class FluxCombinationUseCaseTest {

    @Test
    public void combineStreams() {
        TestPublisher<String> mockStreamA = TestPublisher.create();
        TestPublisher<String> mockStreamB = TestPublisher.create();

        FluxCombinationUseCase testee = new FluxCombinationUseCase();

        StepVerifier
                .create(testee.combineStreams(mockStreamA.flux(), mockStreamB.flux()))
                .then(() -> mockStreamA.next("1"))
                .then(() -> mockStreamB.next("2"))
                .expectNext("streamA: 1 streamB: 2")

                .then(() -> mockStreamB.next("4"))
                .expectNext("streamA: 1 streamB: 4")

                .then(() -> mockStreamA.next("9"))
                .expectNext("streamA: 9 streamB: 4")
                
                .then(() -> mockStreamA.complete())
                .then(() -> mockStreamB.complete())
                .verifyComplete();
    }
}
