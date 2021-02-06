package hw.hwserver.web;

import hw.hwserver.dao.Dao;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import hw.hwserver.domain.WordObject;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/api")
public class HwController {
    private final Dao dao;

    public HwController(Dao dao) {
        this.dao = dao;
    }

    @RequestMapping(value = "/", method = GET)
    @ResponseBody
    public List<WordObject> home()
    {
    //    return "Привет";
        return dao.findWords(1);
    }
}
