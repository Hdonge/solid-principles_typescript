class Shape {
    public type: string
    public height: number;
    public width: number;
}

class RectangleShape extends Shape {
    public height: number;
    public width: number;

    public setHeight(height: number) {
        this.height = height;
    }

    public setWidth(width: number) {
        this.width = width;
    }
}

class SquareShape extends Shape {
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
 * Here if we change the child class with parent class instance
 * then there would not be any side effect. Sqaure class will be having same behaviour as parent class.
 */