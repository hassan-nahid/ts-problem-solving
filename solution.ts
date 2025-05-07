function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

    const newItems: { title: string; rating: number }[] = []
    items.forEach((item) => {
        if (item.rating >= 4) {
            newItems.push(item)
        }
    })
    return newItems
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, item) => {
        return [...acc, ...item]
    })
}




class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): string {
        return (`Make: ${this.make}, Year: ${this.year}`)
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): string {
        return (`Model: ${this.model}`)
    }
}




function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2
    }
}




interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    const highestPrice = [...products].sort((a, b) => b.price - a.price);
    return highestPrice[0]
}




enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}




async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            } else {
                resolve(n * n)
            }
        }, 1000)
    })
}

