package backend.marketmanagerbackend.model;
import java.sql.*;

public class SQLUser {
    public static final String DB_URL = "jdbc:mysql://192.168.0.105/MarketManagerDB";
    public static final String USER = "Raz";
    public static final String PASS = "V47zfgrYm%31k#3f6nzQy";
    public static final String QUERY = "SELECT UserID, email, userPassword FROM UserAccounts;";
    public static final String updateQuery = "INSERT INTO UserAccounts VALUES(2, \"raz2@raz2.com\", \"bot\");";

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


