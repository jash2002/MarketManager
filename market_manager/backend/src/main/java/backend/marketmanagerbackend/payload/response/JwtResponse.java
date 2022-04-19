package backend.marketmanagerbackend.payload.response;
import java.util.List;

public class JwtResponse {
  private String token;
  private String type = "Bearer";
  private String username;
  private String email;
  private String tickers;

  public JwtResponse(String accessToken, String username, String email, String tickers){
    this.token = accessToken;
    this.username = username;
    this.email = email;
    this.tickers = tickers;
  }

  public String getAccessToken() {
    return token;
  }

  public void setAccessToken(String accessToken) {
    this.token = accessToken;
  }

  public String getTokenType() {
    return type;
  }

  public void setTokenType(String tokenType) {
    this.type = tokenType;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getTickers() {
    return tickers;
  }

  public void setTickers(String tickers) {
    this.tickers = tickers;
  }
}