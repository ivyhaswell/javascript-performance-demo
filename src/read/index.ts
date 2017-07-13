/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 17:49:39
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 19:56:01
 */

import { ObjectRead } from './object'
import { MapRead } from './map'
import { ArrayRead } from './array'

/**
 * 读取任务测试
 *
 * @export
 * @class ReadTask
 */
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

    /**
     * 设置key数量
     *
     * @memberof ReadTask
     */
    set count(num: number)
    {
        this.count = num
        this.generateInstance()
    }

    /**
     * (重新)生成读取实例
     *
     * @private
     * @memberof ReadTask
     */
    private generateInstance()
    {
        this.objInstance = new ObjectRead(this.count)
        this.mapInstance = new MapRead(this.count)
        this.arrInstance = new ArrayRead(this.count)
    }

    /**
     * 读取固定值
     *
     * @param {number} times 次数
     * @memberof ReadTask
     */
    public readSpec(times: number)
    {
        this.objInstance.readSpec(times)
        this.mapInstance.readSpec(times)
        this.arrInstance.readSpec(times)
    }

    /**
     * 动态读取值
     *
     * @param {number} times
     * @memberof ReadTask
     */
    public readDync(times: number)
    {
        this.objInstance.readDync(times)
        this.mapInstance.readDync(times)
        this.arrInstance.readDync(times)
    }
}

