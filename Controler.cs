package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    @PostMapping("/cadastrar")
    public String cadastrarCategoria(@RequestBody Categoria categoria) {
        // Lógica para cadastrar a categoria
        return "Categoria cadastrada: " + categoria.getNome();
    }

    @DeleteMapping("/excluir/{nome}")
    public String excluirCategoria(@PathVariable String nome) {
        // Lógica para excluir a categoria
        return "Categoria excluída: " + nome;
    }
}
