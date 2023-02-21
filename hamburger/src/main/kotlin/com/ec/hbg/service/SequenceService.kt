package com.ec.hbg.service

import DatabaseSequence
import org.springframework.data.mongodb.core.FindAndModifyOptions
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Criteria.where
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service
import java.util.Objects

@Service
class SequenceService(
    private val mongoOperations: MongoOperations
) {
    fun generateSequence(seqName: String?): Long? {
        val counter: DatabaseSequence? = mongoOperations.findAndModify(
            Query.query(where("_id").`is`(seqName)),
            Update().inc("seq", 1),
            FindAndModifyOptions.options().returnNew(true).upsert(true),
            DatabaseSequence::class.java
        )
        return if (!Objects.isNull(counter)) counter!!.seq else 1
    }
}