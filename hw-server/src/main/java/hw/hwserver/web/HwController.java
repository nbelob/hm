package hw.hwserver.web;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class HwController {

    @RequestMapping(value = "/", method = GET)
    @ResponseBody
    public String home() {
        return "Привет";
    }
}
