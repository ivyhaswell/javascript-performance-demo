/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 17:49:39
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 19:38:31
 */

import { ObjectRead } from './object'
import { MapRead } from './map'
import { ArrayRead } from './array'

export class ReadTask
{
    private objInstance: ObjectRead
    private mapInstance: MapRead
    private arrInstance: ArrayRead

    constructor(count: number = 10)
    {
        this.count = count
        this.generateInstance()
    }

    get count(): number
    {
        return this.count
    }

    set count(num: number)
    {
        this.count = num
        this.generateInstance()
    }

    private generateInstance()
    {
        this.objInstance = new ObjectRead(this.count)
        this.mapInstance = new MapRead(this.count)
        this.arrInstance = new ArrayRead(this.count)
    }

    public readSpec(times: number)
    {
        this.objInstance.readSpec(times)
        this.mapInstance.readSpec(times)
        this.arrInstance.readSpec(times)
    }

    public readDync(times: number)
    {
        this.objInstance.readDync(times)
        this.mapInstance.readDync(times)
        this.arrInstance.readDync(times)
    }
}

