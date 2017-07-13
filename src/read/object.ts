/*
 * @Author: shuwen.wang
 * @Date: 2017-07-12 18:21:02
 * @Last Modified by: shuwen.wang
 * @Last Modified time: 2017-07-12 20:09:01
 */
export class ObjectRead
{
    private obj = {}
    private keyCount: number
    /**
     * Creates an instance of ReadObject.
     * @param {number} [keyNum=10] 对象key的数量
     * @memberof ReadObject
     */
    constructor(keyCount: number = 10)
    {
        for (let i = 0; i < keyCount; i++) {
            Object.defineProperty(this.obj, i.toString(), {
                value: i,
            })
        }
        this.keyCount = keyCount
    }

    /**
     * 读取特定值
     *
     * @param {number} times 读取次数
     * @memberof ReadObject
     */
    public readSpec(times: number)
    {
        console.time(`map read time[mode:spec][times:${times}][count:${this.keyCount}]:`)
        for (let i = 0; i < times; i++) {
            this.obj['0']
        }
        console.timeEnd(`map read time[mode:spec][times:${times}][count:${this.keyCount}]:`)
    }

    /**
     * 读取动态值
     *
     * @param {number} times
     * @memberof ReadObject
     */
    public readDync(times: number)
    {
        console.time(`map read time[mode:dync][times:${times}][count:${this.keyCount}]:`)
        for (let i = 0; i < times; i++) {
            this.obj[Math.floor(Math.random() * this.keyCount)]
        }
        console.timeEnd(`map read time[mode:dync][times:${times}][count:${this.keyCount}]:`)
    }
}
