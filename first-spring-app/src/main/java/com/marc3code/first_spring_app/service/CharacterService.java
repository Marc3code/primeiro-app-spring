package com.marc3code.first_spring_app.service;

import com.marc3code.first_spring_app.dto.CharacterResponses;
import com.marc3code.first_spring_app.entities.Character;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service

public class CharacterService {

    private final String url = "https://rickandmortyapi.com/api";

    RestTemplate restTemplate = new RestTemplate();

    public CharacterResponses GetAllCharacters(Integer page) {
        String urlCompleta = url + "/character";
        if (page != null) {
            urlCompleta += "/?page=" + page;
        }
        return restTemplate.getForObject(urlCompleta, CharacterResponses.class);
    }

    public Character GetCharacterById(Integer id) {


        String urlCompleta = url + "/character/" + id;

        Character character = restTemplate.getForObject(urlCompleta, Character.class);

        return character;
    }

}
