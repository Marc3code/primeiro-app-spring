package com.marc3code.first_spring_app.entities;

import java.util.List;
import lombok.Data;

@Data
public class Character {
      private Integer id;
      private String name;
      private String status;
      private String species;
      private String type;
      private String gender;

      private Place origin;
      private Place location;

      private String image;
      private List<String> episode; // vai receber um array de URLs
      private String url;
      private String created;

      // Classe auxiliar para mapear os objetos 'origin' e 'location'
      @Data
      public static class Place {
            private String name;
            private String url;
      }

}