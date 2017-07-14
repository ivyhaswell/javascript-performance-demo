/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 18:37:12
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-13 11:21:44
 */
import { DurationLog } from '../components/duration-log'
const log = new DurationLog('array read time')
interface IArrayReadLog
{
    mode: string
    times: number
    count: number
}

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
        const logOption: IArrayReadLog = {
            mode: 'spec',
            times,
            count: this.arr.length,
        }
        log.start(logOption)
        for (let i = 0; i < times; i++) {
            this.arr[0]
        }
        log.end()
    }

    readDync(times: number)
    {
        const logOption: IArrayReadLog = {
            mode: 'dync',
            times,
            count: this.arr.length,
        }
        log.start(logOption)
        for (let i = 0; i < times; i++) {
            this.arr[Math.floor(Math.random() * this.arr.length)]
        }
        log.end()
    }
}
