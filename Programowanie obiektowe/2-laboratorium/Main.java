public class Main {
  public static void main(String[] args) {
    // deklaracja zmiennych
    int x1 = -2, x2 = 3, y1 = 4, y2 = 6, z = -7;

    // przypisanie bezwzglednych wartosci do zmiennych
    int w = Math.abs(x1 - x2);
    int h = Math.abs(y1 - y2);
    int d = Math.abs(z);

    // utworzenie obiektow
    Prostokat prostokat1 = new Prostokat(w, h);
    Szescian szescian1 = new Szescian(w, h, d);

    // wywolanie metod
    System.out.println("Powierzchnia prostokata wynosi = " + prostokat1.powierzchnia() + "j2");
    System.out.println("Powierzchnia szescianu wynosi = " + szescian1.powierzchnia() + "j2");
    System.out.println("Objetosc szescianu wynosi = " + szescian1.objetosc() + "j3");
    ;
    ;
  }
}

// deklaracja klasy
class Prostokat {
  int width, height;

  Prostokat(int width, int height) {
      this.width = width;
      this.height = height;
  }

  int powierzchnia() {
      return width * height;
  }
}

// deklaracja klasy
class Szescian {
  int width, height, depth;

  Szescian(int width, int height, int depth) {
      this.width = width;
      this.height = height;
      this.depth = depth;
  }

  int powierzchnia() {
    return width * height;
  }

  int objetosc() {
    return width * height * depth;
  }
}