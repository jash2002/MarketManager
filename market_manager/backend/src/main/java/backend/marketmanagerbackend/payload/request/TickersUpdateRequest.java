package backend.marketmanagerbackend.payload.request;
import javax.validation.constraints.NotBlank;

public class TickersUpdateRequest {
  @NotBlank
  private String accessToken;
  @NotBlank
  private String tickers;

  public String getAccessToken() {
    return accessToken;
  }

  public String getTickers() {
    return tickers;
  }

  public void setTickers(String newTickers) {
    this.tickers = newTickers;
  }

}