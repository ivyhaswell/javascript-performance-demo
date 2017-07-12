/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 18:37:12
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 18:42:29
 */
export class ArrayRead
{
    private arr: number[]

    constructor(keyCount: number)
    {
        this.arr = []
        for (let i = 0; i < keyCount; i++) {
            this.arr.push(i)
        }
    }

    readSpec(times: number)
    {
        console.time(`map read time[mode: spec][times: ${times}][length: ${this.arr.length}]:`)
        for (let i = 0; i < times; i++) {
            this.arr[0]
        }
        console.timeEnd('map read time[mode:spec]:')
    }

    readDync(times: number)
    {
        console.time('map read time[mode:random]:')
        for (let i = 0; i < times; i++) {
            this.arr[Math.floor(Math.random() * this.arr.length)]
        }
        console.timeEnd('map read time[mode:random]:')
    }
}
