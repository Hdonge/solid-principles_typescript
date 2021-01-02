/**
 * 1. If S is subtype/child of T, then objects of T may be replaced
 * by with Objects of S without altering any of the desirable
 * properties of the class.
 * 2. Subtype should retain behavior of main type. which means Children should be like their parents
 * for what they inherit.
 * 3. When we apply inheritance so everytime need to take care the LSP is not violating.
 */

class Rectangle {
    public height: number;
    public width: number;

    public setHeight(height: number) {
        this.height = height;
    }

    public setWidth(width: number) {
        this.width = width;
    }
}

class Square extends Rectangle { 
    public setHeight(height: number) {
        this.height = height;
        this.width = height;
    }

    public setWidth(width: number) {
        this.width = width;
        this.height = width;
    }
}

/**
 * Here Square is not an ideal child of Rectangle 
 * cause it is breaking LSP. It is not having same behavior as rectangle.
 * As in Square when height changes width also gets changed and viceversa.
 */

