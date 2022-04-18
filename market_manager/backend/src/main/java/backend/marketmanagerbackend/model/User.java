package backend.marketmanagerbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    //@Column(name = "first_name")
    //private String firstName;

    //@Column(name = "last_name")
    //private String lastName;

    private String email;

    private String username;

    private String password;

    private String[] tickers;

    public User() {

    }

    public User(String email, String password, String[] tickers) {
        super();
        this.username = email;
        //this.firstName = firstName;
        //this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.tickers = tickers;
    }
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    //public String getFirstName() {
    //    return firstName;
    //}
    //public void setFirstName(String firstName) {
    //    this.firstName = firstName;
    //}
    //public String getLastName() {
    //    return lastName;
    //}
    //public void setLastName(String lastName) {
    //    this.lastName = lastName;
    //}
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String[] getTickers() {
        return tickers;
    }

    public void setTickers(String[] tickers) {
        this.tickers = tickers;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
}