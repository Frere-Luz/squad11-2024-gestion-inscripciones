package com.PoloIT.GestionDeInscripciones.DTO.event;

import com.PoloIT.GestionDeInscripciones.DTO.RegistrationDTO;
import com.PoloIT.GestionDeInscripciones.DTO.TeamGroupDTO;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record DataUpdateEvent(
        Long id,
        @NotNull(message = "Name required")
        @NotEmpty(message = "Name required")
        String name,
        @NotNull(message = "description required")
        @NotEmpty(message = "description required")
        String description,
        String imgURL,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
        LocalDateTime startsAt,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
        LocalDateTime createdAt,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
        LocalDateTime finishAt,
        @NotNull(message = "registration required")
        RegistrationDTO registration,
        TeamGroupDTO teamGroup,
        boolean isActive,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
        LocalDateTime updatedAt

) {

}
