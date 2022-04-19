package backend.marketmanagerbackend.security.services;

import java.util.Collection;
import java.util.List;
import java.util.HashSet;
import java.util.Objects;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import backend.marketmanagerbackend.model.User;

public class UserDetailsImpl implements UserDetails {
	private String username;
	private String email;
	private String password;
    private String tickers;
    
	public UserDetailsImpl(String username, String email, String password, String tickers) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.tickers = tickers;
	}

	public static UserDetailsImpl build(User user) {
		return new UserDetailsImpl(
            user.getUsername(), 
            user.getEmail(),
            user.getPassword(), 
            user.getTickers()
        );
	}

	public String getEmail() {
		return email;
	}

    public String getTickers() {
        return tickers;
    }

	@Override
	public String getPassword() {
		return password;
	}
	@Override
	public String getUsername() {
		return username;
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {        
        return new HashSet<GrantedAuthority>();
    }
}