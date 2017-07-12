/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 18:24:42
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 18:36:06
 */
export class MapRead
{
    private map: Map<number, number>
    private keyCount: number

    constructor(keyCount: number)
    {
        this.map = new Map()
        for (let i = 0; i < keyCount; i++) {
            this.map.set(i, i)
        }
        this.keyCount = keyCount
    }

    readSpec(times: number)
    {
        console.time('map read time[mode:spec]:')
        for (let i = 0; i < times; i++) {
            this.map.get(0)
        }
        console.timeEnd('map read time[mode:spec]:')
    }

    readDync(times: number)
    {
        console.time('map read time[mode:random]:')
        for (let i = 0; i < times; i++) {
            this.map.get(Math.floor(Math.random() * this.keyCount))
        }
        console.timeEnd('map read time[mode:random]:')
    }
}
