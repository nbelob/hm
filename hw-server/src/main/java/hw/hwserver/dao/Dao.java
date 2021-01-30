package hw.hwserver.dao;

import hw.hwserver.domain.WordObject;

import java.util.List;

public interface Dao {
    List<WordObject> findWords(int part);
}
