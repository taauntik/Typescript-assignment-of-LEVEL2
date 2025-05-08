function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
}

// <!-- Testing -->
// const res = formatString('Siam');
// console.log(res);


interface IItems {
    title: string;
    rating: number
}
function filterByRating(items: IItems[]): IItems[] {
    return items.filter(item => item.rating >= 4)
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.0 }
];

// <!-- Testing -->
// console.log(filterByRating(books)); 


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let arrayToBeReturned : T[] = [];
    arrays.forEach(arr => {
        arrayToBeReturned.push(...arr);
    })
    return arrayToBeReturned;
}

// <!-- Testing -->
// const res = concatenateArrays(["a", "b"], ["c"]);
// console.log(res);
// const res2 = concatenateArrays([1, 2], [3, 4], [5]); 
// console.log(res2);


class Vehicle {
    constructor(protected make : string, public year : number) {
        this.make = make;
        this.year = year;
    }

    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make : string, year : number, private model : string) {
        super(make, year);
        this.model = model;
    }

    getModel() {
        return `Model: ${this.model}`
    }
}

// <!-- Testing -->
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel()); 


function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }
    return value * 2;
}

// <!-- Testing -->
// console.log(processValue("hello"));
// console.log(processValue(10));


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (!products.length) return null;
    return products.sort((a, b) => {
        return b.price - a.price;
    })[0];
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 50 },
  { name: "Notebook", price: 25 }
];

// <!-- Testing -->
// console.log(getMostExpensiveProduct(products));


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
        return 'Weekend';
    }
    return 'Weekday';
}

// <!-- Testing -->
// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Saturday));


async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                resolve(n*n);
            }, 1000)
        }
        else {
            reject('Negative number is not allowed!');
        }
    })
}

// <!-- Testing -->
// squareAsync(5).then(console.log);
// squareAsync(-3).catch(console.error); 