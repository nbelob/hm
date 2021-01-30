package hw.hwserver.web;

import hw.hwserver.dao.Dao;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class HwController {
    private Dao dao;

    public HwController(Dao dao) {
        this.dao = dao;
    }

    @RequestMapping(value = "/", method = GET)
    @ResponseBody
    public void home()
    {
    //    return "Привет";
        System.out.println(dao.findWords(1));
    }
}
