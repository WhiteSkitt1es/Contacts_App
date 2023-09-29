package tech.paul.contact.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.paul.contact.app.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
