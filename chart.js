class Chart {
    constructor() {
        this.chart = new Set()
        this.listKeepForLater = new Set()
    }

    add(item) {
        if (this.chart.has(item)) {
            throw new Error("item already existed in chart")
        }
        this.chart.add(item)
    }

    remove(id) {
        for (let item of this.chart) {
            if (item.id === id) {
                return this.chart.delete(item)
            }
        }
        throw new Error("item does not exist in the chart")
    }

    modify(item) {
        for (let itemInChart of this.chart) {
            if (itemInChart.id === item.id) {
                this.chart.delete(itemInChart)
                return this.chart.add(item)
            }
        }
        throw new Error("item does not exist in the chart")
    }

    finalPrice() {
        let finalPrice = 0
        if (this.chart.size != 0) {
            this.chart.forEach(item => {
                finalPrice += item.price
            })
        }
        return finalPrice
    }

    keepForLater(id) {
        for (let item of this.chart) {
            if (item.id === id) {
                this.chart.delete(item)
                this.listKeepForLater.add(item)
                return
            }
        }
    }

    reAdd(id) {
        for (let item of this.listKeepForLater) {
            if (item.id === id) {
                this.chart.add(item)
                this.listKeepForLater.delete(item)
                return
            }
        }
    }

    listKeptForLater() {
        this.listKeepForLater.forEach(item => {
            console.log(item)
        })
    }

    checkout() {
        return new Promise((resolve, reject) =>{
            const json = JSON.stringify(Array.from(this.chart))
            this.chart.clear()
            resolve(json)
        })
    }

    size() {
        return this.chart.size
    }
}

module.exports = Chart
