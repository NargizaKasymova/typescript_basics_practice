interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'

}

const rect2: Rect = {
    id: '324',
    size: {
        width: 32,
        height:76
    }
}

rect2.color = 'black'
// rect2.id='mfl'

// const rect3: {} as Rect

// const rect4: <Rect>{}

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 10,
        height: 14
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}
console.log(rect5.getArea())

interface IClock {
    time: Date
    setTime(date: Date): void 
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time=date
    }
}
const ar = new Clock()
// console.log(ar)


interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
