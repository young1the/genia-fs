package kr.co.chunjae.gochowoo.controller.Product;

import kr.co.chunjae.gochowoo.service.Pokemon.PokemonService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
@AllArgsConstructor
@RequestMapping("/pokemon")
public class PokemonController {
    PokemonService pokemonService;

    @GetMapping("/valid/name/{name}")
    public ResponseEntity<Map<String, Boolean>> validPokemonName(@PathVariable String name) {
        Map<String, Boolean> result = new HashMap<>();
        result.put("data", pokemonService.findPokemonByName(name) != null);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/valid/number/{number}")
    public ResponseEntity<Map<String, Boolean>> validPokemonNumber(@PathVariable Integer number) {
        Map<String, Boolean> result = new HashMap<>();
        result.put("data", pokemonService.findPokemonByNumber(number) != null);
        return ResponseEntity.ok().body(result);
    }
}
