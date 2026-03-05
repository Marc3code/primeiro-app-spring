package com.marc3code.first_spring_app.controller;

import com.marc3code.first_spring_app.dto.CharacterResponses;
import com.marc3code.first_spring_app.service.CharacterService;
import com.marc3code.first_spring_app.entities.Character;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/my-api")
@CrossOrigin(origins = "http://localhost:3000")
public class CharacterController {

    private final CharacterService characterService;

    public CharacterController (CharacterService characterService) {
        this.characterService = characterService;
    }

    @GetMapping("/characters")
    public CharacterResponses GetAllCharacters(@RequestParam(required = false) Integer page) {
        return characterService.GetAllCharacters(page);
    }
    @GetMapping("/character/{id}")
    public Character GetCharacterById(@PathVariable Integer id) {

        return characterService.GetCharacterById(id);
    }


}
