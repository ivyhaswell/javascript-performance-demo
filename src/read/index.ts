/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 17:49:39
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-14 11:04:35
 */

import { ObjectRead } from './task/object'
import { MapRead } from './task/map'
import { ArrayRead } from './task/array'

/**
 * ��ȡ�������
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
     * ����key����
     *
     * @memberof ReadTask
     */
    set count(num: number)
    {
        this.count = num
        this.generateInstance()
    }

    /**
     * (����)���ɶ�ȡʵ��
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
     * ��ȡ�̶�ֵ
     *
     * @param {number} times ����
     * @memberof ReadTask
     */
    public readSpec(times: number)
    {
        this.objInstance.readSpec(times)
        this.mapInstance.readSpec(times)
        this.arrInstance.readSpec(times)
    }

    /**
     * ��̬��ȡֵ
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

