/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 18:24:42
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-14 11:00:07
 */
import { ReadBase } from './base'
import { DurationLog } from '../../components/duration-log'
const durationLog = new DurationLog('map read time')

interface IMapReadLog
{
    mode: string
    times: number
    count: number
}

export class MapRead extends ReadBase
{
    private map: Map<number, number>
    private keyCount: number

    constructor(keyCount: number)
    {
        super()
        this.map = new Map()
        for (let i = 0; i < keyCount; i++) {
            this.map.set(i, i)
        }
        this.keyCount = keyCount
    }

    readSpec(times: number)
    {
        const logOption: IMapReadLog = {
            mode: 'spec',
            times,
            count: this.keyCount,
        }
        durationLog.start(logOption)
        for (let i = 0; i < times; i++) {
            this.map.get(0)
        }
        durationLog.end()
    }

    readDync(times: number)
    {
        const logOption: IMapReadLog = {
            mode: 'dync',
            times,
            count: this.keyCount,
        }
        durationLog.start(logOption)
        for (let i = 0; i < times; i++) {
            this.map.get(Math.floor(Math.random() * this.keyCount))
        }
        durationLog.end()
    }
}
