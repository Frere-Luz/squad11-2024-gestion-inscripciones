package com.PoloIT.GestionDeInscripciones.DTO.admin;

import com.PoloIT.GestionDeInscripciones.Entity.Admin;

public record DataResponseAdmin(Long id, String email) {
    public DataResponseAdmin(Admin admin){
        this(admin.getUser().getId(), admin.getUser().getEmail());
    }
}