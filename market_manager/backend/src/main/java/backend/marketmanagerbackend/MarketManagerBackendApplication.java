package backend.marketmanagerbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import backend.marketmanagerbackend.model.User;
import backend.marketmanagerbackend.repository.UserRepository;


@SpringBootApplication
public class MarketManagerBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(MarketManagerBackendApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String...args) throws Exception {
        String tickers = "AAPL,IBM";
        // this.userRepository.save(new User("ramesh@gmail.com", "password", tickers));
        // this.userRepository.save(new User("tom@gmail.com", "password", tickers));
        // this.userRepository.save(new User("tony@gmail.com", "password", tickers));
    }
}