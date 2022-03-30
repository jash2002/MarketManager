package com.group21.backendgroup21.entity;

import javax.persistance.Column;
import javax.persistance.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
@Data
public class Users {


     @ID
     @Column
     private long id;

     @Column
     @NotNull(message="{NotNull.User.usernNme}")
     private String userName;

    @Column
    @NotNull(message="{NotNull.User.userEmail}")
    private String userEmail;

    @Column
    @NotNull(message="{NotNull.User.userPassword}")
    private String userPassword;

}