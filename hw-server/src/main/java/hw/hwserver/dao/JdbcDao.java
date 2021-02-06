package hw.hwserver.dao;

import hw.hwserver.domain.WordObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class JdbcDao implements Dao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JdbcDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<WordObject> findWords(int part) {
        return Arrays.asList(
                new WordObject(0, 1, "word0", "trans0"),
                new WordObject(1, 2, "word1", "trans1")
        );

//        return jdbcTemplate.query(
//                "select id, typeWord, word, trans from words where typeWord = ? order by word",
//                new WordRowMapper(),
//                part);
    }
}

