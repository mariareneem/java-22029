package com.maria.tpfinal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/orador")
public class OradorController {

    @Autowired
    private OradorRepositorio oradorRepositorio;

    @GetMapping(value = "/nombre/{nombre}/apellido/{apellido}")
    public @ResponseBody Orador getTestData(@PathVariable String nombre, @PathVariable String apellido) {
        Orador prueba = new Orador();
        prueba.setApellido(apellido);
        prueba.setName(nombre);
        prueba.setId(123);
        return oradorRepositorio.save(prueba);
    }
}
