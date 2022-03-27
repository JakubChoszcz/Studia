public class Main {
  public static void main(String[] args) {
    int x1 = -2, x2 = 3, y1 = 4, y2 = 6, z1 = -7, z2 = 12;
    String kolor1 = "red", kolor2 = "green";

    KolorowyPunkt kolorowyPunkt1 = new KolorowyPunkt(x1, y1, z1, kolor1);
    KolorowyPunkt kolorowyPunkt2 = new KolorowyPunkt(x2, y2, z2, kolor2);

    Prostokat prostokat1 = new Prostokat(kolorowyPunkt1.zwrocX(), kolorowyPunkt2.zwrocX(), kolorowyPunkt1.zwrocY(), kolorowyPunkt2.zwrocY());
    Szescian szescian1 = new Szescian(kolorowyPunkt1.zwrocX(), kolorowyPunkt2.zwrocX(), kolorowyPunkt1.zwrocY(), kolorowyPunkt2.zwrocY(),kolorowyPunkt1.zwrocZ(),kolorowyPunkt2.zwrocY());

    System.out.println("Powierzchnia prostokata wynosi = " + prostokat1.powierzchnia() + "j2");
    System.out.println("Powierzchnia szescianu wynosi = " + szescian1.powierzchnia() + "j2");
    System.out.println("Objetosc szescianu wynosi = " + szescian1.objetosc() + "j3");
  }

  public static class Punkt {
    int x, y, z;
  
    Punkt(int x, int y, int z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    int zwrocX() {
      return x;
    }
  
    int zwrocY() {
      return y;
    }
  
    int zwrocZ() {
      return z;
    }
  }
  
  public static class KolorowyPunkt extends Punkt {
    String kolor;

    KolorowyPunkt(int x, int y, int z, String kolor) {
      super(x, y, z);
      this.kolor = kolor;
    }

    String zwrocKolor() {
      return kolor;
    }
  }

  public static class Prostokat {
    int width, height;
  
    Prostokat(int x1, int x2, int y1, int y2) {
        width = Math.abs(x1 - x2);
        height = Math.abs(y1 - y2);
    }
  
    int powierzchnia() {
        return width * height;
    }
  }

  public static class Szescian {
    int width, height, depth;
  
    Szescian(int x1, int x2, int y1, int y2, int z1, int z2) {
      width = Math.abs(x1 - x2);
      height = Math.abs(y1 - y2);
      depth = Math.abs(z1 - z2);
    }
  
    int powierzchnia() {
      return 2 * (width * height + width * depth + height * depth);
    }
  
    int objetosc() {
      return width * height * depth;
    }
  }
}