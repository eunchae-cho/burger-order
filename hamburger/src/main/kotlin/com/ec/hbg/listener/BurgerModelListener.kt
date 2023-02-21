package com.ec.hbg.listener

import com.ec.hbg.model.Burger
import com.ec.hbg.service.SequenceService
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent

class BurgerModelListener(
    private val sequenceService: SequenceService
): AbstractMongoEventListener<Burger>() {
    override fun onBeforeConvert(event: BeforeConvertEvent<Burger>) {
        if (event.source.id!! < 1) {
            event.source.id = sequenceService.generateSequence(Burger.SEQUENCE_NAME)!!
        }
    }
}