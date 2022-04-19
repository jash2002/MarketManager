package backend.marketmanagerbackend.payload.request;
import java.util.Set;
import javax.validation.constraints.*;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 100)
  private String username;

  @NotBlank
  @Size(max = 100)
  @Email
  private String email;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

  private String tickers;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

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

  public String getTickers() {
    return tickers;
  }

  public void setTickers(String tickers) {
    this.tickers = tickers;
  }

}