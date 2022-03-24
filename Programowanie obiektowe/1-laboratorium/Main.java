import java.lang.Math;

public class Main {
    public static void main(String args[]) {

        int a = 1, b = 1, c = -2;
        double delta = Math.pow(b, 2) - 4 * a * c;

        double x1 = (-b + Math.sqrt(delta)) / (2 * a);
        double x2 = (-b - Math.sqrt(delta)) / (2 * a);

        System.out.println("Ćwieczenie 1.");
        System.out.println("x1 = " + x1);
        System.out.println("x2 = " + x2);

        System.out.println("\nĆwieczenie 2.");
        for (double i = -3; i <= 3; i = (i * 10 + 1) / 10) {
            System.out.println("Wartosc funkcji dla x = " + i + " wynosi "
                    + ((a * Math.pow((i * 10), 2) + (b * (i * 100)) + (c * 100)) / 100));
        }
    }
}