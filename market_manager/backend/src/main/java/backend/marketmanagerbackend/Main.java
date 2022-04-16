package backend.marketmanagerbackend;
import java.sql.*;

public class Main {
        static final String DB_URL = "jdbc:mysql://192.168.0.105/MarketManagerDB";
        static final String USER = "Raz";
        static final String PASS = "V47zfgrYm%31k#3f6nzQy";
        static final String QUERY = "SELECT UserID, email, userPassword FROM UserAccounts;";
        static final String updateQuery = "INSERT INTO UserAccounts VALUES(2, \"raz2@raz2.com\", \"bot\");";

    public static void main(String[] args) {
        // Open a connection
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
            stmt.executeUpdate(updateQuery);
            // Extract data from result set

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(QUERY);
            // Extract data from result set
            while (rs.next()) {
                // Retrieve by column name
                System.out.print("ID: " + rs.getInt("userID"));
                System.out.print(", email: " + rs.getString("email"));
                System.out.print(", pass: " + rs.getString("userPassword"));
            }
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        }
    }

