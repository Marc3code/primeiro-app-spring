package com.marc3code.first_spring_app.dto;

import com.marc3code.first_spring_app.entities.Character;
import lombok.Data;
import java.util.List;

@Data
public class CharacterResponses {
    private Info info;

    private List<Character> results;

    @Data
    public static class Info {
        private Integer count;
        private Integer pages;
        private String next;
        private String prev;
    }


}
