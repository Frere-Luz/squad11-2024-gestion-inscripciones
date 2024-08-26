package com.PoloIT.GestionDeInscripciones.Controller;

import com.PoloIT.GestionDeInscripciones.DTO.EventDTO;
import com.PoloIT.GestionDeInscripciones.Services.EventServiceImpl;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/admin/event/")
@RequiredArgsConstructor
public class EventController {

    private final EventServiceImpl eventServiceImpl;

    @PostMapping("save")
    public ResponseEntity<Map<String, String>> registerEvent(EventDTO eventDTO) {
        eventServiceImpl.save(eventDTO);
        return new ResponseEntity<>(Map.of("Event", "Save Event"), HttpStatus.CREATED);
    }

    @PatchMapping("update")
    @Transactional
    public ResponseEntity<Map<String, String>> patchEvent(@RequestBody @Valid EventDTO dataUpdateEvent) {

        return new ResponseEntity<>(Map.of("Event", "updated Event"), HttpStatus.ACCEPTED);
    }


    @GetMapping("all")
    public ResponseEntity<Map<String, List<EventDTO>>> listEvents() {
        Map<String, List<EventDTO>> body = eventServiceImpl.all();
        return new ResponseEntity<>(body, HttpStatus.OK);
    }


    @GetMapping("all/notActive")
    public ResponseEntity<Map<String, List<EventDTO>>> listEventsNotActive() {
        Map<String, List<EventDTO>> body = eventServiceImpl.AllInactiveEvent();
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @GetMapping("all/active")
    public ResponseEntity<Map<String, List<EventDTO>>> listEventsActive() {
        Map<String, List<EventDTO>> body = eventServiceImpl.AllActiveEvent();
        return new ResponseEntity<>(body, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Map<String, EventDTO>> getEvent(@PathVariable Long id) {
        EventDTO body = eventServiceImpl.get(id);
        return new ResponseEntity<>(Map.of("Event", body), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteEvent(@PathVariable Long id) {
        eventServiceImpl.delete(id);
        return new ResponseEntity<>(Map.of("Event", "Event eliminated"), HttpStatus.ACCEPTED);
    }
}

